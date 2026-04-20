"use client";

/**
 * CTASoftware.tsx
 *
 * Call to action final de la página de software.
 * Formulario + WhatsApp.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { HiArrowRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function CTASoftware() {
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-2xl sm:text-3xl font-bold leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            ¿Listo para digitalizar tu empresa?
          </h2>
          <p
            className={`mt-4 text-base max-w-xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Cuéntanos tu idea o necesidad y te proponemos una solución
            tecnológica a la medida de tu negocio.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/51994872765"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1da851] transition-all duration-200 text-sm"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
            <a
              href="#contacto-software"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-dark transition-all duration-200 group text-sm"
            >
              Enviar consulta
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
