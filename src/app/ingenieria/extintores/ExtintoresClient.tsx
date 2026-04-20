"use client";

import ServicioPageTemplate from "@/components/sections/ingenieria/ServicioPageTemplate";
import { HiOutlineFire } from "react-icons/hi";

const servicio = {
  icon: HiOutlineFire,
  title: "Extintores",
  subtitle: "Venta, recarga, mantenimiento y certificación",
  description:
    "Ofrecemos el servicio completo de extintores para tu empresa: venta de extintores nuevos de diferentes tipos y capacidades, recarga y mantenimiento periódico, prueba hidrostática y certificación. Trabajamos con equipos de calidad y cumplimos con todas las normas técnicas peruanas vigentes. Mantenemos un registro de cada extintor para que siempre estés al día con tus obligaciones.",
  beneficios: [
    "Extintores PQS, CO2 y agua pulverizada de alta calidad",
    "Servicio de recarga con insumos certificados",
    "Mantenimiento preventivo y correctivo programado",
    "Prueba hidrostática según normativa NTP",
    "Certificado de operatividad por cada extintor",
    "Entrega e instalación en tu local",
  ],
  proceso: [
    {
      paso: "Diagnóstico",
      detalle:
        "Evaluamos la cantidad y tipo de extintores que necesita tu local según su uso y área.",
    },
    {
      paso: "Cotización",
      detalle:
        "Te enviamos una propuesta detallada con precios, plazos y especificaciones técnicas.",
    },
    {
      paso: "Ejecución",
      detalle:
        "Realizamos la venta, recarga o mantenimiento según lo acordado, con registro de cada equipo.",
    },
    {
      paso: "Certificación",
      detalle:
        "Emitimos certificados de operatividad y etiquetas de control en cada extintor.",
    },
  ],
};

export default function ExtintoresClient() {
  return <ServicioPageTemplate servicio={servicio} />;
}
