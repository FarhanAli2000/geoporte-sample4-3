import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

// Website enquiry form -> email to the admin inbox via Gmail SMTP.
// Needs GMAIL_USER and GMAIL_APP_PASSWORD (a Google app password); ENQUIRY_TO defaults to GMAIL_USER.

const clean = (v, max) => String(v ?? '').trim().slice(0, max);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fail = (status, error) => Response.json({ ok: false, error }, { status });

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return fail(400, 'Invalid request');
  }
  // Bots fill the hidden "website" field; pretend success and send nothing.
  if (clean(data.website, 200)) return Response.json({ ok: true });

  const name = clean(data.name, 120).replace(/[\r\n]+/g, ' ');
  const email = clean(data.email, 200);
  const organisation = clean(data.organisation, 200);
  const sector = clean(data.sector, 60);
  const message = clean(data.message, 5000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) return fail(400, 'Missing or invalid fields');

  const { GMAIL_USER, GMAIL_APP_PASSWORD, ENQUIRY_TO } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Enquiry form: GMAIL_USER / GMAIL_APP_PASSWORD are not set');
    return fail(500, 'Email is not configured');
  }

  const rows = [['Name', name], ['Email', email], ['Organisation', organisation || '—'], ['Sector', sector || '—']];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nProject details:\n${message}`;
  const html =
    `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">` +
    rows.map(([k, v]) => `<tr><td style="color:#666"><b>${k}</b></td><td>${esc(v)}</td></tr>`).join('') +
    `</table><p style="font-family:Arial,sans-serif;font-size:14px"><b>Project details</b><br>${esc(message).replace(/\n/g, '<br>')}</p>`;

  try {
    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD } });
    await transporter.sendMail({
      from: { name: 'Geoporte website', address: GMAIL_USER },
      to: ENQUIRY_TO || GMAIL_USER,
      replyTo: { name, address: email },
      subject: `New website enquiry from ${name}`,
      text,
      html,
    });
  } catch (err) {
    console.error('Enquiry form: sending failed', err);
    return fail(502, 'Could not send');
  }
  return Response.json({ ok: true });
}
