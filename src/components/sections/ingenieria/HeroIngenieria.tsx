"use client";

/**
 * HeroIngenieria.tsx
 *
 * Hero robusto de la página de ingeniería.
 * Incluye título fuerte, estadísticas y CTA.
 * Diseño más sólido — no minimalista vacío.
 */

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const stats = [
  { number: "10+", label: "Años de experiencia" },
  { number: "500+", label: "Servicios realizados" },
  { number: "100%", label: "Normativa vigente" },
];

const highlights = [
  "Certificaciones válidas",
  "Atención en toda Lima",
  "Respuesta en 24 horas",
  "Personal capacitado",
];

export default function HeroIngenieria() {
  const { theme } = useTheme();

  return (
    <section
      className={`pt-28 pb-6 lg:pt-32 lg:pb-10 ${
        theme === "dark" ? "bg-dark-base" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left — content (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide mb-6 ${
                theme === "dark"
                  ? "bg-brand-orange/10 text-brand-orange-light border border-brand-orange/20"
                  : "bg-brand-orange/5 text-brand-orange border border-brand-orange/15"
              }`}
            >
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
              Ingeniería y Seguridad
            </div>

            <h1
              className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-5 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Servicios profesionales de{" "}
              <span className="text-brand-orange">
                ingeniería y seguridad
              </span>{" "}
              para empresas
            </h1>

            <p
              className={`text-base lg:text-lg leading-relaxed mb-8 max-w-2xl ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Protege tu empresa con certificaciones vigentes, instalaciones
              normadas y un equipo que responde rápido. Defensa civil,
              extintores, fumigación, pozo a tierra y sistemas contra incendios.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
              {highlights.map((h) => (
                <div
                  key={h}
                  className={`flex items-center gap-2 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <HiCheck className="text-brand-orange flex-shrink-0" size={16} />
                  {h}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/51994872765"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-dark transition-all duration-200 shadow-sm hover:shadow-md group text-sm"
              >
                <FaWhatsapp size={18} />
                Cotizar por WhatsApp
              </a>
              <a
                href="#contacto-ingenieria"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg border transition-all duration-200 text-sm ${
                  theme === "dark"
                    ? "border-white/15 text-white hover:bg-white/5"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Enviar consulta
                <HiArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right — stats card (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div
              className={`p-6 lg:p-8 rounded-xl border ${
                theme === "dark"
                  ? "bg-dark-secondary border-white/5"
                  : "bg-gray-light border-gray-200 shadow-sm"
              }`}
            >
              <h3
                className={`text-sm font-bold uppercase tracking-wider mb-6 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Nuestra trayectoria
              </h3>

              <div className="space-y-5">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex items-center gap-4 pb-5 ${
                      i < stats.length - 1
                        ? `border-b ${
                            theme === "dark"
                              ? "border-white/5"
                              : "border-gray-200"
                          }`
                        : ""
                    }`}
                  >
                    <span className="text-3xl font-extrabold text-brand-orange min-w-[80px]">
                      {s.number}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 p-4 rounded-lg text-sm ${
                  theme === "dark"
                    ? "bg-dark-tertiary text-gray-400"
                    : "bg-white text-gray-600 border border-gray-200"
                }`}
              >
                <span className="font-semibold text-brand-orange">RUC:</span>{" "}
                20615573648 — Solger Ingeniería y Tecnología EIRL
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
