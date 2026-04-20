"use client";

/**
 * ContactoIngenieria.tsx
 *
 * Sección de contacto específica para ingeniería.
 * Formulario con acento naranja y contexto de servicios técnicos.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import FormContacto from "@/components/forms/FormContacto";
import { HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactoIngenieria() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="contacto-ingenieria"
      ref={ref}
      className={`py-20 lg:py-28 ${
        theme === "dark" ? "bg-dark-base" : "bg-white"
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
              Contacto — Ingeniería
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-bold mt-3 leading-tight ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Solicita una{" "}
              <span className="text-brand-orange">cotización</span>
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Cuéntanos qué servicio necesitas. Te enviamos una propuesta
              detallada con precios y plazos en menos de 24 horas.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === "dark"
                      ? "bg-brand-orange/10 text-brand-orange"
                      : "bg-brand-orange/5 text-brand-orange"
                  }`}
                >
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    994 872 765
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    WhatsApp Ingeniería
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === "dark"
                      ? "bg-brand-orange/10 text-brand-orange"
                      : "bg-brand-orange/5 text-brand-orange"
                  }`}
                >
                  <HiOutlinePhone size={18} />
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Lunes a Sábado
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    8:00 am – 6:00 pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === "dark"
                      ? "bg-brand-orange/10 text-brand-orange"
                      : "bg-brand-orange/5 text-brand-orange"
                  }`}
                >
                  <HiOutlineLocationMarker size={18} />
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    La Victoria, Lima
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    Cobertura en toda Lima
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
              accentColor="orange"
              titulo="Formulario de cotización"
              subtitulo="Servicios de ingeniería y seguridad"
              origen="ingenieria"
              placeholderMensaje="Describe el servicio que necesitas (ej: certificado de defensa civil para local comercial)"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
