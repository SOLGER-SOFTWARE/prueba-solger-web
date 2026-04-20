"use client";

import ServicioPageTemplate from "@/components/sections/ingenieria/ServicioPageTemplate";
import { HiOutlineShieldCheck } from "react-icons/hi";

const servicio = {
  icon: HiOutlineShieldCheck,
  title: "Defensa Civil",
  subtitle: "Inspecciones, certificaciones y planes de seguridad",
  description:
    "Brindamos el servicio completo de defensa civil para tu empresa o local comercial. Realizamos inspecciones técnicas de seguridad en edificaciones (ITSE), elaboramos planes de seguridad y contingencia, y te acompañamos en todo el proceso hasta obtener tu certificado de defensa civil. Nuestro equipo conoce la normativa vigente y los requisitos de cada municipalidad.",
  beneficios: [
    "Obtención del certificado de defensa civil vigente",
    "Inspecciones técnicas ITSE básica, de detalle y multidisciplinaria",
    "Elaboración de planes de seguridad y evacuación",
    "Señalización normativa según INDECI",
    "Acompañamiento durante la inspección municipal",
    "Capacitación en uso de extintores y primeros auxilios",
  ],
  proceso: [
    {
      paso: "Evaluación inicial",
      detalle:
        "Visitamos tu local para evaluar condiciones actuales e identificar requisitos pendientes.",
    },
    {
      paso: "Implementación",
      detalle:
        "Instalamos señalización, extintores y luces de emergencia según normativa vigente.",
    },
    {
      paso: "Documentación",
      detalle:
        "Elaboramos el plan de seguridad, planos de evacuación y toda la documentación requerida.",
    },
    {
      paso: "Inspección",
      detalle:
        "Te acompañamos durante la inspección ITSE para asegurar la aprobación.",
    },
    {
      paso: "Certificación",
      detalle:
        "Obtienes tu certificado de defensa civil listo para operar con tranquilidad.",
    },
  ],
};

export default function DefensaCivilClient() {
  return <ServicioPageTemplate servicio={servicio} />;
}
