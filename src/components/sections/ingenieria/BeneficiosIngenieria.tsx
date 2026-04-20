"use client";

/**
 * BeneficiosIngenieria.tsx
 *
 * Beneficios de elegir Solger para ingeniería:
 * Experiencia, Cumplimiento normativo, Atención rápida.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  HiOutlineBadgeCheck,
  HiOutlineDocumentText,
  HiOutlineLightningBolt,
} from "react-icons/hi";

const beneficios = [
  {
    icon: HiOutlineBadgeCheck,
    title: "Experiencia comprobada",
    description:
      "Años de trayectoria atendiendo empresas de diversos sectores. Conocemos los requisitos y procesos que tu negocio necesita.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Cumplimiento normativo",
    description:
      "Todos nuestros servicios cumplen con la normativa vigente. Certificaciones válidas y documentación en regla.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Atención rápida",
    description:
      "Respuesta ágil a tus solicitudes. Evaluamos, cotizamos y ejecutamos con tiempos que se adaptan a tu urgencia.",
  },
];

export default function BeneficiosIngenieria() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 ${
        theme === "dark" ? "bg-dark-base" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className={`text-sm font-semibold tracking-widest uppercase ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            ¿Por qué elegirnos?
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-bold mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Respaldo que{" "}
            <span className="text-brand-orange">tu empresa necesita</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={`p-7 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-dark-secondary border-white/5 hover:border-brand-orange/15"
                  : "bg-gray-light border-gray-200 hover:border-brand-orange/25 shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-5 ${
                  theme === "dark"
                    ? "bg-brand-orange/10 text-brand-orange"
                    : "bg-brand-orange/5 text-brand-orange"
                }`}
              >
                <b.icon size={24} />
              </div>
              <h3
                className={`text-base font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {b.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
