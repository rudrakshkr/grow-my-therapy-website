import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Areas of Focus", href: "#services" },
  { label: "Our Approach", href: "#approach" },
  { label: "Our Office", href: "#office" },
];

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-lockup" href="/" aria-label="Dr. Maya Reynolds, PsyD home">
          <span className="brand-name">
            Dr. Maya Reynolds<span className="brand-credential">, PsyD</span>
          </span>
          <span className="brand-tagline">Licensed Clinical Psychologist</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="contact-link" href="#contact">
          Schedule a consultation <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-nav">
          <summary className="mobile-nav-toggle" aria-label="Toggle navigation">
            <span className="mobile-nav-label">Menu</span>
            <span className="burger-box" aria-hidden="true">
              <span className="burger-inner">
                <span className="top-bun" />
                <span className="patty" />
                <span className="bottom-bun" />
              </span>
            </span>
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="mobile-nav-cta" href="#contact">
              Schedule a consultation <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">Therapy for adults in Santa Monica, California</p>

          <h1 id="hero-heading" className="hero-heading">
            Therapy for anxiety, trauma <span className="hero-heading-accent">&amp; burnout.</span>
          </h1>

          <p className="hero-description">
            I offer warm, collaborative therapy for adults navigating anxiety,
            stress, trauma, and burnout—especially when you&apos;ve spent years
            pushing through while feeling exhausted, caught in overthinking,
            or emotionally on edge.
          </p>

          <div className="hero-actions">
            <a className="hero-cta" href="#contact">
              Schedule a consultation <span aria-hidden="true">↗</span>
            </a>
            <a className="hero-secondary" href="#services">
              Explore areas of focus <span aria-hidden="true">↓</span>
            </a>
          </div>

          <section
            className="hero-details"
            aria-labelledby="hero-details-heading"
          >
            <h2
              id="hero-details-heading"
              className="hero-details-heading"
            >
              Ways to work together
            </h2>

            <div className="hero-detail-item">
              <span className="hero-detail-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>

              <div className="hero-detail-copy">
                <p className="hero-detail-title">In-person therapy</p>
                <p className="hero-detail-description">
                  Sessions at my Santa Monica office.
                </p>
              </div>
            </div>

            <div className="hero-detail-item">
              <span className="hero-detail-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="12" height="14" rx="2" />
                  <path d="m15 10 6-4v12l-6-4z" />
                </svg>
              </span>

              <div className="hero-detail-copy">
                <p className="hero-detail-title">Online therapy</p>
                <p className="hero-detail-description">
                  Secure telehealth for clients across California.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-backdrop" aria-hidden="true" />
          <div className="hero-portrait-frame">
            <Image
              src="/images/maya-reynolds.webp"
              alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist"
              fill
              priority
              sizes="(min-width: 1100px) 38vw, (min-width: 700px) 44vw, 88vw"
              className="hero-portrait"
            />
          </div>
          <aside className="hero-note-card" aria-label="Therapeutic approach">
            <p className="hero-note-label">My approach</p>
            <p className="hero-note-copy">Warm, collaborative, and grounded.</p>
          </aside>
          <p className="hero-visual-caption">
            Dr. Maya Reynolds, PsyD
            <span>Licensed Clinical Psychologist</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function IntroductionSection() {
  return (
    <section
      className="intro-section"
      id="about"
      aria-labelledby="intro-heading"
    >
      <div className="intro-inner">
        <div className="intro-heading-column">
          <p className="intro-eyebrow">About Dr. Maya Reynolds</p>

          <h2 id="intro-heading" className="intro-heading">
            You can look like you&apos;re managing—and still feel overwhelmed.
          </h2>
        </div>

        <div className="intro-content">
          <p className="intro-paragraph">
            I&apos;m Dr. Maya Reynolds, a licensed clinical psychologist
            based in Santa Monica, California. I work with adults navigating
            anxiety, stress, panic, and the lingering effects of past
            experiences.
          </p>

          <p className="intro-paragraph">
            Many of the people I work with are high-achieving, thoughtful, and
            self-aware, and used to pushing through. Yet beneath the surface,
            they may feel exhausted, caught in overthinking, or constantly on edge.
          </p>

          <p className="intro-paragraph">
            I believe therapy works best when clients feel respected,
            understood, and actively involved. My goal goes beyond symptom
            relief: to support insight, resilience, and a stronger relationship
            with yourself over time.
          </p>

          <a className="intro-link" href="#approach">
            Explore my approach
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="intro-facts" aria-label="Practice information">
        <div className="intro-fact">
          <p className="intro-fact-label">Who I work with</p>
          <p className="intro-fact-value">
            Adults, including professionals, entrepreneurs, and creatives.
          </p>
        </div>

        <div className="intro-fact">
          <p className="intro-fact-label">Location</p>
          <p className="intro-fact-value">
            123th Street 45 W, Santa Monica, CA 90401
          </p>
        </div>

        <div className="intro-fact">
          <p className="intro-fact-label">Session options</p>
          <p className="intro-fact-value">
            In-person therapy and secure California telehealth.
          </p>
        </div>
      </div>
    </section>
  );
}


const services = [
  {
    title: "Anxiety & Panic",
    description:
      "Support for constant worry, overthinking, panic, physical tension, difficulty sleeping, or feeling as though something may go wrong. Together, we can explore what you are experiencing and develop more grounded ways to respond.",
    className: "service-card--anxiety",
  },
  {
    title: "Trauma Therapy & EMDR",
    description:
      "Support for single-incident trauma and complex patterns linked to childhood, relationships, or chronic stress—especially when they affect connection, confidence, or a sense of safety. Work is carefully paced around stabilization and emotional and body-based regulation.",
    className: "service-card--trauma",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For professionals, entrepreneurs, and creatives navigating perfectionism, high internal pressure, or exhaustion after years of pushing through. Create space to reconnect with yourself and explore more sustainable ways of living and working.",
    className: "service-card--burnout",
  },
];

function ServicesSection() {
  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services-inner">
        <div className="services-intro">
          <div className="services-heading-column">
            <p className="services-eyebrow">Areas of focus</p>

            <h2
              id="services-heading"
              className="services-heading"
            >
              Support for what you&apos;re carrying.
            </h2>
          </div>

          <p className="services-description">
            Life can look manageable on the outside while anxiety,
            past experiences, or burnout feel much harder to carry internally.
            Therapy offers space to slow down, understand what you are
            experiencing emotionally and physically, and explore a more
            sustainable way forward.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className={`service-card ${service.className}`}
              key={service.title}
            >
              <span
                className="service-card-accent"
                aria-hidden="true"
              />

              <h3 className="service-card-title">
                {service.title}
              </h3>

              <p className="service-card-description">
                {service.description}
              </p>

              <a
                href="#contact"
                className="service-card-link"
              >
                Discuss your needs
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


const approachMethods = [
  {
    label: "THOUGHTS & PATTERNS",
    title: "Cognitive Behavioral Therapy",
    description:
      "Notice unhelpful thought and behavior patterns and practice new ways of responding to difficult situations.",
  },
  {
    label: "TRAUMA-FOCUSED WORK",
    title: "EMDR",
    description:
      "A trauma-focused method that can support processing distressing experiences, with careful attention to pacing and stabilization.",
  },
  {
    label: "PRESENT-MOMENT AWARENESS",
    title: "Mindfulness",
    description:
      "Practice noticing thoughts, emotions, and present-moment experiences with greater awareness.",
  },
  {
    label: "MIND–BODY CONNECTION",
    title: "Body-oriented techniques",
    description:
      "Pay attention to how stress shows up in the body and build skills that support regulation and a greater sense of safety.",
  },
];

function ApproachSection() {
  return (
    <section
      className="approach-section"
      id="approach"
      aria-labelledby="approach-heading"
    >
      <div className="approach-inner">
        <div className="approach-top">
          <div className="approach-top-copy">
            <p className="approach-eyebrow">My approach</p>

            <h2
              id="approach-heading"
              className="approach-heading"
            >
              Practical tools. Deeper understanding.
            </h2>

            <p className="approach-description">
              My approach is warm, collaborative, and grounded.
              I integrate evidence-based methods with practical tools and room for
              reflection and depth, helping you understand both the emotional
              and physiological sides of what you are experiencing.
            </p>
          </div>

          <figure className="approach-visual">
            <Image
              src="/images/approach-space.jpg"
              alt="A quiet interior corner with a comfortable chair, greenery, and natural light."
              fill
              sizes="(min-width: 901px) 44vw, 88vw"
              className="approach-photo"
            />
            <figcaption className="approach-photo-caption">
              Space to pause, reflect, and reconnect.
            </figcaption>
          </figure>
        </div>

        <div className="approach-methods">
          {approachMethods.map((method) => (
            <article
              className="approach-method"
              key={method.title}
            >
              <p className="approach-method-label">
                {method.label}
              </p>

              <h3 className="approach-method-title">
                {method.title}
              </h3>

              <p className="approach-method-description">
                {method.description}
              </p>
            </article>
          ))}
        </div>

        <aside className="approach-note">
          <span aria-hidden="true" className="approach-note-mark">
            ✳
          </span>
          <p>
            Trauma work is paced carefully, with an emphasis on safety,
            stabilization, and helping you feel more regulated in daily life—not
            just during sessions.
          </p>
        </aside>
      </div>
    </section>
  );
}


function OfficeSection() {
  return (
    <section
      className="office-section"
      id="office"
      aria-labelledby="office-heading"
    >
      <div className="office-inner">
        <div className="office-intro">
          <div className="office-heading-column">
            <p className="office-eyebrow">The office</p>

            <h2 id="office-heading" className="office-heading">
              A calm space to slow down.
            </h2>
          </div>

          <div className="office-copy">
            <p>
              My Santa Monica office is a quiet, private space designed to feel
              calm and grounding. Natural light, comfortable surroundings, and an
              uncluttered environment are intended to help you feel more at ease
              when you arrive.
            </p>

            <p>
              Sessions offer space to slow down and focus on yourself, away from
              the demands of everyday life, in an environment designed to feel
              comfortable and private.
            </p>
          </div>
        </div>

        <div className="office-gallery">
          <figure className="office-photo office-photo--main">
            <Image
              src="/images/office1.jpeg"
              alt="Interior view of Dr. Maya Reynolds' therapy office."
              fill
              sizes="(min-width: 901px) 54vw, 88vw"
              className="office-image"
            />
            <figcaption>A quiet place to pause</figcaption>
          </figure>

          <figure className="office-photo office-photo--secondary">
            <Image
              src="/images/office2.jpeg"
              alt="Another view of the therapy office interior."
              fill
              sizes="(min-width: 901px) 34vw, 88vw"
              className="office-image"
            />
          </figure>
        </div>

        <div className="office-details">
          <div className="office-detail">
            <p className="office-detail-label">Location</p>
            <p className="office-detail-value">
              123th Street 45 W, Santa Monica, CA 90401
            </p>
          </div>

          <div className="office-detail">
            <p className="office-detail-label">Environment</p>
            <p className="office-detail-value">
              Quiet, private, and naturally lit.
            </p>
          </div>

          <div className="office-detail">
            <p className="office-detail-label">Session options</p>
            <p className="office-detail-value">
              In-person sessions and secure telehealth across California.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWorkSection() {
  return (
    <section
      className="process-section"
      id="how-we-work"
      aria-labelledby="process-heading"
    >
      <div className="process-inner">
        <figure className="process-visual">
          <Image
            src="/images/reflection-session.jpg"
            alt="A person writing in a notebook in a cozy, sunlit room."
            fill
            sizes="(min-width: 901px) 42vw, 88vw"
            className="process-photo"
          />
          <figcaption className="process-caption">
            Space for reflection
          </figcaption>
        </figure>

        <div className="process-content">
          <p className="process-eyebrow">
            What therapy can look like
          </p>

          <h2 id="process-heading" className="process-heading">
            A thoughtful process, shaped around you.
          </h2>

          <p className="process-description">
            Sessions are structured enough to feel supportive while still
            leaving room for reflection and depth. We work collaboratively to
            understand what you are experiencing and make space for both
            practical tools and deeper understanding.
          </p>

          <p className="process-description">
            When trauma is part of the picture, we move carefully. Alongside
            processing difficult experiences, we focus on safety, stabilization,
            and skills that can help you feel more regulated in everyday life.
          </p>

          <div className="process-principles">
            <span>Collaborative</span>
            <span>Thoughtful pacing</span>
            <span>Practical tools</span>
          </div>

          <a className="process-link" href="#approach">
            Explore my approach
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function AppointmentSection() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="cta-banner">
        <div className="cta-banner-image">
          <Image
            src="/images/cta-botanical.jpg"
            alt="Gentle botanical shadows in warm afternoon sunlight"
            fill
            sizes="100vw"
          />
        </div>

        <div className="cta-card">
          <p className="cta-eyebrow">A PLACE TO BEGIN</p>

          <h2 id="cta-title">
            You deserve space to breathe.
          </h2>

          <p className="cta-copy">
            You don&apos;t have to sort through constant worry, difficult past
            experiences, or the pressure to keep going on your own. Therapy can
            offer space to slow down, understand what you are carrying, and
            explore more sustainable ways of living and working.
          </p>

          <a className="cta-button" href="#contact">
            <span>Take the first step</span>
            <span aria-hidden="true">↗</span>
          </a>

          <p className="cta-detail">
            In-person in Santa Monica
            <span aria-hidden="true"> · </span>
            Telehealth across California
          </p>
        </div>

        <div className="cta-image-caption">
          <span className="cta-caption-label">A MOMENT FOR YOU</span>
          <span className="cta-caption-phrase">
            Space to pause.
            <br />
            Room to grow.
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <p className="site-footer-kicker">
            LICENSED CLINICAL PSYCHOLOGIST
          </p>

          <h2 className="site-footer-wordmark">
            Dr. Maya Reynolds<span>, PsyD</span>
          </h2>

          <p className="site-footer-description">
            Warm, collaborative therapy for adults navigating anxiety, panic,
            trauma, burnout, perfectionism, and the pressure to keep going.
          </p>
        </div>

        <nav className="site-footer-column" aria-label="Footer navigation">
          <h3>Explore</h3>
          <a href="#about">About</a>
          <a href="#services">Areas of focus</a>
          <a href="#approach">My approach</a>
          <a href="#office">The office</a>
        </nav>

        <div className="site-footer-column">
          <h3>Areas of focus</h3>
          <p>Anxiety and panic</p>
          <p>Trauma and past experiences</p>
          <p>Burnout and perfectionism</p>
        </div>

        <div className="site-footer-column site-footer-care">
          <h3>Care &amp; location</h3>
          <p>In-person sessions</p>
          <p>123th Street 45 W, Santa Monica, CA 90401</p>
          <span className="site-footer-divider" />
          <p>Secure telehealth</p>
          <p>Across California</p>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD.
          All rights reserved.
        </p>
        <a href="#top" className="site-footer-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}


export default function Home() {
  return (
    <main id="top" className="reference-home">
      <SiteHeader />
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <ApproachSection />
      <OfficeSection />
      <HowWeWorkSection />
      <AppointmentSection />
      <Footer />
    </main>
  );
}
