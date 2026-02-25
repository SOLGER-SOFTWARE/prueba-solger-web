"use client";

/**
 * CTA.tsx
 *
 * Sección de llamada a la acción final (Call to Action).
 * Texto grande centrado con fondo de gradiente rojo sutil.
 * Diseñado para cerrar la conversión con un botón prominente
 * que dirige al formulario de contacto.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { HiArrowRight } from "react-icons/hi";

export default function CTA() {
    const { theme } = useTheme();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className={`relative py-24 lg:py-32 overflow-hidden ${theme === "dark" ? "bg-dark-base" : "bg-white"
                }`}
        >
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
                        Da el primer paso
                    </span>
                    <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 leading-tight ${theme === "dark" ? "text-white" : "text-dark-base"
                            }`}
                    >
                        Es momento de llevar tu empresa{" "}
                        <span className="text-brand-red">al siguiente nivel.</span>
                    </h2>
                    <p
                        className={`mt-6 text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        Agenda una asesoría gratuita con nuestro equipo y descubre cómo un
                        sistema personalizado puede transformar la operación de tu negocio.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10"
                    >
                        <a
                            href="#contacto"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-red text-white text-lg font-bold rounded-xl hover:bg-brand-red-dark transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/30 group"
                        >
                            SOLICITAR ASESORÍA GRATUITA
                            <HiArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
