/**
 * layout.tsx — /ingenieria
 *
 * Layout específico para la sección de ingeniería.
 * Usa NavbarIngenieria en lugar del Navbar principal.
 * Footer e WhatsApp se heredan del root layout.
 */

"use client";

import NavbarIngenieria from "@/components/layout/NavbarIngenieria";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function IngenieriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarIngenieria />
      <div>{children}</div>
    </>
  );
}
