import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./LearnSection.css";


const learningItems = [
  {
    number: "01",
    category: "CLINICAL PRACTICE",
    title: "Learn From Real Practice",
    description:
      "Explore practical clinical situations and understand how physiotherapists approach assessment, treatment and recovery.",
    link: "Explore Clinical Cases",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Physiotherapist working with a patient during rehabilitation",
  },
  {
    number: "02",
    category: "MOVEMENT SCIENCE",
    title: "Understand How Movement Works",
    description:
      "Build stronger foundations in movement, mobility, strength and performance through focused learning.",
    link: "Explore Movement",
    image:
      "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Healthcare professional guiding a patient through exercise",
  },
  {
    number: "03",
    category: "RESEARCH & EVIDENCE",
    title: "Keep Your Knowledge Moving",
    description:
      "Discover research focused resources and evidence informed ideas that connect knowledge with clinical practice.",
    link: "Explore Research",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Healthcare professionals discussing clinical information",
  },
];

function LearnSection() {
  return (
    <section className="fitmax-learn" id="learn">
      <div className="fitmax-learn-container">

        <div className="fitmax-learn-intro">

          <div className="fitmax-learn-label">
            <FitMaxMark/>
            <span>LEARN WITH FITMAX</span>
          </div>

          <div className="fitmax-learn-intro-content">

            <div className="fitmax-learn-title-wrap">
              <span className="fitmax-learn-kicker">
                KNOWLEDGE IN MOTION
              </span>

              <h2>
                Learn the science.
                <span>Apply it in practice.</span>
              </h2>
            </div>

            <div className="fitmax-learn-description-wrap">

              <p>
                Build clinical knowledge through practical learning,
                movement science and evidence informed resources
                designed for physiotherapists.
              </p>

              <a href="#learn-content" className="fitmax-learn-main-link">
                <span>Explore learning</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>

        </div>

        <div className="fitmax-learn-content" id="learn-content">

          <div className="fitmax-learn-feature">

            <div className="fitmax-learn-feature-image">
              <img
                src={learningItems[0].image}
                alt={learningItems[0].alt}
              />

              <div
                className="fitmax-learn-feature-overlay"
                aria-hidden="true"
              />

              <div className="fitmax-learn-feature-number">
                {learningItems[0].number}
              </div>

              <div className="fitmax-learn-feature-category">
                {learningItems[0].category}
              </div>
            </div>

            <div className="fitmax-learn-feature-copy">

              <h3>{learningItems[0].title}</h3>

              <p>{learningItems[0].description}</p>

              <a href="#clinical-cases">
                <span>{learningItems[0].link}</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>

          <div className="fitmax-learn-side">

            {learningItems.slice(1).map((item) => (
              <article
                key={item.number}
                className="fitmax-learn-side-card"
              >

                <div className="fitmax-learn-side-image">
                  <img
                    src={item.image}
                    alt={item.alt}
                  />

                  <span className="fitmax-learn-side-number">
                    {item.number}
                  </span>
                </div>

                <div className="fitmax-learn-side-copy">

                  <span className="fitmax-learn-side-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a href="#learn">
                    <span>{item.link}</span>
                    <span aria-hidden="true">↗</span>
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>

        <div className="fitmax-learn-footer">

          <div className="fitmax-learn-footer-index">
            <span>03</span>
            <span>LEARN</span>
          </div>

          <div className="fitmax-learn-footer-line" aria-hidden="true">
            <span />
          </div>

          <p>
            Learn with purpose.
            <strong>Move with confidence.</strong>
          </p>

        </div>

      </div>
    </section>
  );
}

export default LearnSection;