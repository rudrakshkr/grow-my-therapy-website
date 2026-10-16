# ***Conejo Valley Family Counseling — Homepage Recreation***

***Part 1 · Grow My Therapy Front-End Developer Internship Assignment***

A front-end recreation of the Conejo Valley Family Counseling homepage. This branch preserves the original-clone version of the assignment; the redesigned Dr. Maya Reynolds website lives separately on `feat/maya-reynolds-redesign`.

> ***Project note:*** This is an educational front-end recreation. It is not the official Conejo Valley Family Counseling website and does not provide clinical services.

### ***Features***

- Responsive homepage structure and navigation
- Image-led hero and content sections inspired by the original reference website
- Therapy-practice information and service/specialty sections
- Appointment-oriented call to action and footer
- Responsive styling for desktop, tablet, and mobile viewport sizes
- Page metadata configured through the Next.js App Router

### ***Tech Stack***

- [Next.js](https://nextjs.org/) with the App Router
- React
- TypeScript / TSX
- CSS
- Next.js Image component and font loading

### ***Getting Started***

***Prerequisites:*** Install Node.js compatible with this project's Next.js version and npm.

***Install dependencies:***

```bash
npm install
```

***Run the development server:***

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### ***Available Scripts***

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run lint` | Runs ESLint |
| `npm run build` | Creates a production build |
| `npm run start` | Serves the production build locally |

### ***Project Structure***

```text
src/
└── app/
    ├── globals.css   # Global and responsive page styles
    ├── layout.tsx    # Root layout, fonts, and page metadata
    └── page.tsx      # Homepage components and content
public/
└── images/           # Image assets used by this branch
```

### ***Branch Strategy***

- `main` — Part 1, original homepage recreation
- `feat/maya-reynolds-redesign` — Part 2, redesigned fictional therapist website

Keep these branches separate to make each assignment stage independently accessible.

### ***Assignment Context***

This repository version documents **Part 1: the homepage clone**. It is distinct from the fictional Dr. Maya Reynolds redesign developed for Part 2.
