import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./HowItWorks.css";
import "../fitmax-premium.css";


const journey = [
  {
    number: "01",
    title: "Assessment",
    short: "Understand",
    description:
      "We start by understanding your condition, movement, symptoms, goals and current stage of recovery.",
    image:
      "https://images.pexels.com/photos/3846043/pexels-photo-3846043.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "02",
    title: "Personalized Plan",
    short: "Plan",
    description:
      "Your physiotherapist builds a rehabilitation plan around your condition, needs and recovery goals.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    title: "Guided Rehabilitation",
    short: "Rebuild",
    description:
      "Follow structured exercises with clear guidance and progressive rehabilitation designed for your stage.",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "04",
    title: "Regular Check ins",
    short: "Connect",
    description:
      "Stay connected with your physiotherapist and receive guidance as your recovery changes over time.",
    image:
      "https://images.pexels.com/photos/7089624/pexels-photo-7089624.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "05",
    title: "Track Progress",
    short: "Progress",
    description:
      "Track your exercises, symptoms and progress so you can understand how your rehabilitation is moving forward.",
    image:
      "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "06",
    title: "Return to Life",
    short: "Return",
    description:
      "Build strength, confidence and independence so you can gradually return to the activities that matter.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const onlineFeatures = [
  {
    number: "01",
    title: "Meet your physiotherapist",
    text: "Connect with professional physiotherapy care from the beginning of your recovery journey.",
    image:
      "https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&w=1000",
    icon: "✦",
  },
  {
    number: "02",
    title: "Receive your plan",
    text: "Get a structured rehabilitation program shaped around your condition and goals.",
    image:
      "https://images.pexels.com/photos/6456302/pexels-photo-6456302.jpeg?auto=compress&cs=tinysrgb&w=1000",
    icon: "↗",
  },
  {
    number: "03",
    title: "Follow guided exercises",
    text: "Know what to do, how to do it and how your rehabilitation should progress.",
    image:
      "https://images.pexels.com/photos/6456302/pexels-photo-6456302.jpeg?auto=compress&cs=tinysrgb&w=1000",
    icon: "◌",
  },
  {
    number: "04",
    title: "Stay connected",
    text: "Keep communication open with your physiotherapist throughout your recovery.",
    image:
      "https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg?auto=compress&cs=tinysrgb&w=1000",
    icon: "◎",
  },
];

const expectations = [
  {
    number: "01",
    title: "Understand your condition",
    text: "Start with a clear understanding of where you are and what your recovery requires.",
  },
  {
    number: "02",
    title: "Follow your rehabilitation",
    text: "Complete your guided exercises and follow the plan created around your needs.",
  },
  {
    number: "03",
    title: "Stay consistent",
    text: "Build recovery into your routine with regular guidance and check ins.",
  },
  {
    number: "04",
    title: "See your progress",
    text: "Track changes and adapt your rehabilitation as you move forward.",
  },
];

function FitMaxMark() {
  return (
    <span className="hiw-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function HowItWorks() {
  return (
    <div className="hiw-page">
      <Navbar />

      <main>
        {/* =========================================
            HERO
        ========================================= */}
        <section className="hiw-hero">
          <div className="hiw-hero-glow hiw-glow-one" />
          <div className="hiw-hero-glow hiw-glow-two" />

          <div className="hiw-container hiw-hero-grid">
            <div className="hiw-hero-content">
              <div className="hiw-eyebrow">
                <FitMaxMark />
                <span>HOW FITMAX WORKS</span>
              </div>

              <div className="hiw-kicker">
                A clearer path to recovery.
              </div>

              <h1>
                Recovery is more than
                <span>reducing pain.</span>
              </h1>

              <p className="hiw-hero-text">
                Understand your condition, follow a personalized
                rehabilitation plan, track your progress and move
                confidently towards normal life.
              </p>

              <div className="hiw-actions">
                <a href="/book-assessment" className="hiw-primary">
                  <span>Start Your Recovery</span>
                  <span>↗</span>
                </a>

                <a href="/conditions" className="hiw-secondary">
                  Explore Conditions
                </a>
              </div>

              <div className="hiw-hero-points">
                <div>
                  <span>01</span>
                  <strong>Understand</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Rehabilitate</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Progress</strong>
                </div>
              </div>
            </div>

            <div className="hiw-hero-visual">
              <div className="hiw-hero-image">
                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Physiotherapist guiding a patient during rehabilitation"
                />

                <div className="hiw-image-overlay" />

                <div className="hiw-image-meta">
                  <span>FITMAX / RECOVERY</span>
                  <strong>01</strong>
                </div>

                <div className="hiw-image-caption">
                  <span>START HERE</span>
                  <strong>
                    Understand where
                    <br />
                    your recovery begins.
                  </strong>
                </div>
              </div>

              <div className="hiw-floating-card">
                <div className="hiw-floating-icon">✦</div>

                <div>
                  <small>YOUR RECOVERY</small>
                  <strong>Starts with understanding.</strong>
                </div>

                <div className="hiw-floating-line">
                  <span />
                </div>
              </div>

              <div className="hiw-orbit hiw-orbit-one" />
              <div className="hiw-orbit hiw-orbit-two" />
            </div>
          </div>

          <div className="hiw-scroll">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
        </section>

        {/* =========================================
            INTRO
        ========================================= */}
        {/* <section className="hiw-intro">
          <div className="hiw-container hiw-intro-grid">
            <div className="hiw-section-index">
              <span>THE FITMAX APPROACH</span>
              <strong>02</strong>
            </div>

            <div className="hiw-intro-content">
              <h2>
                Recovery should help you
                <span>get back to life.</span>
              </h2>

              <p>
                Physiotherapy is not only about reducing pain. It is about
                rebuilding movement, strength and confidence so you can return
                to the things that matter to you.
              </p>

              <div className="hiw-intro-line">
                <span />
                <strong>PAIN → MOVEMENT → STRENGTH → CONFIDENCE → LIFE</strong>
              </div>
            </div>
          </div>
        </section> */}

        {/* =========================================
            RECOVERY JOURNEY
        ========================================= */}
        <section className="hiw-journey">
  <div className="hiw-journey-bg-circle" />

  <div className="hiw-container">

    <div className="hiw-journey-heading">
      <div>
        <div className="hiw-eyebrow">
          <FitMaxMark />
          <span>YOUR RECOVERY JOURNEY</span>
        </div>

        <h2>
          Six steps.
          <span>One direction.</span>
        </h2>
      </div>

      <p>
        Your recovery moves through clear stages, from understanding your
        condition to building confidence and returning to everyday life.
      </p>
    </div>

    <div className="hiw-journey-showcase">

      {/* MAIN IMAGE */}
      <div className="hiw-journey-feature">

        <img
          src={journey[0].image}
          alt={journey[0].title}
          className="hiw-journey-feature-image"
        />

        <div className="hiw-journey-feature-overlay" />

        <div className="hiw-journey-feature-top">
          <span>FITMAX / RECOVERY</span>
          <strong>01</strong>
        </div>

        <div className="hiw-journey-feature-bottom">
          <span>STEP 01</span>

          <h3>Assessment</h3>

          <p>
            Understand your condition, movement, symptoms and recovery goals.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="hiw-journey-info">

        <div className="hiw-journey-current">
          <span>01</span>

          <div>
            <small>WHERE YOUR JOURNEY BEGINS</small>
            <h3>Understand where you are.</h3>
          </div>
        </div>

        <p className="hiw-journey-description">
          Your physiotherapist starts by understanding your condition,
          symptoms, movement, current abilities and what you want to get back
          to doing.
        </p>

        <div className="hiw-journey-progress">
          <span />
        </div>

        <div className="hiw-journey-nav">

          {journey.map((item, index) => (
            <button
              key={item.number}
              className={index === 0 ? "active" : ""}
            >
              <span>{item.number}</span>

              <div>
                <strong>{item.title}</strong>
                <small>{item.short}</small>
              </div>

              <i>↗</i>
            </button>
          ))}

        </div>

      </div>
    </div>

    {/* BOTTOM JOURNEY LINE */}
   

  </div>
</section>

        {/* =========================================
            BUILT AROUND YOU
        ========================================= */}
        {/* <section className="hiw-around">
          <div className="hiw-around-glow" />

          <div className="hiw-container">
            <div className="hiw-around-top">
              <div className="hiw-eyebrow">
                <FitMaxMark />
                <span>BUILT AROUND YOU</span>
              </div>

              <span>03</span>
            </div>

            <div className="hiw-around-grid">
              <div className="hiw-around-image">
                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Patient receiving personalized physiotherapy care"
                />

                <div className="hiw-around-image-overlay" />

                <div className="hiw-around-caption">
                  <span>FITMAX CARE</span>

                  <strong>
                    Your condition matters.
                    <br />
                    So does your life.
                  </strong>
                </div>

                <div className="hiw-around-badge">
                  <span>04</span>
                  <strong>Confidence</strong>
                </div>
              </div>

              <div className="hiw-around-content">
                <span className="hiw-small-label">
                  YOUR RECOVERY IS PERSONAL
                </span>

                <h2>
                  Rehabilitation should
                  <span>fit your life.</span>
                </h2>

                <p>
                  Your condition, your goals and your progress all influence
                  how your rehabilitation should move forward. FitMax keeps
                  the patient at the centre of every stage.
                </p>

                <a href="/book-assessment" className="hiw-text-link">
                  <span>Start Your Recovery</span>
                  <span>↗</span>
                </a>

                <div className="hiw-principles">
                  <div>
                    <span>01</span>
                    <strong>Condition</strong>
                    <p>Understand where you are.</p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Goals</strong>
                    <p>Define where you want to go.</p>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Progress</strong>
                    <p>Adapt as you recover.</p>
                  </div>

                  <div>
                    <span>04</span>
                    <strong>Confidence</strong>
                    <p>Return to what matters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* =========================================
            ONLINE PHYSIOTHERAPY
        ========================================= */}
        <section className="hiw-online">
          <div className="hiw-container">
            <div className="hiw-section-heading">
              <div>
                <div className="hiw-eyebrow">
                  <FitMaxMark />
                  <span>ONLINE PHYSIOTHERAPY</span>
                </div>

                <h2>
                  More than a
                  <span>video call.</span>
                </h2>
              </div>

              <p>
                Digital rehabilitation gives you structure between
                consultations so you can stay connected, consistent and
                informed throughout your recovery.
              </p>
            </div>

            <div className="hiw-online-grid">
              {onlineFeatures.map((item) => (
                <article className="hiw-online-card" key={item.number}>
                  <img src={item.image} alt={item.title} />

                  <div className="hiw-online-overlay" />

                  <div className="hiw-online-number">
                    {item.number}
                  </div>

                  <div className="hiw-online-icon">
                    {item.icon}
                  </div>

                  <div className="hiw-online-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            PATIENT JOURNEY
        ========================================= */}
        <section className="hiw-patient-journey">
          <div className="hiw-container">
            <div className="hiw-patient-heading">
              <div className="hiw-eyebrow">
                <FitMaxMark />
                <span>FROM RECOVERY TO LIFE</span>
              </div>

              <h2>
                Know where you are.
                <span>Know where you're going.</span>
              </h2>
            </div>

            <div className="hiw-life-path">
              <div className="hiw-life-line">
                <span />
              </div>

              <div className="hiw-life-step">
                <div className="hiw-life-icon">01</div>
                <strong>Understand</strong>
                <span>Your condition</span>
              </div>

              <div className="hiw-life-step">
                <div className="hiw-life-icon">02</div>
                <strong>Start</strong>
                <span>Your plan</span>
              </div>

              <div className="hiw-life-step">
                <div className="hiw-life-icon">03</div>
                <strong>Follow</strong>
                <span>Your rehabilitation</span>
              </div>

              <div className="hiw-life-step">
                <div className="hiw-life-icon">04</div>
                <strong>Improve</strong>
                <span>Your movement</span>
              </div>

              <div className="hiw-life-step">
                <div className="hiw-life-icon">05</div>
                <strong>Return</strong>
                <span>To your life</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            WHAT TO EXPECT
        ========================================= */}
        <section className="hiw-expect">
          <div className="hiw-container hiw-expect-grid">
            <div className="hiw-expect-visual">
              <img
                src="https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Patient and physiotherapist discussing rehabilitation"
              />

              <div className="hiw-expect-overlay" />

              <div className="hiw-expect-visual-card">
                <span>FITMAX EXPERIENCE</span>
                <strong>
                  Clear care.
                  <br />
                  Clear progress.
                </strong>
              </div>
            </div>

            <div className="hiw-expect-content">
              <div className="hiw-eyebrow">
                <FitMaxMark />
                <span>WHAT TO EXPECT</span>
              </div>

              <h2>
                A simpler way to
                <span>move forward.</span>
              </h2>

              <p>
                Your experience should feel clear from the first assessment
                through every stage of rehabilitation.
              </p>

              <div className="hiw-expect-list">
                {expectations.map((item) => (
                  <div key={item.number}>
                    <span>{item.number}</span>

                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>

                    <b>↗</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SAFETY
        ========================================= */}
        <section className="hiw-safety">
          <div className="hiw-safety-glow" />

          <div className="hiw-container hiw-safety-grid">
            <div className="hiw-safety-content">
              <div className="hiw-eyebrow">
                <FitMaxMark />
                <span>PROFESSIONAL CARE</span>
              </div>

              <h2>
                Your recovery deserves
                <span>the right guidance.</span>
              </h2>

              <p>
                FitMax focuses on structured rehabilitation and professional
                physiotherapy care. When an in person assessment or additional
                medical attention is needed, your care should reflect that.
              </p>

              <a href="/book-assessment" className="hiw-primary">
                <span>Book an Assessment</span>
                <span>↗</span>
              </a>
            </div>

            <div className="hiw-safety-visual">
              <div className="hiw-safety-circle">
                <div className="hiw-safety-center">
                  <FitMaxMark />
                  <strong>FITMAX</strong>
                  <span>Patient first</span>
                </div>

                <div className="hiw-safety-point point-one">
                  <span>01</span>
                  <strong>Assess</strong>
                </div>

                <div className="hiw-safety-point point-two">
                  <span>02</span>
                  <strong>Guide</strong>
                </div>

                <div className="hiw-safety-point point-three">
                  <span>03</span>
                  <strong>Adapt</strong>
                </div>

                <div className="hiw-safety-point point-four">
                  <span>04</span>
                  <strong>Progress</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            FINAL CTA
        ========================================= */}
        <section className="hiw-final">
          <img
            src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Physiotherapist supporting patient recovery"
          />

          <div className="hiw-final-overlay" />

          <div className="hiw-container hiw-final-inner">
            <div className="hiw-final-content">
              <div className="hiw-eyebrow">
                <FitMaxMark />
                <span>START YOUR RECOVERY</span>
              </div>

              <h2>
                Ready to move
                <span>forward?</span>
              </h2>

              <p>
                Take the first step towards better movement, strength and
                confidence with FitMax.
              </p>

              <a href="/book-assessment" className="hiw-final-button">
                <span>Book an Assessment</span>
                <span>↗</span>
              </a>
            </div>

            <div className="hiw-final-circle">
              <span>ASSESS</span>
              <span>REHABILITATE</span>
              <span>PROGRESS</span>
              <span>RETURN TO LIFE</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HowItWorks;