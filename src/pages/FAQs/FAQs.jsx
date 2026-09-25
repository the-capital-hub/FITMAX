import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./FAQs.css";
import "../fitmax-premium.css";
import FitMaxMark from "../../components/FITMaxMark/FItMaxtMark";

const faqs = [
  {
    question: "What is FitMax?",
    answer:
      "FitMax is a patient first physiotherapy and rehabilitation experience designed to support recovery from injuries, surgeries, accidents and movement related conditions."
  },
  {
    question: "Is FitMax only for online physiotherapy?",
    answer:
      "FitMax includes digital rehabilitation and online care, while also explaining when an in person assessment or clinical support may be appropriate."
  },
  {
    question: "What happens in an assessment?",
    answer:
      "The assessment is used to understand your current condition, movement, goals and recovery needs so the next steps can be discussed clearly."
  },
  {
    question: "Will I receive a personalized exercise plan?",
    answer:
      "Where appropriate, your physiotherapist can provide a rehabilitation plan with guided exercises and progress focused support."
  },
  {
    question: "How do I track my progress?",
    answer:
      "FitMax is designed around consistency and progress. Your rehabilitation experience can include exercise completion, symptoms, progress and regular check ins."
  },
  {
    question: "Can I contact my physiotherapist during rehabilitation?",
    answer:
      "The care experience is designed to support communication with your care team and allow questions or plan adjustments when needed."
  },
  {
    question: "How much does physiotherapy cost?",
    answer:
      "Pricing depends on the type of care, consultation and rehabilitation support required. Visit Pricing or contact FitMax for current details."
  },
  {
    question: "When should I seek in person care?",
    answer:
      "Some situations require direct clinical assessment. Your physiotherapist can guide you when an in person assessment is appropriate."
  }
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="fq-page">

      <Navbar />

      <main>

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="fq-hero">

          <div className="fq-hero-orbit fq-hero-orbit-one" />
          <div className="fq-hero-orbit fq-hero-orbit-two" />

          <div className="fq-container fq-hero-inner">

            <div className="fq-hero-copy">

              <div className="fq-eyebrow">
                <FitMaxMark/>
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>

              <h1>
                Clarity before
                <span> you start.</span>
              </h1>

              <p>
                Simple answers about FitMax, physiotherapy,
                rehabilitation and what your recovery journey
                can look like.
              </p>

              <div className="fq-hero-actions">

                <Link
                  to="/book-assessment"
                  className="fq-primary-button"
                >
                  <span>Book an Assessment</span>
                  <span className="fq-button-arrow">↗</span>
                </Link>

                <Link
                  to="/contact"
                  className="fq-secondary-button"
                >
                  Talk to FitMax
                </Link>

              </div>

            </div>


            <div className="fq-hero-visual">

              <div className="fq-hero-image">

                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Physiotherapist helping a patient during rehabilitation"
                />

                <div className="fq-image-shade" />

              </div>


              <div className="fq-recovery-card">

                <div className="fq-recovery-icon">
                  +
                </div>

                <div className="fq-recovery-content">
                  <span>FITMAX APPROACH</span>
                  <strong>Recovery starts with understanding.</strong>
                </div>

              </div>


              <div className="fq-journey-card">

                <div className="fq-journey-number">
                  01
                </div>

                <div>
                  <small>RECOVERY JOURNEY</small>
                  <strong>Understand → Recover</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            FAQ MAIN
        ================================================== */}

        <section className="fq-main">

          <div className="fq-container fq-main-grid">


            {/* SUPPORT CARD */}

            <aside className="fq-support-card">

              <div className="fq-support-image">

                <img
                  src="https://images.pexels.com/photos/20860593/pexels-photo-20860593.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Physiotherapist guiding a rehabilitation exercise"
                />

                <div className="fq-support-image-overlay" />

                <div className="fq-image-label">
                  PATIENT FIRST CARE
                </div>

              </div>


              <div className="fq-support-content">

                <span className="fq-section-label">
                  FITMAX SUPPORT
                </span>

                <h2>
                  Questions are
                  <span> part of recovery.</span>
                </h2>

                <p>
                  Understanding your care can help you take
                  the next step with more confidence.
                </p>

                <Link
                  to="/book-assessment"
                  className="fq-support-button"
                >
                  <span>Book an Assessment</span>
                  <span>↗</span>
                </Link>

              </div>


              <div className="fq-support-journey">

                <span>ASSESS</span>

                <i />

                <span>REHABILITATE</span>

                <i />

                <span>RETURN</span>

              </div>

            </aside>


            {/* QUESTIONS */}

            <div className="fq-list-wrapper">

              <div className="fq-list-heading">

                <div>

                  <span className="fq-section-label">
                    YOUR QUESTIONS
                  </span>

                  <h2>
                    Everything you need
                    <span> to know.</span>
                  </h2>

                </div>

                <div className="fq-answer-count">
                  <strong>
                    {String(faqs.length).padStart(2, "0")}
                  </strong>

                  <span>ANSWERS</span>
                </div>

              </div>


              <div className="fq-list">

                {faqs.map((faq, index) => {

                  const isOpen = openIndex === index;

                  return (
                    <article
                      className={`fq-item ${
                        isOpen ? "is-open" : ""
                      }`}
                      key={faq.question}
                    >

                      <button
                        type="button"
                        className="fq-question"
                        onClick={() => handleToggle(index)}
                        aria-expanded={isOpen}
                      >

                        <span className="fq-question-left">

                          <span className="fq-question-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="fq-question-title">
                            {faq.question}
                          </span>

                        </span>


                        <span className="fq-question-toggle">

                          <span />

                          <span />

                        </span>

                      </button>


                      <div className="fq-answer">

                        <div className="fq-answer-inner">

                          <p>
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </article>
                  );
                })}

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            BOTTOM CTA
        ================================================== */}

        <section className="fq-bottom">

          <div className="fq-bottom-image">

            <img
              src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              aria-hidden="true"
            />

          </div>

          <div className="fq-bottom-overlay" />


          <div className="fq-container fq-bottom-inner">

            <div className="fq-bottom-copy">

              <span className="fq-section-label">
                STILL NEED HELP?
              </span>

              <h2>
                Let's talk about
                <span> your recovery.</span>
              </h2>

              <p>
                If you still have questions, our team can help
                you understand the next step.
              </p>

            </div>


            <Link
              to="/contact"
              className="fq-bottom-button"
            >
              <span>Contact FitMax</span>
              <span>↗</span>
            </Link>

          </div>


          <div className="fq-recovery-strip">

            <div className="fq-recovery-step active">
              <span>01</span>
              <strong>Understand</strong>
            </div>

            <div className="fq-recovery-line" />

            <div className="fq-recovery-step">
              <span>02</span>
              <strong>Assess</strong>
            </div>

            <div className="fq-recovery-line" />

            <div className="fq-recovery-step">
              <span>03</span>
              <strong>Rehabilitate</strong>
            </div>

            <div className="fq-recovery-line" />

            <div className="fq-recovery-step">
              <span>04</span>
              <strong>Return to Life</strong>
            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default FAQs;