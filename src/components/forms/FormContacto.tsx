"use client";

/**
 * FormContacto.tsx
 *
 * Formulario de contacto configurable por sección.
 * Acepta props de contexto: accentColor, titulo, subtitulo, origen.
 * Envía POST a /api/contacto con campo "origen" para diferenciar sección.
 */

import { useState, FormEvent } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineChatAlt2,
  HiOutlineMail,
} from "react-icons/hi";

interface FormContactoProps {
  /** Color de acento: "blue" | "orange" | "red" */
  accentColor?: "blue" | "orange" | "red";
  /** Título del formulario */
  titulo?: string;
  /** Subtítulo o descripción */
  subtitulo?: string;
  /** Origen para diferenciar en backend */
  origen?: string;
  /** Placeholder del mensaje */
  placeholderMensaje?: string;
  /** Campo de email opcional */
  mostrarEmail?: boolean;
}

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  mensaje: string;
}

interface FormErrors {
  [key: string]: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const accentMap = {
  blue: {
    ring: "focus:ring-brand-blue/30 focus:border-brand-blue",
    button: "bg-brand-blue hover:bg-brand-blue-dark",
    icon: "text-brand-blue",
    check: "text-brand-blue",
  },
  orange: {
    ring: "focus:ring-brand-orange/30 focus:border-brand-orange",
    button: "bg-brand-orange hover:bg-brand-orange-dark",
    icon: "text-brand-orange",
    check: "text-brand-orange",
  },
  red: {
    ring: "focus:ring-brand-red/30 focus:border-brand-red",
    button: "bg-brand-red hover:bg-brand-red-dark",
    icon: "text-brand-red",
    check: "text-brand-red",
  },
};

export default function FormContacto({
  accentColor = "blue",
  titulo,
  subtitulo,
  origen = "general",
  placeholderMensaje = "¿En qué podemos ayudarte?",
  mostrarEmail = false,
}: FormContactoProps) {
  const { theme } = useTheme();
  const accent = accentMap[accentColor];
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.telefono)) {
      newErrors.telefono = "Ingresa un teléfono válido";
    }
    if (mostrarEmail && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido";
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es requerido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, origen }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar el mensaje");
      }
      setStatus("success");
      setFormData({ nombre: "", telefono: "", email: "", mensaje: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Error al enviar el mensaje");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
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
    `w-full px-4 py-3 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2 ${accent.ring} ${
      theme === "dark"
        ? `bg-dark-tertiary border-white/10 text-white placeholder-gray-500 ${
            errors[field] ? "border-red-500" : "hover:border-white/20"
          }`
        : `bg-white border-gray-300 text-gray-800 placeholder-gray-400 ${
            errors[field] ? "border-red-500" : "hover:border-gray-400"
          }`
    }`;

  if (status === "success") {
    return (
      <div className={`p-8 rounded-xl border text-center ${theme === "dark" ? "bg-dark-secondary border-white/10" : "bg-white border-gray-200 shadow-sm"}`}>
        <div className={`w-14 h-14 bg-green-500/15 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          ¡Mensaje enviado!
        </h3>
        <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
          Nos comunicaremos contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`p-6 lg:p-8 rounded-xl border space-y-5 ${theme === "dark" ? "bg-dark-secondary border-white/10" : "bg-white border-gray-200 shadow-sm"}`}>
      {/* Header opcional */}
      {titulo && (
        <div className="mb-2">
          <h3 className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>{titulo}</h3>
          {subtitulo && <p className={`text-sm mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{subtitulo}</p>}
        </div>
      )}

      {/* Nombre */}
      <div>
        <label className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          <HiOutlineUser size={15} className={accent.icon} />
          Nombre
        </label>
        <input type="text" value={formData.nombre} onChange={(e) => handleChange("nombre", e.target.value)} placeholder="Tu nombre" className={inputClass("nombre")} />
        {errors.nombre && <p className="text-xs text-red-500 mt-1">{errors.nombre}</p>}
      </div>

      {/* Teléfono */}
      <div>
        <label className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          <HiOutlinePhone size={15} className={accent.icon} />
          Teléfono
        </label>
        <input type="tel" value={formData.telefono} onChange={(e) => handleChange("telefono", e.target.value)} placeholder="999 999 999" className={inputClass("telefono")} />
        {errors.telefono && <p className="text-xs text-red-500 mt-1">{errors.telefono}</p>}
      </div>

      {/* Email (opcional) */}
      {mostrarEmail && (
        <div>
          <label className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <HiOutlineMail size={15} className={accent.icon} />
            Correo electrónico <span className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>(opcional)</span>
          </label>
          <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="correo@empresa.com" className={inputClass("email")} />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      )}

      {/* Mensaje */}
      <div>
        <label className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          <HiOutlineChatAlt2 size={15} className={accent.icon} />
          Mensaje
        </label>
        <textarea value={formData.mensaje} onChange={(e) => handleChange("mensaje", e.target.value)} placeholder={placeholderMensaje} rows={4} className={`${inputClass("mensaje")} resize-none`} />
        {errors.mensaje && <p className="text-xs text-red-500 mt-1">{errors.mensaje}</p>}
      </div>

      {status === "error" && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 text-sm">{errorMessage}</div>
      )}

      <button type="submit" disabled={status === "loading"} className={`w-full py-3.5 text-white font-semibold rounded-lg transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed ${accent.button}`}>
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p className={`text-xs text-center ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
        Al enviar, aceptas que nos comuniquemos contigo sobre tu solicitud.
      </p>
    </form>
  );
}
