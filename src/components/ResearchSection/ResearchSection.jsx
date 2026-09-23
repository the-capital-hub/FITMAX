import { useState } from "react";
import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./ResearchSection.css";

const researchItems = [
  {
    number: "01",
    category: "SPORTS REHABILITATION",
    title: "Start With Better Questions.",
    description:
      "Explore the evidence behind sports rehabilitation and turn better questions into clearer clinical decisions.",
    image:
      "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "02",
    category: "MOVEMENT & MOBILITY",
    title: "Understand How People Move.",
    description:
      "Build a stronger understanding of movement, mobility and the factors that influence rehabilitation.",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    number: "03",
    category: "CLINICAL PRACTICE",
    title: "Bring Evidence Into Practice.",
    description:
      "Connect research with practical thinking that can support better assessment, rehabilitation and patient care.",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

function ResearchSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = researchItems[activeIndex];

  return (
    <section className="fitmax-research" id="research">
      <div className="fitmax-research-container">

        {/* TOP BAR */}
        <div className="fitmax-research-top">
          <div className="fitmax-research-label">
            <span className="fitmax-research-dot" />
            <span>RESEARCH &amp; EVIDENCE</span>
          </div>

          <div className="fitmax-research-index">
            <span>07</span>
            <span className="fitmax-research-index-line" />
            <span>EVIDENCE HUB</span>
          </div>
        </div>

        {/* MAIN STORY */}
        <div className="fitmax-research-story">

          {/* LEFT */}
          <div className="fitmax-research-copy">

            <div className="fitmax-research-kicker">
              KNOWLEDGE
              <br />
              IN MOTION
            </div>

            <h2>
              What we know
              <span> should shape</span>
              how we move.
            </h2>

            <p>
              Research should not stay inside a paper. FitMax brings
              evidence, clinical thinking and practical knowledge closer
              to the professionals who use it.
            </p>

            <a href="#resources" className="fitmax-research-link">
              <span>EXPLORE THE EVIDENCE</span>
              <span className="fitmax-research-arrow">↗</span>
            </a>

            {/* MINI PROCESS */}
            <div className="fitmax-research-mini-process">
              <div className="fitmax-research-mini-line" />

              <div className="fitmax-research-mini-item">
                <span>01</span>
                <strong>QUESTION</strong>
              </div>

              <div className="fitmax-research-mini-item">
                <span>02</span>
                <strong>EVIDENCE</strong>
              </div>

              <div className="fitmax-research-mini-item">
                <span>03</span>
                <strong>PRACTICE</strong>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="fitmax-research-visual">

            <div className="fitmax-research-image-wrap">

              <img
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.category}
                className="fitmax-research-image"
              />

              <div className="fitmax-research-image-overlay" />

              {/* ANIMATED PATH */}
              <svg
                className="fitmax-research-motion"
                viewBox="0 0 500 600"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M30 520 C120 470 90 390 180 350 C270 310 220 210 340 180 C390 165 420 110 470 70"
                  pathLength="1"
                />
                <circle cx="180" cy="350" r="5" />
                <circle cx="340" cy="180" r="5" />
                <circle cx="470" cy="70" r="5" />
              </svg>

              {/* NUMBER */}
              <div className="fitmax-research-image-number">
                <span>{activeItem.number}</span>
                <small>03</small>
              </div>

              {/* MARK */}
              <div className="fitmax-research-mark">
                <FitMaxMark />
              </div>

              {/* IMAGE CAPTION */}
              <div className="fitmax-research-image-caption">
                <span>FITMAX EVIDENCE HUB</span>
                <span>↗</span>
              </div>
            </div>

            {/* CONTENT BELOW IMAGE */}
            <div className="fitmax-research-active-content">

              <div className="fitmax-research-active-top">
                <span>{activeItem.category}</span>

                <div className="fitmax-research-active-counter">
                  <strong>{activeItem.number}</strong>
                  <span>/ 03</span>
                </div>
              </div>

              <h3>{activeItem.title}</h3>

              <p>{activeItem.description}</p>

            </div>
          </div>
        </div>

        {/* STORY NAVIGATION */}
        <div className="fitmax-research-navigation">

          <div className="fitmax-research-navigation-heading">
            <span>THE FITMAX METHOD</span>
            <p>
              From a question to knowledge that can move practice forward.
            </p>
          </div>

          <div className="fitmax-research-steps">

            {researchItems.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={`fitmax-research-step ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="fitmax-research-step-top">
                  <span>{item.number}</span>

                  <span className="fitmax-research-step-circle">
                    {activeIndex === index ? "↗" : ""}
                  </span>
                </div>

                <strong>{item.category}</strong>

                <p>
                  {index === 0
                    ? "Ask better questions."
                    : index === 1
                    ? "Find what matters."
                    : "Apply what you learn."}
                </p>
              </button>
            ))}

          </div>
        </div>

        {/* BOTTOM */}
        <div className="fitmax-research-bottom">

          <span>
            BETTER KNOWLEDGE
            <span className="fitmax-research-bottom-line" />
            BETTER PRACTICE
          </span>

          <FitMaxMark />

          <span>FITMAX / 07</span>

        </div>
      </div>
    </section>
  );
}

export default ResearchSection;