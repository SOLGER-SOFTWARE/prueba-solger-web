"use client";

/**
 * ServiciosIngenieria.tsx
 *
 * Grid de servicios de ingeniería con cards detalladas.
 * Cada card tiene icono, título, descripción, features y link.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import {
  HiOutlineShieldCheck,
  HiOutlineFire,
  HiOutlineBeaker,
  HiOutlineLightningBolt,
  HiOutlineBell,
} from "react-icons/hi";
import Link from "next/link";

const servicios = [
  {
    icon: HiOutlineShieldCheck,
    title: "Defensa Civil",
    description:
      "Inspecciones técnicas ITSE, certificaciones y planes de seguridad. Todo lo que tu local necesita para operar en regla.",
    features: [
      "Certificado de defensa civil",
      "Plan de seguridad y evacuación",
      "Señalización normativa INDECI",
    ],
    href: "/ingenieria/defensa-civil",
  },
  {
    icon: HiOutlineFire,
    title: "Extintores",
    description:
      "Venta, recarga, mantenimiento y certificación de extintores. Equipos de calidad con documentación en regla.",
    features: [
      "Recarga con insumos certificados",
      "Prueba hidrostática NTP",
      "Certificado de operatividad",
    ],
    href: "/ingenieria/extintores",
  },
  {
    icon: HiOutlineBeaker,
    title: "Fumigación",
    description:
      "Control de plagas profesional con productos autorizados por DIGESA. Certificado válido para inspecciones sanitarias.",
    features: [
      "Productos autorizados DIGESA",
      "Certificado de fumigación oficial",
      "Servicio programado recurrente",
    ],
    href: "/ingenieria/fumigacion",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Pozo a Tierra",
    description:
      "Instalación, mantenimiento y protocolo de medición de resistencia. Protección contra descargas eléctricas.",
    features: [
      "Protocolo de medición certificado",
      "Tratamiento químico del terreno",
      "Válido para ITSE y OSINERGMIN",
    ],
    href: "/ingenieria/pozo-tierra",
  },
  {
    icon: HiOutlineBell,
    title: "Sistemas Contra Incendios",
    description:
      "Diseño, instalación y mantenimiento de sistemas de detección y extinción. Cumplimiento con NFPA y RNE.",
    features: [
      "Detectores y paneles de alarma",
      "Gabinetes y rociadores",
      "Mantenimiento preventivo",
    ],
    href: "/ingenieria/sistemas-contra-incendios",
  },
];

export default function ServiciosIngenieria() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
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
          className="mb-10"
        >
          <span
            className={`text-xs font-semibold tracking-widest uppercase ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Nuestros servicios
          </span>
          <h2
            className={`text-2xl sm:text-3xl font-bold mt-2 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Áreas de{" "}
            <span className="text-brand-orange">especialización</span>
          </h2>
          <p
            className={`mt-3 text-base max-w-2xl ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Cada servicio incluye evaluación, ejecución, documentación y
            certificación. Selecciona un servicio para conocer el detalle completo.
          </p>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {servicios.slice(0, 3).map((s, i) => (
            <ServiceCard
              key={s.title}
              servicio={s}
              index={i}
              inView={inView}
              theme={theme}
            />
          ))}
        </div>

        {/* Bottom row — 2 cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {servicios.slice(3).map((s, i) => (
            <ServiceCard
              key={s.title}
              servicio={s}
              index={i + 3}
              inView={inView}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  servicio,
  index,
  inView,
  theme,
}: {
  servicio: (typeof servicios)[number];
  index: number;
  inView: boolean;
  theme: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
    >
      <Link href={servicio.href} className="block group h-full">
        <div
          className={`h-full p-6 rounded-xl border transition-all duration-300 group-hover:-translate-y-1 ${
            theme === "dark"
              ? "bg-dark-card border-white/5 hover:border-brand-orange/20 group-hover:shadow-lg group-hover:shadow-black/30"
              : "bg-white border-gray-200 hover:border-brand-orange/30 shadow-sm group-hover:shadow-lg"
          }`}
        >
          {/* Icon + Title row */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                theme === "dark"
                  ? "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                  : "bg-brand-orange/5 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
              }`}
            >
              <servicio.icon size={22} />
            </div>
            <div>
              <h3
                className={`text-base font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {servicio.title}
              </h3>
              <p
                className={`text-sm mt-1 leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {servicio.description}
              </p>
            </div>
          </div>

          {/* Features */}
          <div
            className={`pt-4 border-t space-y-2 ${
              theme === "dark" ? "border-white/5" : "border-gray-100"
            }`}
          >
            {servicio.features.map((f) => (
              <div
                key={f}
                className={`flex items-center gap-2 text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <HiCheck size={14} className="text-brand-orange flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>

          {/* Link */}
          <div className="mt-5">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange group-hover:gap-2.5 transition-all">
              Ver detalles
              <HiArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
