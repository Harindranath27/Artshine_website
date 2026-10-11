const recipient = 'artshineoff@gmail.com';

const courses = new Set([
  'Drawing & Colouring',
  'Pencil Shading',
  'Colour Pencil Sketching',
  'Oil Pastels',
  'Doodle Art',
  'Mandala Art',
  'Madhubani Art',
  'Water Colour Painting',
  'Acrylic Painting',
]);

const json = (body, status = 200) => Response.json(body, {
  status,
  headers: { 'Cache-Control': 'no-store' },
});

const isText = (value, maxLength) => (
  typeof value === 'string'
  && value.trim().length > 0
  && value.trim().length <= maxLength
  && !/[\u0000-\u001F\u007F]/.test(value)
);

export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return json({ error: 'This endpoint accepts POST requests only.' }, 405);
    }

    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) {
      return json({ error: 'This request could not be verified. Please refresh and try again.' }, 403);
    }

    const contentType = request.headers.get('content-type') || '';
    if (!contentType.toLowerCase().startsWith('application/json')) {
      return json({ error: 'The enquiry could not be read. Please try again.' }, 415);
    }

    let payload;
    try {
      const rawBody = await request.text();
      if (rawBody.length > 10_000) {
        return json({ error: 'The enquiry is too large. Please shorten the entered details.' }, 413);
      }
      payload = JSON.parse(rawBody);
    } catch {
      return json({ error: 'The enquiry details are invalid. Please check the form and try again.' }, 400);
    }

    if (!payload || typeof payload !== 'object') {
      return json({ error: 'The enquiry details are invalid. Please check the form and try again.' }, 400);
    }

    const { name, phone, email, course, mode } = payload;
    const submissionId = request.headers.get('x-submission-id') || '';
    const validEmail = isText(email, 254)
      && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (
      !isText(name, 100)
      || !isText(phone, 40)
      || !validEmail
      || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(submissionId)
      || !courses.has(course)
      || !['Online', 'Offline'].includes(mode)
    ) {
      return json({ error: 'Please check your name, contact details, course, and learning mode.' }, 400);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) {
      return json({ error: 'Enquiry email is not configured yet. Please contact Artshine directly.' }, 503);
    }

    const text = [
      'A new enquiry was submitted through the Artshine website.',
      '',
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Course: ${course}`,
      `Learning mode: ${mode}`,
    ].join('\n');

    try {
      const providerResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Idempotency-Key': submissionId,
        },
        body: JSON.stringify({
          from,
          to: [recipient],
          reply_to: email.trim(),
          subject: `Website enquiry: ${course}`,
          text,
        }),
        signal: AbortSignal.timeout(10_000),
      });
      const providerResult = await providerResponse.json().catch(() => null);

      if (!providerResponse.ok || typeof providerResult?.id !== 'string') {
        return json({ error: 'The email service could not accept your enquiry. Please try again shortly or contact Artshine directly.' }, 502);
      }

      return json({ accepted: true });
    } catch {
      return json({ error: 'A temporary email service issue prevented submission. Please try again shortly.' }, 502);
    }
  },
};
