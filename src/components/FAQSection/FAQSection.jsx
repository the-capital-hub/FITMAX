import { useState } from "react";
import "./FAQSection.css";
import FitMaxMark from "../FITMaxMark/FItMaxtMark";

const faqs = [
  {
    number: "01",
    question: "What is online physiotherapy?",
    answer:
      "Online physiotherapy allows you to connect with a physiotherapist remotely for assessment, guidance and rehabilitation when online care is appropriate for your condition.",
  },
  {
    number: "02",
    question: "Is online physiotherapy suitable for my condition?",
    answer:
      "Online physiotherapy can be useful for many rehabilitation needs, including movement problems, some injuries, post surgical recovery and ongoing exercise guidance. Your physiotherapist can help determine whether online care is appropriate for you.",
  },
  {
    number: "03",
    question: "What happens during my first assessment?",
    answer:
      "Your physiotherapist will discuss your condition, symptoms, movement, recovery needs and personal goals. This helps create a rehabilitation approach that is appropriate for your situation.",
  },
  {
    number: "04",
    question: "Will I receive a personalised rehabilitation plan?",
    answer:
      "Yes. Your rehabilitation plan is built around your condition, goals, current abilities and progress. It can be adjusted as your recovery develops.",
  },
  {
    number: "05",
    question: "Will I be guided through my exercises?",
    answer:
      "Yes. FitMax is designed to provide structured exercise guidance so you can understand what exercises to perform and follow your rehabilitation plan consistently.",
  },
  {
    number: "06",
    question: "Can my rehabilitation plan change over time?",
    answer:
      "Yes. Recovery is progressive, so your physiotherapist may modify exercises, activity levels or the rehabilitation plan based on your progress and changing needs.",
  },
  {
    number: "07",
    question: "How often will I speak with my physiotherapist?",
    answer:
      "The frequency of consultations depends on your condition, rehabilitation plan and individual needs. Your physiotherapist will guide you on an appropriate follow up schedule.",
  },
  {
    number: "08",
    question: "When should I have an in person assessment?",
    answer:
      "Some conditions require hands on assessment or in person clinical care. Your physiotherapist can advise when an in person assessment is necessary based on your symptoms and recovery needs.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section className="fitmax-faq" id="faq">
      <div className="fitmax-faq-container">

        {/* HEADER */}

        <div className="fitmax-faq-header">

          <div className="fitmax-faq-label">
            <FitMaxMark />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <div className="fitmax-faq-heading-row">

            <h2 className="fitmax-faq-title">
              Questions about
              <span>your recovery.</span>
            </h2>

            <p className="fitmax-faq-intro">
              Clear answers to common questions about FitMax,
              online physiotherapy and the rehabilitation journey.
            </p>

          </div>

        </div>


        {/* FAQ LIST */}

        <div className="fitmax-faq-list">

          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                className={`fitmax-faq-item ${
                  isActive ? "is-active" : ""
                }`}
                key={faq.number}
              >

                <button
                  type="button"
                  className="fitmax-faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${faq.number}`}
                >

                  <span className="fitmax-faq-number">
                    {faq.number}
                  </span>

                  <span className="fitmax-faq-title-text">
                    {faq.question}
                  </span>

                  <span
                    className="fitmax-faq-icon"
                    aria-hidden="true"
                  >
                    {isActive ? "−" : "+"}
                  </span>

                </button>


                <div
                  id={`faq-answer-${faq.number}`}
                  className="fitmax-faq-answer-wrapper"
                  aria-hidden={!isActive}
                >
                  <div className="fitmax-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>

              </article>
            );
          })}

        </div>


        {/* FOOTER */}

        <div className="fitmax-faq-footer">

          <div className="fitmax-faq-footer-message">
            <span>STILL HAVE QUESTIONS?</span>

            <strong>
              We're here to help you understand your recovery.
            </strong>
          </div>

          <a
            href="/contact"
            className="fitmax-faq-contact"
          >
            <span>Contact FitMax</span>
            <span aria-hidden="true">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default FAQSection;