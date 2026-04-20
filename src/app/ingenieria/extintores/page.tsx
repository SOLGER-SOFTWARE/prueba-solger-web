import type { Metadata } from "next";
import ExtintoresClient from "./ExtintoresClient";

export const metadata: Metadata = {
  title: "Extintores | Solger Ingeniería y Tecnología EIRL",
  description:
    "Venta, recarga, mantenimiento y certificación de extintores para empresas en Lima, Perú. Cumplimiento normativo garantizado.",
  keywords: [
    "extintores",
    "recarga extintores",
    "mantenimiento extintores",
    "venta extintores",
    "certificación extintores",
    "Lima",
  ],
};

export default function ExtintoresPage() {
  return <ExtintoresClient />;
}
