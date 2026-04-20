"use client";

import ServicioPageTemplate from "@/components/sections/ingenieria/ServicioPageTemplate";
import { HiOutlineLightningBolt } from "react-icons/hi";

const servicio = {
  icon: HiOutlineLightningBolt,
  title: "Pozo a Tierra",
  subtitle: "Instalación, mantenimiento y certificación con protocolo",
  description:
    "El sistema de pozo a tierra es fundamental para proteger personas, equipos eléctricos y electrónicos contra descargas eléctricas y sobretensiones. Realizamos la instalación completa del sistema, mantenimiento periódico con tratamiento químico del terreno, y emitimos el protocolo de medición de resistencia con certificación válida para inspecciones de defensa civil y OSINERGMIN.",
  beneficios: [
    "Protección de personas y equipos contra descargas eléctricas",
    "Protocolo de medición de resistencia con valores certificados",
    "Mantenimiento con tratamiento químico (Thor-Gel o similar)",
    "Cumplimiento de normativa del Código Nacional de Electricidad",
    "Válido para inspecciones ITSE y OSINERGMIN",
    "Instalación de varilla de cobre, conexión y caja de registro",
  ],
  proceso: [
    {
      paso: "Evaluación del terreno",
      detalle:
        "Medimos la resistividad del suelo para determinar el diseño adecuado del sistema.",
    },
    {
      paso: "Instalación",
      detalle:
        "Excavación, instalación de varilla de cobre, tratamiento químico y conexión al sistema eléctrico.",
    },
    {
      paso: "Medición",
      detalle:
        "Realizamos la medición de resistencia con equipo telurométro calibrado para verificar valores.",
    },
    {
      paso: "Certificación",
      detalle:
        "Emitimos el protocolo de medición firmado por ingeniero electricista colegiado y habilitado.",
    },
  ],
};

export default function PozoTierraClient() {
  return <ServicioPageTemplate servicio={servicio} />;
}
