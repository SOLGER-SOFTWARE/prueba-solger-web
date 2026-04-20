"use client";

/**
 * LayoutShell.tsx
 *
 * Shell que decide qué Navbar mostrar según la ruta actual.
 * Para /ingenieria/* se oculta el Navbar principal
 * (lo maneja el layout de ingeniería con NavbarIngenieria).
 * Footer y WhatsAppButton son siempre visibles.
 */

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isIngenieria = pathname.startsWith("/ingenieria");
  const isSoftware = pathname.startsWith("/software");
  const showGlobalNavbar = !isIngenieria && !isSoftware;

  return (
    <>
      {showGlobalNavbar && <Navbar />}
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
