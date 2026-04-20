import type { Metadata } from "next";
import DefensaCivilClient from "./DefensaCivilClient";

export const metadata: Metadata = {
  title: "Defensa Civil | Solger Ingeniería y Tecnología EIRL",
  description:
    "Inspecciones ITSE, certificaciones de defensa civil y planes de seguridad para empresas y locales comerciales en Lima, Perú.",
  keywords: [
    "defensa civil",
    "ITSE",
    "inspección técnica",
    "certificado defensa civil",
    "plan de seguridad",
    "Lima",
  ],
};

export default function DefensaCivilPage() {
  return <DefensaCivilClient />;
}
