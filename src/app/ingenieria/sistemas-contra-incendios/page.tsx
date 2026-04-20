import type { Metadata } from "next";
import SistemasContraIncendiosClient from "./SistemasContraIncendiosClient";

export const metadata: Metadata = {
  title: "Sistemas Contra Incendios | Solger Ingeniería y Tecnología EIRL",
  description:
    "Diseño, instalación y mantenimiento de sistemas de detección y extinción de incendios para empresas en Lima, Perú.",
  keywords: [
    "sistemas contra incendios",
    "detección incendios",
    "alarma contra incendios",
    "rociadores",
    "extinción de incendios",
    "Lima",
  ],
};

export default function SistemasContraIncendiosPage() {
  return <SistemasContraIncendiosClient />;
}
