'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(prevState: any, formData: FormData) {
  try {
    // Formulardaten extrahieren
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Validierung
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: 'Alle Felder müssen ausgefüllt sein.',
      };
    }

    // E-Mail über Resend senden
    const { data, error } = await resend.emails.send({
      from: 'Kontaktformular <onboarding@resend.dev>',
      to: ['office@intrapex.at'],
      subject: `${subject} - Nachricht von ${name}`,
      text: `Betreff: ${subject}\n\n${message}`,
      replyTo: email,
    });

    if (error) {
      return {
        success: false,
        message: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.',
      };
    }

    return {
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich gesendet.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
    };
  }
}