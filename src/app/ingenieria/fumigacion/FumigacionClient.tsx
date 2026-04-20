"use client";

import ServicioPageTemplate from "@/components/sections/ingenieria/ServicioPageTemplate";
import { HiOutlineBeaker } from "react-icons/hi";

const servicio = {
  icon: HiOutlineBeaker,
  title: "Fumigación",
  subtitle: "Desinfección, desinsectación y desratización profesional",
  description:
    "Realizamos servicios de fumigación profesional para empresas, locales comerciales, restaurantes, almacenes y oficinas. Utilizamos productos autorizados por DIGESA y técnicas efectivas para el control de plagas como cucarachas, roedores, moscas, hormigas y otros insectos. Emitimos certificado de fumigación válido para inspecciones sanitarias y de defensa civil.",
  beneficios: [
    "Productos autorizados por DIGESA",
    "Certificado de fumigación con validez oficial",
    "Control de cucarachas, roedores, moscas y hormigas",
    "Servicio programado (mensual, trimestral, semestral)",
    "Sin necesidad de evacuar el local por tiempo prolongado",
    "Cumplimiento de requisitos sanitarios para restaurantes y alimentos",
  ],
  proceso: [
    {
      paso: "Inspección",
      detalle:
        "Visitamos tu local para identificar el tipo de plaga y las áreas afectadas.",
    },
    {
      paso: "Plan de acción",
      detalle:
        "Definimos el tratamiento adecuado según el tipo de plaga, área y normativa aplicable.",
    },
    {
      paso: "Aplicación",
      detalle:
        "Ejecutamos la fumigación con equipos profesionales y productos de uso autorizado.",
    },
    {
      paso: "Certificación",
      detalle:
        "Emitimos el certificado de fumigación y programamos el siguiente servicio si es recurrente.",
    },
  ],
};

export default function FumigacionClient() {
  return <ServicioPageTemplate servicio={servicio} />;
}
