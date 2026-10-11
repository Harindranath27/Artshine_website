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
- Enquiry form prepares a course-specific email with the visitor's details in their email application. The visitor reviews it and presses Send; the website does not send or store the enquiry.
- Responsive page layouts and animated interface elements.
- Parent feedback section and a link to the Artshine feedback form.

## Technology

- React 19 and React DOM
- Vite 6
- React Router 7
- Framer Motion
- Lucide React icons
- CSS

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
index.html                HTML document shell
vercel.json               Vercel SPA routing and response headers
```

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

Create a production build:

```bash
npm run build
```

This is a website project built for Artshine Creative Learning.
