import type { Metadata } from "next";
import SoftwareClient from "./SoftwareClient";

export const metadata: Metadata = {
  title: "Software y Tecnología | Solger Ingeniería y Tecnología EIRL",
  description:
    "Desarrollo web, sistemas empresariales y automatización de procesos. Soluciones digitales para empresas en Lima, Perú.",
  keywords: [
    "desarrollo web",
    "software empresarial",
    "sistemas de gestión",
    "automatización",
    "software a medida",
    "Lima",
    "Perú",
  ],
};

export default function SoftwarePage() {
  return <SoftwareClient />;
}
