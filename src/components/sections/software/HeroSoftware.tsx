"use client";

/**
 * HeroSoftware.tsx
 *
 * Hero robusto de la página de software.
 * Título fuerte, descripción, highlights, y mockup de dashboard.
 */

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const highlights = [
  "Desarrollo a medida",
  "Tecnología moderna",
  "Soporte continuo",
  "Escalable",
];

export default function HeroSoftware() {
  const { theme } = useTheme();

  return (
    <section
      className={`pt-28 pb-10 lg:pt-32 lg:pb-14 ${
        theme === "dark" ? "bg-dark-base" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide mb-6 ${
                theme === "dark"
                  ? "bg-brand-red/10 text-brand-red-light border border-brand-red/20"
                  : "bg-brand-red/5 text-brand-red border border-brand-red/15"
              }`}
            >
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
              Software y Tecnología
            </div>

            <h1
              className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-5 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Soluciones digitales{" "}
              <span className="text-brand-red">para tu negocio</span>
            </h1>

            <p
              className={`text-base lg:text-lg leading-relaxed mb-8 max-w-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Desarrollamos herramientas tecnológicas que simplifican tu
              operación. Desde páginas web hasta sistemas empresariales
              completos y automatización de procesos.
            </p>

            {/* Highlights chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {highlights.map((h) => (
                <span
                  key={h}
                  className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md ${
                    theme === "dark"
                      ? "bg-dark-tertiary text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <HiCheck size={14} className="text-brand-red" />
                  {h}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/51994872765"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-200 shadow-sm hover:shadow-md group text-sm"
              >
                <FaWhatsapp size={18} />
                Contactar
              </a>
              <a
                href="#contacto-software"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg border transition-all duration-200 text-sm ${
                  theme === "dark"
                    ? "border-white/15 text-white hover:bg-white/5"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                Solicitar Demo
                <HiArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div
              className={`rounded-xl border overflow-hidden ${
                theme === "dark"
                  ? "bg-dark-secondary border-white/10"
                  : "bg-white border-gray-200 shadow-lg"
              }`}
            >
              {/* Browser bar */}
              <div
                className={`flex items-center gap-2 px-4 py-3 border-b ${
                  theme === "dark"
                    ? "border-white/5 bg-dark-card"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div
                  className={`flex-1 mx-3 h-5 rounded text-[10px] flex items-center px-2 ${
                    theme === "dark"
                      ? "bg-dark-tertiary text-gray-500"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  app.solger.pe
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-3">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: "Ventas Hoy", value: "S/ 12,450", change: "+12%" },
                    { label: "Clientes", value: "1,284", change: "+5%" },
                    { label: "Eficiencia", value: "94.2%", change: "+3%" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className={`p-3 rounded-lg ${
                        theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"
                      }`}
                    >
                      <p
                        className={`text-[10px] mb-0.5 ${
                          theme === "dark" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {s.label}
                      </p>
                      <p
                        className={`text-sm font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {s.value}
                      </p>
                      <span className="text-[10px] text-green-500 font-medium">
                        {s.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chart bars */}
                <div
                  className={`h-28 rounded-lg p-3 ${
                    theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-end gap-1.5 h-full pb-3">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.6 + i * 0.04, duration: 0.4 }}
                          className="flex-1 rounded-t-sm bg-brand-red/60 hover:bg-brand-red transition-colors"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Table rows */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-2.5 rounded-lg ${
                      theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-brand-red/15" />
                    <div className="flex-1 space-y-1">
                      <div
                        className={`h-2 rounded w-1/3 ${
                          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      />
                      <div
                        className={`h-1.5 rounded w-1/2 ${
                          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                        }`}
                      />
                    </div>
                    <div
                      className={`h-5 w-14 rounded ${
                        theme === "dark" ? "bg-dark-base" : "bg-gray-200"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
