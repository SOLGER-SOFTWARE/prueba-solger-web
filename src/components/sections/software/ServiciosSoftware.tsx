"use client";

/**
 * ServiciosSoftware.tsx
 *
 * Servicios de software: Desarrollo web, Sistemas empresariales, Automatización.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  HiOutlineGlobe,
  HiOutlineDesktopComputer,
  HiOutlineCog,
} from "react-icons/hi";

const servicios = [
  {
    icon: HiOutlineGlobe,
    title: "Desarrollo Web",
    description:
      "Páginas web profesionales, landing pages y portales corporativos. Diseño responsivo, rápido y optimizado para buscadores.",
    features: [
      "Diseño responsivo y profesional",
      "Optimización SEO desde la base",
      "Panel de administración cuando se requiera",
      "Hospedaje y dominio gestionado",
    ],
  },
  {
    icon: HiOutlineDesktopComputer,
    title: "Sistemas Empresariales",
    description:
      "Sistemas de gestión personalizados para tu tipo de negocio. Control de operaciones, clientes, inventarios y reportes en una sola plataforma.",
    features: [
      "Desarrollo a medida según tu operación",
      "Módulos de ventas, inventario y reportes",
      "Acceso desde cualquier dispositivo",
      "Soporte técnico continuo",
    ],
  },
  {
    icon: HiOutlineCog,
    title: "Automatización",
    description:
      "Elimina tareas repetitivas y reduce errores con flujos automatizados. Integración con herramientas existentes y procesos centralizados.",
    features: [
      "Automatización de flujos de trabajo",
      "Integración con sistemas existentes",
      "Notificaciones y alertas programadas",
      "Reducción de carga operativa",
    ],
  },
];

export default function ServiciosSoftware() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicios"
      ref={ref}
      className={`py-20 lg:py-28 ${
        theme === "dark" ? "bg-dark-secondary" : "bg-gray-light"
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
            Nuestros servicios
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-bold mt-3 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Lo que <span className="text-brand-red">podemos hacer</span> por tu
            empresa
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`p-7 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                theme === "dark"
                  ? "bg-dark-card border-white/5 hover:border-brand-red/20 hover:shadow-lg hover:shadow-black/20"
                  : "bg-white border-gray-200 hover:border-brand-red/25 shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
                  theme === "dark"
                    ? "bg-brand-red/10 text-brand-red"
                    : "bg-brand-red/5 text-brand-red"
                }`}
              >
                <s.icon size={22} />
              </div>
              <h3
                className={`text-lg font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {s.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {s.description}
              </p>
              <ul className="space-y-2.5">
                {s.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-2.5 text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
