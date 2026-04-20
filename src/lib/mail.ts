/**
 * mail.ts
 *
 * Configuración de nodemailer para envío de correos.
 * Variables de entorno requeridas en .env.local:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM
 */

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

interface ContactEmailData {
  nombre: string;
  telefono: string;
  mensaje: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const { nombre, telefono, mensaje } = data;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1565C0; border-bottom: 2px solid #1565C0; padding-bottom: 10px;">
        Nuevo mensaje de contacto — Solger Web
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Nombre:</td>
          <td style="padding: 8px 0; color: #555;">${nombre}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #333;">Teléfono:</td>
          <td style="padding: 8px 0; color: #555;">${telefono}</td>
        </tr>
      </table>
      <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 8px;">
        <p style="font-weight: bold; color: #333; margin: 0 0 8px 0;">Mensaje:</p>
        <p style="color: #555; margin: 0; white-space: pre-line;">${mensaje}</p>
      </div>
      <p style="margin-top: 20px; font-size: 12px; color: #999;">
        Enviado desde el formulario de contacto de solger.pe
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || "web@solger.pe",
    to: "info@solger.pe",
    subject: `Contacto Web — ${nombre}`,
    html: htmlContent,
    text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`,
  });
}
