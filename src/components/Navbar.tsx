"use client";

/**
 * Navbar.tsx
 *
 * Barra de navegación principal (sticky con efecto blur).
 * Incluye logo, enlaces de navegación, toggle de tema oscuro/claro,
 * botón CTA "Solicitar Demo", y menú móvil animado.
 * Se adapta al scroll cambiando ligeramente su fondo.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

/** Enlaces de navegación principal */
const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    /** Detectar scroll para cambiar fondo del navbar */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /** Scroll suave al hacer clic en un enlace */
    const handleClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? theme === "dark"
                        ? "bg-dark-base/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
                        : "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-200/50"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo de la marca */}
                    <a
                        href="#inicio"
                        onClick={(e) => { e.preventDefault(); handleClick("#inicio"); }}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                            S
                        </div>
                        <span className={`text-lg font-bold tracking-tight ${theme === "dark" ? "text-white" : "text-dark-base"}`}>
                            SOLGER <span className="text-brand-red">SOFTWARE</span>
                        </span>
                    </a>

                    {/* Enlaces de escritorio */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                                className={`text-sm font-medium transition-colors hover:text-brand-red ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Controles del lado derecho */}
                    <div className="flex items-center gap-3">
                        {/* Botón de cambio de tema (sol/luna) */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-200 ${theme === "dark"
                                    ? "bg-dark-tertiary hover:bg-dark-secondary text-yellow-400"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                }`}
                            aria-label="Cambiar tema"
                        >
                            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>

                        {/* Botón CTA de escritorio */}
                        <a
                            href="#contacto"
                            onClick={(e) => { e.preventDefault(); handleClick("#contacto"); }}
                            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/25"
                        >
                            Solicitar Demo
                        </a>

                        {/* Botón hamburguesa para móvil */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`lg:hidden p-2 rounded-lg ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                            aria-label="Menú"
                        >
                            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú móvil animado */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`lg:hidden border-t overflow-hidden ${theme === "dark"
                                ? "bg-dark-base/95 backdrop-blur-xl border-white/10"
                                : "bg-white/95 backdrop-blur-xl border-gray-200"
                            }`}
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${theme === "dark"
                                            ? "text-gray-300 hover:text-white hover:bg-dark-tertiary"
                                            : "text-gray-600 hover:text-dark-base hover:bg-gray-100"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contacto"
                                onClick={(e) => { e.preventDefault(); handleClick("#contacto"); }}
                                className="block w-full text-center px-4 py-3 bg-brand-red text-white text-sm font-semibold rounded-lg hover:bg-brand-red-dark transition-colors mt-2"
                            >
                                Solicitar Demo
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
