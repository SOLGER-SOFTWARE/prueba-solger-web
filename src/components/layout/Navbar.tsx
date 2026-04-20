"use client";

/**
 * Navbar.tsx
 *
 * Barra de navegación principal (sticky).
 * Fondo blanco/oscuro según tema, links a páginas principales,
 * toggle de tema, y menú móvil animado con framer-motion.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Ingeniería", href: "/ingenieria" },
  { label: "Software", href: "/software" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Cerrar menú móvil al cambiar de ruta */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform">
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
              <span
                className={`text-[10px] font-medium tracking-widest uppercase ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Ingeniería y Tecnología
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? theme === "dark"
                      ? "text-white bg-white/10"
                      : "text-gray-900 bg-gray-100"
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
            {/* Theme toggle */}
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

            {/* Contact CTA (desktop) */}
            <Link
              href="/#contacto"
              className={`hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                theme === "dark"
                  ? "bg-brand-blue text-white hover:bg-brand-blue-dark"
                  : "bg-brand-blue text-white hover:bg-brand-blue-dark"
              }`}
            >
              Contacto
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2.5 rounded-lg ${
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
            className={`lg:hidden border-t overflow-hidden ${
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
                        ? "text-white bg-white/10"
                        : "text-gray-900 bg-gray-100"
                      : theme === "dark"
                        ? "text-gray-400 hover:text-white hover:bg-dark-tertiary"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contacto"
                className="block w-full text-center px-4 py-3 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors mt-2"
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
