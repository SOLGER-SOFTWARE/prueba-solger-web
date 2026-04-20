import type { Metadata } from "next";
import PozoTierraClient from "./PozoTierraClient";

export const metadata: Metadata = {
  title: "Pozo a Tierra | Solger Ingeniería y Tecnología EIRL",
  description:
    "Instalación, mantenimiento y certificación de sistemas de pozo a tierra con protocolo de medición. Lima, Perú.",
  keywords: [
    "pozo a tierra",
    "puesta a tierra",
    "instalación pozo a tierra",
    "certificado pozo a tierra",
    "protocolo medición",
    "Lima",
  ],
};

export default function PozoTierraPage() {
  return <PozoTierraClient />;
}
