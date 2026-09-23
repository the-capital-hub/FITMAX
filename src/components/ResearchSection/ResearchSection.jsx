


import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./ResearchSection.css";


const researchItems = [
  {
    number: "01",
    type: "EVIDENCE BASED",
    label: "FEATURED KNOWLEDGE",
    title: "Better Clinical Decisions",
    highlight: "Start With Better Knowledge.",
    description:
      "Build a stronger clinical foundation with research focused learning and practical evidence that can be connected to everyday physiotherapy practice.",
    link: "Read Featured Guide",
    image:
      "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "02",
    type: "EVIDENCE UPDATE",
    label: "SPORTS PHYSIOTHERAPY",
    title: "Sports Injury Rehabilitation",
    description:
      "Stay informed about rehabilitation principles, recovery strategies and evidence informed approaches for sports injuries.",
    link: "Explore",
  },
  {
    number: "03",
    type: "PRACTICE NOTE",
    label: "REHABILITATION",
    title: "Movement & Mobility",
    description:
      "Understand how movement, mobility and exercise can support functional recovery across different patient conditions.",
    link: "Explore",
  },
];

function ResearchSection() {
  const featuredItem = researchItems[0];

  return (
    <section className="fitmax-research" id="research">
      <div className="fitmax-research-container">

        <div className="fitmax-research-top">

          <div className="fitmax-research-label">
            <FitMaxMark/>
            <span>RESEARCH &amp; EVIDENCE</span>
          </div>

          <div className="fitmax-research-index">
            <span>07</span>
            <span>EVIDENCE</span>
          </div>

        </div>

        <div className="fitmax-research-main">

          <div className="fitmax-research-copy">

            <span className="fitmax-research-kicker">
              KNOWLEDGE IN MOTION
            </span>

            <h2>
              Ask better
              <span>questions.</span>
              Find better
              <span>evidence.</span>
            </h2>

            <p>
              Research helps turn curiosity into understanding.
              FitMax connects evidence, clinical knowledge and
              practical thinking to support better physiotherapy
              practice.
            </p>

            <a
              href="#research-hub"
              className="fitmax-research-link"
            >
              <span>Explore the knowledge hub</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>

          <div
            className="fitmax-research-experience"
            id="research-hub"
          >

            <div className="fitmax-research-feature">

              <div className="fitmax-research-feature-image">
                <img
                  src={featuredItem.image}
                  alt="Healthcare professional reviewing clinical research"
                />

                <div
                  className="fitmax-research-feature-overlay"
                  aria-hidden="true"
                />
              </div>

              <div className="fitmax-research-feature-content">

                <div className="fitmax-research-feature-meta">
                  <span>{featuredItem.number}</span>
                  <span>{featuredItem.type}</span>
                </div>

                <FitMaxMark/>

                <span className="fitmax-research-feature-label">
                  {featuredItem.label}
                </span>

                <h3>
                  {featuredItem.title}
                  <strong>{featuredItem.highlight}</strong>
                </h3>

                <p>
                  {featuredItem.description}
                </p>

                <a href="#research">
                  <span>{featuredItem.link}</span>
                  <span aria-hidden="true">↗</span>
                </a>

              </div>

            </div>

            <div className="fitmax-research-flow">

              <div className="fitmax-research-flow-line">
                <span />
              </div>

              <div className="fitmax-research-flow-step active">
                <span>01</span>
                <strong>QUESTION</strong>
                <p>Stay curious.</p>
              </div>

              <div className="fitmax-research-flow-step">
                <span>02</span>
                <strong>EVIDENCE</strong>
                <p>Explore what is known.</p>
              </div>

              <div className="fitmax-research-flow-step">
                <span>03</span>
                <strong>PRACTICE</strong>
                <p>Apply with purpose.</p>
              </div>

            </div>

          </div>

        </div>

        <div className="fitmax-research-support">

          {researchItems.slice(1).map((item) => (
            <article
              className="fitmax-research-support-item"
              key={item.number}
            >

              <div className="fitmax-research-support-number">
                {item.number}
              </div>

              <div className="fitmax-research-support-content">

                <span>{item.type}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a href="#research">
                  <span>{item.link}</span>
                  <span aria-hidden="true">↗</span>
                </a>

              </div>

            </article>
          ))}

        </div>

        <div className="fitmax-research-bottom">

          <div className="fitmax-research-bottom-line">
            <span />
          </div>

          <div className="fitmax-research-bottom-copy">
            <span>FROM EVIDENCE TO PRACTICE</span>

            <strong>
              Learn what matters.
              <span>Apply what helps.</span>
            </strong>
          </div>

          <FitMaxMark/>

        </div>

      </div>
    </section>
  );
}

export default ResearchSection;