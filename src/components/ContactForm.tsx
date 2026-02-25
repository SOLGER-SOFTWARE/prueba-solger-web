"use client";

/**
 * ContactForm.tsx
 *
 * Formulario de contacto profesional con validaciones completas.
 * Incluye campos para nombre, empresa, tipo de negocio, teléfono,
 * correo y mensaje. Diseño moderno con focus rojo glow,
 * adaptado a modo claro y oscuro. Estado de éxito animado.
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineUser,
    HiOutlineOfficeBuilding,
    HiOutlineChatAlt2,
} from "react-icons/hi";

const businessTypes = [
    "Servicios Generales",
    "Veterinaria",
    "Clínica / Salud",
    "Comercio / Ventas",
    "Almacén / Logística",
    "Restaurante / Food",
    "Educación",
    "Otro",
];

interface FormData {
    nombre: string;
    empresa: string;
    tipoNegocio: string;
    telefono: string;
    correo: string;
    mensaje: string;
}

interface FormErrors {
    [key: string]: string;
}

export default function ContactForm() {
    const { theme } = useTheme();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        empresa: "",
        tipoNegocio: "",
        telefono: "",
        correo: "",
        mensaje: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
        if (!formData.empresa.trim()) newErrors.empresa = "La empresa es requerida";
        if (!formData.tipoNegocio) newErrors.tipoNegocio = "Selecciona un tipo de negocio";
        if (!formData.telefono.trim()) {
            newErrors.telefono = "El teléfono es requerido";
        } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.telefono)) {
            newErrors.telefono = "Ingresa un teléfono válido";
        }
        if (!formData.correo.trim()) {
            newErrors.correo = "El correo es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
            newErrors.correo = "Ingresa un correo válido";
        }
        if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es requerido";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            // Reset after 3s
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    nombre: "",
                    empresa: "",
                    tipoNegocio: "",
                    telefono: "",
                    correo: "",
                    mensaje: "",
                });
            }, 4000);
        }
    };

    const handleChange = (
        field: keyof FormData,
        value: string
    ) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => {
                const updated = { ...prev };
                delete updated[field];
                return updated;
            });
        }
    };

    const inputClass = (field: string) =>
        `w-full px-4 py-3.5 rounded-xl border text-sm transition-all duration-200 focus-red-glow ${theme === "dark"
            ? `bg-dark-tertiary border-white/10 text-white placeholder-gray-500 ${errors[field] ? "border-red-500" : "hover:border-white/20"
            }`
            : `bg-white border-gray-200 text-dark-base placeholder-gray-400 ${errors[field] ? "border-red-500" : "hover:border-gray-300"
            }`
        }`;

    return (
        <section
            id="contacto"
            ref={ref}
            className={`py-24 lg:py-32 ${theme === "dark" ? "bg-dark-base" : "bg-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
                            Contáctanos
                        </span>
                        <h2
                            className={`text-3xl sm:text-4xl font-bold mt-3 leading-tight ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                        >
                            Hablemos sobre{" "}
                            <span className="text-brand-red">tu proyecto</span>
                        </h2>
                        <p
                            className={`mt-4 text-lg leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Cuéntanos sobre tu empresa y tus necesidades. Nuestro equipo te
                            contactará en menos de 24 horas con una propuesta personalizada.
                        </p>

                        <div className="mt-10 space-y-6">
                            {[
                                {
                                    icon: HiOutlineMail,
                                    label: "contacto@solger.pe",
                                    detail: "Escríbenos en cualquier momento",
                                },
                                {
                                    icon: HiOutlinePhone,
                                    label: "+51 999 999 999",
                                    detail: "Lunes a Viernes, 9am - 6pm",
                                },
                                {
                                    icon: HiOutlineOfficeBuilding,
                                    label: "Solger Ingeniería y Tecnología EIRL",
                                    detail: "Perú",
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-4">
                                    <div
                                        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${theme === "dark"
                                            ? "bg-brand-red/10 text-brand-red"
                                            : "bg-brand-red/5 text-brand-red"
                                            }`}
                                    >
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p
                                            className={`text-sm font-semibold ${theme === "dark" ? "text-white" : "text-dark-base"
                                                }`}
                                        >
                                            {item.label}
                                        </p>
                                        <p
                                            className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-500"
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
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {submitted ? (
                            <div
                                className={`p-10 rounded-2xl border text-center ${theme === "dark"
                                    ? "bg-dark-secondary border-white/10"
                                    : "bg-gray-50 border-gray-200"
                                    }`}
                            >
                                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-dark-base"}`}>
                                    ¡Mensaje enviado!
                                </h3>
                                <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                    Nuestro equipo te contactará pronto.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className={`p-8 lg:p-10 rounded-2xl border space-y-5 ${theme === "dark"
                                    ? "bg-dark-secondary border-white/10"
                                    : "bg-gray-50 border-gray-200"
                                    }`}
                            >
                                {/* Name */}
                                <div>
                                    <label
                                        className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                            }`}
                                    >
                                        <HiOutlineUser size={16} className="text-brand-red" />
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.nombre}
                                        onChange={(e) => handleChange("nombre", e.target.value)}
                                        placeholder="Tu nombre completo"
                                        className={inputClass("nombre")}
                                    />
                                    {errors.nombre && (
                                        <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>
                                    )}
                                </div>

                                {/* Company + Business type */}
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label
                                            className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                                }`}
                                        >
                                            <HiOutlineOfficeBuilding size={16} className="text-brand-red" />
                                            Empresa
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.empresa}
                                            onChange={(e) => handleChange("empresa", e.target.value)}
                                            placeholder="Nombre de tu empresa"
                                            className={inputClass("empresa")}
                                        />
                                        {errors.empresa && (
                                            <p className="text-xs text-red-500 mt-1">{errors.empresa}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                                }`}
                                        >
                                            Tipo de negocio
                                        </label>
                                        <select
                                            value={formData.tipoNegocio}
                                            onChange={(e) => handleChange("tipoNegocio", e.target.value)}
                                            className={inputClass("tipoNegocio")}
                                        >
                                            <option value="">Seleccionar...</option>
                                            {businessTypes.map((t) => (
                                                <option key={t} value={t}>
                                                    {t}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.tipoNegocio && (
                                            <p className="text-xs text-red-500 mt-1">{errors.tipoNegocio}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Phone + Email */}
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label
                                            className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                                }`}
                                        >
                                            <HiOutlinePhone size={16} className="text-brand-red" />
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.telefono}
                                            onChange={(e) => handleChange("telefono", e.target.value)}
                                            placeholder="+51 999 999 999"
                                            className={inputClass("telefono")}
                                        />
                                        {errors.telefono && (
                                            <p className="text-xs text-red-500 mt-1">{errors.telefono}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                                }`}
                                        >
                                            <HiOutlineMail size={16} className="text-brand-red" />
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.correo}
                                            onChange={(e) => handleChange("correo", e.target.value)}
                                            placeholder="correo@empresa.com"
                                            className={inputClass("correo")}
                                        />
                                        {errors.correo && (
                                            <p className="text-xs text-red-500 mt-1">{errors.correo}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                            }`}
                                    >
                                        <HiOutlineChatAlt2 size={16} className="text-brand-red" />
                                        Mensaje
                                    </label>
                                    <textarea
                                        value={formData.mensaje}
                                        onChange={(e) => handleChange("mensaje", e.target.value)}
                                        placeholder="Cuéntanos sobre tu proyecto y lo que necesitas..."
                                        rows={4}
                                        className={`${inputClass("mensaje")} resize-none`}
                                    />
                                    {errors.mensaje && (
                                        <p className="text-xs text-red-500 mt-1">{errors.mensaje}</p>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-red-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/25 text-sm"
                                >
                                    ENVIAR SOLICITUD
                                </button>

                                <p
                                    className={`text-xs text-center ${theme === "dark" ? "text-gray-500" : "text-gray-400"
                                        }`}
                                >
                                    Al enviar, aceptas que nos comuniquemos contigo sobre tu solicitud.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
