# AROFA website

## Local development

```bash
pnpm install
pnpm dev
```

The site is available at `http://localhost:3000`.

## Contact configuration

Copy `.env.example` to `.env.local` and replace every example value:

- `NEXT_PUBLIC_AROFA_WHATSAPP_NUMBER`: WhatsApp number with country code and digits only.
- `NEXT_PUBLIC_AROFA_PHONE`: public phone number as it should appear on the site.
- `RESEND_API_KEY`: API key used to deliver contact and quote enquiries.
- `INQUIRY_TO_EMAIL`: inbox that receives enquiries.
- `INQUIRY_FROM_EMAIL`: sender on a domain verified by Resend.

Restart the development server after changing environment variables. Without the
email variables, the form returns an honest configuration error and does not
discard a visitor's enquiry silently.

## Verification

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```
