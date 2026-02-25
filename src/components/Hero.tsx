"use client";

/**
 * Hero.tsx
 *
 * Sección principal de alto impacto (Hero Section).
 * Incluye título persuasivo, subtítulo, botones de acción,
 * indicadores de confianza y un mockup tipo dashboard animado.
 * Diseñado para transmitir innovación, autoridad y escalabilidad.
 */

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { HiArrowRight, HiEye } from "react-icons/hi";

export default function Hero() {
    const { theme } = useTheme();

    return (
        <section
            id="inicio"
            className={`relative min-h-screen flex items-center overflow-hidden ${theme === "dark" ? "bg-dark-base" : "bg-white"
                }`}
        >
            {/* Gradientes de fondo para efecto visual premium */}
            <div className="absolute inset-0">
                {theme === "dark" ? (
                    <>
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/8 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
                        {/* Patrón de cuadrícula sutil */}
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                                backgroundSize: "60px 60px",
                            }}
                        />
                    </>
                ) : (
                    <>
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-100/80 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
                    </>
                )}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Columna izquierda: Contenido textual */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Insignia de marca */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide mb-6 ${theme === "dark"
                                    ? "bg-brand-red/10 text-brand-red-light border border-brand-red/20"
                                    : "bg-brand-red/5 text-brand-red border border-brand-red/15"
                                }`}
                        >
                            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                            SOLGER SOFTWARE — INNOVACIÓN EMPRESARIAL
                        </motion.div>

                        {/* Título principal - Impacto fuerte */}
                        <h1
                            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                        >
                            Digitaliza tu empresa.{" "}
                            <span className="text-brand-red">Automatiza tu crecimiento.</span>
                        </h1>

                        {/* Subtítulo persuasivo */}
                        <p
                            className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Sistemas de gestión personalizados diseñados para empresas que
                            quieren escalar con tecnología moderna.
                        </p>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contacto"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/25 group"
                            >
                                Solicitar Demo
                                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#servicios"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl border transition-all duration-300 ${theme === "dark"
                                        ? "border-white/15 text-white hover:bg-white/5"
                                        : "border-gray-300 text-dark-base hover:bg-gray-50"
                                    }`}
                            >
                                <HiEye />
                                Ver Soluciones
                            </a>
                        </div>

                        {/* Indicadores de confianza */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className={`mt-12 flex items-center gap-6 text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-400"
                                }`}
                        >
                            {["100% Personalizado", "Soporte Continuo", "Tecnología Moderna"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {item}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Columna derecha: Mockup tipo dashboard empresarial */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block"
                    >
                        <div
                            className={`relative rounded-2xl overflow-hidden border p-1 ${theme === "dark"
                                    ? "bg-dark-secondary border-white/10"
                                    : "bg-white border-gray-200 shadow-2xl"
                                }`}
                        >
                            {/* Barra superior del navegador */}
                            <div
                                className={`flex items-center gap-2 px-4 py-3 border-b ${theme === "dark" ? "border-white/5" : "border-gray-100"
                                    }`}
                            >
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div
                                    className={`flex-1 mx-4 h-6 rounded-md ${theme === "dark" ? "bg-dark-tertiary" : "bg-gray-100"
                                        }`}
                                />
                            </div>

                            {/* Contenido del dashboard de ejemplo */}
                            <div className="p-6 space-y-4">
                                {/* Tarjetas de estadísticas superiores */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: "Ventas Hoy", value: "S/ 12,450", change: "+12%" },
                                        { label: "Clientes", value: "1,284", change: "+5%" },
                                        { label: "Eficiencia", value: "94.2%", change: "+3%" },
                                    ].map((stat) => (
                                        <div
                                            key={stat.label}
                                            className={`p-4 rounded-xl ${theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"
                                                }`}
                                        >
                                            <p className={`text-xs mb-1 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                                                {stat.label}
                                            </p>
                                            <p className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-dark-base"}`}>
                                                {stat.value}
                                            </p>
                                            <span className="text-xs text-green-500 font-medium">{stat.change}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Gráfico de barras animado */}
                                <div
                                    className={`h-40 rounded-xl p-4 ${theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"
                                        }`}
                                >
                                    <div className="flex items-end gap-2 h-full pb-4">
                                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                                                className="flex-1 rounded-t-sm bg-brand-red/70 hover:bg-brand-red transition-colors"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Filas de tabla simuladas */}
                                <div className="space-y-2">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className={`flex items-center gap-3 p-3 rounded-lg ${theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"
                                                }`}
                                        >
                                            <div className="w-8 h-8 rounded-full bg-brand-red/20" />
                                            <div className="flex-1 space-y-1.5">
                                                <div className={`h-2.5 rounded w-1/3 ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}`} />
                                                <div className={`h-2 rounded w-1/2 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`} />
                                            </div>
                                            <div className={`h-6 w-16 rounded ${theme === "dark" ? "bg-dark-base" : "bg-gray-200"}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Efecto glow rojo sutil (solo modo oscuro) */}
                            {theme === "dark" && (
                                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-brand-red/20 via-transparent to-brand-red/10 -z-10 blur-sm" />
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
