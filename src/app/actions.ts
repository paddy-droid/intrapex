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
    // Immer an office@intrapex.at senden, da die Domain jetzt verifiziert ist
    const { data, error } = await resend.emails.send({
      from: 'Kontaktformular <office@intrapex.at>',
      to: ['office@intrapex.at'],
      subject: `${subject} - Nachricht von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Neue Nachricht über Kontaktformular</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> ${email}</p>
            <p><strong>Betreff:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Nachricht:</h3>
            <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 30px;">
            Diese E-Mail wurde über das Kontaktformular auf der Intrapex-Website gesendet.
          </p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend Fehler:', error);
      return {
        success: false,
        message: `Fehler beim Senden der E-Mail: ${error.message}`,
      };
    }

    console.log('E-Mail erfolgreich gesendet:', data);
    return {
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich gesendet.',
    };
  } catch (error) {
    console.error('Unerwarteter Fehler:', error);
    return {
      success: false,
      message: `Ein unerwarteter Fehler ist aufgetreten: ${error instanceof Error ? error.message : 'Unbekannter Fehler'}`,
    };
  }
}