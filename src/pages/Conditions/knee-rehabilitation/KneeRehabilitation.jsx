import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "./KneeRehabilitation.css";
import "../../fitmax-premium.css";


const recoverySteps = [
  {
    number: "01",
    title: "Assessment",
    text: "Understand your knee movement, symptoms, strength, function and recovery goals.",
  },
  {
    number: "02",
    title: "Restore Movement",
    text: "Work towards comfortable and controlled knee movement for everyday activities.",
  },
  {
    number: "03",
    title: "Build Strength",
    text: "Progressively develop the strength needed to support movement and function.",
  },
  {
    number: "04",
    title: "Improve Control",
    text: "Build confidence, coordination and control as your abilities improve.",
  },
  {
    number: "05",
    title: "Return to Life",
    text: "Work towards walking, stairs, work, exercise and the activities that matter to you.",
  },
];

const supportAreas = [
  {
    number: "01",
    title: "Knee Pain",
    text: "Rehabilitation support for people experiencing ongoing or activity related knee discomfort.",
  },
  {
    number: "02",
    title: "Knee Stiffness",
    text: "Work on mobility and movement when stiffness is affecting your everyday activities.",
  },
  {
    number: "03",
    title: "Knee Weakness",
    text: "Progressively build strength and control when your knee feels weak or less capable.",
  },
  {
    number: "04",
    title: "Post Injury Recovery",
    text: "A structured rehabilitation path after a knee injury as you work towards normal activity.",
  },
];

function KneeRehabilitation() {
  return (
    <div className="knee-page">
      <Navbar />

      <main>

        {/* HERO */}
        <section className="knee-hero">
          <div className="knee-hero-glow" />

          <div className="knee-container knee-hero-grid">

            <div className="knee-hero-content">

              <div className="knee-eyebrow">
                <span className="knee-mark">
                  <span />
                  <span />
                  <span />
                </span>

                <span>KNEE REHABILITATION</span>
              </div>

              <h1>
                Move with more
                <span>confidence.</span>
              </h1>

              <p>
                Personalized physiotherapy and rehabilitation to help improve
                knee movement, strength and everyday function.
              </p>

              <div className="knee-actions">
                <Link
                  to="/book-assessment"
                  className="knee-primary-btn"
                >
                  Start Your Recovery
                  <span>↗</span>
                </Link>

                <Link
                  to="/book-assessment"
                  className="knee-secondary-btn"
                >
                  Book an Assessment
                </Link>
              </div>

              <div className="knee-meta">
                <span>01 Understand</span>
                <span>02 Rebuild</span>
                <span>03 Move forward</span>
              </div>

            </div>


            <div className="knee-hero-visual">

              <div className="knee-hero-image">

                <img
                  src="https://images.pexels.com/photos/6740748/pexels-photo-6740748.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Knee physiotherapy rehabilitation"
                />

                <div className="knee-hero-overlay" />

                <div className="knee-hero-card">
                  <span>FITMAX / KNEE RECOVERY</span>

                  <strong>
                    Move.
                    <br />
                    Strengthen.
                    <br />
                    Progress.
                  </strong>

                  <div className="knee-card-line">
                    <i />
                    <span>Personalized rehabilitation</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* INTRO */}
        <section className="knee-intro">

          <div className="knee-container">

            <div className="knee-intro-top">

              <div className="knee-section-label">
                <span>01</span>
                <strong>UNDERSTANDING YOUR KNEE</strong>
              </div>

              <div className="knee-intro-line" />

            </div>


            <div className="knee-intro-grid">

              <h2>
                Better movement
                <span>starts with understanding.</span>
              </h2>

              <div>

                <p>
                  Knee problems can affect walking, stairs, exercise, work and
                  many other parts of everyday life.
                </p>

                <p>
                  FitMax looks beyond the symptom to understand how your knee
                  is affecting your movement, strength, confidence and goals.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* WHO WE HELP */}
        <section className="knee-support">

          <div className="knee-container">

            <div className="knee-heading-row">

              <div>

                <div className="knee-eyebrow">
                  <span className="knee-mark">
                    <span />
                    <span />
                    <span />
                  </span>

                  <span>WHO WE CAN HELP</span>
                </div>

                <h2>
                  Different symptoms.
                  <span>One clear direction.</span>
                </h2>

              </div>

              <p>
                Your rehabilitation plan should reflect what you are
                experiencing today and what you want to be able to do again.
              </p>

            </div>


            <div className="knee-support-grid">

              {supportAreas.map((item) => (
                <div
                  className="knee-support-card"
                  key={item.number}
                >
                  <span>{item.number}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="knee-card-arrow">
                    ↗
                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* HOW FITMAX HELPS */}
        <section className="knee-help">

          <div className="knee-container knee-help-grid">

            <div className="knee-help-image">

              <img
                src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1500"
                alt="Physiotherapist helping patient"
              />

              <div className="knee-help-badge">
                <span>FITMAX APPROACH</span>

                <strong>
                  Build better
                  <br />
                  movement.
                </strong>
              </div>

            </div>


            <div className="knee-help-content">

              <div className="knee-eyebrow">
                <span className="knee-mark">
                  <span />
                  <span />
                  <span />
                </span>

                <span>HOW FITMAX HELPS</span>
              </div>

              <h2>
                Work towards
                <span>better function.</span>
              </h2>

              <p>
                Rehabilitation is not only about reducing symptoms. It is
                about helping you move better, become stronger and feel more
                confident in your everyday activities.
              </p>


              <div className="knee-help-points">

                <div>
                  <span>01</span>

                  <div>
                    <strong>Understand your starting point</strong>

                    <p>
                      Begin by understanding your movement, symptoms, strength
                      and daily challenges.
                    </p>
                  </div>
                </div>


                <div>
                  <span>02</span>

                  <div>
                    <strong>Restore movement</strong>

                    <p>
                      Work through guided exercises designed around your
                      current abilities and recovery goals.
                    </p>
                  </div>
                </div>


                <div>
                  <span>03</span>

                  <div>
                    <strong>Build strength</strong>

                    <p>
                      Progressively develop the strength needed for movement
                      and everyday function.
                    </p>
                  </div>
                </div>


                <div>
                  <span>04</span>

                  <div>
                    <strong>Return to your routine</strong>

                    <p>
                      Work towards the activities and independence that matter
                      to you.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* RECOVERY JOURNEY */}
        <section className="knee-journey">

          <div className="knee-container">

            <div className="knee-journey-heading">

              <div>

                <div className="knee-eyebrow">
                  <span className="knee-mark">
                    <span />
                    <span />
                    <span />
                  </span>

                  <span>YOUR RECOVERY JOURNEY</span>
                </div>

                <h2>
                  Progress at the
                  <span>right pace for you.</span>
                </h2>

              </div>

              <p>
                Your rehabilitation can progress through clear stages, with
                each stage building towards better movement and confidence.
              </p>

            </div>


            <div className="knee-journey-grid">

              {recoverySteps.map((step, index) => (
                <div
                  className={`knee-journey-step ${
                    index === 0 ? "active" : ""
                  }`}
                  key={step.number}
                >

                  <div className="knee-step-number">
                    {step.number}
                  </div>

                  <div className="knee-step-content">

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>

                  </div>

                  {index !== recoverySteps.length - 1 && (
                    <div className="knee-step-arrow">
                      →
                    </div>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* EVERYDAY LIFE */}
        <section className="knee-life">

          <div className="knee-container knee-life-grid">

            <div className="knee-life-content">

              <div className="knee-eyebrow">
                <span className="knee-mark">
                  <span />
                  <span />
                  <span />
                </span>

                <span>BACK TO WHAT MATTERS</span>
              </div>

              <h2>
                Recovery should
                <span>change your everyday.</span>
              </h2>

              <p>
                The goal of rehabilitation is not simply to complete
                exercises. It is to help you feel more capable in the things
                you need and want to do.
              </p>

              <div className="knee-life-list">

                <div>
                  <span>01</span>
                  <strong>Walk with more confidence</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Manage stairs more comfortably</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Return to exercise</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Get back to your routine</strong>
                </div>

              </div>

            </div>


            <div className="knee-life-visual">

              <div className="knee-life-circle">

                <div>
                  <span>FITMAX</span>
                  <strong>MOVE</strong>
                  <small>BUILD</small>
                  <small>RETURN</small>
                </div>

              </div>

              <div className="knee-life-orbit orbit-one" />
              <div className="knee-life-orbit orbit-two" />

            </div>

          </div>

        </section>


        {/* SAFETY */}
        <section className="knee-safety">

          <div className="knee-container">

            <div className="knee-safety-box">

              <div className="knee-safety-icon">
                +
              </div>

              <div>

                <span>YOUR SAFETY MATTERS</span>

                <h3>
                  Your rehabilitation should be
                  <strong>appropriate for you.</strong>
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
        <section className="knee-cta">

          <div className="knee-cta-image">

            <img
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Patient receiving physiotherapy"
            />

          </div>

          <div className="knee-cta-overlay" />

          <div className="knee-container knee-cta-content">

            <div className="knee-eyebrow knee-light-eyebrow">

              <span className="knee-mark">
                <span />
                <span />
                <span />
              </span>

              <span>READY TO START?</span>

            </div>

            <h2>
              Take the next step
              <span>towards better movement.</span>
            </h2>

            <p>
              Start with an assessment and discover a rehabilitation journey
              built around your needs and goals.
            </p>

            <Link
              to="/book-assessment"
              className="knee-primary-btn knee-cta-button"
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

export default KneeRehabilitation;