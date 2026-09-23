import { useState } from "react";
import "./BodyExplorer.css";
import FitMaxMark from "../FITMaxMark/FItMaxtMark";

const bodyAreas = [
  {
    id: "neck",
    label: "Neck",
    number: "01",
    category: "Mobility",
    position: { top: "17%", left: "50%" },
    title: "Neck",
    description:
      "Neck mobility, posture and control work together to support comfortable everyday movement.",
  },
  {
    id: "shoulder",
    label: "Shoulder",
    number: "02",
    category: "Movement",
    position: { top: "29%", left: "38%" },
    title: "Shoulder",
    description:
      "Shoulder movement depends on mobility, strength and coordination working together.",
  },
  {
    id: "spine",
    label: "Spine",
    number: "03",
    category: "Stability",
    position: { top: "42%", left: "50%" },
    title: "Spine",
    description:
      "Your spine creates a balance between stability and movement across the body.",
  },
  {
    id: "hip",
    label: "Hip",
    number: "04",
    category: "Strength",
    position: { top: "55%", left: "50%" },
    title: "Hip",
    description:
      "Hip strength and mobility influence walking, running, balance and everyday movement.",
  },
  {
    id: "knee",
    label: "Knee",
    number: "05",
    category: "Control",
    position: { top: "69%", left: "43%" },
    title: "Knee",
    description:
      "The knee works with the hip and ankle to create stable and confident movement.",
  },
  {
    id: "ankle",
    label: "Ankle",
    number: "06",
    category: "Foundation",
    position: { top: "87%", left: "46%" },
    title: "Ankle",
    description:
      "Ankle mobility and control create an important foundation for balance and movement.",
  },
];

function BodyExplorer() {
  const [activeArea, setActiveArea] = useState("knee");

  const selectedArea =
    bodyAreas.find((area) => area.id === activeArea) || bodyAreas[4];

  const selectedIndex = bodyAreas.findIndex(
    (area) => area.id === selectedArea.id
  );

  return (
    <section className="fitmax-body-explorer" id="body-explorer">
      <div className="fitmax-body-explorer-container">

        {/* LEFT CONTENT */}
        <div className="fitmax-body-explorer-intro">
          <div className="fitmax-body-explorer-label">
            <FitMaxMark/>
            <span>UNDERSTAND YOUR BODY</span>
          </div>

          <h2 className="fitmax-body-explorer-title">
            Every movement
            <span>tells a story.</span>
          </h2>

          <p className="fitmax-body-explorer-description">
            Your body works as a connected system. Explore the areas
            that influence the way you move, recover and perform.
          </p>

          <a
            href="#fitmax-explore"
            className="fitmax-body-explorer-link"
          >
            <span>Explore movement</span>

            <span
              className="fitmax-body-explorer-link-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>

        {/* RIGHT VISUAL */}
        <div className="fitmax-body-explorer-visual">

          <div
            className="fitmax-body-explorer-orbit orbit-one"
            aria-hidden="true"
          />

          <div
            className="fitmax-body-explorer-orbit orbit-two"
            aria-hidden="true"
          />

          <div
            className="fitmax-body-explorer-glow"
            aria-hidden="true"
          />

          {/* BODY */}
          <div className="fitmax-body-explorer-body">

            <div
              className="fitmax-body-silhouette"
              aria-hidden="true"
            >
              <div className="fitmax-body-head" />
              <div className="fitmax-body-neck" />
              <div className="fitmax-body-torso" />

              <div className="fitmax-body-arm-left" />
              <div className="fitmax-body-arm-right" />

              <div className="fitmax-body-hand-left" />
              <div className="fitmax-body-hand-right" />

              <div className="fitmax-body-leg-left" />
              <div className="fitmax-body-leg-right" />

              <div className="fitmax-body-foot-left" />
              <div className="fitmax-body-foot-right" />
            </div>

            {/* BODY CONNECTION LINE */}
            <div
              className="fitmax-body-center-line"
              aria-hidden="true"
            />

            {/* INTERACTIVE POINTS */}
            {bodyAreas.map((area) => (
              <button
                key={area.id}
                type="button"
                className={`fitmax-body-point ${
                  activeArea === area.id ? "is-active" : ""
                }`}
                style={{
                  top: area.position.top,
                  left: area.position.left,
                }}
                onMouseEnter={() => setActiveArea(area.id)}
                onFocus={() => setActiveArea(area.id)}
                onClick={() => setActiveArea(area.id)}
                aria-label={`Explore ${area.label}`}
                aria-pressed={activeArea === area.id}
              >
                <span className="fitmax-body-point-ring" />
                <span className="fitmax-body-point-core" />

                <span className="fitmax-body-point-label">
                  {area.label}
                </span>
              </button>
            ))}
          </div>

          {/* INFO CARD */}
          <div
            className="fitmax-body-info-card"
            key={selectedArea.id}
          >
            <div className="fitmax-body-info-top">
              <span>{selectedArea.category}</span>

              <span>
                {selectedArea.number}
              </span>
            </div>

            <h3>{selectedArea.title}</h3>

            <p>{selectedArea.description}</p>

            <div className="fitmax-body-info-footer">
              <span>FITMAX MOVEMENT</span>

              <span className="fitmax-body-info-arrow">
                ↗
              </span>
            </div>

            <div className="fitmax-body-info-line">
              <span />
            </div>
          </div>

          {/* SMALL FLOATING LABEL */}
          <div className="fitmax-body-floating-label">
            <FitMaxMark />

            <div>
              <strong>MOVE</strong>
              <span>WITH PURPOSE</span>
            </div>
          </div>

        </div>

        {/* BOTTOM PROGRESS */}
        <div className="fitmax-body-explorer-bottom">
          <span>02</span>

          <div
            className="fitmax-body-explorer-progress"
            aria-hidden="true"
          >
            <span
              style={{
                width: `${((selectedIndex + 1) / bodyAreas.length) * 100}%`,
              }}
            />
          </div>

          <span>
            EXPLORE HOW YOUR BODY MOVES
          </span>
        </div>

      </div>
    </section>
  );
}

export default BodyExplorer;