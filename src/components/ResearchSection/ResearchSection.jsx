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
    featured: true,
  },
  {
    number: "02",
    type: "EVIDENCE UPDATE",
    label: "SPORTS PHYSIOTHERAPY",
    title: "Sports Injury Rehabilitation",
    description:
      "Stay informed about rehabilitation principles, recovery strategies and evidence informed approaches for sports injuries.",
    link: "Explore",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    type: "PRACTICE NOTE",
    label: "REHABILITATION",
    title: "Movement & Mobility",
    description:
      "Understand how movement, mobility and exercise can support functional recovery across different patient conditions.",
    link: "Explore",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function ResearchSection() {
  const featuredItem = researchItems[0];
  const supportingItems = researchItems.slice(1);

  return (
    <section className="fitmax-research" id="research">
      <div className="fitmax-research-container">

        <div className="fitmax-research-header">

          <div className="fitmax-research-label">
            <span />
            <span>RESEARCH &amp; EVIDENCE</span>
          </div>

          <div className="fitmax-research-heading-row">

            <h2>
              Stay Curious.
              <span>Stay Evidence Based.</span>
            </h2>

            <div className="fitmax-research-intro">
              <p>
                Explore practical clinical knowledge, research
                insights and evidence focused resources designed
                to support better physiotherapy practice.
              </p>

              <a
                href="#research"
                className="fitmax-research-cta"
              >
                <span>Explore Research</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

          </div>
        </div>

        <div className="fitmax-research-layout">

          <article
            className="fitmax-research-feature"
            style={{
              backgroundImage: `url("${featuredItem.image}")`,
            }}
          >

            <div className="fitmax-research-image-overlay" />

            <div className="fitmax-research-feature-top">
              <span className="fitmax-research-feature-number">
                {featuredItem.number}
              </span>

              <span className="fitmax-research-feature-tag">
                {featuredItem.type}
              </span>
            </div>

            <div className="fitmax-research-feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13Z" />
                <path d="M8 7h8" />
                <path d="M8 11h8" />
                <path d="M8 15h5" />
              </svg>
            </div>

            <div className="fitmax-research-feature-content">
              <span>{featuredItem.label}</span>

              <h3>
                {featuredItem.title}
                <strong>{featuredItem.highlight}</strong>
              </h3>

              <p>{featuredItem.description}</p>

              <a href="#research">
                <span>{featuredItem.link}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

          </article>

          <div className="fitmax-research-list">

            {supportingItems.map((item) => (
              <article
                className="fitmax-research-card"
                key={item.number}
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
              >

                <div className="fitmax-research-card-overlay" />

                <div className="fitmax-research-card-top">
                  <span className="fitmax-research-number">
                    {item.number}
                  </span>

                  <span className="fitmax-research-type">
                    {item.type}
                  </span>
                </div>

                <div className="fitmax-research-card-content">
                  <span>{item.label}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a href="#research">
                    <span>{item.link}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="fitmax-research-card-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>

        <div className="fitmax-research-footer">

          <div className="fitmax-research-footer-line">
            <span />
          </div>

          <p>
            Learn from evidence.
            <strong>Apply it with confidence.</strong>
          </p>

          <span className="fitmax-research-count">
            KNOWLEDGE HUB
          </span>

        </div>

      </div>
    </section>
  );
}

export default ResearchSection;