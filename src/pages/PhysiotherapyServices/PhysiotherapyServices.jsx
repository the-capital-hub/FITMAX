import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./PhysiotherapyServices.css";
import "../fitmax-premium.css";

const services = [
  {
    number: "01",
    title: "Personalized Physiotherapy",
    short: "Care built around your body, goals and recovery.",
    description:
      "Start with a clear understanding of your condition, movement, goals and the activities you want to return to.",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "02",
    title: "Online Physiotherapy",
    short: "Professional rehabilitation, wherever you are.",
    description:
      "Meet your physiotherapist, receive structured guidance, follow your exercises and stay connected between consultations.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "03",
    title: "Injury Rehabilitation",
    short: "Move from injury towards confident movement.",
    description:
      "A structured rehabilitation approach focused on restoring movement, strength, control and everyday function.",
    image:
      "https://images.pexels.com/photos/7659562/pexels-photo-7659562.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "04",
    title: "Post Surgical Rehabilitation",
    short: "Progress through recovery with guidance.",
    description:
      "Work through rehabilitation around your recovery stage, clinical guidance and the goals you want to return to.",
    image:
      "https://images.pexels.com/photos/7089626/pexels-photo-7089626.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "05",
    title: "Sports Rehabilitation",
    short: "Rebuild strength and return with confidence.",
    description:
      "Work towards restoring movement, strength and confidence after a sports related injury.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "06",
    title: "Mobility & Strength",
    short: "Build better movement for everyday life.",
    description:
      "Improve mobility, physical confidence and everyday function through structured rehabilitation.",
    image:
      "https://images.pexels.com/photos/6740758/pexels-photo-6740758.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const goals = [
  {
    number: "01",
    title: "Move with more confidence",
    text: "Work towards more comfortable, controlled movement in the activities that matter to you.",
  },
  {
    number: "02",
    title: "Build strength and control",
    text: "Develop the strength, stability and movement control needed for everyday activities.",
  },
  {
    number: "03",
    title: "Return to your routine",
    text: "Work towards the work, home activities and routines you want to get back to.",
  },
  {
    number: "04",
    title: "Return to sport",
    text: "Progress towards your sporting goals with rehabilitation appropriate to your recovery.",
  },
];

function PhysiotherapyServices() {
  return (
    <div className="services-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="services-hero">
          <div className="services-hero-glow services-hero-glow-one" />
          <div className="services-hero-glow services-hero-glow-two" />

          <div className="services-container services-hero-inner">
            <div className="services-hero-copy">
              <div className="services-eyebrow">
                <span className="services-eyebrow-line" />
                <span>PHYSIOTHERAPY & REHABILITATION</span>
              </div>

              <h1>
                Care that
                <span>moves with you.</span>
              </h1>

              <p>
                Personalized physiotherapy and rehabilitation designed around
                your condition, your progress and the life you want to return
                to.
              </p>

              <div className="services-hero-actions">
                <Link to="/book-assessment" className="services-primary-btn">
                  Start Your Recovery
                  <span>↗</span>
                </Link>

                <Link to="/how-it-works" className="services-outline-btn">
                  See How It Works
                </Link>
              </div>

              <div className="services-hero-note">
                <span>01</span>
                <p>
                  Assessment first. Then a clearer rehabilitation direction
                  built around your needs.
                </p>
              </div>
            </div>

            <div className="services-hero-visual">
              <div className="services-image-frame">
                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1800"
                  alt="Illustrative physiotherapy session"
                />

                <div className="services-image-shade" />

                <div className="services-image-caption">
                  <span>FITMAX CARE</span>
                  <strong>
                    Understand. Rehabilitate. Progress.
                  </strong>
                </div>
              </div>

              <div className="services-hero-card">
                <span>THE RECOVERY JOURNEY</span>

                <strong>
                  Assess
                  <br />
                  Rehabilitate
                  <br />
                  Progress
                </strong>

                <div className="services-card-arrow">↗</div>
              </div>

              <div className="services-hero-number">01</div>
            </div>
          </div>

          <div className="services-hero-bottom">
            <span>PERSONALIZED CARE</span>
            <span>GUIDED REHABILITATION</span>
            <span>PROGRESS TRACKING</span>
            <span>RETURN TO LIFE</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="services-intro">
          <div className="services-container">
            <div className="services-intro-top">
              <div className="services-section-label">
                <span>01</span>
                <strong>THE FITMAX APPROACH</strong>
              </div>

              <div className="services-section-rule" />
            </div>

            <div className="services-intro-layout">
              <h2>
                Physiotherapy should
                <span>fit your recovery.</span>
              </h2>

              <div className="services-intro-text">
                <p>
                  Your recovery is different from someone else's. Your
                  condition, movement, goals and everyday life all matter.
                </p>

                <p>
                  FitMax brings these together into a structured rehabilitation
                  journey designed around where you are and where you want to
                  go.
                </p>

                <Link
                  to="/how-it-works"
                  className="services-simple-link"
                >
                  Explore the recovery journey
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-showcase">
          <div className="services-container">
            <div className="services-showcase-heading">
              <div>
                <div className="services-eyebrow">
                  <span className="services-eyebrow-line" />
                  <span>OUR SERVICES</span>
                </div>

                <h2>
                  One recovery.
                  <span>Personalized care.</span>
                </h2>
              </div>

              <p>
                Explore the different ways FitMax can support your
                rehabilitation journey.
              </p>
            </div>

            <div className="services-showcase-layout">
              <div className="services-service-list">
                {services.map((service) => (
                  <div
                    className="services-service-item"
                    key={service.number}
                  >
                    <div className="services-service-number">
                      {service.number}
                    </div>

                    <div className="services-service-content">
                      <h3>{service.title}</h3>

                      <p className="services-service-short">
                        {service.short}
                      </p>

                      <p className="services-service-description">
                        {service.description}
                      </p>

                      <Link
                        to="/book-assessment"
                        className="services-service-link"
                      >
                        Discuss this service
                        <span>↗</span>
                      </Link>
                    </div>

                    <div className="services-service-plus">
                      +
                    </div>
                  </div>
                ))}
              </div>

              <div className="services-service-visual">
                <img
                  src={services[0].image}
                  alt="Illustrative personalized physiotherapy session"
                />

                <div className="services-service-visual-overlay" />

                <div className="services-service-visual-top">
                  <span>FITMAX</span>
                  <span>01 / 06</span>
                </div>

                <div className="services-service-visual-bottom">
                  <span>PERSONALIZED PHYSIOTHERAPY</span>

                  <strong>
                    Built around
                    <br />
                    your recovery.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ONLINE PHYSIOTHERAPY */}
        <section className="services-online">
          <div className="services-container services-online-layout">
            <div className="services-online-visual">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1800"
                alt="Illustrative online physiotherapy consultation"
              />

              <div className="services-online-overlay" />

              <div className="services-online-floating">
                <span>ONLINE REHAB</span>

                <strong>
                  Care that
                  <br />
                  stays connected.
                </strong>

                <div className="services-online-status">
                  <i />
                  Structured support between consultations
                </div>
              </div>
            </div>

            <div className="services-online-copy">
              <div className="services-eyebrow">
                <span className="services-eyebrow-line" />
                <span>ONLINE PHYSIOTHERAPY</span>
              </div>

              <h2>
                More than
                <span>a video call.</span>
              </h2>

              <p>
                Online physiotherapy can be a structured part of your
                rehabilitation journey. Stay connected with your
                physiotherapist and keep working towards your goals between
                consultations.
              </p>

              <div className="services-online-points">
                <div>
                  <span>01</span>

                  <div>
                    <strong>Meet your physiotherapist</strong>

                    <p>
                      Discuss your condition, movement and recovery goals.
                    </p>
                  </div>
                </div>

                <div>
                  <span>02</span>

                  <div>
                    <strong>Follow your personal plan</strong>

                    <p>
                      Receive structured exercises and rehabilitation
                      guidance.
                    </p>
                  </div>
                </div>

                <div>
                  <span>03</span>

                  <div>
                    <strong>Stay connected</strong>

                    <p>
                      Ask questions and discuss how your recovery is
                      progressing.
                    </p>
                  </div>
                </div>

                <div>
                  <span>04</span>

                  <div>
                    <strong>Track your progress</strong>

                    <p>
                      Keep your rehabilitation journey visible and organized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECOVERY SYSTEM */}
        <section className="services-system">
          <div className="services-container">
            <div className="services-system-heading">
              <div>
                <div className="services-eyebrow">
                  <span className="services-eyebrow-line" />
                  <span>YOUR RECOVERY SYSTEM</span>
                </div>

                <h2>
                  From first assessment
                  <span>to everyday life.</span>
                </h2>
              </div>

              <p>
                Every stage has a purpose. Every step moves you towards the
                goals that matter to you.
              </p>
            </div>

            <div className="services-system-track">
              <div className="services-track-line">
                <span />
              </div>

              <div className="services-system-items">
                <div className="services-system-item">
                  <span>01</span>

                  <div>
                    <strong>Assess</strong>
                    <p>Understand where you are.</p>
                  </div>
                </div>

                <div className="services-system-item">
                  <span>02</span>

                  <div>
                    <strong>Personalize</strong>
                    <p>Build your recovery plan.</p>
                  </div>
                </div>

                <div className="services-system-item">
                  <span>03</span>

                  <div>
                    <strong>Rehabilitate</strong>
                    <p>Work through guided care.</p>
                  </div>
                </div>

                <div className="services-system-item">
                  <span>04</span>

                  <div>
                    <strong>Progress</strong>
                    <p>Track your changing abilities.</p>
                  </div>
                </div>

                <div className="services-system-item">
                  <span>05</span>

                  <div>
                    <strong>Return</strong>
                    <p>Move back into life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GOALS */}
        <section className="services-goals">
          <div className="services-container services-goals-layout">
            <div className="services-goals-heading">
              <div className="services-eyebrow">
                <span className="services-eyebrow-line" />
                <span>WHAT ARE YOU WORKING TOWARDS?</span>
              </div>

              <h2>
                Recovery is not
                <span>the final goal.</span>
              </h2>

              <p>
                The real goal is getting back to the things that make your
                everyday life yours.
              </p>
            </div>

            <div className="services-goals-list">
              {goals.map((goal) => (
                <div
                  className="services-goal"
                  key={goal.number}
                >
                  <span>{goal.number}</span>

                  <div>
                    <h3>{goal.title}</h3>
                    <p>{goal.text}</p>
                  </div>

                  <i>↗</i>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section className="services-safety">
          <div className="services-container">
            <div className="services-safety-inner">
              <div className="services-safety-icon">
                +
              </div>

              <div>
                <span>YOUR SAFETY MATTERS</span>

                <h3>
                  Rehabilitation should be
                  <strong> appropriate for you.</strong>
                </h3>

                <p>
                  Every recovery situation is different. If your condition
                  requires an in person examination or medical evaluation,
                  your care team can guide you towards the appropriate next
                  step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="services-final-cta">
          <div className="services-final-image">
            <img
              src="https://images.pexels.com/photos/7659562/pexels-photo-7659562.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Illustrative patient receiving physiotherapy"
            />
          </div>

          <div className="services-final-overlay" />

          <div className="services-container services-final-content">
            <div className="services-eyebrow services-light">
              <span className="services-eyebrow-line" />
              <span>READY TO START?</span>
            </div>

            <h2>
              Your recovery.
              <span>Your next chapter.</span>
            </h2>

            <p>
              Start with an assessment and take the first step towards a
              rehabilitation journey built around you.
            </p>

            <Link
              to="/book-assessment"
              className="services-primary-btn"
            >
              Start Your Recovery
              <span>↗</span>
            </Link>
          </div>

          <div className="services-final-orbit services-final-orbit-one" />
          <div className="services-final-orbit services-final-orbit-two" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PhysiotherapyServices;