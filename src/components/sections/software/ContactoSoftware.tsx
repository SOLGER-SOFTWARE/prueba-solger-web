"use client";

/**
 * ContactoSoftware.tsx
 *
 * Sección de contacto específica para software.
 * Formulario con acento rojo, campo de email, y contexto de desarrollo.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import FormContacto from "@/components/forms/FormContacto";
import { HiOutlineDesktopComputer, HiOutlineClock } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactoSoftware() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="contacto-software"
      ref={ref}
      className={`py-20 lg:py-28 ${
        theme === "dark" ? "bg-dark-secondary" : "bg-gray-light"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className={`text-xs font-semibold tracking-widest uppercase ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Contacto — Software
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-bold mt-3 leading-tight ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Cuéntanos tu{" "}
              <span className="text-brand-red">proyecto</span>
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Describe tu idea o necesidad y te proponemos una solución
              tecnológica a la medida. Sin compromiso.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === "dark"
                      ? "bg-brand-red/10 text-brand-red"
                      : "bg-brand-red/5 text-brand-red"
                  }`}
                >
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    994 872 765
                  </p>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-500"}`}>
                    WhatsApp Software
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === "dark"
                      ? "bg-brand-red/10 text-brand-red"
                      : "bg-brand-red/5 text-brand-red"
                  }`}
                >
                  <HiOutlineDesktopComputer size={18} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    Desarrollo a medida
                  </p>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-500"}`}>
                    Web, móvil y escritorio
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === "dark"
                      ? "bg-brand-red/10 text-brand-red"
                      : "bg-brand-red/5 text-brand-red"
                  }`}
                >
                  <HiOutlineClock size={18} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                    Respuesta en 24h
                  </p>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-500"}`}>
                    Evaluación inicial gratuita
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FormContacto
              accentColor="red"
              titulo="Solicitar propuesta"
              subtitulo="Desarrollo de software y tecnología"
              origen="software"
              placeholderMensaje="Describe tu proyecto o necesidad (ej: sistema de gestión para lavadero con control de caja y clientes)"
              mostrarEmail={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
