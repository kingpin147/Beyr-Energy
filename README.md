# Beyr Energy - Industrial Power Solutions

Beyr Energy is Dubai's leading energy rental partner, delivering industrial-grade BESS (Battery Energy Storage Systems), Solar Hybrid, Temporary Power, and alternative energy solutions across the UAE & GCC. 

This project is the official web portal for Beyr Energy, providing clients with access to technical specifications, deployment case studies, and a direct inquiry pipeline.

## Tech Stack

This project is built with a modern, high-performance web stack:
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with custom CSS properties for an industrial glassmorphic aesthetic.
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation:** `react-hook-form` + `zod`
- **Email/Contact:** Resend Integration
- **Icons:** `lucide-react`
- **Language:** TypeScript

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the pages by modifying `app/page.tsx` and the respective component files in `src/components`.

## Project Structure

- `/src/app/`: Next.js App Router definitions, global layout, and global CSS.
- `/src/components/`: Reusable React components organized by feature (e.g., `home/`, `layout/`, `ui/`).
- `/public/`: Static assets such as logos and industrial energy imagery.

## Scripts & Development

- `npm run dev`: Starts the Next.js local development server.
- `npm run build`: Outputs a high-performance production build.
- `npm run start`: Runs the compiled production server.
- `npm run lint`: Runs ESLint for code quality checks.

## Deployment

This application is ready to be deployed on the [Vercel Platform](https://vercel.com/new). The standard `build` command generates optimized, statically compiled pages and server-side logic automatically.
