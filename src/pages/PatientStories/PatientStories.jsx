import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./PatientStories.css";
import "../fitmax-premium.css";

const recoverySteps = [
  {
    number: "01",
    title: "Starting Point",
    text: "Understand pain, movement, strength and the goals that matter to you.",
  },
  {
    number: "02",
    title: "Assessment",
    text: "Build a clearer picture of the condition and the direction of recovery.",
  },
  {
    number: "03",
    title: "Rehabilitation",
    text: "Follow a personalized plan with guided exercises and clinical support.",
  },
  {
    number: "04",
    title: "Progress",
    text: "Review consistency, symptoms, movement and meaningful milestones.",
  },
  {
    number: "05",
    title: "Return to Life",
    text: "Work towards everyday activities, confidence and greater independence.",
  },
];

const recoveryPaths = [
  {
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1400",
    label: "EXAMPLE JOURNEY",
    title: "Sports Injury Recovery",
    text:
      "A structured recovery path can focus on restoring movement, rebuilding strength and gradually returning to desired activities.",
    link: "/conditions/sports-injury",
  },
  {
    image:
      "https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=1400",
    label: "EXAMPLE JOURNEY",
    title: "Mobility & Strength",
    text:
      "Rehabilitation can help build control, strength and confidence around the movements that matter in everyday life.",
    link: "/conditions/mobility-strength",
  },
];

function PatientStories() {
  return (
    <div className="ps-page">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="ps-hero">
          <div className="ps-container ps-hero-grid">
            <div className="ps-hero-content">
              <span className="ps-eyebrow">PATIENT STORIES</span>

              <h1 style={{color:"white"}}>
                Every recovery
                <span> has a story.</span>
              </h1>

              <p>
                Recovery is personal. FitMax is built around the progress,
                goals and everyday moments that make getting better meaningful.
              </p>

              <div className="ps-hero-actions">
                <Link
                  to="/book-assessment"
                  className="ps-primary-btn"
                >
                  Start Your Recovery
                  <span>↗</span>
                </Link>

                <Link
                  to="/how-it-works"
                  className="ps-secondary-btn"
                >
                  See How It Works
                </Link>
              </div>

              <div className="ps-hero-meta">
                <div>
                  <strong>01</strong>
                  <span>Understand</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Rehabilitate</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Progress</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Return</span>
                </div>
              </div>
            </div>

            <div className="ps-hero-visual">
              <div className="ps-hero-image">
                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Illustrative physiotherapy rehabilitation session"
                />

                <div className="ps-image-shade" />

                <span className="ps-image-label">
                  ILLUSTRATIVE IMAGE
                </span>
              </div>

              <div className="ps-journey-card">
                <span>RECOVERY JOURNEY</span>

                <strong>
                  Progress is built
                  <br />
                  one step at a time.
                </strong>

                <div className="ps-journey-line">
                  <i />
                </div>

                <div className="ps-journey-caption">
                  <span>Assessment</span>
                  <span>Rehabilitation</span>
                  <span>Progress</span>
                </div>
              </div>

              <div className="ps-number-card">
                <strong>05</strong>
                <span>stages of a<br />recovery journey</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="ps-intro">
          <div className="ps-container ps-intro-grid">
            <div className="ps-intro-heading">
              <span className="ps-section-label">
                THE FITMAX APPROACH
              </span>

              <h2>
                Recovery is more than
                <span> reducing pain.</span>
              </h2>
            </div>

            <div className="ps-intro-content">
              <p>
                A meaningful recovery can include better movement, greater
                strength, renewed confidence and the ability to return to
                everyday life.
              </p>

              <div className="ps-goal-list">
                <div>
                  <strong>01</strong>
                  <span>Move with confidence</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Build strength</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Return to routine</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED JOURNEY
        ===================================================== */}
        <section className="ps-feature">
          <div className="ps-container">
            <div className="ps-feature-heading">
              <div>
                <span className="ps-section-label">
                  RECOVERY JOURNEYS
                </span>

                <h2>
                  What a recovery journey
                  <span> can look like.</span>
                </h2>
              </div>

              <p>
                Every patient is different. This illustrative journey shows
                how rehabilitation can progress from understanding the
                starting point to rebuilding movement and confidence.
              </p>
            </div>

            <div className="ps-feature-card">
              <div className="ps-feature-image">
                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Illustrative knee rehabilitation session"
                />

                <span>ILLUSTRATIVE IMAGE</span>

                <div className="ps-feature-image-caption">
                  <small>EXAMPLE JOURNEY</small>
                  <strong>Knee Rehabilitation</strong>
                </div>
              </div>

              <div className="ps-feature-content">
                <span className="ps-small-label">
                  KNEE RECOVERY
                </span>

                <h3>
                  From understanding
                  <br />
                  to moving forward.
                </h3>

                <p>
                  A structured knee recovery journey can move through
                  assessment, rehabilitation, progress and gradual return
                  to everyday movement.
                </p>

                <div className="ps-recovery-timeline">
                  {recoverySteps.map((step, index) => (
                    <div
                      className="ps-timeline-item"
                      key={step.number}
                    >
                      <div className="ps-timeline-marker">
                        <span>{step.number}</span>

                        {index !== recoverySteps.length - 1 && (
                          <i />
                        )}
                      </div>

                      <div className="ps-timeline-content">
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OTHER JOURNEYS
        ===================================================== */}
        <section className="ps-paths">
          <div className="ps-container">
            <div className="ps-paths-heading">
              <div>
                <span className="ps-section-label">
                  MORE RECOVERY PATHS
                </span>

                <h2>
                  Different goals.
                  <span> One focus: moving forward.</span>
                </h2>
              </div>

              <p>
                Recovery can look different depending on the condition,
                starting point and goals of each person.
              </p>
            </div>

            <div className="ps-path-grid">
              {recoveryPaths.map((path, index) => (
                <article className="ps-path-card" key={path.title}>
                  <div className="ps-path-image">
                    <img
                      src={path.image}
                      alt={`Illustrative ${path.title.toLowerCase()}`}
                    />

                    <span>ILLUSTRATIVE IMAGE</span>

                    <div className="ps-path-number">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="ps-path-content">
                    <small>{path.label}</small>

                    <h3>{path.title}</h3>

                    <p>{path.text}</p>

                    <Link to={path.link}>
                      Explore This Path
                      <span>↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PATIENT VOICES
        ===================================================== */}
        <section className="ps-voices">
          <div className="ps-container ps-voices-grid">
            <div className="ps-voices-heading">
              <span className="ps-section-label">
                PATIENT VOICES
              </span>

              <h2>
                Real stories belong
                <span> to real people.</span>
              </h2>
            </div>

            <div className="ps-consent-card">
              <div className="ps-consent-icon">“</div>

              <span>CONSENT FIRST</span>

              <p>
                This space is reserved for patient experiences shared with
                permission. Published stories can show the starting point,
                rehabilitation, progress and outcome without promising the
                same result for every person.
              </p>

              <div className="ps-consent-bottom">
                <span>FITMAX</span>
                <span>Patient-first recovery</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="ps-cta">
          <div className="ps-cta-ring ps-cta-ring-one" />
          <div className="ps-cta-ring ps-cta-ring-two" />

          <div className="ps-container ps-cta-inner">
            <span className="ps-eyebrow">
              YOUR STORY STARTS HERE
            </span>

            <h2>
              Ready to start
              <span> your recovery?</span>
            </h2>

            <p>
              Take the first step towards a clearer, more personalized
              recovery journey.
            </p>

            <Link
              to="/book-assessment"
              className="ps-primary-btn"
            >
              Book an Assessment
              <span>↗</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PatientStories;