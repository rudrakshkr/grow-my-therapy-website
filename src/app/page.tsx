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
      <a href="#hero-heading" className="header-skip-link">
        Skip to content
      </a>

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
            stress, difficult past experiences, and the pressure to keep pushing
            forward.
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
            Many of the people I work with are thoughtful, self-aware, and
            used to pushing through. Yet beneath the surface, they may feel
            exhausted, caught in overthinking, or constantly on edge.
          </p>

          <p className="intro-paragraph">
            I believe therapy should offer more than symptom relief. My goal
            is to help clients develop insight, resilience, and a stronger
            relationship with themselves over time.
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
            Santa Monica, California
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
      "Therapy for constant worry, overthinking, panic, physical tension, and difficulty sleeping. Together, we can explore what you're experiencing and develop more grounded ways to respond.",
    className: "service-card--anxiety",
  },
  {
    title: "Trauma Therapy & EMDR",
    description:
      "Carefully paced support for the lingering effects of difficult past experiences, with an emphasis on safety, stabilization, and emotional and body-based regulation.",
    className: "service-card--trauma",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For professionals, entrepreneurs, and creatives navigating high expectations, persistent pressure, or exhaustion. Create space to reconnect with yourself and explore more sustainable ways of living and working.",
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
              Support for what you're carrying.
            </h2>
          </div>

          <p className="services-description">
            Life can look manageable on the outside while anxiety,
            past experiences, or burnout feel harder to carry internally.
            Therapy offers space to slow down, understand what you're
            experiencing, and explore a more sustainable way forward.
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
      "Explore unhelpful patterns and practice new ways of responding.",
  },
  {
    label: "TRAUMA-FOCUSED WORK",
    title: "EMDR",
    description:
      "Carefully paced support for processing distressing experiences.",
  },
  {
    label: "PRESENT-MOMENT AWARENESS",
    title: "Mindfulness",
    description:
      "Build awareness of your thoughts, emotions, and present experiences.",
  },
  {
    label: "MIND–BODY CONNECTION",
    title: "Body-oriented techniques",
    description:
      "Notice stress responses and develop a greater sense of safety.",
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
              I combine practical tools with space for reflection,
              helping you better understand what you&apos;re experiencing.
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
            In trauma work, safety and stabilization come first.
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
            <p className="office-eyebrow">Our office</p>

            <h2 id="office-heading" className="office-heading">
              A calm space to slow down.
            </h2>
          </div>

          <div className="office-copy">
            <p>
              My Santa Monica office is a quiet, private space
              designed to feel calm and grounding. Natural light,
              comfortable surroundings, and an uncluttered
              environment offer room to pause and settle in.
            </p>

            <p>
              Whether you&apos;re arriving for the first time or
              returning for a session, this is a space to focus
              on yourself without the demands of everyday life.
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
              Santa Monica, California
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
            Therapy with me is warm, collaborative, and grounded.
            Sessions offer practical tools while leaving room for
            reflection and deeper understanding.
          </p>

          <p className="process-description">
            We work together to understand your needs and move at
            a pace that feels supportive.
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


function HonoringSection() {
  return (
    <section className="honoring-section">
      <div className="honoring-image">
        <Image
          src="/images/honoring-family.jpg"
          alt="Family of four standing together in the ocean, holding hands and facing the water."
          fill
          sizes="(min-width: 768px) 54vw, 100vw"
          className="honoring-photo"
        />
      </div>

      <div className="honoring-copy">
        <h2>
          Honoring where you’ve been{" "}
          <span className="honoring-ampersand">&amp;</span>{" "}
          helping shape where you’re headed.
        </h2>
      </div>
    </section>
  );
}


const specialties = [
  {
    title: "Trauma",
    description:
      "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
    href: "/trauma-counseling-newbury-park",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    href: "/emdr-therapy-newbury-park",
  },
  {
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    href: "/dissociative-identity-disorder-therapist-newbury-park",
  },
  {
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    href: "/counseling-special-needs-parents-newbury-park",
  },
];

function SpecialtiesSection() {
  return (
    <section className="specialties-section" id="specialties">
      <div className="specialties-layout">
        <h2 className="specialties-heading">
          Our <span>specialties</span>
          <br />
          include...
        </h2>

        <div className="specialties-grid">
          {specialties.map((specialty) => (
            <article className="specialty-card" key={specialty.title}>
              <h3>{specialty.title}</h3>

              <p>{specialty.description}</p>

              <a href={specialty.href} className="specialty-link">
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function AppointmentSection() {
  return (
    <section
      className="appointment-section"
      id="schedule-appointment"
      aria-labelledby="appointment-heading"
    >
      <div className="appointment-left-image">
        <Image
          src="/images/appointment-shells.jpg"
          alt="A person picking up seashells on a sandy beach"
          fill
          sizes="12vw"
          className="appointment-photo"
        />
      </div>

      <div className="appointment-content">
        <p className="appointment-eyebrow">
          Schedule an appointment
        </p>

        <h2 id="appointment-heading">
          Find a therapist who is the right fit for{" "}
          <span className="appointment-script">you</span>.
        </h2>

        <div className="appointment-description">
          <p>
            Coming to therapy is a courageous decision, and connecting with
            the right kind of therapist makes all the difference. We
            understand that your journey is personal, and we&apos;re here to
            support you with care and understanding every step of the way.
            Each member of our team brings dedicated expertise and a
            commitment to support you in your struggles. We want you to feel
            prioritized, understood, and empowered.
          </p>

          <p>
            Click the button below to schedule an appointment.
          </p>
        </div>

        <a href="/contact" className="appointment-button">
          Book now
        </a>
      </div>

      <div className="appointment-right-image">
        <Image
          src="/images/appointment-family.jpg"
          alt="An adult and child exploring seashells on the beach"
          fill
          sizes="35vw"
          className="appointment-photo appointment-family-photo"
        />
      </div>
    </section>
  );
}


function Footer() {
  const teamMembers = [
    ["Jennifer Anderson", "/jennifer-anderson"],
    ["Heather Williams-Baumgart", "/heather-williams-baumgart"],
    ["Autumn Bodily", "/autumn-bodily"],
    ["Candace Bletscher", "/candace-bletscher"],
    ["Samantha Johnson", "/samantha-johnson"],
    ["Rosa Gomez", "/rosa-gomez"],
    ["Chad Flores", "/chad-flores"],
    ["Simran Sidhu", "/simran-sidhu"],
    ["Jessica Jauregui", "/jessica-jauregui"],
  ];

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo-link" aria-label="Conejo Valley home">
            <Image
              src="/images/footer-logo.png"
              alt="Conejo Valley Family Counseling"
              width={450}
              height={131}
              className="footer-logo"
            />
          </Link>

          <p className="footer-description">
            We want to make getting started simple. You&apos;re welcome to come
            into our office in Newbury Park or schedule virtual appointments
            from anywhere in CA—whatever works best for you.
          </p>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h2 className="footer-column-heading">Navigate</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><a href="/therapists-newbury-park">About</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="footer-column">
          <h2 className="footer-column-heading">Our Team</h2>
          <ul>
            {teamMembers.map(([name, href]) => (
              <li key={href}>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h2 className="footer-column-heading">Contact</h2>

          <address>
            925 Broadbeck Dr
            <br />
            Suites 200 and 225
            <br />
            Newbury Park, CA 91320
            <br />
            <a href="mailto:info@conejovalleycounseling.com">
              info@conejovalleycounseling.com
            </a>
            <br />
            <a href="tel:8052423120">805.242.3120</a>
          </address>

          <p className="footer-service-area">
            Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark,
            &amp; Simi Valley
          </p>
        </div>
      </div>

      <div className="footer-legal">
        <p>
          <a href="/terms">Terms</a>
          <span aria-hidden="true"> | </span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span aria-hidden="true"> | </span>
          <a href="/disclaimer">Disclaimer</a>
          <span aria-hidden="true"> | </span>
          Website by{" "}
          <a
            href="https://walkerstrategyco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Walker Strategy Co.
          </a>
        </p>
      </div>
    </footer>
  );
}


export default function Home() {
  return (
    <main className="reference-home">
      <SiteHeader />
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <ApproachSection />
      <OfficeSection />
      <HowWeWorkSection />
      <HonoringSection />
      <SpecialtiesSection />
      <AppointmentSection />
      <Footer />
    </main>
  );
}
