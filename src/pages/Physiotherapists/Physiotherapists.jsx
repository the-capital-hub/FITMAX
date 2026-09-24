import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Physiotherapists.css";

const physiotherapists = [
  {
    number: "01",
    name: "Your Physiotherapist",
    role: "Musculoskeletal Rehabilitation",
    experience: "Movement • Strength • Recovery",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "02",
    name: "Your Physiotherapist",
    role: "Sports & Injury Rehabilitation",
    experience: "Performance • Recovery • Return",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    name: "Your Physiotherapist",
    role: "Post Surgical Rehabilitation",
    experience: "Mobility • Strength • Function",
    image:
      "https://images.pexels.com/photos/7659562/pexels-photo-7659562.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const principles = [
  {
    number: "01",
    title: "Listen first",
    text: "Understand your condition, concerns, routine and the goals that matter to you.",
  },
  {
    number: "02",
    title: "Build around you",
    text: "Shape rehabilitation around your current abilities, recovery stage and priorities.",
  },
  {
    number: "03",
    title: "Guide your progress",
    text: "Help you understand what you are working towards and how your rehabilitation is progressing.",
  },
];

function Physiotherapists() {
  return (
    <div className="physios-page">
      <Navbar />

      <main>
        {/* HERO */}

        <section className="physios-hero">
          <div className="physios-hero-orbit physios-hero-orbit-one" />
          <div className="physios-hero-orbit physios-hero-orbit-two" />

          <div className="physios-container physios-hero-grid">
            <div className="physios-hero-copy">
              <div className="physios-eyebrow">
                <span className="physios-eyebrow-line" />
                <span>OUR PHYSIOTHERAPISTS</span>
              </div>

              <h1>
                Your recovery
                <span>deserves guidance.</span>
              </h1>

              <p>
                Meet the physiotherapy professionals who help turn your
                recovery goals into a structured rehabilitation journey.
              </p>

              <div className="physios-hero-actions">
                <Link
                  to="/book-assessment"
                  className="physios-primary-btn"
                >
                  Book an Assessment
                  <span>↗</span>
                </Link>

                <Link
                  to="/how-it-works"
                  className="physios-outline-btn"
                >
                  How FitMax Works
                </Link>
              </div>

              <div className="physios-hero-note">
                <span>01</span>
                <p>
                  Professional guidance from assessment through rehabilitation
                  and progress.
                </p>
              </div>
            </div>

            <div className="physios-hero-visual">
              <div className="physios-hero-image">
                <img
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Physiotherapist"
                />

                <div className="physios-hero-image-overlay" />
              </div>

              <div className="physios-hero-card">
                <span>FITMAX / CLINICAL CARE</span>

                <strong>
                  Listen.
                  <br />
                  Understand.
                  <br />
                  Guide.
                </strong>

                <div className="physios-card-line">
                  <span />
                </div>
              </div>

              <div className="physios-hero-index">01</div>
            </div>
          </div>

          <div className="physios-hero-bottom">
            <span>PATIENT FIRST</span>
            <span>PERSONALIZED CARE</span>
            <span>PROGRESS FOCUSED</span>
            <span>PROFESSIONAL GUIDANCE</span>
          </div>
        </section>

        {/* INTRO */}

        <section className="physios-intro">
          <div className="physios-container">
            <div className="physios-section-top">
              <div className="physios-section-label">
                <span>01</span>
                <strong>CARE TEAM</strong>
              </div>

              <div className="physios-section-line" />
            </div>

            <div className="physios-intro-grid">
              <h2>
                The right care
                <span>starts with trust.</span>
              </h2>

              <div className="physios-intro-copy">
                <p>
                  Physiotherapy is personal. You should feel comfortable
                  asking questions, discussing your concerns and understanding
                  why you are doing each part of your rehabilitation.
                </p>

                <p>
                  FitMax puts the patient at the centre of that relationship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROFILES */}

        <section className="physios-team">
          <div className="physios-container">
            <div className="physios-team-heading">
              <div>
                <div className="physios-eyebrow">
                  <span className="physios-eyebrow-line" />
                  <span>MEET THE TEAM</span>
                </div>

                <h2>
                  Professionals focused
                  <span>on your recovery.</span>
                </h2>
              </div>

              <p>
                Physiotherapist profiles will include qualifications,
                experience, areas of expertise and clinical interests.
              </p>
            </div>

            <div className="physios-team-grid">
              {physiotherapists.map((physio) => (
                <article className="physio-card" key={physio.number}>
                  <div className="physio-image">
                    <img src={physio.image} alt={physio.name} />

                    <div className="physio-image-overlay" />

                    <span className="physio-number">
                      {physio.number}
                    </span>

                    <span className="physio-arrow">↗</span>
                  </div>

                  <div className="physio-info">
                    <div className="physio-role">
                      {physio.role}
                    </div>

                    <h3>{physio.name}</h3>

                    <p>{physio.experience}</p>

                    <div className="physio-info-line" />

                    <span className="physio-profile-link">
                      View profile
                      <span>↗</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}

        <section className="physios-approach">
          <div className="physios-container physios-approach-grid">
            <div className="physios-approach-image">
              <img
                src="https://images.pexels.com/photos/7659562/pexels-photo-7659562.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Physiotherapist working with patient"
              />

              <div className="physios-approach-overlay" />

              <div className="physios-approach-card">
                <span>FITMAX APPROACH</span>

                <strong>
                  Clinical care
                  <br />
                  with a human
                  <br />
                  connection.
                </strong>
              </div>
            </div>

            <div className="physios-approach-copy">
              <div className="physios-eyebrow">
                <span className="physios-eyebrow-line" />
                <span>HOW WE CARE</span>
              </div>

              <h2>
                Your physiotherapist
                <span>works with you.</span>
              </h2>

              <p>
                Good rehabilitation is not simply about giving you exercises.
                It is about understanding your situation, explaining your
                recovery and helping you progress safely and consistently.
              </p>

              <div className="physios-principles">
                {principles.map((principle) => (
                  <div className="physio-principle" key={principle.number}>
                    <span>{principle.number}</span>

                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}

        <section className="physios-trust">
          <div className="physios-container">
            <div className="physios-trust-heading">
              <div>
                <div className="physios-eyebrow">
                  <span className="physios-eyebrow-line" />
                  <span>WHAT YOU CAN EXPECT</span>
                </div>

                <h2>
                  A care relationship
                  <span>built around you.</span>
                </h2>
              </div>
            </div>

            <div className="physios-trust-grid">
              <div className="physios-trust-item">
                <span>01</span>
                <strong>Clear communication</strong>
                <p>
                  Understand your rehabilitation and have space to ask
                  questions.
                </p>
              </div>

              <div className="physios-trust-item">
                <span>02</span>
                <strong>Personalized guidance</strong>
                <p>
                  Your rehabilitation direction reflects your current needs
                  and goals.
                </p>
              </div>

              <div className="physios-trust-item">
                <span>03</span>
                <strong>Progress focused care</strong>
                <p>
                  Your progress is reviewed as you work towards better
                  movement and function.
                </p>
              </div>

              <div className="physios-trust-item">
                <span>04</span>
                <strong>Patient first thinking</strong>
                <p>
                  Your everyday life and recovery goals remain at the centre
                  of the journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY */}

        <section className="physios-safety">
          <div className="physios-container">
            <div className="physios-safety-box">
              <div className="physios-safety-icon">+</div>

              <div>
                <span>PROFESSIONAL CARE</span>

                <h3>
                  Your safety comes
                  <strong> first.</strong>
                </h3>

                <p>
                  Physiotherapy should be appropriate for your individual
                  situation. If your condition requires an in person
                  examination or medical evaluation, your care team can guide
                  you towards the appropriate next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="physios-cta">
          <div className="physios-cta-image">
            <img
              src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Physiotherapy session"
            />
          </div>

          <div className="physios-cta-overlay" />

          <div className="physios-container physios-cta-content">
            <div className="physios-eyebrow physios-light">
              <span className="physios-eyebrow-line" />
              <span>START YOUR RECOVERY</span>
            </div>

            <h2>
              Meet the care
              <span>behind your recovery.</span>
            </h2>

            <p>
              Start with an assessment and take the first step towards
              personalized physiotherapy.
            </p>

            <Link
              to="/book-assessment"
              className="physios-primary-btn"
            >
              Book an Assessment
              <span>↗</span>
            </Link>
          </div>

          <div className="physios-cta-orbit physios-cta-orbit-one" />
          <div className="physios-cta-orbit physios-cta-orbit-two" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Physiotherapists;