"use client";

import ServicioPageTemplate from "@/components/sections/ingenieria/ServicioPageTemplate";
import { HiOutlineBell } from "react-icons/hi";

const servicio = {
  icon: HiOutlineBell,
  title: "Sistemas Contra Incendios",
  subtitle: "Detección, alarma y extinción de incendios",
  description:
    "Diseñamos, instalamos y mantenemos sistemas integrales contra incendios para empresas, locales comerciales e industriales. Incluimos sistemas de detección y alarma (detectores de humo, estaciones manuales y sirenas), así como sistemas de extinción (rociadores, gabinetes contra incendios y sistemas de agua). Nuestras instalaciones cumplen con la normativa NFPA y el Reglamento Nacional de Edificaciones.",
  beneficios: [
    "Detectores de humo y temperatura certificados",
    "Panel de alarma central con monitoreo",
    "Gabinetes contra incendios equipados",
    "Sistemas de rociadores diseñados según NFPA",
    "Mantenimiento preventivo programado",
    "Cumplimiento del Reglamento Nacional de Edificaciones",
  ],
  proceso: [
    {
      paso: "Diseño del sistema",
      detalle:
        "Evaluamos el local y diseñamos el sistema según área, uso y normativa aplicable.",
    },
    {
      paso: "Suministro de equipos",
      detalle:
        "Proveemos detectores, paneles, gabinetes y accesorios de marcas con certificación internacional.",
    },
    {
      paso: "Instalación",
      detalle:
        "Ejecutamos la instalación completa del sistema con cableado, programación y pruebas.",
    },
    {
      paso: "Capacitación",
      detalle:
        "Entrenamos a tu personal en el uso y operación del sistema ante emergencias.",
    },
    {
      paso: "Mantenimiento",
      detalle:
        "Ofrecemos planes de mantenimiento preventivo para asegurar la operatividad continua.",
    },
  ],
};

export default function SistemasContraIncendiosClient() {
  return <ServicioPageTemplate servicio={servicio} />;
}
