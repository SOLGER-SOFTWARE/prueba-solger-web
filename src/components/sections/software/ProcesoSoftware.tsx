"use client";

/**
 * ProcesoSoftware.tsx
 *
 * Sección de proceso de trabajo para Software.
 * Muestra los pasos de un proyecto típico.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

const pasos = [
  {
    numero: "01",
    titulo: "Análisis",
    descripcion:
      "Entendemos tu negocio, operación y necesidades. Definimos el alcance y los requerimientos del proyecto.",
  },
  {
    numero: "02",
    titulo: "Diseño",
    descripcion:
      "Diseñamos la arquitectura, flujos de trabajo e interfaz del sistema adaptados a tu operación.",
  },
  {
    numero: "03",
    titulo: "Desarrollo",
    descripcion:
      "Construimos el sistema con tecnología moderna. Entregas incrementales para que veas avances reales.",
  },
  {
    numero: "04",
    titulo: "Implementación",
    descripcion:
      "Desplegamos el sistema, migramos datos y capacitamos a tu equipo para el uso productivo.",
  },
];

export default function ProcesoSoftware() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="proceso"
      ref={ref}
      className={`py-16 lg:py-24 ${
        theme === "dark" ? "bg-dark-secondary" : "bg-gray-light"
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
            Metodología
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-bold mt-2 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Cómo <span className="text-brand-red">trabajamos</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pasos.map((p, i) => (
            <motion.div
              key={p.numero}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className={`relative p-6 rounded-xl border ${
                theme === "dark"
                  ? "bg-dark-card border-white/5"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <span className="text-3xl font-extrabold text-brand-red/20 block mb-3">
                {p.numero}
              </span>
              <h3
                className={`text-base font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {p.titulo}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {p.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
