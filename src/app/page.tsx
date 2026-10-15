import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "About", href: "#intro-heading" },
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
    <section className="intro-section" aria-labelledby="intro-heading">
      <div className="intro-content">
        
      <h2 id="intro-heading" className="intro-heading">
        You&apos;re holding onto hope that life can be
        <br />
        better than it is right now.
      </h2>

        <div className="intro-copy-grid">
          <div className="intro-left-copy">
            <p className="intro-emphasis">
              <strong>
                  At Conejo Valley Family Counseling we want to make that hope
                  a reality.
              </strong>
            </p>

            <p className="intro-paragraph">
              Whether you&apos;re an adult seeking personal growth, looking to
              work through your trauma, a couple working on your relationship,
              or a parent looking for support for your child, we provide a
              compassionate and safe space to help you navigate all of
              life&apos;s ups and downs.
            </p>
          </div>

          <div className="intro-right-copy">
            <p className="intro-paragraph">
              First and foremost, we believe what you&apos;re going through is
              real, valid, and worthy of support. Our team offers clients in
              the Newbury Park area and across CA an environment to discover
              a new life and a deeper sense of self in the midst of their
              struggles. As we tap into the power of connection and
              understanding, you can find your footing again and take a
              transformative path forward.
            </p>
          </div>
        </div>
      </div>

      <div className="intro-image">
        <Image
          src="/images/intro-beach.jpg"
          alt="Sandy beach with gentle ocean waves and a cloudy sky"
          fill
          sizes="(min-width: 1100px) 30.5vw, 100vw"
          className="intro-photo"
        />
      </div>
    </section>
  );
}


const whoWeHelpCards = [
  {
    title: "Adults",
    image: "/images/who-adults.jpg",
    alt: "Two people sitting together by the water with mountains in the background",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    title: "Couples",
    image: "/images/who-couples.jpg",
    alt: "A couple embracing on the beach",
    description:
      "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    title: "Children & Teens",
    image: "/images/who-children.jpg",
    alt: "Two children playing together on the beach",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
  },
];

function WhoWeHelpSection() {
  return (
    <section className="who-help-section" id="who-we-help">
      <h2 className="who-help-heading">
        Who we <span>help</span>
      </h2>

      <div className="who-help-cards">
        {whoWeHelpCards.map((card) => (
          <article className="who-help-card" key={card.title}>
            <div className="who-help-image">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 25vw, 88vw"
                className="who-help-photo"
              />
            </div>

            <div className="who-help-card-content">
              <h3 className="who-help-card-title">{card.title}</h3>
              <p className="who-help-card-description">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StatementSection() {
  return (
    <section className="statement-section">
      <div className="statement-visual">
        <div className="statement-image">
          <Image
            src="/images/story-background.png"
            alt=""
            fill
            sizes="100vw"
            className="statement-photo"
          />
        </div>

        <div className="statement-overlay" />

        <div className="statement-content">
          <h2>
            You deserve a place where your story is heard, valued, and
            understood.{" "}
            <em>
              Nothing will be too heavy for us to carry together.
            </em>
          </h2>
        </div>
      </div>
    </section>
  );
}


const expertiseColumns = [
  [
    "Dissociation",
    "Trauma",
    "Family Conflict",
    "Special Needs Parenting",
    "Depression",
    "Marriage",
  ],
  [
    "Anxiety",
    "Relationships",
    "Children",
    "Teens",
    "Intimacy & Connection",
    "...And More.",
  ],
];

function ExpertiseSection() {
  return (
    <section className="expertise-section" id="expertise">
      <h2 className="expertise-heading">
        <span>Our areas of</span>
        <span className="expertise-script">expertise</span>
      </h2>

      {expertiseColumns.map((column, columnIndex) => (
        <div
          className="expertise-column"
          key={columnIndex}
          aria-label={`Expertise column ${columnIndex + 1}`}
        >
          {column.map((item) => (
            <div className="expertise-item" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

function HowWeWorkSection() {
  return (
    <section className="how-work-section" id="how-we-work">
      <div className="how-work-grid">
        <p className="how-work-eyebrow">HOW WE WORK</p>

        <h2 className="how-work-heading">
          We’re here to make a difference.
        </h2>

        <div className="how-work-image">
          <Image
            src="/images/how-we-work.jpg"
            alt="A woman and child in white dresses dancing on a sandy beach at sunset"
            fill
            sizes="(min-width: 768px) 23vw, 100vw"
            className="how-work-photo"
          />
          <div className="how-work-image-tint" aria-hidden="true" />
        </div>

        <div className="how-work-left-copy">
          <p className="how-work-emphasis">
            The clients we work with are balancing so many things at once,
            it’s often hard for them to put themselves first.
          </p>

          <p className="how-work-paragraph">
            Here, your needs are always top priority. Our team takes the time
            to deeply listen to our clients in order to truly understand their
            story and their struggles. We recognize that no two people are
            the same and that personalized therapy means an intentional,
            tailored approach. (You won’t find anything “one-size-fits-all”
            here.) If you’re ready to do the work, we’re ready to help.
          </p>
        </div>

        <p className="how-work-right-copy">
          Sometimes we may gently challenge you to look at things differently
          and other times we may explore your emotions, all while encouraging
          you to practice what you’ve learned in your daily life. We take what
          we do seriously because we know how important it is for you to heal
          from what’s hurting you, discover a fulfilling life, and build
          meaningful relationships. Our goal is to walk alongside you in this
          journey, offering support and guidance as you uncover your strengths
          and embrace what the future can hold for you.
        </p>

        <a
          className="how-work-cta"
          href="/therapists-newbury-park"
        >
          Learn more about us
        </a>
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
      <WhoWeHelpSection />
      <StatementSection />
      <ExpertiseSection />
      <HowWeWorkSection />
      <HonoringSection />
      <SpecialtiesSection />
      <AppointmentSection />
      <Footer />
    </main>
  );
}
