"use client";

/**
 * page.tsx — Home (/)
 *
 * Página principal HUB de Solger Ingeniería y Tecnología EIRL.
 * Compone las secciones del landing: Hero (2 cards), Nosotros, Contacto.
 */

import Hero from "@/components/sections/home/Hero";
import Nosotros from "@/components/sections/home/Nosotros";
import Contacto from "@/components/sections/home/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Nosotros />
      <Contacto />
    </>
  );
}
