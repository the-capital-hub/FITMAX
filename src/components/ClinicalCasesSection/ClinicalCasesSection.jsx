import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./ClinicalCasesSection.css";


const clinicalCases = [
  {
    number: "01",
    category: "ORTHOPEDIC",
    title: "Post ACL Rehabilitation",
    description:
      "Understand assessment, rehabilitation planning and progressive exercise selection after ACL reconstruction.",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "02",
    category: "NEURO",
    title: "Stroke Recovery",
    description:
      "Explore practical approaches to movement training, functional recovery and patient progression after stroke.",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "03",
    category: "SPORTS",
    title: "Sports Injury Recovery",
    description:
      "Learn how physiotherapists assess common sports injuries and build a structured return to activity.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

function ClinicalCasesSection() {
  const featuredCase = clinicalCases[0];
  const secondaryCases = clinicalCases.slice(1);

  return (
    <section
      className="fitmax-clinical-cases"
      id="clinical-cases"
    >
      <div className="fitmax-clinical-cases-container">

        <div className="fitmax-clinical-cases-header">

          <div className="fitmax-clinical-cases-label">
            <FitMaxMark/>
            <span>CLINICAL CASES</span>
          </div>

          <div className="fitmax-clinical-cases-heading-row">

            <div className="fitmax-clinical-cases-title-wrap">

              <span className="fitmax-clinical-cases-kicker">
                REAL CLINICAL THINKING
              </span>

              <h2>
                Real cases.
                <span>Practical thinking.</span>
              </h2>

            </div>

            <div className="fitmax-clinical-cases-intro">

              <p>
                Go beyond theory with practical clinical scenarios
                that help physiotherapists think through assessment,
                treatment and patient progression.
              </p>

              <a
                href="#clinical-case-content"
                className="fitmax-clinical-cases-cta"
              >
                <span>Explore clinical cases</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>

        </div>

        <div
          className="fitmax-clinical-cases-content"
          id="clinical-case-content"
        >

          <article className="fitmax-clinical-feature">

            <div className="fitmax-clinical-feature-image">

              <img
                src={featuredCase.image}
                alt={featuredCase.title}
              />

              <div
                className="fitmax-clinical-feature-overlay"
                aria-hidden="true"
              />

              <span className="fitmax-clinical-feature-number">
                {featuredCase.number}
              </span>

              <span className="fitmax-clinical-feature-category">
                {featuredCase.category}
              </span>

              <div className="fitmax-clinical-feature-marker">
                <FitMaxMark/>
              </div>

            </div>

            <div className="fitmax-clinical-feature-copy">

              <span className="fitmax-clinical-feature-label">
                FEATURED CASE
              </span>

              <h3>
                {featuredCase.title}
              </h3>

              <p>
                {featuredCase.description}
              </p>

              <a href="#clinical-cases">
                <span>View clinical case</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </article>

          <div className="fitmax-clinical-secondary">

            {secondaryCases.map((clinicalCase) => (
              <article
                className="fitmax-clinical-secondary-card"
                key={clinicalCase.number}
              >

                <div className="fitmax-clinical-secondary-image">

                  <img
                    src={clinicalCase.image}
                    alt={clinicalCase.title}
                  />

                  <span className="fitmax-clinical-secondary-number">
                    {clinicalCase.number}
                  </span>

                  <span className="fitmax-clinical-secondary-category">
                    {clinicalCase.category}
                  </span>

                </div>

                <div className="fitmax-clinical-secondary-copy">

                  <h3>
                    {clinicalCase.title}
                  </h3>

                  <p>
                    {clinicalCase.description}
                  </p>

                  <a href="#clinical-cases">
                    <span>View case</span>
                    <span aria-hidden="true">↗</span>
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>

        <div className="fitmax-clinical-cases-footer">

          <div className="fitmax-clinical-cases-footer-index">
            <span>04</span>
            <span>CLINICAL CASES</span>
          </div>

          <div
            className="fitmax-clinical-cases-footer-line"
            aria-hidden="true"
          >
            <span />
          </div>

          <p>
            Assess the case.
            <strong>Understand the approach.</strong>
          </p>

        </div>

      </div>
    </section>
  );
}

export default ClinicalCasesSection;