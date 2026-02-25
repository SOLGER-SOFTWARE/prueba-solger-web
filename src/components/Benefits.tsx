"use client";

/**
 * Benefits.tsx
 *
 * Sección de beneficios con contadores animados al hacer scroll.
 * Muestra métricas de negocio con números grandes y animación tipo
 * contador que incrementa visualmente al entrar en viewport.
 * Diseño potente que transmite resultados medibles e impacto real.
 */

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
    HiOutlineRefresh,
    HiOutlineExclamationCircle,
    HiOutlineEye,
    HiOutlineChartBar,
    HiOutlineTrendingUp,
} from "react-icons/hi";

/* ─────────────────────────────────────────────
   Datos de métricas principales con contadores
   ───────────────────────────────────────────── */
const metrics = [
    { value: 70, suffix: "%", label: "Reducción de tiempo operativo", description: "Automatiza tareas repetitivas" },
    { value: 95, suffix: "%", label: "Precisión en datos", description: "Elimina errores humanos" },
    { value: 3, suffix: "x", label: "Mayor productividad", description: "Optimiza cada proceso" },
    { value: 24, suffix: "/7", label: "Monitoreo en tiempo real", description: "Control total siempre" },
];

/* ─────────────────────────────────────────────
   Beneficios detallados con íconos
   ───────────────────────────────────────────── */
const benefits = [
    {
        icon: HiOutlineRefresh,
        title: "Automatización de procesos",
        description:
            "Elimina tareas manuales repetitivas. Tu equipo se enfoca en lo estratégico mientras el sistema trabaja por ti.",
    },
    {
        icon: HiOutlineExclamationCircle,
        title: "Reducción de errores operativos",
        description:
            "Validaciones inteligentes y flujos controlados que minimizan errores humanos y garantizan datos confiables.",
    },
    {
        icon: HiOutlineEye,
        title: "Control total en tiempo real",
        description:
            "Dashboards dinámicos con información actualizada al instante. Toma decisiones basadas en datos.",
    },
    {
        icon: HiOutlineChartBar,
        title: "Reportes inteligentes",
        description:
            "Genera reportes detallados con un clic. Analiza tendencias, identifica oportunidades y anticipa problemas.",
    },
    {
        icon: HiOutlineTrendingUp,
        title: "Aumento de productividad",
        description:
            "Optimiza cada proceso de tu empresa. Más resultados con menos esfuerzo y recursos gracias a la tecnología.",
    },
];

/* ─────────────────────────────────────────────
   Componente de contador animado
   Anima un número de 0 al valor final al hacer scroll
   ───────────────────────────────────────────── */
function AnimatedCounter({
    value,
    suffix,
    inView,
}: {
    value: number;
    suffix: string;
    inView: boolean;
}) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!inView) return;

        // Animar el contador de 0 al valor final
        const duration = 2000; // 2 segundos de duración
        const startTime = Date.now();

        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Función de aceleración tipo ease-out
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(value * easedProgress));

            if (progress >= 1) clearInterval(timer);
        }, 16);

        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <span>
            {displayValue}
            {suffix}
        </span>
    );
}

/* ─────────────────────────────────────────────
   Componente principal de la sección de beneficios
   ───────────────────────────────────────────── */
export default function Benefits() {
    const { theme } = useTheme();
    const counterRef = useRef(null);
    const counterInView = useInView(counterRef, { once: true, margin: "-100px" });
    const benefitsRef = useRef(null);
    const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });

    return (
        <div id="beneficios">
            {/* ─── Sección de contadores animados ─── */}
            <section
                ref={counterRef}
                className={`relative py-24 lg:py-32 overflow-hidden ${theme === "dark" ? "bg-dark-base" : "bg-white"
                    }`}
            >
                {/* Fondo elegante con gradiente */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[200px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={counterInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
                            Impacto Real
                        </span>
                        <h2
                            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                        >
                            Resultados que impulsan{" "}
                            <span className="text-brand-red">tu crecimiento</span>
                        </h2>
                    </motion.div>

                    {/* Contadores grandes animados */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {metrics.map((metric, i) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 40 }}
                                animate={counterInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className={`text-center p-8 rounded-2xl border transition-all duration-300 ${theme === "dark"
                                        ? "bg-dark-secondary border-white/5 hover:border-brand-red/20"
                                        : "bg-gray-50 border-gray-200 hover:border-brand-red/20"
                                    }`}
                            >
                                <div className="text-5xl lg:text-6xl font-extrabold text-brand-red mb-3">
                                    <AnimatedCounter
                                        value={metric.value}
                                        suffix={metric.suffix}
                                        inView={counterInView}
                                    />
                                </div>
                                <p
                                    className={`text-sm font-bold mb-1 ${theme === "dark" ? "text-white" : "text-dark-base"
                                        }`}
                                >
                                    {metric.label}
                                </p>
                                <p
                                    className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-500"
                                        }`}
                                >
                                    {metric.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Sección de beneficios detallados ─── */}
            <section
                ref={benefitsRef}
                className={`py-24 lg:py-32 ${theme === "dark" ? "bg-dark-secondary" : "bg-gray-light"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
                            Beneficios Clave
                        </span>
                        <h2
                            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                        >
                            La ventaja competitiva que{" "}
                            <span className="text-brand-red">tu empresa necesita</span>
                        </h2>
                    </motion.div>

                    {/* Grid de beneficios a dos columnas con diseño amplio */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`group flex gap-6 p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${theme === "dark"
                                        ? "bg-dark-card border-white/5 hover:border-brand-red/20"
                                        : "bg-white border-gray-200 hover:border-brand-red/20 shadow-sm hover:shadow-lg"
                                    } ${i === 4 ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto" : ""}`}
                            >
                                <div
                                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${theme === "dark"
                                            ? "bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white"
                                            : "bg-brand-red/5 text-brand-red group-hover:bg-brand-red group-hover:text-white"
                                        }`}
                                >
                                    <benefit.icon size={28} />
                                </div>
                                <div>
                                    <h3
                                        className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-dark-base"
                                            }`}
                                    >
                                        {benefit.title}
                                    </h3>
                                    <p
                                        className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                            }`}
                                    >
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
