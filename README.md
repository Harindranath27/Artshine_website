# Artshine Creative Learning

Artshine Creative Learning is a website for a children's art learning program. It introduces the program, presents its courses and student artwork, and gives families ways to explore classes and make enquiries.

## Website

- Live site: [artshine-website.vercel.app](https://artshine-website.vercel.app/)
- Repository: [github.com/Harindranath27/Artshine_website](https://github.com/Harindranath27/Artshine_website)

## Features

- Four routes: Home, Courses, Students & Achievements, and Contact.
- Course catalogue with course-specific enquiry entry points.
- Student artwork and achievement galleries.
- Contact options and an enquiry form with course and online/offline selections.
- Server-side enquiry email submission through Resend when Vercel email settings are configured.
- Responsive page layouts and animated interface elements.
- Parent feedback section and a link to the Artshine feedback form.

## Technology

- React 19 and React DOM
- Vite 6
- React Router 7
- Framer Motion
- Lucide React icons
- CSS
- Resend Email API (server-side integration)

## Project structure

```text
public/                  Static logo and image assets
src/
  components/            Shared layout and visual components
  config/                Contact configuration and link helpers
  pages/                 Home, Courses, Students, and Contact pages
  styles/                Global and page-specific stylesheets
  App.jsx                 Routes and shared application layout
  main.jsx                Application entry point
api/                     Server-side Vercel functions
index.html                HTML document shell
vercel.json               Vercel SPA routing and response headers
```

## Enquiry email setup

The Contact form submits to a Vercel Function, which sends accepted enquiries to Artshine through the Resend Email API. The Resend API key is used only on the server and is never included in the browser bundle.

Before email delivery can work in a deployment:

1. Create/configure a Resend account and verify a domain that can be used as the sender.
2. Create a Resend API key with permission to send email.
3. Add `RESEND_API_KEY` and `RESEND_FROM_EMAIL` to the Vercel project's server-side environment variables for the target deployment environment. Set the sender to an address on the verified domain.
4. Redeploy, then submit a real test enquiry and confirm that it arrives at the official Artshine inbox.

Until those account and deployment settings are in place, the form reports that email delivery is unavailable and does not show a success confirmation.

## Run locally

Requirements: Node.js and npm.

Install the dependencies from the npm lockfile:

```bash
npm ci
```

Start the Vite development server:

```bash
npm run dev
```

The Vite server runs the frontend only. To exercise the Vercel email function locally, use the Vercel CLI with the project's server-side email settings configured:

```bash
npx vercel dev
```

Create a production build:

```bash
npm run build
```

This is a website project built for Artshine Creative Learning.
