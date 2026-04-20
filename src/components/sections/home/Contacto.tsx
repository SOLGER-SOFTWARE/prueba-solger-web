"use client";

/**
 * Contacto.tsx — Home
 *
 * Sección de contacto con información de la empresa
 * y formulario de contacto reutilizable.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import FormContacto from "@/components/forms/FormContacto";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function Contacto() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="contacto"
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
              className={`text-sm font-semibold tracking-widest uppercase ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Contacto
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-bold mt-3 leading-tight ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              ¿Tienes un proyecto?{" "}
              <span className="text-brand-blue">Conversemos</span>
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Cuéntanos sobre tu necesidad y te contactaremos para brindarte
              una solución adecuada a tu empresa.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: HiOutlineMail,
                  label: "info@solger.pe",
                  detail: "Escríbenos en cualquier momento",
                },
                {
                  icon: HiOutlinePhone,
                  label: "994 872 765",
                  detail: "Lunes a Viernes, 9am – 6pm",
                },
                {
                  icon: HiOutlineLocationMarker,
                  label: "La Victoria, Lima — Perú",
                  detail: "Solger Ingeniería y Tecnología EIRL",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      theme === "dark"
                        ? "bg-brand-blue/10 text-brand-blue"
                        : "bg-brand-blue/5 text-brand-blue"
                    }`}
                  >
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FormContacto />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
