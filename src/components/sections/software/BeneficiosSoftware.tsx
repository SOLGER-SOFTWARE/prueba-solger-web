"use client";

/**
 * BeneficiosSoftware.tsx
 *
 * Sección de beneficios de elegir Solger Software.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  HiOutlineRefresh,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineSupport,
} from "react-icons/hi";

const beneficios = [
  {
    icon: HiOutlineRefresh,
    title: "Automatización de procesos",
    description:
      "Elimina tareas repetitivas. Tu equipo se enfoca en lo estratégico mientras el sistema trabaja.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Seguridad de datos",
    description:
      "Protección con encriptación, respaldos automáticos y control de acceso por roles.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Reportes en tiempo real",
    description:
      "Dashboards con datos al instante. Toma decisiones basadas en información actualizada.",
  },
  {
    icon: HiOutlineSupport,
    title: "Soporte continuo",
    description:
      "Acompañamiento post-implementación, capacitación y resolución rápida de incidencias.",
  },
];

export default function BeneficiosSoftware() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="beneficios"
      ref={ref}
      className={`py-16 lg:py-24 ${
        theme === "dark" ? "bg-dark-base" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className={`text-xs font-semibold tracking-widest uppercase ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Ventajas
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-bold mt-2 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            ¿Por qué un sistema{" "}
            <span className="text-brand-red">personalizado?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className={`p-6 rounded-xl border text-center transition-all duration-300 hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-dark-secondary border-white/5 hover:border-brand-red/15"
                  : "bg-gray-light border-gray-200 hover:border-brand-red/20 shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                  theme === "dark"
                    ? "bg-brand-red/10 text-brand-red"
                    : "bg-brand-red/5 text-brand-red"
                }`}
              >
                <b.icon size={24} />
              </div>
              <h3
                className={`text-sm font-bold mb-2 ${
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
