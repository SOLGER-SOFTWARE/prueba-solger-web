"use client";

/**
 * WhyChooseUs.tsx
 *
 * Sección "¿Por qué elegirnos?" con diseño en dos columnas.
 * Columna izquierda: título persuasivo y estadísticas clave.
 * Columna derecha: lista de razones con íconos rojos animados.
 * Transmite confianza, experiencia y compromiso profesional.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
    HiOutlineCode,
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineSupport,
    HiOutlineClock,
} from "react-icons/hi";

const reasons = [
    {
        icon: HiOutlineCode,
        title: "Desarrollo 100% personalizado",
        description:
            "Cada sistema se diseña y construye desde cero según las necesidades específicas de tu empresa, sin plantillas genéricas.",
    },
    {
        icon: HiOutlineLightningBolt,
        title: "Tecnología moderna y escalable",
        description:
            "Utilizamos las últimas tecnologías del mercado para garantizar rendimiento, velocidad y crecimiento sin límites.",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Seguridad avanzada",
        description:
            "Protección de datos con encriptación de nivel empresarial, respaldos automáticos y control de acceso por roles.",
    },
    {
        icon: HiOutlineSupport,
        title: "Soporte continuo",
        description:
            "Acompañamiento permanente post-implementación, capacitación a tu equipo y resolución de incidencias en tiempo récord.",
    },
    {
        icon: HiOutlineClock,
        title: "Implementación rápida",
        description:
            "Metodología ágil que permite entregas incrementales, para que empieces a ver resultados desde las primeras semanas.",
    },
];

export default function WhyChooseUs() {
    const { theme } = useTheme();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="soluciones"
            ref={ref}
            className={`py-24 lg:py-32 ${theme === "dark" ? "bg-dark-base" : "bg-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - headline */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
                            ¿Por qué elegirnos?
                        </span>
                        <h2
                            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                        >
                            Porque tu empresa merece{" "}
                            <span className="text-brand-red">tecnología de primer nivel</span>
                        </h2>
                        <p
                            className={`mt-6 text-lg leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            En Solger Software combinamos experiencia, innovación y
                            compromiso para entregar soluciones que realmente impactan la
                            operación de tu negocio.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-10">
                            {[
                                { number: "50+", label: "Proyectos" },
                                { number: "98%", label: "Satisfacción" },
                                { number: "24/7", label: "Soporte" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-extrabold text-brand-red">
                                        {stat.number}
                                    </p>
                                    <p
                                        className={`text-sm mt-1 ${theme === "dark" ? "text-gray-500" : "text-gray-500"
                                            }`}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - features list */}
                    <div className="space-y-5">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={reason.title}
                                initial={{ opacity: 0, x: 40 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`flex gap-5 p-5 rounded-xl transition-all duration-300 group ${theme === "dark"
                                    ? "hover:bg-dark-secondary"
                                    : "hover:bg-gray-50"
                                    }`}
                            >
                                <div
                                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${theme === "dark"
                                        ? "bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white"
                                        : "bg-brand-red/5 text-brand-red group-hover:bg-brand-red group-hover:text-white"
                                        }`}
                                >
                                    <reason.icon size={24} />
                                </div>
                                <div>
                                    <h3
                                        className={`text-lg font-bold mb-1 ${theme === "dark" ? "text-white" : "text-dark-base"
                                            }`}
                                    >
                                        {reason.title}
                                    </h3>
                                    <p
                                        className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                            }`}
                                    >
                                        {reason.description}
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
