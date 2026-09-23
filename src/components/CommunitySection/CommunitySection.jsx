import { useState } from "react";
import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./CommunitySection.css";

const communityPaths = [
  {
    number: "01",
    label: "CASES",
    title: "Talk through real clinical cases.",
    description:
      "Bring a case, a question or a treatment challenge into a space where other professionals can share their perspective.",
  },
  {
    number: "02",
    label: "IDEAS",
    title: "Discover different perspectives.",
    description:
      "Explore practical ideas, useful resources and experiences shared by physiotherapists across the community.",
  },
  {
    number: "03",
    label: "CONNECT",
    title: "Build meaningful connections.",
    description:
      "Connect with professionals who share your curiosity, your challenges and your passion for better practice.",
  },
];

function CommunitySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePath = communityPaths[activeIndex];

  return (
    <section className="fitmax-community" id="community">
      <div className="fitmax-community-container">

        {/* TOP */}
        <div className="fitmax-community-top">

          <div className="fitmax-community-label">
            <FitMaxMark />
            <span>THE FITMAX COMMUNITY</span>
          </div>

          <div className="fitmax-community-index">
            <span>05</span>
            <span className="fitmax-community-index-line" />
            <span>CONNECTION</span>
          </div>

        </div>

        {/* MAIN */}
        <div className="fitmax-community-main">

          {/* LEFT CONTENT */}
          <div className="fitmax-community-copy">

            <span className="fitmax-community-kicker">
              ONE PROFESSION
            </span>

            <h2>
              Practice grows
              <span> when we</span>
              connect.
            </h2>

            <p>
              Physiotherapy is built on shared experience. FitMax gives
              professionals a place to discuss cases, exchange ideas and
              learn from the people around them.
            </p>

            <a
              href="#community-space"
              className="fitmax-community-link"
            >
              <span>ENTER THE COMMUNITY</span>
              <span>↗</span>
            </a>

            {/* SMALL FLOW */}
            <div className="fitmax-community-flow">

              <span className="fitmax-community-flow-number">
                {activePath.number}
              </span>

              <div className="fitmax-community-flow-line">
                <span />
              </div>

              <span className="fitmax-community-flow-label">
                {activePath.label}
              </span>

            </div>

          </div>

          {/* RIGHT EXPERIENCE */}
          <div
            className="fitmax-community-experience"
            id="community-space"
          >

            {/* IMAGE */}
            <div className="fitmax-community-image">

              <img
                src="https://images.pexels.com/photos/20860593/pexels-photo-20860593.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Physiotherapy professionals discussing clinical practice"
              />

              <div className="fitmax-community-image-overlay" />

              {/* BLUE PATH */}
              <svg
                className="fitmax-community-path-line"
                viewBox="0 0 700 430"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M30 370 C130 315 130 240 245 245 C355 250 370 150 475 170 C555 185 600 100 675 55"
                  pathLength="1"
                />

                <circle cx="245" cy="245" r="5" />
                <circle cx="475" cy="170" r="5" />
                <circle cx="675" cy="55" r="5" />
              </svg>

              {/* IMAGE LABEL */}
              <div className="fitmax-community-image-top">
                <span>FITMAX COMMUNITY</span>
                <span>{activePath.number} / 03</span>
              </div>

              {/* IMAGE MESSAGE */}
              <div className="fitmax-community-image-message">

                <FitMaxMark />

                <span>SHARED KNOWLEDGE</span>

                <strong>
                  Learn from
                  <br />
                  each other.
                </strong>

              </div>

              {/* IMAGE BOTTOM */}
              <div className="fitmax-community-image-bottom">
                <span>PROFESSIONAL EXCHANGE</span>
                <span>↗</span>
              </div>

            </div>

            {/* CONTENT */}
            <div className="fitmax-community-content">

              <div className="fitmax-community-content-top">
                <span>{activePath.label}</span>

                <div>
                  <strong>{activePath.number}</strong>
                  <span>/ 03</span>
                </div>
              </div>

              <h3>{activePath.title}</h3>

              <p>{activePath.description}</p>

            </div>

          </div>

        </div>

        {/* NAVIGATION */}
        <div className="fitmax-community-navigation">

          {communityPaths.map((path, index) => (
            <button
              key={path.number}
              type="button"
              className={`fitmax-community-tab ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >

              <span className="fitmax-community-tab-number">
                {path.number}
              </span>

              <div>
                <span>{path.label}</span>
                <strong>
                  {index === 0
                    ? "Discuss"
                    : index === 1
                    ? "Discover"
                    : "Connect"}
                </strong>
              </div>

              <span className="fitmax-community-tab-arrow">
                {activeIndex === index ? "↗" : ""}
              </span>

            </button>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CommunitySection;