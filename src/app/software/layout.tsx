/**
 * layout.tsx — /software
 *
 * Layout específico para la sección de software.
 * Usa NavbarSoftware en lugar del Navbar principal.
 * Footer se hereda del root layout.
 */

"use client";

import NavbarSoftware from "@/components/layout/NavbarSoftware";

export default function SoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarSoftware />
      <div>{children}</div>
    </>
  );
}
