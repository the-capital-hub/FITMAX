import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./ACLRehabilitation.css";

const recoverySteps = [
  {
    number: "01",
    title: "Assessment",
    text: "Understand your knee, movement, symptoms, strength and recovery goals.",
  },
  {
    number: "02",
    title: "Restore Movement",
    text: "Work on comfortable movement and gradually rebuild control around the knee.",
  },
  {
    number: "03",
    title: "Build Strength",
    text: "Progressively develop the strength and stability needed for everyday activity.",
  },
  {
    number: "04",
    title: "Build Confidence",
    text: "Improve control and confidence as you move through your rehabilitation.",
  },
  {
    number: "05",
    title: "Return to Life",
    text: "Work towards the activities, routine and movement that matter to you.",
  },
];

const supportAreas = [
  {
    number: "01",
    title: "ACL Injury",
    text: "Structured rehabilitation following an ACL injury and changes in knee function.",
  },
  {
    number: "02",
    title: "Post Surgical Rehab",
    text: "Guided rehabilitation following ACL reconstruction or other knee procedures.",
  },
  {
    number: "03",
    title: "Sports Related Injury",
    text: "Recovery focused on rebuilding movement, strength and confidence for activity.",
  },
  {
    number: "04",
    title: "Knee Weakness",
    text: "Improve strength, control and everyday movement when your knee feels weak or unstable.",
  },
];

function ACLRehabilitation() {
  return (
    <div className="acl-page">
      <Navbar />

      <main>

        {/* HERO */}
        <section className="acl-hero">
          <div className="acl-hero-glow" />

          <div className="acl-container acl-hero-grid">

            <div className="acl-hero-content">

              <div className="acl-eyebrow">
                <span className="acl-mark">
                  <span />
                  <span />
                  <span />
                </span>

                <span>ACL & KNEE REHABILITATION</span>
              </div>

              <h1>
                Rebuild your
                <span>knee with confidence.</span>
              </h1>

              <p>
                Personalized physiotherapy and rehabilitation designed to
                help you restore movement, rebuild strength and work towards
                the activities that matter to you.
              </p>

              <div className="acl-actions">
                <Link
                  to="/book-assessment"
                  className="acl-primary-btn"
                >
                  Start Your Recovery
                  <span>↗</span>
                </Link>

                <Link
                  to="/book-assessment"
                  className="acl-secondary-btn"
                >
                  Book an Assessment
                </Link>
              </div>

              <div className="acl-meta">
                <span>01 Assessment</span>
                <span>02 Rehabilitation</span>
                <span>03 Return to life</span>
              </div>

            </div>


            <div className="acl-hero-visual">

              <div className="acl-hero-image">
                <img
                  src="https://images.pexels.com/photos/6740748/pexels-photo-6740748.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Physiotherapy knee rehabilitation"
                />

                <div className="acl-hero-overlay" />

                <div className="acl-hero-card">
                  <span>FITMAX / KNEE RECOVERY</span>

                  <strong>
                    Assess.
                    <br />
                    Rebuild.
                    <br />
                    Return.
                  </strong>

                  <div className="acl-card-line">
                    <i />
                    <span>Personalized rehabilitation</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* INTRO */}
        <section className="acl-intro">

          <div className="acl-container">

            <div className="acl-intro-top">
              <div className="acl-section-label">
                <span>01</span>
                <strong>UNDERSTANDING YOUR RECOVERY</strong>
              </div>

              <div className="acl-intro-line" />
            </div>

            <div className="acl-intro-grid">

              <h2>
                Your knee needs
                <span>more than rest.</span>
              </h2>

              <div>
                <p>
                  Recovering from an ACL or knee injury is a process. Your
                  rehabilitation may involve restoring movement, developing
                  strength, improving control and gradually rebuilding
                  confidence.
                </p>

                <p>
                  FitMax focuses on where you are now and where you want to
                  get back to, with rehabilitation that progresses with you.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* WHO THIS IS FOR */}
        <section className="acl-support">

          <div className="acl-container">

            <div className="acl-heading-row">

              <div>
                <div className="acl-eyebrow">
                  <span className="acl-mark">
                    <span />
                    <span />
                    <span />
                  </span>

                  <span>WHO WE CAN HELP</span>
                </div>

                <h2>
                  Your recovery,
                  <span>your starting point.</span>
                </h2>
              </div>

              <p>
                Rehabilitation can look different for every person. Your
                physiotherapy plan should reflect your condition, goals and
                current abilities.
              </p>

            </div>


            <div className="acl-support-grid">

              {supportAreas.map((item) => (
                <div
                  className="acl-support-card"
                  key={item.number}
                >
                  <span>{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="acl-card-arrow">
                    ↗
                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* HOW FITMAX HELPS */}
        <section className="acl-help">

          <div className="acl-container acl-help-grid">

            <div className="acl-help-image">
              <img
                src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1500"
                alt="Physiotherapist working with patient"
              />

              <div className="acl-help-badge">
                <span>FITMAX APPROACH</span>

                <strong>
                  Recovery is a
                  <br />
                  process, not a moment.
                </strong>
              </div>
            </div>


            <div className="acl-help-content">

              <div className="acl-eyebrow">
                <span className="acl-mark">
                  <span />
                  <span />
                  <span />
                </span>

                <span>HOW FITMAX HELPS</span>
              </div>

              <h2>
                Rebuild what your
                <span>knee needs.</span>
              </h2>

              <p>
                Your rehabilitation progresses through different stages.
                FitMax helps you move through those stages with professional
                guidance and a plan built around your recovery.
              </p>


              <div className="acl-help-points">

                <div>
                  <span>01</span>

                  <div>
                    <strong>Understand your starting point</strong>

                    <p>
                      Begin with an assessment of movement, symptoms, strength
                      and your recovery goals.
                    </p>
                  </div>
                </div>


                <div>
                  <span>02</span>

                  <div>
                    <strong>Build movement and strength</strong>

                    <p>
                      Follow guided rehabilitation exercises that progress
                      alongside your abilities.
                    </p>
                  </div>
                </div>


                <div>
                  <span>03</span>

                  <div>
                    <strong>Track your progress</strong>

                    <p>
                      Understand how your movement and capabilities are
                      changing throughout your rehabilitation.
                    </p>
                  </div>
                </div>


                <div>
                  <span>04</span>

                  <div>
                    <strong>Work towards your goals</strong>

                    <p>
                      Progress towards everyday activities, sport or the
                      movement goals that matter to you.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* RECOVERY JOURNEY */}
        <section className="acl-journey">

          <div className="acl-container">

            <div className="acl-journey-heading">

              <div>
                <div className="acl-eyebrow">
                  <span className="acl-mark">
                    <span />
                    <span />
                    <span />
                  </span>

                  <span>YOUR RECOVERY JOURNEY</span>
                </div>

                <h2>
                  Five stages.
                  <span>One direction.</span>
                </h2>
              </div>

              <p>
                Every stage builds towards the next, helping you move from
                understanding your condition to returning to the life you
                want.
              </p>

            </div>


            <div className="acl-journey-grid">

              {recoverySteps.map((step, index) => (
                <div
                  className={`acl-journey-step ${
                    index === 0 ? "active" : ""
                  }`}
                  key={step.number}
                >
                  <div className="acl-step-number">
                    {step.number}
                  </div>

                  <div className="acl-step-content">
                    <h3>{step.title}</h3>

                    <p>{step.text}</p>
                  </div>

                  {index !== recoverySteps.length - 1 && (
                    <div className="acl-step-arrow">
                      →
                    </div>
                  )}
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* WHAT TO EXPECT */}
        <section className="acl-expect">

          <div className="acl-container acl-expect-grid">

            <div className="acl-expect-content">

              <div className="acl-eyebrow">
                <span className="acl-mark">
                  <span />
                  <span />
                  <span />
                </span>

                <span>WHAT TO EXPECT</span>
              </div>

              <h2>
                A plan that
                <span>moves with you.</span>
              </h2>

              <p>
                Your rehabilitation does not have to follow someone else's
                timeline. Your physiotherapist can guide progression based
                on your individual recovery and goals.
              </p>

              <div className="acl-expect-list">

                <div>
                  <span>01</span>
                  <strong>Personalized assessment</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Guided rehabilitation exercises</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Regular progress check ins</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Plan adjustments as you progress</strong>
                </div>

              </div>

            </div>


            <div className="acl-expect-visual">

              <div className="acl-expect-circle">
                <div>
                  <span>FITMAX</span>
                  <strong>RECOVER</strong>
                  <small>REBUILD</small>
                  <small>RETURN</small>
                </div>
              </div>

              <div className="acl-expect-orbit orbit-one" />
              <div className="acl-expect-orbit orbit-two" />

            </div>

          </div>

        </section>


        {/* SAFETY */}
        <section className="acl-safety">

          <div className="acl-container">

            <div className="acl-safety-box">

              <div className="acl-safety-icon">
                +
              </div>

              <div>
                <span>YOUR SAFETY MATTERS</span>

                <h3>
                  Rehabilitation should be
                  <strong>professional and appropriate.</strong>
                </h3>

                <p>
                  Physiotherapy should be tailored to your individual
                  situation. If your symptoms require an in person
                  examination or medical evaluation, your care team can guide
                  you towards the appropriate next step.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="acl-cta">

          <div className="acl-cta-image">
            <img
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Physiotherapy rehabilitation"
            />
          </div>

          <div className="acl-cta-overlay" />

          <div className="acl-container acl-cta-content">

            <div className="acl-eyebrow acl-light-eyebrow">
              <span className="acl-mark">
                <span />
                <span />
                <span />
              </span>

              <span>READY TO START?</span>
            </div>

            <h2>
              Start rebuilding
              <span>your confidence.</span>
            </h2>

            <p>
              Begin with an assessment and take the first step towards a
              rehabilitation journey built around you.
            </p>

            <Link
              to="/book-assessment"
              className="acl-primary-btn acl-cta-button"
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

export default ACLRehabilitation;