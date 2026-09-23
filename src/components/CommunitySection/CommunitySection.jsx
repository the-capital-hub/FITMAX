
import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./CommunitySection.css";

const communityPaths = [
  {
    number: "01",
    label: "DISCUSS",
    title: "Clinical cases",
    description:
      "Bring a case, a question or a treatment challenge into the conversation.",
  },
  {
    number: "02",
    label: "CONNECT",
    title: "Professional perspectives",
    description:
      "Learn how other physiotherapists approach movement, recovery and clinical practice.",
  },
  {
    number: "03",
    label: "DISCOVER",
    title: "Ideas worth sharing",
    description:
      "Find useful research, resources and practical insights from the community.",
  },
];

function CommunitySection() {
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
            <span>CONNECTION</span>
          </div>
        </div>

        {/* MAIN */}
        <div className="fitmax-community-main">

          {/* LEFT */}
          <div className="fitmax-community-copy">

            <span className="fitmax-community-kicker">
              ONE PROFESSION
            </span>

            <h2>
              Better practice
              <span>moves through</span>
              <span>conversation.</span>
            </h2>

            <p>
              Physiotherapy grows through shared knowledge, real experience
              and meaningful professional conversation. FitMax brings those
              perspectives into one connected space.
            </p>

            <a
              href="#community-space"
              className="fitmax-community-link"
            >
              <span>Enter the community</span>
              <span aria-hidden="true">↗</span>
            </a>

            {/* MINI FLOW */}
            <div className="fitmax-community-mini-flow">
              <div className="fitmax-community-mini-line">
                <span />
              </div>

              <div className="fitmax-community-mini-step active">
                <span>01</span>
                <strong>CASES</strong>
              </div>

              <div className="fitmax-community-mini-step">
                <span>02</span>
                <strong>IDEAS</strong>
              </div>

              <div className="fitmax-community-mini-step">
                <span>03</span>
                <strong>CONNECTION</strong>
              </div>
            </div>

          </div>

          {/* COMMUNITY EXPERIENCE */}
          <div
            className="fitmax-community-experience"
            id="community-space"
          >

            {/* BACKGROUND IMAGE */}
            <div className="fitmax-community-image">
              <img
                src="https://images.pexels.com/photos/20860593/pexels-photo-20860593.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Physiotherapy professionals discussing clinical practice"
              />

              <div
                className="fitmax-community-image-overlay"
                aria-hidden="true"
              />
            </div>

            {/* GRID */}
            <div
              className="fitmax-community-grid"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            {/* CENTRAL NETWORK */}
            <div className="fitmax-community-network">

              <div className="fitmax-community-network-ring ring-one" />
              <div className="fitmax-community-network-ring ring-two" />

              <div className="fitmax-community-network-line line-one" />
              <div className="fitmax-community-network-line line-two" />
              <div className="fitmax-community-network-line line-three" />

              <div className="fitmax-community-node node-one">
                <span>CASE</span>
              </div>

              <div className="fitmax-community-node node-two">
                <span>IDEA</span>
              </div>

              <div className="fitmax-community-node node-three">
                <span>SHARE</span>
              </div>

              <div className="fitmax-community-network-center">
                <FitMaxMark />
                <span>FITMAX SPACE</span>
                <strong>
                  Learn.
                  <br />
                  Share.
                  <br />
                  Connect.
                </strong>
              </div>

            </div>

            {/* LIVE LABEL */}
            <div className="fitmax-community-live">
              <span className="fitmax-community-live-dot" />
              <span>PROFESSIONAL EXCHANGE</span>
            </div>

            {/* TOP LABEL */}
            <div className="fitmax-community-experience-top">
              <span>THE COMMUNITY</span>
              <strong>ONE SPACE</strong>
            </div>

            {/* BOTTOM MESSAGE */}
            <div className="fitmax-community-experience-bottom">
              <span>REAL QUESTIONS</span>
              <strong>
                Better conversations.
                <span>Better practice.</span>
              </strong>
            </div>

          </div>
        </div>

        {/* COMMUNITY PATHS */}
        <div className="fitmax-community-paths">

          {communityPaths.map((path) => (
            <article
              className="fitmax-community-path"
              key={path.number}
            >

              <div className="fitmax-community-path-number">
                {path.number}
              </div>

              <div className="fitmax-community-path-content">
                <span>{path.label}</span>

                <h3>{path.title}</h3>

                <p>{path.description}</p>
              </div>

              <a
                href="#community-space"
                className="fitmax-community-path-arrow"
                aria-label={`Explore ${path.title}`}
              >
                ↗
              </a>

            </article>
          ))}

        </div>

        {/* FOOTER */}
        <div className="fitmax-community-footer">

          <div className="fitmax-community-footer-line">
            <span />
          </div>

          <div className="fitmax-community-footer-copy">
            <span>BUILT FOR PHYSIOTHERAPISTS</span>

            <strong>
              Different experiences.
              <span>One shared profession.</span>
            </strong>
          </div>

          <FitMaxMark />

        </div>

      </div>
    </section>
  );
}

export default CommunitySection;