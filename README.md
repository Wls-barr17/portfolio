# Wilson Barrera — Portfolio

A React, TypeScript and Vite portfolio deployed as a static site on Netlify, with a serverless contact function.

## Local development

```bash
npm install
npm run dev
npm run build
npm run lint
```

Use `npm run dev` for the Vite frontend. To exercise the contact function locally, install the Netlify CLI and use `netlify dev` instead; the function is served at `/.netlify/functions/contact`.

## Deploy to Netlify

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**, connect GitHub, and select the repository.
3. Keep the build settings from `netlify.toml`: command `npm run build`, publish directory `dist`. The functions directory is `netlify/functions`.
4. In the site’s **Environment variables**, add `RESEND_API_KEY`. To send from your own address, verify a sending domain with Resend and set `CONTACT_FROM_EMAIL` to that verified sender. The key belongs only in Netlify, never in `src/` or a committed `.env` file.
5. Deploy the site. On later Git pushes to the connected branch, Netlify will build and deploy automatically.
6. Open the deployed URL, check the CV and social links, and send a test message through the form. If the form reports that delivery is not configured, check the function logs and the Resend sender/domain settings.

The contact function sends to `wilsonbarrera.ac@gmail.com`. Without a configured API key it returns a clear setup message and the email link remains available.

## Contact email on Netlify

Set `RESEND_API_KEY` in the Netlify site environment settings. The function sends messages to `wilsonbarrera.ac@gmail.com`; optionally set `CONTACT_FROM_EMAIL` to a sender verified with Resend. Without a configured API key the form returns a clear `503` response and directs visitors to the email link. The key is never sent to the browser.

## Content review notes

- The original site included five generic project cards and six certifications without credential evidence. Those claims were removed.
- The public `outfitly-ai-telegram` repository currently exposes a README and `.gitignore`, not its described application source. Its card and case study identify that limitation explicitly.
- Dated journey milestones and unsupported skill-level claims were removed. Focus bars are qualitative areas of interest, not proficiency scores.
- The original site had conflicting LinkedIn URLs; the complete URL in its desktop page was retained. No WhatsApp URL or canonical domain was present.
- `public/robots.txt` is included. Add a sitemap and canonical link after the actual production domain is known; no domain has been invented.
- Resume and profile images are preserved under `public/`.

## Stack

React · TypeScript · Vite · Framer Motion · Lucide · CSS · ESLint · Prettier · Netlify Functions · Resend
