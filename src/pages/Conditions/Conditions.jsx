import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Conditions.css";
import "../fitmax-premium.css";


const conditions = [
  {
    number: "01",
    title: "ACL & Knee Rehabilitation",
    text: "Build strength, improve movement and work towards confident knee function after injury or surgery.",
    image:
      "https://images.pexels.com/photos/6740748/pexels-photo-6740748.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/conditions/acl-rehabilitation",
  },
  {
    number: "02",
    title: "Back Pain",
    text: "Improve movement, strength and everyday function with a structured approach to back rehabilitation.",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/conditions/back-pain",
  },
  {
    number: "03",
    title: "Neck Pain",
    text: "Work on mobility, strength and movement patterns that can support a more comfortable daily routine.",
    image:
      "https://images.pexels.com/photos/5793959/pexels-photo-5793959.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/conditions/neck-pain",
  },
  {
    number: "04",
    title: "Shoulder Rehabilitation",
    text: "Restore shoulder movement and strength while progressing towards the activities that matter to you.",
    image:
      "https://images.pexels.com/photos/6111589/pexels-photo-6111589.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/conditions/shoulder-rehabilitation",
  },
  {
    number: "05",
    title: "Sports Injury",
    text: "A structured rehabilitation journey focused on movement, strength, confidence and return to activity.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/conditions/sports-injury",
  },
  {
    number: "06",
    title: "Accident Recovery",
    text: "Rebuild movement and function after an accident with rehabilitation tailored to your recovery needs.",
    image:
      "https://images.pexels.com/photos/7659562/pexels-photo-7659562.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/conditions/accident-recovery",
  },
  {
    number: "07",
    title: "Post Surgical Rehabilitation",
    text: "Progress safely through rehabilitation after surgery with guidance built around your recovery stage.",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/conditions/post-surgical-rehabilitation",
  },
  {
    number: "08",
    title: "Fracture Rehabilitation",
    text: "Work towards restoring mobility, strength and confidence as you progress through recovery.",
    image:
      "https://images.pexels.com/photos/7659563/pexels-photo-7659563.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/conditions/fracture-rehabilitation",
  },
  {
    number: "09",
    title: "Mobility & Strength",
    text: "Improve everyday movement, strength and physical confidence with a personalized rehabilitation plan.",
    image:
      "https://images.pexels.com/photos/6455922/pexels-photo-6455922.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/conditions/mobility-strength",
  },
];

function Conditions() {
  return (
    <div className="conditions-page">
      <Navbar />

      <main>

        {/* HERO */}
        <section className="conditions-hero">
          <div className="conditions-hero-glow" />

          <div className="conditions-container conditions-hero-grid">

            <div className="conditions-hero-content">
              <div className="conditions-eyebrow">
                <span className="conditions-mark">
                  <span />
                  <span />
                  <span />
                </span>

                <span>CONDITIONS WE HELP WITH</span>
              </div>

              <h1>
                Find the right
                <span>path to recovery.</span>
              </h1>

              <p>
                Whether you are recovering from an injury, surgery, accident
                or dealing with ongoing pain, FitMax helps you move forward
                with personalized physiotherapy and rehabilitation.
              </p>

              <div className="conditions-hero-actions">
                <Link to="/book-assessment" className="conditions-primary-btn">
                  Start Your Recovery
                  <span>↗</span>
                </Link>

                <a href="#conditions-list" className="conditions-secondary-btn">
                  Explore Conditions
                  <span>↓</span>
                </a>
              </div>

              <div className="conditions-hero-meta">
                <span>01 Patient focused</span>
                <span>02 Personalized care</span>
                <span>03 Guided rehabilitation</span>
              </div>
            </div>

            <div className="conditions-hero-visual">
              <div className="conditions-hero-image">
                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Physiotherapy and rehabilitation"
                />

                <div className="conditions-image-overlay" />

                <div className="conditions-floating-card">
                  <span>FITMAX RECOVERY</span>

                  <strong>
                    From where you are
                    <br />
                    to where you want to be.
                  </strong>

                  <div className="conditions-floating-line">
                    <i />
                    <span>Personalized journey</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* INTRO */}
        <section className="conditions-intro">
  <div className="conditions-container">

    <div className="conditions-intro-top">
      <div className="conditions-intro-label">
        <span>01</span>
        <span>UNDERSTANDING YOUR RECOVERY</span>
      </div>

      <div className="conditions-intro-line" />
    </div>

    <div className="conditions-intro-main">

      <h2>
        Every recovery
        <span>starts somewhere.</span>
      </h2>

      <div className="conditions-intro-copy">
        <p>
          Your condition is not the whole story. What matters is how it
          affects your movement, strength, confidence and everyday life.
        </p>

        <Link
          to="/book-assessment"
          className="conditions-intro-link"
        >
          Find your recovery path
          <span>↗</span>
        </Link>
      </div>

    </div>

    <div className="conditions-intro-bottom">

      <div className="conditions-intro-item">
        <span>01</span>
        <strong>Understand</strong>
        <p>Your condition and current abilities.</p>
      </div>

      <div className="conditions-intro-item">
        <span>02</span>
        <strong>Personalize</strong>
        <p>A rehabilitation plan around your goals.</p>
      </div>

      <div className="conditions-intro-item">
        <span>03</span>
        <strong>Progress</strong>
        <p>Move towards confidence and function.</p>
      </div>

    </div>

  </div>
</section>


        {/* CONDITIONS */}
        <section
          className="conditions-list"
          id="conditions-list"
        >
          <div className="conditions-container">

            <div className="conditions-list-heading">

              <div>
                <div className="conditions-eyebrow">
                  <span className="conditions-mark">
                    <span />
                    <span />
                    <span />
                  </span>

                  <span>RECOVERY PATHS</span>
                </div>

                <h2>
                  What can we
                  <span>help you with?</span>
                </h2>
              </div>

              <p>
                Explore the areas where FitMax provides personalized
                physiotherapy and rehabilitation support.
              </p>

            </div>


            <div className="conditions-grid">

              {conditions.map((condition) => (
                <Link
                  to={condition.link}
                  className="condition-card"
                  key={condition.number}
                >
                  <div className="condition-card-image">
                    <img
                      src={condition.image}
                      alt={condition.title}
                    />

                    <div className="condition-card-overlay" />

                    <span className="condition-number">
                      {condition.number}
                    </span>

                    <span className="condition-arrow">
                      ↗
                    </span>
                  </div>

                  <div className="condition-card-content">
                    <h3>{condition.title}</h3>

                    <p>{condition.text}</p>

                    <span className="condition-card-link">
                      Explore recovery path
                      <b>→</b>
                    </span>
                  </div>
                </Link>
              ))}

            </div>

          </div>
        </section>


        {/* HOW WE HELP */}
        <section className="conditions-help">

          <div className="conditions-container">

            <div className="conditions-help-grid">

              <div className="conditions-help-image">
                <img
                  src="https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Physiotherapist helping patient"
                />

                <div className="conditions-help-badge">
                  <span>FITMAX</span>
                  <strong>
                    Care that moves
                    <br />
                    with you.
                  </strong>
                </div>
              </div>


              <div className="conditions-help-content">

                <div className="conditions-eyebrow">
                  <span className="conditions-mark">
                    <span />
                    <span />
                    <span />
                  </span>

                  <span>HOW WE HELP</span>
                </div>

                <h2>
                  Your condition is
                  <span>only the beginning.</span>
                </h2>

                <p>
                  Rehabilitation is about more than the name of a condition.
                  Your goals, movement, strength, symptoms and daily life all
                  matter.
                </p>

                <div className="conditions-help-points">

                  <div>
                    <span>01</span>

                    <div>
                      <strong>Understand</strong>
                      <p>
                        Start with a clear understanding of your condition and
                        current abilities.
                      </p>
                    </div>
                  </div>

                  <div>
                    <span>02</span>

                    <div>
                      <strong>Rebuild</strong>
                      <p>
                        Follow a personalized rehabilitation plan designed
                        around your recovery.
                      </p>
                    </div>
                  </div>

                  <div>
                    <span>03</span>

                    <div>
                      <strong>Return</strong>
                      <p>
                        Build confidence and work towards the activities and
                        independence that matter to you.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* RECOVERY PROCESS */}
        <section className="conditions-process">

          <div className="conditions-container">

            <div className="conditions-process-heading">

              <div className="conditions-eyebrow">
                <span className="conditions-mark">
                  <span />
                  <span />
                  <span />
                </span>

                <span>THE RECOVERY PROCESS</span>
              </div>

              <h2>
                One condition.
                <span>A structured journey.</span>
              </h2>

            </div>


            <div className="conditions-process-line">

              <div>
                <span>01</span>
                <strong>Assessment</strong>
                <p>Understand your starting point.</p>
              </div>

              <div>
                <span>02</span>
                <strong>Plan</strong>
                <p>Create your recovery direction.</p>
              </div>

              <div>
                <span>03</span>
                <strong>Rehabilitation</strong>
                <p>Build movement and strength.</p>
              </div>

              <div>
                <span>04</span>
                <strong>Progress</strong>
                <p>Track how you are moving forward.</p>
              </div>

              <div>
                <span>05</span>
                <strong>Return</strong>
                <p>Work towards everyday life.</p>
              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="conditions-cta">

          <div className="conditions-cta-image">
            <img
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Patient receiving physiotherapy"
            />
          </div>

          <div className="conditions-cta-overlay" />

          <div className="conditions-container conditions-cta-content">

            <div className="conditions-eyebrow conditions-eyebrow-light">
              <span className="conditions-mark">
                <span />
                <span />
                <span />
              </span>

              <span>READY TO MOVE FORWARD?</span>
            </div>

            <h2>
              Your recovery
              <span>starts here.</span>
            </h2>

            <p>
              Start with an assessment and take the first step towards a
              rehabilitation journey built around you.
            </p>

            <Link
              to="/book-assessment"
              className="conditions-primary-btn conditions-cta-btn"
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

export default Conditions;