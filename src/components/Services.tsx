"use client";

/**
 * SystemShowcase.tsx
 * 
 * Componente que renderiza las secciones mini-hero para cada sistema de gestión.
 * Cada sistema tiene su propia sección amplia con diseño en dos columnas,
 * alternando la posición del contenido y el mockup para dinamismo visual.
 * Los mockups son personalizados y reflejan el tipo de sistema específico.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
    HiOutlineCog,
    HiOutlineHeart,
    HiOutlineOfficeBuilding,
    HiOutlineShoppingCart,
    HiOutlineCube,
    HiArrowRight,
} from "react-icons/hi";

/* ─────────────────────────────────────────────
   Datos de cada sistema de gestión
   ───────────────────────────────────────────── */
const systems = [
    {
        id: "servicios-generales",
        icon: HiOutlineCog,
        title: "Sistema de Gestión para Empresas de Servicios Generales",
        subtitle: "Controla cada operación de tu empresa de servicios",
        description:
            "Gestiona servicios programados, asigna técnicos, controla avances en tiempo real y automatiza la facturación. Todo en una plataforma diseñada para empresas de limpieza, mantenimiento, instalaciones y más.",
        features: [
            "Programación de servicios y asignación de personal",
            "Seguimiento de trabajos en tiempo real",
            "Gestión de clientes y contratos",
            "Facturación automática por servicio",
        ],
        mockup: "servicios",
    },
    {
        id: "comercial-ventas",
        icon: HiOutlineShoppingCart,
        title: "Sistema de Gestión Comercial y Ventas",
        subtitle: "Maximiza tus ventas con inteligencia de negocio",
        description:
            "Punto de venta inteligente, control de clientes, análisis de rentabilidad y reportes de ventas en tiempo real. Diseñado para negocios que buscan crecer con datos.",
        features: [
            "Punto de venta rápido e intuitivo",
            "Reportes de ventas y gráficos de ingresos",
            "Control de créditos y cuentas por cobrar",
            "Análisis de productos más vendidos",
        ],
        mockup: "ventas",
    },
    {
        id: "inventarios-almacen",
        icon: HiOutlineCube,
        title: "Sistema de Gestión de Inventarios y Almacén",
        subtitle: "Control total de tu stock en tiempo real",
        description:
            "Stock actualizado al instante, alertas de reabastecimiento, trazabilidad completa y kardex automatizado. Nunca más pierdas una venta por falta de inventario.",
        features: [
            "Stock en tiempo real con alertas automáticas",
            "Kardex automatizado y trazabilidad completa",
            "Movimientos de entrada y salida registrados",
            "Reportes de rotación e inventario valorizado",
        ],
        mockup: "inventario",
    },
    {
        id: "clinicas",
        icon: HiOutlineOfficeBuilding,
        title: "Sistema de Gestión para Clínicas",
        subtitle: "Digitaliza tu clínica con eficiencia médica",
        description:
            "Agenda de citas, expedientes electrónicos, historial clínico, facturación integrada y reportes médicos. Adaptado a cualquier especialidad médica.",
        features: [
            "Agenda médica inteligente con recordatorios",
            "Expedientes clínicos electrónicos seguros",
            "Facturación y control de insumos médicos",
            "Reportes estadísticos por especialidad",
        ],
        mockup: "clinica",
    },
    {
        id: "veterinaria",
        icon: HiOutlineHeart,
        title: "Sistema de Gestión Veterinaria",
        subtitle: "Cuida a tus pacientes con tecnología",
        description:
            "Administra historiales clínicos de mascotas, control de vacunas, agenda de citas, inventario de medicamentos y facturación veterinaria integrada.",
        features: [
            "Registro completo de mascotas y propietarios",
            "Control de vacunación y tratamientos",
            "Agenda de citas con notificaciones",
            "Inventario de medicamentos y facturación",
        ],
        mockup: "veterinaria",
    },
];

/* ─────────────────────────────────────────────
   Componente principal de showcase de sistemas
   ───────────────────────────────────────────── */
export default function SystemShowcase() {
    const { theme } = useTheme();

    return (
        <div id="servicios">
            {/* Encabezado de la sección */}
            <SectionHeader theme={theme} />

            {/* Secciones mini-hero para cada sistema */}
            {systems.map((system, index) => (
                <SystemSection
                    key={system.id}
                    system={system}
                    index={index}
                    theme={theme}
                />
            ))}
        </div>
    );
}

/* ─────────────────────────────────────────────
   Encabezado de la sección de servicios
   ───────────────────────────────────────────── */
function SectionHeader({ theme }: { theme: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className={`py-24 lg:py-32 ${theme === "dark" ? "bg-dark-secondary" : "bg-gray-light"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
                        Nuestras Soluciones
                    </span>
                    <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight ${theme === "dark" ? "text-white" : "text-dark-base"
                            }`}
                    >
                        Sistemas diseñados para{" "}
                        <span className="text-brand-red">cada industria</span>
                    </h2>
                    <p
                        className={`mt-5 text-lg leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        Cada solución está desarrollada desde cero para las necesidades
                        específicas de tu sector. Sin plantillas genéricas — solo resultados reales.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Sección mini-hero individual para cada sistema
   ───────────────────────────────────────────── */
function SystemSection({
    system,
    index,
    theme,
}: {
    system: (typeof systems)[number];
    index: number;
    theme: string;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    // Alternar la dirección: par = contenido izquierda, impar = contenido derecha
    const reversed = index % 2 !== 0;

    // Alternar fondos para separar visualmente
    const bgClass =
        index % 2 === 0
            ? theme === "dark"
                ? "bg-dark-base"
                : "bg-white"
            : theme === "dark"
                ? "bg-dark-secondary"
                : "bg-gray-light";

    return (
        <section ref={ref} className={`relative py-24 lg:py-32 overflow-hidden ${bgClass}`}>
            {/* Efecto de gradiente sutil de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                {theme === "dark" && (
                    <div
                        className={`absolute w-[500px] h-[500px] rounded-full blur-[180px] bg-brand-red/5 ${reversed
                                ? "top-1/4 -left-32"
                                : "top-1/4 -right-32"
                            }`}
                    />
                )}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reversed ? "lg:flex-row-reverse" : ""
                        }`}
                    style={{ direction: reversed ? "rtl" : "ltr" }}
                >
                    {/* Columna de contenido textual */}
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        style={{ direction: "ltr" }}
                    >
                        {/* Insignia del icono */}
                        <div
                            className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-semibold tracking-wide mb-6 ${theme === "dark"
                                    ? "bg-brand-red/10 text-brand-red-light border border-brand-red/20"
                                    : "bg-brand-red/5 text-brand-red border border-brand-red/15"
                                }`}
                        >
                            <system.icon size={16} />
                            {system.subtitle}
                        </div>

                        <h3
                            className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-5 ${theme === "dark" ? "text-white" : "text-dark-base"
                                }`}
                        >
                            {system.title}
                        </h3>

                        <p
                            className={`text-base lg:text-lg leading-relaxed mb-8 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            {system.description}
                        </p>

                        {/* Lista de características */}
                        <ul className="space-y-3 mb-8">
                            {system.features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className={`flex items-start gap-3 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                        }`}
                                >
                                    <svg
                                        className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Botón de acción */}
                        <a
                            href="#contacto"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .querySelector("#contacto")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/25 group text-sm"
                        >
                            Solicitar información
                            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Columna del mockup personalizado */}
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{ direction: "ltr" }}
                    >
                        <MockupBrowser theme={theme} type={system.mockup} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Componente de mockup tipo navegador
   Personaliza el contenido visual según el sistema
   ───────────────────────────────────────────── */
function MockupBrowser({ theme, type }: { theme: string; type: string }) {
    return (
        <div
            className={`relative rounded-2xl overflow-hidden border ${theme === "dark"
                    ? "bg-dark-secondary border-white/10"
                    : "bg-white border-gray-200 shadow-2xl"
                }`}
        >
            {/* Barra superior del navegador */}
            <div
                className={`flex items-center gap-2 px-4 py-3 border-b ${theme === "dark" ? "border-white/5 bg-dark-card" : "border-gray-100 bg-gray-50"
                    }`}
            >
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div
                    className={`flex-1 mx-3 h-6 rounded-md flex items-center px-3 text-[10px] ${theme === "dark"
                            ? "bg-dark-tertiary text-gray-500"
                            : "bg-gray-100 text-gray-400"
                        }`}
                >
                    app.solger.pe/{type}
                </div>
            </div>

            {/* Contenido del dashboard según el tipo */}
            <div className="p-5">
                {type === "servicios" && <MockupServicios theme={theme} />}
                {type === "ventas" && <MockupVentas theme={theme} />}
                {type === "inventario" && <MockupInventario theme={theme} />}
                {type === "clinica" && <MockupClinica theme={theme} />}
                {type === "veterinaria" && <MockupVeterinaria theme={theme} />}
            </div>

            {/* Efecto glow rojo sutil en modo oscuro */}
            {theme === "dark" && (
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-brand-red/15 via-transparent to-brand-red/10 -z-10 blur-sm" />
            )}
        </div>
    );
}

/* ─────────────────────────────────────────────
   Tarjeta estadística reutilizable dentro de mockups
   ───────────────────────────────────────────── */
function StatCard({
    theme,
    label,
    value,
    change,
    positive = true,
}: {
    theme: string;
    label: string;
    value: string;
    change: string;
    positive?: boolean;
}) {
    return (
        <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"}`}>
            <p className={`text-[10px] mb-1 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                {label}
            </p>
            <p className={`text-base font-bold ${theme === "dark" ? "text-white" : "text-dark-base"}`}>
                {value}
            </p>
            <span className={`text-[10px] font-medium ${positive ? "text-green-500" : "text-amber-500"}`}>
                {change}
            </span>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Fila de tabla reutilizable dentro de mockups
   ───────────────────────────────────────────── */
function TableRow({
    theme,
    cells,
    status,
}: {
    theme: string;
    cells: string[];
    status?: { text: string; color: string };
}) {
    return (
        <div
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[11px] ${theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"
                }`}
        >
            {cells.map((cell, i) => (
                <span
                    key={i}
                    className={`flex-1 truncate ${i === 0
                            ? theme === "dark" ? "text-white font-medium" : "text-dark-base font-medium"
                            : theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                >
                    {cell}
                </span>
            ))}
            {status && (
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold ${status.color}`}>
                    {status.text}
                </span>
            )}
        </div>
    );
}

/* ─────────────────────────────────────────────
   Mockup: Servicios Generales
   Dashboard de servicios programados y técnicos
   ───────────────────────────────────────────── */
function MockupServicios({ theme }: { theme: string }) {
    return (
        <div className="space-y-3">
            {/* Estadísticas principales */}
            <div className="grid grid-cols-4 gap-2">
                <StatCard theme={theme} label="Servicios Hoy" value="24" change="+6 vs ayer" />
                <StatCard theme={theme} label="En Progreso" value="8" change="3 por asignar" positive={false} />
                <StatCard theme={theme} label="Técnicos Activos" value="12" change="100% operativo" />
                <StatCard theme={theme} label="Clientes Activos" value="186" change="+14 este mes" />
            </div>

            {/* Tabla de servicios programados */}
            <div>
                <p className={`text-[11px] font-semibold mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Servicios Programados
                </p>
                <div className="space-y-1.5">
                    <TableRow
                        theme={theme}
                        cells={["Limpieza General", "Edificio Central", "J. Rodríguez"]}
                        status={{ text: "En curso", color: "bg-blue-500/20 text-blue-400" }}
                    />
                    <TableRow
                        theme={theme}
                        cells={["Mant. Eléctrico", "Oficina Norte", "M. Torres"]}
                        status={{ text: "Pendiente", color: "bg-amber-500/20 text-amber-400" }}
                    />
                    <TableRow
                        theme={theme}
                        cells={["Fumigación", "Planta Sur", "C. Vargas"]}
                        status={{ text: "Completado", color: "bg-green-500/20 text-green-400" }}
                    />
                    <TableRow
                        theme={theme}
                        cells={["Inst. Cámaras", "Almacén B", "R. Díaz"]}
                        status={{ text: "En curso", color: "bg-blue-500/20 text-blue-400" }}
                    />
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Mockup: Gestión Comercial y Ventas
   Dashboard de ventas, gráficos e ingresos
   ───────────────────────────────────────────── */
function MockupVentas({ theme }: { theme: string }) {
    return (
        <div className="space-y-3">
            {/* Estadísticas de ventas */}
            <div className="grid grid-cols-4 gap-2">
                <StatCard theme={theme} label="Ventas Hoy" value="S/ 8,420" change="+18% vs ayer" />
                <StatCard theme={theme} label="Productos Vendidos" value="142" change="+23 unidades" />
                <StatCard theme={theme} label="Ticket Promedio" value="S/ 59" change="+5% mensual" />
                <StatCard theme={theme} label="Clientes Hoy" value="68" change="+12 nuevos" />
            </div>

            {/* Gráfico de barras de ingresos */}
            <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"}`}>
                <div className="flex justify-between items-center mb-2">
                    <p className={`text-[11px] font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                        Ingresos Semanales
                    </p>
                    <span className="text-[10px] text-green-500 font-medium">+24% vs sem. anterior</span>
                </div>
                <div className="flex items-end gap-1.5 h-20">
                    {[45, 62, 38, 75, 52, 88, 70].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div
                                className="w-full rounded-t bg-brand-red/70 hover:bg-brand-red transition-colors"
                                style={{ height: `${h}%` }}
                            />
                            <span className={`text-[8px] ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}>
                                {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"][i]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Últimas ventas */}
            <div>
                <p className={`text-[11px] font-semibold mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Últimas Ventas
                </p>
                <div className="space-y-1.5">
                    <TableRow theme={theme} cells={["Laptop HP 15", "2 unid.", "S/ 4,200"]} status={{ text: "Pagado", color: "bg-green-500/20 text-green-400" }} />
                    <TableRow theme={theme} cells={["Mouse Inalámbrico", "5 unid.", "S/ 250"]} status={{ text: "Pagado", color: "bg-green-500/20 text-green-400" }} />
                    <TableRow theme={theme} cells={["Monitor 24\"", "1 unid.", "S/ 890"]} status={{ text: "Crédito", color: "bg-amber-500/20 text-amber-400" }} />
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Mockup: Inventarios y Almacén
   Dashboard de stock, alertas y movimientos
   ───────────────────────────────────────────── */
function MockupInventario({ theme }: { theme: string }) {
    return (
        <div className="space-y-3">
            {/* Estadísticas de inventario */}
            <div className="grid grid-cols-4 gap-2">
                <StatCard theme={theme} label="Productos" value="1,284" change="Catalogados" />
                <StatCard theme={theme} label="Stock Bajo" value="18" change="Requieren atención" positive={false} />
                <StatCard theme={theme} label="Movimientos Hoy" value="47" change="Entradas y salidas" />
                <StatCard theme={theme} label="Valor Total" value="S/ 245K" change="+3% mes" />
            </div>

            {/* Alertas de stock */}
            <div className={`p-3 rounded-xl border ${theme === "dark" ? "bg-dark-tertiary border-amber-500/20" : "bg-amber-50 border-amber-200"}`}>
                <p className={`text-[11px] font-semibold mb-2 flex items-center gap-1.5 ${theme === "dark" ? "text-amber-400" : "text-amber-700"}`}>
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                    Alertas de Stock Mínimo
                </p>
                <div className="space-y-1.5">
                    {[
                        { producto: "Papel Bond A4", stock: "12 unid.", minimo: "50 unid." },
                        { producto: "Tóner HP 85A", stock: "3 unid.", minimo: "10 unid." },
                        { producto: "Cinta de embalaje", stock: "8 rollos", minimo: "20 rollos" },
                    ].map((item, i) => (
                        <div key={i} className={`flex items-center justify-between text-[10px] px-2 py-1.5 rounded ${theme === "dark" ? "bg-dark-base" : "bg-white"}`}>
                            <span className={theme === "dark" ? "text-white" : "text-dark-base"}>{item.producto}</span>
                            <span className="text-red-500 font-medium">{item.stock}</span>
                            <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>Mín: {item.minimo}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tabla de productos */}
            <div>
                <p className={`text-[11px] font-semibold mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Movimientos Recientes
                </p>
                <div className="space-y-1.5">
                    <TableRow theme={theme} cells={["Cemento Portland", "Entrada", "+200 kg"]} status={{ text: "Registrado", color: "bg-green-500/20 text-green-400" }} />
                    <TableRow theme={theme} cells={["Pintura Latex", "Salida", "-50 gal"]} status={{ text: "Despachado", color: "bg-blue-500/20 text-blue-400" }} />
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Mockup: Gestión para Clínicas
   Dashboard de citas, pacientes e indicadores
   ───────────────────────────────────────────── */
function MockupClinica({ theme }: { theme: string }) {
    return (
        <div className="space-y-3">
            {/* Estadísticas clínicas */}
            <div className="grid grid-cols-4 gap-2">
                <StatCard theme={theme} label="Citas Hoy" value="32" change="8 pendientes" positive={false} />
                <StatCard theme={theme} label="Pacientes" value="2,841" change="+56 este mes" />
                <StatCard theme={theme} label="Consultas" value="28" change="Realizadas hoy" />
                <StatCard theme={theme} label="Ingresos" value="S/ 6,200" change="+15% semanal" />
            </div>

            {/* Agenda de citas */}
            <div>
                <p className={`text-[11px] font-semibold mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Agenda de Hoy
                </p>
                <div className="space-y-1.5">
                    <TableRow theme={theme} cells={["09:00", "María García", "Cardiología"]} status={{ text: "Atendido", color: "bg-green-500/20 text-green-400" }} />
                    <TableRow theme={theme} cells={["09:30", "Juan López", "Medicina General"]} status={{ text: "Atendido", color: "bg-green-500/20 text-green-400" }} />
                    <TableRow theme={theme} cells={["10:00", "Ana Torres", "Dermatología"]} status={{ text: "En espera", color: "bg-blue-500/20 text-blue-400" }} />
                    <TableRow theme={theme} cells={["10:30", "Carlos Ruiz", "Odontología"]} status={{ text: "Pendiente", color: "bg-amber-500/20 text-amber-400" }} />
                </div>
            </div>

            {/* Historial rápido */}
            <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"}`}>
                <p className={`text-[11px] font-semibold mb-1.5 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Historial Rápido — María García
                </p>
                <div className={`text-[10px] space-y-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    <p>• 15 Ene 2026 — Control rutinario — Dr. Mendoza</p>
                    <p>• 02 Dic 2025 — Electrocardiograma — Dr. Sánchez</p>
                    <p>• 18 Oct 2025 — Consulta inicial — Dr. Mendoza</p>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Mockup: Gestión Veterinaria
   Dashboard de mascotas, vacunas y citas
   ───────────────────────────────────────────── */
function MockupVeterinaria({ theme }: { theme: string }) {
    return (
        <div className="space-y-3">
            {/* Estadísticas veterinarias */}
            <div className="grid grid-cols-4 gap-2">
                <StatCard theme={theme} label="Mascotas" value="948" change="+28 este mes" />
                <StatCard theme={theme} label="Citas Hoy" value="18" change="5 pendientes" positive={false} />
                <StatCard theme={theme} label="Vacunas Mes" value="67" change="Aplicadas" />
                <StatCard theme={theme} label="Ingresos" value="S/ 3,400" change="+8% semanal" />
            </div>

            {/* Citas programadas */}
            <div>
                <p className={`text-[11px] font-semibold mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Citas Programadas
                </p>
                <div className="space-y-1.5">
                    <TableRow theme={theme} cells={["09:00", "Max (Golden)", "Vacunación"]} status={{ text: "Atendido", color: "bg-green-500/20 text-green-400" }} />
                    <TableRow theme={theme} cells={["10:00", "Luna (Persa)", "Control"]} status={{ text: "En curso", color: "bg-blue-500/20 text-blue-400" }} />
                    <TableRow theme={theme} cells={["11:00", "Rocky (Bulldog)", "Desparasitación"]} status={{ text: "Pendiente", color: "bg-amber-500/20 text-amber-400" }} />
                </div>
            </div>

            {/* Control de vacunas */}
            <div className={`p-3 rounded-xl ${theme === "dark" ? "bg-dark-tertiary" : "bg-gray-50"}`}>
                <p className={`text-[11px] font-semibold mb-1.5 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Control de Vacunas — Max
                </p>
                <div className="space-y-1">
                    {[
                        { vacuna: "Parvovirus", fecha: "15 Ene 2026", estado: "Aplicada" },
                        { vacuna: "Rabia", fecha: "20 Feb 2026", estado: "Programada" },
                        { vacuna: "Moquillo", fecha: "15 Mar 2026", estado: "Pendiente" },
                    ].map((v, i) => (
                        <div key={i} className={`flex items-center justify-between text-[10px] px-2 py-1.5 rounded ${theme === "dark" ? "bg-dark-base" : "bg-white"}`}>
                            <span className={theme === "dark" ? "text-white" : "text-dark-base"}>{v.vacuna}</span>
                            <span className={theme === "dark" ? "text-gray-500" : "text-gray-400"}>{v.fecha}</span>
                            <span className={`font-medium ${v.estado === "Aplicada" ? "text-green-500" : v.estado === "Programada" ? "text-blue-400" : "text-amber-400"}`}>
                                {v.estado}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
