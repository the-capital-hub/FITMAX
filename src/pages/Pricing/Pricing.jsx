import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Pricing.css";
import "../fitmax-premium.css";
import FitMaxMark from "../../components/FITMaxMark/FItMaxtMark";

const careOptions = [
  {
    number: "01",
    tag: "START",
    title: "Assessment",
    subtitle: "Understand where you are starting",
    description:
      "Start with a professional assessment to understand your condition, movement, recovery goals and the next steps that may be appropriate for you.",
    items: [
      "Initial assessment",
      "Understand your recovery goals",
      "Personalized next steps",
      "Care guidance"
    ]
  },
  {
    number: "02",
    tag: "RECOVER",
    title: "Guided Rehabilitation",
    subtitle: "A plan built around your recovery",
    description:
      "Continue with structured rehabilitation designed around your needs, guided exercises and regular progress checks.",
    items: [
      "Personalized rehabilitation plan",
      "Guided exercises",
      "Progress tracking",
      "Regular check ins"
    ],
    featured: true
  },
  {
    number: "03",
    tag: "CONTINUE",
    title: "Ongoing Care",
    subtitle: "Support as your recovery changes",
    description:
      "Stay connected as your recovery develops, with follow up care and adjustments when your needs or goals change.",
    items: [
      "Follow up consultations",
      "Plan adjustments",
      "Progress reviews",
      "Recovery guidance"
    ]
  }
];

const recoverySteps = [
  {
    number: "01",
    title: "Understand",
    text: "Start by understanding your condition and recovery goals."
  },
  {
    number: "02",
    title: "Plan",
    text: "Build a rehabilitation approach around your individual needs."
  },
  {
    number: "03",
    title: "Progress",
    text: "Stay consistent, track progress and adjust when needed."
  },
  {
    number: "04",
    title: "Return",
    text: "Work toward the movement, confidence and independence you want."
  }
];

function Pricing() {
  return (
    <div className="pr-page">
      <Navbar />

      <main>

        {/* HERO */}

        <section className="pr-hero">

          <div className="pr-hero-glow pr-glow-one" />
          <div className="pr-hero-glow pr-glow-two" />

          <div className="pr-container pr-hero-grid">

            <div className="pr-hero-content">

              <div className="pr-eyebrow">
                <FitMaxMark/>
                PRICING & CARE
              </div>

              <h1>
                Care that is clear
                <em> from the start.</em>
              </h1>

              <p>
                Your recovery is personal. FitMax structures care
                around where you are now, what you want to achieve
                and the support you may need along the way.
              </p>

              <div className="pr-actions">

                <Link
                  to="/book-assessment"
                  className="pr-primary-btn"
                >
                  <span>Book an Assessment</span>
                  <b>↗</b>
                </Link>

                <Link
                  to="/contact"
                  className="pr-secondary-btn"
                >
                  Contact FitMax
                </Link>

              </div>

            </div>


            <div className="pr-hero-side">

              <div className="pr-hero-image">

                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Physiotherapy and rehabilitation care"
                />

                <div className="pr-image-shade" />

              </div>

              <div className="pr-mark-wrap">
                <FitMaxMark/>
              </div>

              <div className="pr-hero-note">

                <span>FITMAX APPROACH</span>

                <strong>
                  Understand first.
                  <br />
                  Recover with direction.
                </strong>

              </div>

            </div>

          </div>
        </section>


        {/* CARE OPTIONS */}

        <section className="pr-options">

          <div className="pr-container">

            <div className="pr-section-heading">

              <div>
                <span className="pr-section-label">
                  CARE OPTIONS
                </span>

                <h2>
                  Support for every
                  <em> stage of recovery.</em>
                </h2>
              </div>

              <p>
                Your care can change as your recovery progresses.
                Start where you are and continue with the support
                that fits your needs.
              </p>

            </div>


            <div className="pr-pricing-note">

              <span>i</span>

              <p>
                FitMax care and consultation fees can vary
                depending on the service, consultation format
                and individual care plan. Current fees are
                confirmed before booking.
              </p>

            </div>


            <div className="pr-cards">

              {careOptions.map((option) => (

                <article
                  className={`pr-card ${
                    option.featured ? "pr-card-featured" : ""
                  }`}
                  key={option.title}
                >

                  {option.featured && (
                    <div className="pr-featured-badge">
                      REHABILITATION
                    </div>
                  )}

                  <div className="pr-card-top">

                    <span className="pr-card-tag">
                      {option.tag}
                    </span>

                    <span className="pr-card-number">
                      {option.number}
                    </span>

                  </div>


                  <h3>
                    {option.title}
                  </h3>

                  <strong className="pr-card-subtitle">
                    {option.subtitle}
                  </strong>

                  <p className="pr-card-description">
                    {option.description}
                  </p>


                  <div className="pr-card-line" />


                  <ul>

                    {option.items.map((item) => (

                      <li key={item}>
                        <span>✓</span>
                        {item}
                      </li>

                    ))}

                  </ul>


                  <Link
                    to="/book-assessment"
                    className="pr-card-btn"
                  >
                    <span>Discuss Your Care</span>
                    <b>↗</b>
                  </Link>

                </article>

              ))}

            </div>

          </div>
        </section>


        {/* RECOVERY JOURNEY */}

        <section className="pr-journey">

          <div className="pr-container">

            <div className="pr-journey-grid">

              <div className="pr-journey-content">

                <span className="pr-section-label">
                  THE FITMAX APPROACH
                </span>

                <h2>
                  Recovery is more than
                  <em> one appointment.</em>
                </h2>

                <p>
                  Physiotherapy is a process. FitMax is designed
                  to support that process from understanding your
                  needs through rehabilitation and progress toward
                  everyday life.
                </p>

                <Link
                  to="/how-it-works"
                  className="pr-text-link"
                >
                  <span>See How FitMax Works</span>
                  <b>↗</b>
                </Link>

              </div>


              <div className="pr-journey-list">

                {recoverySteps.map((step) => (

                  <div
                    className="pr-journey-item"
                    key={step.number}
                  >

                    <span className="pr-step-number">
                      {step.number}
                    </span>

                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>

                    <span className="pr-step-arrow">
                      ↗
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>
        </section>


        {/* WHAT CARE SUPPORTS */}

        <section className="pr-support">

          <div className="pr-container pr-support-grid">

            <div className="pr-support-image">

              <img
                src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Patient receiving rehabilitation support"
              />

              <div className="pr-support-overlay" />

              <div className="pr-support-caption">

                <span>RECOVERY SUPPORT</span>

                <strong>
                  Built around your
                  <br />
                  individual journey.
                </strong>

              </div>

            </div>


            <div className="pr-support-content">

              <span className="pr-section-label">
                WHAT YOUR CARE SUPPORTS
              </span>

              <h2>
                A clearer path
                <em> forward.</em>
              </h2>

              <p>
                The goal is not simply to complete appointments.
                It is to help you understand your recovery,
                stay consistent with rehabilitation and work
                toward the things that matter in everyday life.
              </p>


              <div className="pr-support-points">

                <div>
                  <span>01</span>
                  <strong>Understand your condition</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Build a personalized plan</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Stay consistent with rehabilitation</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Track progress and adjust when needed</strong>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* CTA */}

        <section className="pr-cta">

          <div className="pr-cta-glow" />

          <div className="pr-container">

            <div className="pr-cta-inner">

              <div>

                <div className="pr-eyebrow">
                  <FitMaxMark/>
                  START YOUR RECOVERY
                </div>

                <h2>
                  Ready to understand
                  <em> your next step?</em>
                </h2>

                <p>
                  Start with an assessment and discuss what
                  recovery support may be right for you.
                </p>

              </div>

              <Link
                to="/book-assessment"
                className="pr-cta-btn"
              >
                <span>Book an Assessment</span>
                <b>↗</b>
              </Link>

            </div>


            <div className="pr-bottom-mark">
              <FitMaxMark/>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Pricing;