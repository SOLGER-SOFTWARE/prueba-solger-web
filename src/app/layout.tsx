/**
 * layout.tsx
 *
 * Layout raíz de la aplicación Next.js.
 * Configura SEO (metadata, Open Graph, Twitter Cards),
 * fuente Inter de Google Fonts, idioma español,
 * y envuelve toda la aplicación en el ThemeProvider.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solger Software | Sistemas de Gestión Empresarial Personalizados",
  description:
    "Desarrollamos sistemas de gestión empresarial a medida. Automatiza procesos, reduce errores y escala tu negocio con tecnología moderna. Solger Ingeniería y Tecnología EIRL.",
  keywords: [
    "software empresarial",
    "sistema de gestión",
    "software personalizado",
    "ERP",
    "gestión comercial",
    "gestión de inventarios",
    "software clínicas",
    "software veterinaria",
    "Perú",
    "Solger Software",
  ],
  authors: [{ name: "Solger Ingeniería y Tecnología EIRL" }],
  openGraph: {
    title: "Solger Software | Sistemas de Gestión Empresarial Personalizados",
    description:
      "Digitaliza tu empresa con sistemas de gestión a medida. Tecnología moderna, soporte continuo y resultados reales.",
    type: "website",
    locale: "es_PE",
    siteName: "Solger Software",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solger Software | Sistemas de Gestión Empresarial",
    description:
      "Digitaliza tu empresa con sistemas de gestión a medida. Tecnología moderna y resultados reales.",
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
