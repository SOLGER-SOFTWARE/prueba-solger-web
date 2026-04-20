"use client";

/**
 * SoftwareClient.tsx
 *
 * Componente cliente de la página de software.
 * Compone todas las secciones: Hero, Servicios, Beneficios, Proceso, CTA, Contacto.
 * El formulario de contacto va al final como requiere el spec.
 */

import HeroSoftware from "@/components/sections/software/HeroSoftware";
import ServiciosSoftware from "@/components/sections/software/ServiciosSoftware";
import BeneficiosSoftware from "@/components/sections/software/BeneficiosSoftware";
import ProcesoSoftware from "@/components/sections/software/ProcesoSoftware";
import CTASoftware from "@/components/sections/software/CTASoftware";
import ContactoSoftware from "@/components/sections/software/ContactoSoftware";

export default function SoftwareClient() {
  return (
    <>
      <HeroSoftware />
      <ServiciosSoftware />
      <BeneficiosSoftware />
      <ProcesoSoftware />
      <CTASoftware />
      <ContactoSoftware />
    </>
  );
}
