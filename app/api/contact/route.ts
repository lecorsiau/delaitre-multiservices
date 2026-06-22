import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY manquante");
    return NextResponse.json(
      { error: "Configuration serveur manquante. Contactez l'administrateur." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { prenom, nom, telephone, email, service, message } = body;

  if (!prenom || !nom || !telephone || !service || !message) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Delaitre Multiservices <onboarding@resend.dev>",
    to: "jerome.delaitre88@orange.fr",
    replyTo: email || undefined,
    subject: `Demande de devis – ${service}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
        <h2 style="color:#1a2744;margin-top:0;">Nouvelle demande de devis</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:140px;">Prénom / Nom</td><td style="padding:8px 0;font-weight:600;">${prenom} ${nom}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Téléphone</td><td style="padding:8px 0;font-weight:600;">${telephone}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:8px 0;font-weight:600;">${email || "Non renseigné"}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Service souhaité</td><td style="padding:8px 0;"><span style="background:#f5a623;color:#fff;padding:2px 10px;border-radius:20px;font-size:13px;font-weight:600;">${service}</span></td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
        <h3 style="color:#1a2744;font-size:15px;">Message</h3>
        <p style="color:#374151;line-height:1.6;white-space:pre-wrap;">${message}</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
        <p style="color:#9ca3af;font-size:12px;margin:0;">Message envoyé depuis le site Delaitre Multiservices</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
