"use client";

/**
 * WhatsAppButton.tsx
 *
 * Botón flotante de WhatsApp — configurable por sección.
 * Cada sección tiene su propio número y mensaje.
 */

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface WhatsAppConfig {
  number: string;
  message: string;
}

function getWhatsAppConfig(pathname: string): WhatsAppConfig {
  if (pathname.startsWith("/ingenieria")) {
    return {
      number: "51994872765",
      message: "Hola, me interesa un servicio de ingeniería y seguridad.",
    };
  }
  if (pathname.startsWith("/software")) {
    return {
      number: "51994872765",
      message: "Hola, me interesa un servicio de desarrollo de software.",
    };
  }
  return {
    number: "51994872765",
    message: "Hola, me interesa conocer los servicios de Solger.",
  };
}

export default function WhatsAppButton() {
  const pathname = usePathname();
  const config = getWhatsAppConfig(pathname);
  const url = `https://wa.me/${config.number}?text=${encodeURIComponent(config.message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
