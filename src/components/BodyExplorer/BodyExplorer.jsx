import { useState } from "react";
import "./BodyExplorer.css";
import FitMaxMark from "../FITMaxMark/FItMaxtMark";

const conditions = [
  {
    id: "acl-knee",
    number: "01",
    title: "ACL & Knee",
    description:
      "Structured rehabilitation to rebuild knee strength, stability, movement and confidence.",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg",
    icon: "◉",
  },
  {
    id: "back-neck",
    number: "02",
    title: "Back & Neck",
    description:
      "Personalized care to improve movement, strength and everyday function.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    icon: "◒",
  },
  {
    id: "shoulder",
    number: "03",
    title: "Shoulder",
    description:
      "Guided rehabilitation focused on shoulder mobility, strength and control.",
    image:
      "https://images.pexels.com/photos/6740748/pexels-photo-6740748.jpeg",
    icon: "◌",
  },
  {
    id: "accident",
    number: "04",
    title: "Accident Recovery",
    description:
      "A progressive rehabilitation plan to help rebuild movement after an accident.",
    image:
      "https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg",
    icon: "✦",
  },
  {
    id: "post-surgical",
    number: "05",
    title: "Post Surgical",
    description:
      "Carefully guided rehabilitation to support recovery after surgery.",
    image:
      "https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg",
    icon: "✚",
  },
  {
    id: "sports",
    number: "06",
    title: "Sports Injury",
    description:
      "Rebuild strength, movement and confidence as you work toward returning to sport.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
    icon: "↗",
  },
  {
    id: "fracture",
    number: "07",
    title: "Fracture Recovery",
    description:
      "Progressive rehabilitation to restore movement, strength and everyday function.",
    image:
      "https://images.pexels.com/photos/7659569/pexels-photo-7659569.jpeg",
    icon: "◇",
  },
  {
    id: "mobility",
    number: "08",
    title: "Mobility & Strength",
    description:
      "Improve movement, balance and strength to feel more confident in everyday life.",
    image:
      "https://images.pexels.com/photos/6111615/pexels-photo-6111615.jpeg",
    icon: "∞",
  },
];

function BodyExplorer() {
  const [activeCondition, setActiveCondition] = useState("acl-knee");

  const selectedCondition =
    conditions.find(
      (condition) => condition.id === activeCondition
    ) || conditions[0];

  return (
    <section
      className="fitmax-body-explorer"
      id="who-we-help"
    >
      <div className="fitmax-body-explorer-container">

        {/* HEADER */}

        <div className="fitmax-body-explorer-header">

          <div className="fitmax-body-explorer-label">
            <FitMaxMark />
            <span>WHO WE HELP</span>
          </div>

          <div className="fitmax-body-explorer-heading-row">

            <h2 className="fitmax-body-explorer-title">
              Recovery starts with
              <span>the right care.</span>
            </h2>

            <p className="fitmax-body-explorer-description">
              Whether you are recovering from an injury, surgery,
              accident or movement related condition, FitMax
              helps you follow a structured path toward better
              movement and everyday life.
            </p>

          </div>

        </div>


        {/* CONDITION CARDS */}

        <div className="fitmax-condition-grid">

          {conditions.map((condition) => (
            <button
              key={condition.id}
              type="button"
              className={`fitmax-condition-card ${
                activeCondition === condition.id
                  ? "is-active"
                  : ""
              }`}
              onMouseEnter={() =>
                setActiveCondition(condition.id)
              }
              onFocus={() =>
                setActiveCondition(condition.id)
              }
              onClick={() =>
                setActiveCondition(condition.id)
              }
              aria-pressed={
                activeCondition === condition.id
              }
              style={{
                "--condition-image": `url("${condition.image}")`,
              }}
            >

              {/* BACKGROUND */}

              <div
                className="fitmax-condition-image"
                aria-hidden="true"
              />

              <div
                className="fitmax-condition-overlay"
                aria-hidden="true"
              />


              {/* CONTENT */}

              <div className="fitmax-condition-card-top">

                <span className="fitmax-condition-number">
                  {condition.number}
                </span>

                <span className="fitmax-condition-icon">
                  {condition.icon}
                </span>

              </div>


              <div className="fitmax-condition-card-content">

                <h3>{condition.title}</h3>

                <p>{condition.description}</p>

              </div>


              <div className="fitmax-condition-card-bottom">

                <span className="fitmax-condition-explore">
                  Explore condition
                </span>

                <span
                  className="fitmax-condition-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </div>

            </button>
          ))}

        </div>


        {/* FEATURED CONDITION */}

        <div className="fitmax-condition-featured">

          <div className="fitmax-condition-featured-number">
            {selectedCondition.number}
          </div>

          <div className="fitmax-condition-featured-content">

            <span>CURRENTLY EXPLORING</span>

            <h3>{selectedCondition.title}</h3>

            <p>{selectedCondition.description}</p>

          </div>

          <a
            href="/book-assessment"
            className="fitmax-condition-featured-action"
          >
            <span>Start Your Recovery</span>

            <span
              className="fitmax-condition-featured-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

        </div>


        {/* BOTTOM */}

        <div className="fitmax-body-explorer-bottom">

          <span>03</span>

          <div
            className="fitmax-body-explorer-progress"
            aria-hidden="true"
          >
            <span
              style={{
                width: `${
                  (Number(selectedCondition.number) /
                    conditions.length) *
                  100
                }%`,
              }}
            />
          </div>

          <span>
            FIND THE RIGHT PATH FOR YOUR RECOVERY
          </span>

        </div>

      </div>
    </section>
  );
}

export default BodyExplorer;