// Zapier webhook helper (front-end fetch example + server-side helper)
// Replace `ZAPIER_WEBHOOK_URL` with your actual webhook URL when ready.

export type ZapierPayload = {
  name?: string;
  email?: string;
  message?: string;
  [key: string]: unknown;
};

export async function sendZapierWebhook(webhookUrl: string, payload: ZapierPayload) {
  if (!webhookUrl) throw new Error('Missing Zapier webhook URL');

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return res;
}

// Front-end example (to be used in /contact form submit handler):
// await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
