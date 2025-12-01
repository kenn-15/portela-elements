# Integrations: Zapier & Calendly

## Zapier

- Front-end form should POST JSON with fields: `name`, `email`, `message`, and optional context fields.
- Example payload:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I want a consultation about AI UX",
  "source": "Website Contact Form"
}
```

- Zapier expects a POST to a webhook URL. Use `lib/sendZapierWebhook(webhookUrl, payload)` on the server or call the webhook URL directly from a serverless API route.

## Calendly

- Offer a "Free 30 Minute Business / UX Consultation" using Calendly.
- Embed snippet (iframe) example to place on `/consultation` page:

```html
<iframe
  src="https://calendly.com/YOUR_USERNAME/30min"
  width="100%"
  height="800"
  frameborder="0"
></iframe>
```

- Recommendation: place the embed below a short section describing the session, expected outcomes, and scarcity note (e.g., "Limited sessions available per month").
