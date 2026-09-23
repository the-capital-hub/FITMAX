import { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    number: "01",
    question: "Does FitMax offer online physiotherapy consultation?",
    answer:
      "FitMax provides online consultation along with clinic based physiotherapy care, allowing patients to access professional guidance based on their individual needs.",
  },
  {
    number: "02",
    question: "What conditions can physiotherapy help with?",
    answer:
      "Physiotherapy can support people dealing with conditions such as back pain, neck pain, knee pain, shoulder pain, sports injuries, mobility limitations and rehabilitation needs.",
  },
  {
    number: "03",
    question: "Is the treatment plan personalised?",
    answer:
      "Yes. Physiotherapy care is planned around the individual's condition, assessment findings, goals and rehabilitation requirements.",
  },
  {
    number: "04",
    question: "Can I access FitMax from outside the clinic?",
    answer:
      "Online consultation makes it possible to connect with FitMax remotely when an online consultation is appropriate for the individual's needs.",
  },
  {
    number: "05",
    question: "What learning resources will FitMax provide?",
    answer:
      "The platform is designed to bring together clinical cases, expert learning, research resources, webinars and practical educational material for physiotherapy professionals.",
  },
  {
    number: "06",
    question: "Will FitMax have live learning sessions?",
    answer:
      "Yes. The platform is being designed to support webinars and live learning sessions where physiotherapists can learn, discuss clinical topics and interact with experienced professionals.",
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

        <div className="fitmax-faq-header">

          <div className="fitmax-faq-label">
            <span />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <div className="fitmax-faq-heading-row">

            <h2>
              Questions.
              <span>Clear Answers.</span>
            </h2>

            <p>
              Everything you need to know about FitMax,
              physiotherapy care and the professional learning
              experience we are building.
            </p>

          </div>

        </div>

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
                >

                  <span className="fitmax-faq-number">
                    {faq.number}
                  </span>

                  <span className="fitmax-faq-title">
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

        <div className="fitmax-faq-footer">

          <div className="fitmax-faq-footer-line">
            <span />
          </div>

          

          <a href="#contact">
            <span>Contact Us</span>
            <span aria-hidden="true">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default FAQSection;