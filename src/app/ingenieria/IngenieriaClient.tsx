"use client";

/**
 * IngenieriaClient.tsx
 *
 * Componente cliente de la página de ingeniería.
 * Compone todas las secciones: Hero, Servicios, Beneficios, CTA, Contacto.
 * El formulario de contacto va al final como requiere el spec.
 */

import HeroIngenieria from "@/components/sections/ingenieria/HeroIngenieria";
import ServiciosIngenieria from "@/components/sections/ingenieria/ServiciosIngenieria";
import BeneficiosIngenieria from "@/components/sections/ingenieria/BeneficiosIngenieria";
import CTAIngenieria from "@/components/sections/ingenieria/CTAIngenieria";
import ContactoIngenieria from "@/components/sections/ingenieria/ContactoIngenieria";

export default function IngenieriaClient() {
  return (
    <>
      <HeroIngenieria />
      <ServiciosIngenieria />
      <BeneficiosIngenieria />
      <CTAIngenieria />
      <ContactoIngenieria />
    </>
  );
}
