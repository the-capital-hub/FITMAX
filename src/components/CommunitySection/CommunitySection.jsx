import "./CommunitySection.css";

const communityTopics = [
  {
    number: "01",
    title: "Clinical Discussions",
    description:
      "Discuss treatment approaches, assessment methods and challenging cases with fellow physiotherapists.",
  },
  {
    number: "02",
    title: "Expert Answers",
    description:
      "Get practical perspectives from experienced professionals across different physiotherapy specialties.",
  },
  {
    number: "03",
    title: "Research Sharing",
    description:
      "Discover useful research, clinical resources and evidence that can support better practice.",
  },
];

function CommunitySection() {
  return (
    <section className="fitmax-community" id="community">
      <div className="fitmax-community-container">

        <div className="fitmax-community-header">

          <div className="fitmax-community-label">
            <span />
            <span>THE FITMAX COMMUNITY</span>
          </div>

          <div className="fitmax-community-heading-row">

            <h2>
              Connect With
              <span>Physiotherapists.</span>
            </h2>

            <div className="fitmax-community-intro">
              <p>
                A professional space to exchange clinical knowledge,
                discuss real challenges and learn from people working
                across physiotherapy.
              </p>

              <a href="#community" className="fitmax-community-cta">
                <span>Join the Community</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

          </div>

        </div>

        <div className="fitmax-community-layout">

          <div className="fitmax-community-visual">

  <div className="fitmax-community-visual-image">
    <img
      src="https://images.pexels.com/photos/20860593/pexels-photo-20860593.jpeg?auto=compress&cs=tinysrgb&w=1400"
      alt="Physiotherapist guiding a patient during rehabilitation"
    />
  </div>

  <div className="fitmax-community-center">

    <div className="fitmax-community-center-icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19c.7-3.2 2.6-5 5.5-5s4.8 1.8 5.5 5" />
        <path d="M14 15c2.7-.3 4.8 1 5.5 4" />
      </svg>
    </div>

    <strong>10K+</strong>

    <span>
      Physiotherapists learning together
    </span>

  </div>

  <div className="fitmax-community-mini-card community-card-one">
    <span className="community-mini-icon">+</span>

    <div>
      <strong>Clinical Case</strong>
      <span>Discussion</span>
    </div>
  </div>

  <div className="fitmax-community-mini-card community-card-two">
    <strong>24/7</strong>
    <span>Professional exchange</span>
  </div>

  <div className="fitmax-community-mini-card community-card-three">
    <span className="community-status-dot" />
    <span>Experts are active</span>
  </div>

  <div className="fitmax-community-visual-content">
    <span>Professional Community</span>
    <strong>Learn together. Grow together.</strong>
  </div>

</div>

          <div className="fitmax-community-topics">

            {communityTopics.map((topic) => (
              <article
                className="fitmax-community-topic"
                key={topic.number}
              >
                <div className="fitmax-community-topic-number">
                  {topic.number}
                </div>

                <div className="fitmax-community-topic-content">
                  <h3>{topic.title}</h3>

                  <p>{topic.description}</p>

                  <a href="#community">
                    <span>Explore</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}

          </div>

        </div>

        <div className="fitmax-community-bottom">

          <div className="fitmax-community-member-stack">
            <span>J</span>
            <span>A</span>
            <span>R</span>
            <span>+</span>
          </div>

          <p>
            Built for professionals who believe
            <strong>learning is better together.</strong>
          </p>

          <span className="fitmax-community-scroll">
            Scroll to explore
          </span>

        </div>

      </div>
    </section>
  );
}

export default CommunitySection;