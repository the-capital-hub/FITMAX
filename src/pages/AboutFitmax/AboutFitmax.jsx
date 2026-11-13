
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AboutFitmax.css";
import "../fitmax-premium.css";

const principles = [
  {
    number: "01",
    title: "Patient first",
    description:
      "FitMax is built around the person recovering, their goals and the life they want to return to.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Personalized care",
    description:
      "Recovery is different for everyone. Care should reflect your condition, starting point and progress.",
    icon: "✳",
  },
  {
    number: "03",
    title: "Progress matters",
    description:
      "Movement, strength, consistency and confidence are important parts of your recovery journey.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Clinical guidance",
    description:
      "Digital rehabilitation should remain connected to professional physiotherapy and safety guidance.",
    icon: "✚",
  },
];

const journey = [
  {
    number: "01",
    title: "Injury or concern",
    description: "Understand your movement concern and recovery goals.",
    icon: "01",
  },
  {
    number: "02",
    title: "Assessment",
    description: "Begin with an assessment of your condition and needs.",
    icon: "02",
  },
  {
    number: "03",
    title: "Personalized plan",
    description: "Receive a rehabilitation plan designed around you.",
    icon: "03",
  },
  {
    number: "04",
    title: "Guided rehabilitation",
    description: "Follow guided exercises with professional support.",
    icon: "04",
  },
  {
    number: "05",
    title: "Track progress",
    description: "Understand your improvements and stay consistent.",
    icon: "05",
  },
  {
    number: "06",
    title: "Return to life",
    description: "Build confidence and return to the activities you love.",
    icon: "06",
  },
];

const trustPoints = [
  "Professional physiotherapy",
  "Personalized rehabilitation",
  "Guided exercise programs",
  "Progress tracking",
];

function AboutFitmax() {
  return (
    <div className="ab-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="ab-hero">
          <div className="ab-container ab-hero-grid">
            <div className="ab-hero-content">
              <span className="ab-kicker">
                PHYSIOTHERAPY · REHABILITATION · RECOVERY
              </span>

              <h1 style={{color:"white"}}>
                Move Better.
                <br />
                Recover Faster.
                <br />
                Live <span>Stronger.</span>
              </h1>

              <p>
                FitMax brings personalized physiotherapy, structured
                rehabilitation and expert guidance together to help you
                move better and return to the life you love.
              </p>

              <div className="ab-hero-actions">
                <Link to="/book-assessment" className="ab-primary-btn">
                  Start Your Recovery <span>↗</span>
                </Link>
                <Link to="/services" className="ab-outline-btn">
                  Explore Services
                </Link>
              </div>

              <div className="ab-hero-trust">
                <div className="ab-avatar-stack">
                  <img
                    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Patient"
                  />
                  <img
                    src="https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Patient"
                  />
                  <img
                    src="https://images.pexels.com/photos/7551664/pexels-photo-7551664.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Patient"
                  />
                </div>
                <span>
                  Care centered around
                  <strong> your recovery journey</strong>
                </span>
              </div>
            </div>

            <div className="ab-hero-visual">
              <img
                src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Physiotherapist guiding a patient through rehabilitation"
              />

              <div className="ab-image-caption">
                <span className="ab-caption-icon">✚</span>
                <div>
                  <strong>Care that moves with you</strong>
                  <small>Personalized physiotherapy</small>
                </div>
              </div>

              <div className="ab-image-index">FITMAX · ABOUT US</div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="ab-trust-strip">
          <div className="ab-container ab-trust-grid">
            {trustPoints.map((point, index) => (
              <div className="ab-trust-item" key={point}>
                <span>0{index + 1}</span>
                <strong>{point}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* OUR STORY */}
        <section className="ab-story">
          <div className="ab-container ab-story-grid">
            <div className="ab-story-content">
              <span className="ab-label">WHY FITMAX EXISTS</span>
              <h2>
                Recovery should help you return to the things that matter.
              </h2>
              <p>
                Pain can be only one part of a recovery journey. FitMax
                focuses on movement, strength, confidence, function and
                independence, with physiotherapy at the center of care.
              </p>
              <p>
                We bring assessment, rehabilitation, guided exercise,
                progress tracking and communication into a more connected
                recovery experience.
              </p>
              <Link to="/book-assessment" className="ab-text-link">
                Begin your journey <span>↗</span>
              </Link>
            </div>

            <div className="ab-story-visual">
              <img
                src="https://images.pexels.com/photos/5794056/pexels-photo-5794056.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Patient performing a guided physiotherapy exercise"
              />
              <div className="ab-story-note">
                <span>01</span>
                <div>
                  <strong>Your recovery matters</strong>
                  <small>Every step forward counts.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="ab-principles">
          <div className="ab-container">
            <div className="ab-section-heading">
              <span className="ab-label">OUR PRINCIPLES</span>
              <h2>Care built around the person, not just the condition.</h2>
              <p>
                Every recovery journey deserves attention, understanding
                and the right professional guidance.
              </p>
            </div>

            <div className="ab-principle-grid">
              {principles.map((item) => (
                <article className="ab-principle-card" key={item.number}>
                  <div className="ab-card-top">
                    <span className="ab-principle-icon">{item.icon}</span>
                    <span className="ab-card-number">{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="ab-card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RECOVERY JOURNEY */}
        <section className="ab-journey">
          <div className="ab-container">
            <div className="ab-section-heading ab-journey-heading">
              <span className="ab-label">THE FITMAX JOURNEY</span>
              <h2>From injury to confidence.</h2>
              <p>
                A clearer path to understand your recovery, stay motivated
                and know what comes next.
              </p>
            </div>

            <div className="ab-journey-grid">
              {journey.map((step, index) => (
                <article className="ab-journey-card" key={step.number}>
                  <div className="ab-journey-top">
                    <span className="ab-journey-icon">{step.icon}</span>
                    <span className="ab-journey-number">
                      {step.number}
                    </span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {index !== journey.length - 1 && (
                    <span className="ab-journey-arrow">→</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROFESSIONAL CARE */}
        <section className="ab-care">
          <div className="ab-container ab-care-grid">
            <div>
              <span className="ab-label">PROFESSIONAL CARE</span>
              <h2>Digital care should still feel human.</h2>
            </div>

            <div className="ab-care-content">
              <p>
                Technology can make rehabilitation more accessible and
                organized, but professional guidance and human connection
                remain essential to meaningful care.
              </p>

              <div className="ab-care-points">
                <span>✓ Professional physiotherapy guidance</span>
                <span>✓ Clear communication and support</span>
                <span>✓ Appropriate clinical assessment when needed</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ab-cta">
          <div className="ab-container ab-cta-inner">
            <div>
              <span className="ab-kicker">YOUR RECOVERY MATTERS</span>
              <h2>Ready to take the next step?</h2>
              <p>
                Start with an assessment and understand the path ahead.
              </p>
            </div>

            <Link to="/book-assessment" className="ab-cta-btn">
              Book an Assessment <span>↗</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutFitmax;
