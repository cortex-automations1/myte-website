import { Resend } from "resend";

type ContactLead = {
  name: string;
  email: string;
  phone?: string;
  company: string;
  interest: string;
  message: string;
};

type SendResult = { sent: boolean; reason?: string };

const NOTIFICATION_TO = process.env.CONTACT_NOTIFICATION_EMAIL;
const NOTIFICATION_FROM = process.env.CONTACT_FROM_EMAIL;
const RESEND_KEY = process.env.RESEND_API_KEY;

export async function sendContactLead(lead: ContactLead): Promise<SendResult> {
  if (!RESEND_KEY || !NOTIFICATION_TO || !NOTIFICATION_FROM) {
    console.warn(
      "[contact] Email delivery skipped — missing RESEND_API_KEY, CONTACT_NOTIFICATION_EMAIL, or CONTACT_FROM_EMAIL. Submission logged below:",
    );
    console.log("[contact] Lead:", lead);
    return { sent: false, reason: "email-not-configured" };
  }

  const resend = new Resend(RESEND_KEY);
  const subject = `New lead: ${lead.name} — ${lead.interest}`;
  const text = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "(not provided)"}`,
    `Company: ${lead.company}`,
    `Area of Interest: ${lead.interest}`,
    "",
    "Message:",
    lead.message,
    "",
    "---",
    "Sent from the mytetech.com contact form.",
  ].join("\n");

  const html = `
    <p><strong>New lead from the mytetech.com contact form.</strong></p>
    <table cellpadding="4" style="border-collapse:collapse;font-family:system-ui,sans-serif;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(lead.name)}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(lead.phone || "(not provided)")}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(lead.company)}</td></tr>
      <tr><td><strong>Area of Interest</strong></td><td>${escapeHtml(lead.interest)}</td></tr>
    </table>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap;">${escapeHtml(lead.message)}</p>
  `;

  const { error } = await resend.emails.send({
    from: NOTIFICATION_FROM,
    to: NOTIFICATION_TO,
    replyTo: lead.email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return { sent: false, reason: error.message };
  }

  return { sent: true };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
