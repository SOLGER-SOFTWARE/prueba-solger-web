"use client";

/**
 * Footer.tsx
 *
 * Pie de página de la landing page.
 * Incluye marca Solger Software, información de la empresa,
 * enlaces rápidos, lista de servicios, íconos de redes sociales,
 * y copyright con año dinámico.
 */

import { useTheme } from "@/context/ThemeContext";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Contacto", href: "#contacto" },
];

const serviceLinks = [
    "Gestión de Servicios Generales",
    "Gestión Veterinaria",
    "Gestión para Clínicas",
    "Gestión Comercial y Ventas",
    "Gestión de Inventarios",
];

const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
];

export default function Footer() {
    const { theme } = useTheme();

    const handleClick = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer
            className={`pt-16 pb-8 border-t ${theme === "dark"
                ? "bg-dark-base border-white/5"
                : "bg-gray-50 border-gray-200"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                S
                            </div>
                            <span
                                className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-dark-base"
                                    }`}
                            >
                                SOLGER{" "}
                                <span className="text-brand-red">SOFTWARE</span>
                            </span>
                        </div>
                        <p
                            className={`text-sm leading-relaxed mb-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            Subempresa de
                        </p>
                        <p
                            className={`text-sm font-semibold mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Solger Ingeniería y Tecnología EIRL
                        </p>
                        <p
                            className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-500" : "text-gray-500"
                                }`}
                        >
                            Sistemas de gestión empresarial personalizados con
                            tecnología moderna.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3
                            className={`font-bold text-sm mb-4 ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                        >
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleClick(link.href);
                                        }}
                                        className={`text-sm transition-colors hover:text-brand-red ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3
                            className={`font-bold text-sm mb-4 ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                        >
                            Servicios
                        </h3>
                        <ul className="space-y-3">
                            {serviceLinks.map((service) => (
                                <li key={service}>
                                    <span
                                        className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                            }`}
                                    >
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3
                            className={`font-bold text-sm mb-4 ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                        >
                            Síguenos
                        </h3>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${theme === "dark"
                                        ? "bg-dark-secondary text-gray-400 hover:bg-brand-red hover:text-white"
                                        : "bg-gray-200 text-gray-600 hover:bg-brand-red hover:text-white"
                                        }`}
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${theme === "dark" ? "border-white/5" : "border-gray-200"
                        }`}
                >
                    <p
                        className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"
                            }`}
                    >
                        © {new Date().getFullYear()} Solger Software. Todos los derechos
                        reservados.
                    </p>
                    <p
                        className={`text-xs ${theme === "dark" ? "text-gray-600" : "text-gray-400"
                            }`}
                    >
                        Desarrollado con ❤️ por Solger Ingeniería y Tecnología EIRL
                    </p>
                </div>
            </div>
        </footer>
    );
}
