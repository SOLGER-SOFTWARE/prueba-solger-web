/**
 * layout.tsx
 *
 * Layout raíz de la aplicación Next.js.
 * Configura SEO, fuente Inter, idioma español y ThemeProvider.
 * El Navbar y Footer se manejan condicionalmente:
 * - /ingenieria/* usa su propio NavbarIngenieria (via layout.tsx de ingeniería)
 * - El resto usa los componentes globales
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import LayoutShell from "@/components/layout/LayoutShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solger Ingeniería y Tecnología EIRL | Ingeniería y Software",
  description:
    "Soluciones de ingeniería, seguridad y software para empresas. Defensa civil, extintores, fumigación, sistemas contra incendios, desarrollo web y sistemas empresariales. Lima, Perú.",
  keywords: [
    "ingeniería",
    "seguridad",
    "defensa civil",
    "extintores",
    "fumigación",
    "pozo a tierra",
    "sistemas contra incendios",
    "software empresarial",
    "desarrollo web",
    "Lima",
    "Perú",
    "Solger",
  ],
  authors: [{ name: "Solger Ingeniería y Tecnología EIRL" }],
  openGraph: {
    title: "Solger Ingeniería y Tecnología EIRL",
    description:
      "Ingeniería, seguridad y tecnología para empresas. Soluciones reales y confiables.",
    type: "website",
    locale: "es_PE",
    siteName: "Solger",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solger Ingeniería y Tecnología EIRL",
    description:
      "Ingeniería, seguridad y tecnología para empresas. Soluciones reales y confiables.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LayoutShell>{children}</LayoutShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
