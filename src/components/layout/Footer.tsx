"use client";

/**
 * Footer.tsx
 *
 * Pie de página corporativo con datos reales de empresa,
 * enlaces de navegación principal, información de contacto
 * y copyright dinámico.
 */

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Ingeniería", href: "/ingenieria" },
  { label: "Software", href: "/software" },
];

const ingenieriaLinks = [
  { label: "Defensa Civil", href: "/ingenieria/defensa-civil" },
  { label: "Extintores", href: "/ingenieria/extintores" },
  { label: "Fumigación", href: "/ingenieria/fumigacion" },
  { label: "Pozo a Tierra", href: "/ingenieria/pozo-tierra" },
  { label: "Sistemas Contra Incendios", href: "/ingenieria/sistemas-contra-incendios" },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`pt-16 pb-8 border-t ${
        theme === "dark"
          ? "bg-dark-secondary border-white/5"
          : "bg-gray-light border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`text-base font-bold ${
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
            </div>
            <p
              className={`text-sm leading-relaxed mb-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Solger Ingeniería y Tecnología EIRL
            </p>
            <p
              className={`text-xs ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              RUC: 20615573648
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className={`font-bold text-sm mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-brand-blue ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ingeniería Services */}
          <div>
            <h3
              className={`font-bold text-sm mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Servicios de Ingeniería
            </h3>
            <ul className="space-y-2.5">
              {ingenieriaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors hover:text-brand-orange ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className={`font-bold text-sm mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <HiOutlineMail
                  size={16}
                  className={`mt-0.5 flex-shrink-0 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                />
                <a
                  href="mailto:info@solger.pe"
                  className={`text-sm transition-colors hover:text-brand-blue ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  info@solger.pe
                </a>
              </div>
              <div className="flex items-start gap-3">
                <HiOutlinePhone
                  size={16}
                  className={`mt-0.5 flex-shrink-0 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                />
                <a
                  href="tel:+51994872765"
                  className={`text-sm transition-colors hover:text-brand-blue ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  994 872 765
                </a>
              </div>
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker
                  size={16}
                  className={`mt-0.5 flex-shrink-0 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                />
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  La Victoria, Lima — Perú
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            theme === "dark" ? "border-white/5" : "border-gray-200"
          }`}
        >
          <p
            className={`text-xs ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            © {new Date().getFullYear()} Solger Ingeniería y Tecnología EIRL.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
