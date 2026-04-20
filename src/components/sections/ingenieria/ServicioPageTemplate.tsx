"use client";

/**
 * ServicioPageTemplate.tsx
 *
 * Componente reutilizable para las páginas individuales de servicio.
 * Recibe datos del servicio y renderiza:
 * 1. Hero claro
 * 2. Descripción del servicio
 * 3. Beneficios
 * 4. Proceso/explicación breve
 * 5. CTA (WhatsApp + formulario)
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { IconType } from "react-icons";
import ContactoIngenieria from "@/components/sections/ingenieria/ContactoIngenieria";

interface ServicioData {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  beneficios: string[];
  proceso: {
    paso: string;
    detalle: string;
  }[];
}

export default function ServicioPageTemplate({
  servicio,
}: {
  servicio: ServicioData;
}) {
  const { theme } = useTheme();
  const descRef = useRef(null);
  const descInView = useInView(descRef, { once: true, margin: "-60px" });
  const benefRef = useRef(null);
  const benefInView = useInView(benefRef, { once: true, margin: "-60px" });
  const procRef = useRef(null);
  const procInView = useInView(procRef, { once: true, margin: "-60px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      {/* 1. HERO */}
      <section
        className={`pt-28 pb-12 lg:pt-32 lg:pb-16 ${
          theme === "dark" ? "bg-dark-base" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div
              className={`flex items-center gap-2 text-sm mb-6 ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              <Link
                href="/ingenieria"
                className="hover:text-brand-orange transition-colors"
              >
                Ingeniería
              </Link>
              <span>/</span>
              <span
                className={
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }
              >
                {servicio.title}
              </span>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide mb-5 ${
                theme === "dark"
                  ? "bg-brand-orange/10 text-brand-orange-light border border-brand-orange/20"
                  : "bg-brand-orange/5 text-brand-orange border border-brand-orange/15"
              }`}
            >
              <servicio.icon size={14} />
              {servicio.subtitle}
            </div>

            <h1
              className={`text-3xl sm:text-4xl font-bold leading-tight mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              {servicio.title}
            </h1>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {servicio.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DESCRIPCIÓN */}
      <section
        ref={descRef}
        className={`py-16 lg:py-20 ${
          theme === "dark" ? "bg-dark-secondary" : "bg-gray-light"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2
              className={`text-xl sm:text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              ¿En qué consiste este servicio?
            </h2>
            <div
              className={`text-base leading-relaxed space-y-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <p>{servicio.description}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. BENEFICIOS */}
      <section
        ref={benefRef}
        className={`py-16 lg:py-20 ${
          theme === "dark" ? "bg-dark-base" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-xl sm:text-2xl font-bold mb-8 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Beneficios
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {servicio.beneficios.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={benefInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className={`flex items-start gap-3 p-4 rounded-lg border ${
                    theme === "dark"
                      ? "bg-dark-secondary border-white/5"
                      : "bg-gray-light border-gray-200"
                  }`}
                >
                  <div className="w-6 h-6 rounded-md bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiCheck size={14} />
                  </div>
                  <span
                    className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {b}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PROCESO */}
      <section
        ref={procRef}
        className={`py-16 lg:py-20 ${
          theme === "dark" ? "bg-dark-secondary" : "bg-gray-light"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={procInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-xl sm:text-2xl font-bold mb-8 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              ¿Cómo trabajamos?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicio.proceso.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={procInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  className={`p-5 rounded-xl border ${
                    theme === "dark"
                      ? "bg-dark-card border-white/5"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center text-sm font-bold mb-3">
                    {i + 1}
                  </div>
                  <h3
                    className={`text-sm font-bold mb-1.5 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {p.paso}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {p.detalle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA */}
      <section
        ref={ctaRef}
        className={`py-16 lg:py-20 ${
          theme === "dark" ? "bg-dark-base" : "bg-white"
        }`}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-2xl sm:text-3xl font-bold leading-tight ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              ¿Necesitas {servicio.title.toLowerCase()}?
            </h2>
            <p
              className={`mt-3 text-base ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Solicita una cotización sin compromiso. Respondemos rápido.
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
                href="#contacto-ingenieria"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-dark transition-all duration-200 group text-sm"
              >
                Enviar consulta
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. FORMULARIO DE CONTACTO */}
      <ContactoIngenieria />
    </>
  );
}
