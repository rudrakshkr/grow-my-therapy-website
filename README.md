# ***Dr. Maya Reynolds, PsyD — Therapy Website Redesign***

***Part 2 · Grow My Therapy Front-End Developer Internship Assignment***

A responsive redesign for the fictional therapist profile supplied in the assignment. The page presents Dr. Maya Reynolds, PsyD, as a licensed clinical psychologist in Santa Monica, California, offering therapy for adults experiencing anxiety, panic, trauma, stress, burnout, and perfectionism.

> ***Project note:*** Dr. Maya Reynolds is fictional for this assignment. This is a front-end demonstration, not a live healthcare service or a substitute for professional care.

### ***Design Direction***

The visual system uses deep plum, warm ivory, muted lavender, terracotta accents, editorial serif headings, and Mulish body typography. The page pairs the supplied therapist portrait and office images with supporting reflection and botanical photography.

### ***Features***

- Responsive navigation with a mobile menu
- Hero section introducing Dr. Reynolds and the practice's focus
- About section describing the intended client audience and therapeutic goals
- Three focus areas: anxiety and panic, trauma therapy and EMDR, and burnout and perfectionism
- Approach content featuring CBT, EMDR, mindfulness-based practices, and body-oriented techniques
- Therapy-process section emphasizing collaboration, reflection, careful pacing, stabilization, and practical tools
- Office section with two interior photographs supplied for the assignment
- Botanical-image call to action and redesigned footer
- Search-oriented page title and description in Next.js metadata
- Responsive layouts for desktop, tablet, and mobile, including tablet-specific refinements
- Reduced-motion styling for selected animated elements

### ***Tech Stack***

- [Next.js](https://nextjs.org/) with the App Router
- React
- TypeScript / TSX
- CSS
- Next.js Image component and local/Google font loading

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
    ├── globals.css   # Theme, section styles, and responsive breakpoints
    ├── layout.tsx    # Root layout, fonts, and SEO metadata
    └── page.tsx      # Homepage components and copy
public/
├── fonts/            # Heading font asset used by the design
└── images/           # Portrait, office, reflection, and CTA images
```

### ***Profile Content Represented***

The content is based on the supplied Dr. Maya Reynolds profile and covers:

- Adults who may appear high-functioning while experiencing exhaustion, overthinking, constant worry, physical tension, or feeling emotionally on edge
- Anxiety, panic, trauma, professional burnout, perfectionism, and high internal pressure
- Single-incident and complex, long-standing trauma, including possible links to childhood, relationships, or chronic stress
- Careful trauma-work pacing with an emphasis on safety, stabilization, and emotional and body-based regulation
- A warm, collaborative, grounded approach that balances practical tools with reflection and depth
- CBT, EMDR, mindfulness-based practice, and body-oriented techniques
- In-person sessions in Santa Monica and secure telehealth for clients located in California
- A quiet, private, naturally lit office
- Longer-term goals including insight, resilience, and a stronger relationship with oneself

### ***Current Limitations***

- Consultation buttons currently navigate to the page's footer/contact anchor. No live booking form, telephone number, or email is configured because no verified contact method was supplied.
- The office address is reproduced as written in the assignment profile: `123th Street 45 W, Santa Monica, CA 90401`. It is part of the fictional brief and has not been independently verified.
- This branch is the Part 2 redesign. The original homepage recreation remains on `main`.

### ***Branch Strategy***

- `main` — Part 1, original homepage recreation
- `feat/maya-reynolds-redesign` — Part 2, Dr. Maya Reynolds redesign

Keep the branches separate so each assignment stage has its own source and README.
