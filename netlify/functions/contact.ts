interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
}

declare const process: { env: Record<string, string | undefined> };

interface ContactEvent {
  httpMethod: string;
  headers: Record<string, string | undefined>;
  body: string | null;
}

interface ContactResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

type ContactHandler = (event: ContactEvent) => Promise<ContactResponse> | ContactResponse;

const json = (statusCode: number, message: string) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify({ message }),
});

export const handler: ContactHandler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, 'Method not allowed.');
  if (!event.headers['content-type']?.includes('application/json'))
    return json(415, 'Send a JSON request.');
  let payload: ContactPayload;
  try {
    payload = JSON.parse(event.body ?? '') as ContactPayload;
  } catch {
    return json(400, 'Invalid request.');
  }
  if (typeof payload.company === 'string' && payload.company.trim())
    return json(200, 'Message sent. Thanks for reaching out.');
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  if (name.length < 1 || name.length > 100) return json(400, 'Enter a name under 100 characters.');
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return json(400, 'Enter a valid email address.');
  if (message.length < 10 || message.length > 5000)
    return json(400, 'Message must be between 10 and 5,000 characters.');
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey)
    return json(
      503,
      'The contact form is not configured yet. Please email wilsonbarrera.ac@gmail.com directly.',
    );
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
        to: ['wilsonbarrera.ac@gmail.com'],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
      signal: AbortSignal.timeout(8000),
    });
    const result = (await response.json().catch(() => ({}))) as {
      id?: string;
      message?: string;
      name?: string;
    };
    if (!response.ok) {
      console.error('Resend rejected contact email:', {
        httpStatus: response.status,
        errorName: result.name,
        errorMessage: result.message,
      });
      return json(502, 'Email delivery failed. Please try again or email directly.');
    }
    console.info('Resend accepted contact email:', { emailId: result.id });
    return json(200, 'Message sent. Thanks for reaching out.');
  } catch (error) {
    console.error('Contact email request failed:', error);
    return json(502, 'Email delivery failed. Please try again or email directly.');
  }
};
