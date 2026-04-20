/**
 * route.ts — /api/contacto
 *
 * API Route para recibir mensajes del formulario de contacto.
 * Valida los campos, envía correo con nodemailer a info@solger.pe.
 */

import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, telefono, mensaje } = body;

    // Validación básica
    if (!nombre || !nombre.trim()) {
      return NextResponse.json(
        { error: "El nombre es requerido" },
        { status: 400 }
      );
    }

    if (!telefono || !telefono.trim()) {
      return NextResponse.json(
        { error: "El teléfono es requerido" },
        { status: 400 }
      );
    }

    if (!mensaje || !mensaje.trim()) {
      return NextResponse.json(
        { error: "El mensaje es requerido" },
        { status: 400 }
      );
    }

    // Enviar correo
    await sendContactEmail({
      nombre: nombre.trim(),
      telefono: telefono.trim(),
      mensaje: mensaje.trim(),
    });

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Inténtalo nuevamente." },
      { status: 500 }
    );
  }
}
