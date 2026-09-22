import "./LearnSection.css";

const learningItems = [
  {
    number: "01",
    title: "Clinical Cases",
    description:
      "Explore practical cases and understand how experienced physiotherapists approach real patient situations.",
    link: "Explore Cases",
    className: "learn-card-large",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Physiotherapist working with a patient during rehabilitation",
  },
  {
    number: "02",
    title: "Expert Learning",
    description:
      "Learn directly from experienced physiotherapists through focused lessons, workshops and practical insights.",
    link: "Meet Experts",
    className: "learn-card-medium",
    image:
      "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Healthcare professional guiding a patient through exercise",
  },
  {
    number: "03",
    title: "Evidence Based",
    description:
      "Build stronger clinical knowledge with research focused resources and current physiotherapy practices.",
    link: "Explore Research",
    className: "learn-card-medium",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Healthcare professionals discussing clinical information",
  },
];

function LearnSection() {
  return (
    <section className="fitmax-learn" id="learn">
      <div className="fitmax-learn-container">

        <div className="fitmax-learn-heading">

          <div className="fitmax-learn-label">
            <span />
            <span>LEARN WITH FITMAX</span>
          </div>

          <div className="fitmax-learn-heading-row">

            <h2>
              Learn From
              <span>Real Practice.</span>
            </h2>

            <p>
              Practical education designed for physiotherapists
              who want to strengthen their clinical knowledge,
              sharpen their skills and keep growing.
            </p>

          </div>

        </div>

        <div className="fitmax-learn-grid">

          {learningItems.map((item) => (
            <article
              key={item.number}
              className={`fitmax-learn-card ${item.className}`}
            >

              <div className="fitmax-learn-card-top">
                <span className="fitmax-learn-number">
                  {item.number}
                </span>

                <span className="fitmax-learn-arrow">
                  ↗
                </span>
              </div>

              <div className="fitmax-learn-card-content">

                <div className="fitmax-learn-card-visual">
  <img
    src={item.image}
    alt={item.alt}
  />
</div>

                <div className="fitmax-learn-card-copy">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a href="#learn">
                    <span>{item.link}</span>
                    <span aria-hidden="true">↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

        <div className="fitmax-learn-footer">

          <span>01</span>

          <div className="fitmax-learn-progress">
            <span />
          </div>

          <span>03</span>

          <p>
            Build knowledge.
            <strong>Apply it in practice.</strong>
          </p>

        </div>

      </div>
    </section>
  );
}

export default LearnSection;