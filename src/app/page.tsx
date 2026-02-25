"use client";

/**
 * page.tsx
 *
 * Página principal de la landing page de Solger Software.
 * Compone todas las secciones en orden secuencial para
 * crear una experiencia de navegación fluida y persuasiva.
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Barra de navegación fija con efecto blur */}
      <Navbar />

      {/* Sección principal de alto impacto */}
      <Hero />

      {/* Mini-hero sections para cada sistema de gestión */}
      <Services />

      {/* Razones para elegir Solger Software */}
      <WhyChooseUs />

      {/* Métricas con contadores animados y beneficios clave */}
      <Benefits />

      {/* Llamada a la acción final */}
      <CTA />

      {/* Formulario de contacto con validaciones */}
      <ContactForm />

      {/* Pie de página con enlaces y redes sociales */}
      <Footer />
    </main>
  );
}
