"use client";

/**
 * Nosotros.tsx — Home
 *
 * Sección breve sobre Solger Ingeniería y Tecnología EIRL.
 * Valores, experiencia y enfoque corporativo.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineUserGroup,
} from "react-icons/hi";

const valores = [
  {
    icon: HiOutlineShieldCheck,
    title: "Confianza",
    description: "Más de una década de experiencia respaldando a empresas reales.",
  },
  {
    icon: HiOutlineClock,
    title: "Compromiso",
    description: "Cumplimos plazos y normativas con estándares de calidad exigentes.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Cercanía",
    description: "Atención directa y personalizada. Tu proyecto es nuestra prioridad.",
  },
];

export default function Nosotros() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-28 ${
        theme === "dark" ? "bg-dark-secondary" : "bg-gray-light"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className={`text-sm font-semibold tracking-widest uppercase ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Nosotros
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-bold mt-3 leading-tight ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Una empresa seria para{" "}
              <span className="text-brand-blue">trabajos que importan</span>
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Solger Ingeniería y Tecnología EIRL es una empresa peruana
              dedicada a brindar soluciones de ingeniería, seguridad y
              tecnología. Operamos desde La Victoria, Lima, atendiendo a
              empresas que necesitan cumplimiento normativo, protección integral
              y herramientas digitales confiables.
            </p>

            {/* Company data */}
            <div
              className={`mt-8 flex flex-col sm:flex-row gap-6 text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <div>
                <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  RUC
                </span>
                <p>20615573648</p>
              </div>
              <div>
                <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Ubicación
                </span>
                <p>La Victoria, Lima — Perú</p>
              </div>
              <div>
                <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  Contacto
                </span>
                <p>994 872 765</p>
              </div>
            </div>
          </motion.div>

          {/* Right — valores */}
          <div className="space-y-5">
            {valores.map((valor, i) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`flex gap-5 p-5 rounded-xl border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-dark-card border-white/5 hover:border-white/10"
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-sm"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "bg-brand-blue/5 text-brand-blue"
                  }`}
                >
                  <valor.icon size={22} />
                </div>
                <div>
                  <h3
                    className={`text-base font-bold mb-1 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {valor.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {valor.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
