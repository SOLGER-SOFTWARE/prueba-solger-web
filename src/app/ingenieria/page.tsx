import type { Metadata } from "next";
import IngenieriaClient from "./IngenieriaClient";

export const metadata: Metadata = {
  title: "Ingeniería y Seguridad | Solger Ingeniería y Tecnología EIRL",
  description:
    "Servicios profesionales de ingeniería y seguridad: defensa civil, extintores, fumigación, pozo a tierra y sistemas contra incendios. Lima, Perú.",
  keywords: [
    "ingeniería",
    "seguridad",
    "defensa civil",
    "extintores",
    "fumigación",
    "pozo a tierra",
    "sistemas contra incendios",
    "Lima",
    "Perú",
  ],
};

export default function IngenieriaPage() {
  return <IngenieriaClient />;
}
