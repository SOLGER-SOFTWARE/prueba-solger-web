"use client";

/**
 * Hero.tsx — Home
 *
 * HUB principal con 2 cards grandes (Software e Ingeniería).
 * Cards son el foco principal — above the fold.
 * Cada card tiene descripción, servicios y CTA.
 */

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import {
  HiOutlineShieldCheck,
  HiOutlineDesktopComputer,
} from "react-icons/hi";
import Link from "next/link";

const divisions = [
  {
    icon: HiOutlineShieldCheck,
    title: "Ingeniería y Seguridad",
    tagline: "Protección y cumplimiento normativo",
    description:
      "Servicios profesionales de ingeniería para empresas que necesitan operar en regla. Certificaciones, instalaciones y mantenimiento.",
    services: [
      "Defensa Civil",
      "Extintores",
      "Fumigación",
      "Pozo a Tierra",
      "Contra Incendios",
    ],
    href: "/ingenieria",
    color: "orange" as const,
  },
  {
    icon: HiOutlineDesktopComputer,
    title: "Software y Tecnología",
    tagline: "Herramientas digitales a medida",
    description:
      "Sistemas de gestión, páginas web y automatización diseñados para simplificar la operación de tu empresa.",
    services: [
      "Desarrollo Web",
      "Sistemas Empresariales",
      "Automatización de Procesos",
    ],
    href: "/software",
    color: "red" as const,
  },
];

const colors = {
  orange: {
    accent: "text-brand-orange",
    border: "border-brand-orange/20 hover:border-brand-orange/40",
    borderDark: "border-brand-orange/10 hover:border-brand-orange/25",
    button: "bg-brand-orange hover:bg-brand-orange-dark",
    iconBg: "bg-brand-orange/5",
    iconBgDark: "bg-brand-orange/10",
    tag: "bg-brand-orange/8 text-brand-orange",
    tagDark: "bg-brand-orange/12 text-brand-orange-light",
    top: "bg-brand-orange",
  },
  red: {
    accent: "text-brand-red",
    border: "border-brand-red/20 hover:border-brand-red/40",
    borderDark: "border-brand-red/10 hover:border-brand-red/25",
    button: "bg-brand-red hover:bg-brand-red-dark",
    iconBg: "bg-brand-red/5",
    iconBgDark: "bg-brand-red/10",
    tag: "bg-brand-red/8 text-brand-red",
    tagDark: "bg-brand-red/12 text-brand-red-light",
    top: "bg-brand-red",
  },
};

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      className={`pt-28 pb-10 lg:pt-32 lg:pb-14 ${
        theme === "dark" ? "bg-dark-base" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Claim */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p
            className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Solger Ingeniería y Tecnología EIRL
          </p>
          <h1
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Soluciones integrales para tu empresa
          </h1>
          <p
            className={`mt-3 text-base max-w-xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Dos áreas de especialización, un solo compromiso: resultados reales
            para tu negocio.
          </p>
        </motion.div>

        {/* 2 Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {divisions.map((div, i) => {
            const c = colors[div.color];
            return (
              <motion.div
                key={div.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              >
                <Link href={div.href} className="block group">
                  <div
                    className={`relative overflow-hidden rounded-xl border transition-all duration-300 group-hover:-translate-y-1 ${
                      theme === "dark"
                        ? `bg-dark-secondary ${c.borderDark} group-hover:shadow-lg group-hover:shadow-black/30`
                        : `bg-white ${c.border} shadow-sm group-hover:shadow-xl`
                    }`}
                  >
                    {/* Top accent bar */}
                    <div className={`h-1 ${c.top}`} />

                    <div className="p-7 lg:p-9">
                      {/* Icon + Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                            theme === "dark"
                              ? `${c.iconBgDark} ${c.accent} group-hover:${c.button} group-hover:text-white`
                              : `${c.iconBg} ${c.accent}`
                          }`}
                        >
                          <div.icon size={24} />
                        </div>
                        <div>
                          <h2
                            className={`text-xl lg:text-2xl font-bold ${c.accent}`}
                          >
                            {div.title}
                          </h2>
                          <p
                            className={`text-sm mt-0.5 ${
                              theme === "dark"
                                ? "text-gray-500"
                                : "text-gray-400"
                            }`}
                          >
                            {div.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed mb-5 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {div.description}
                      </p>

                      {/* Services list */}
                      <div
                        className={`pt-5 border-t mb-6 ${
                          theme === "dark"
                            ? "border-white/5"
                            : "border-gray-100"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {div.services.map((s) => (
                            <div
                              key={s}
                              className={`flex items-center gap-2 text-sm ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-700"
                              }`}
                            >
                              <HiCheck
                                size={14}
                                className={`flex-shrink-0 ${c.accent}`}
                              />
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div
                        className={`inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm group-hover:shadow-md ${c.button}`}
                      >
                        Explorar servicios
                        <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
