import type { Metadata } from "next";
import FumigacionClient from "./FumigacionClient";

export const metadata: Metadata = {
  title: "Fumigación | Solger Ingeniería y Tecnología EIRL",
  description:
    "Servicio profesional de fumigación, desinfección y control de plagas para empresas y locales comerciales en Lima, Perú.",
  keywords: [
    "fumigación",
    "control de plagas",
    "desinfección",
    "desratización",
    "fumigación empresas",
    "Lima",
  ],
};

export default function FumigacionPage() {
  return <FumigacionClient />;
}
