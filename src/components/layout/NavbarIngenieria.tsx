"use client";

/**
 * NavbarIngenieria.tsx
 *
 * Barra de navegación específica para la sección de Ingeniería.
 * Incluye links directos a cada servicio y contacto.
 * Visualmente diferente al Navbar principal — acento naranja.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/ingenieria" },
  { label: "Defensa Civil", href: "/ingenieria/defensa-civil" },
  { label: "Extintores", href: "/ingenieria/extintores" },
  { label: "Fumigación", href: "/ingenieria/fumigacion" },
  { label: "Pozo a Tierra", href: "/ingenieria/pozo-tierra" },
  { label: "Contra Incendios", href: "/ingenieria/sistemas-contra-incendios" },
  { label: "Contacto", href: "/ingenieria#contacto-ingenieria" },
];

export default function NavbarIngenieria() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-dark-base/95 shadow-md shadow-black/20 border-b border-white/5"
            : "bg-white/95 shadow-md shadow-black/5 border-b border-gray-200"
          : theme === "dark"
            ? "bg-dark-base"
            : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo — link al home de ingeniería */}
          <Link href="/ingenieria" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-base font-bold tracking-tight ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                SOLGER
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-orange">
                Ingeniería
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                  isActive(link.href)
                    ? theme === "dark"
                      ? "text-brand-orange bg-brand-orange/10"
                      : "text-brand-orange bg-brand-orange/5"
                    : theme === "dark"
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                theme === "dark"
                  ? "bg-dark-tertiary hover:bg-dark-secondary text-yellow-400"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            <a
              href="https://wa.me/51994872765"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-200"
            >
              Cotizar ahora
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden p-2.5 rounded-lg ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
              aria-label="Menú"
            >
              {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`xl:hidden border-t overflow-hidden ${
              theme === "dark"
                ? "bg-dark-base border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? theme === "dark"
                        ? "text-brand-orange bg-brand-orange/10"
                        : "text-brand-orange bg-brand-orange/5"
                      : theme === "dark"
                        ? "text-gray-400 hover:text-white hover:bg-dark-tertiary"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/51994872765"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-brand-orange-dark transition-colors mt-2"
              >
                Cotizar ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
