import "./ClinicalCasesSection.css";

const clinicalCases = [
  {
    number: "01",
    category: "ORTHOPEDIC",
    title: "Post ACL Rehabilitation",
    description:
      "Understand assessment, rehabilitation planning and progressive exercise selection after ACL reconstruction.",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "02",
    category: "NEURO",
    title: "Stroke Recovery",
    description:
      "Explore practical approaches to movement training, functional recovery and patient progression after stroke.",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    category: "SPORTS",
    title: "Sports Injury Recovery",
    description:
      "Learn how physiotherapists assess common sports injuries and build a structured return to activity.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function ClinicalCasesSection() {
  return (
    <section className="fitmax-clinical-cases" id="clinical-cases">
      <div className="fitmax-clinical-cases-container">

        <div className="fitmax-clinical-cases-header">
          <div className="fitmax-clinical-cases-label">
            <span />
            <span>LEARN FROM CLINICAL CASES</span>
          </div>

          <div className="fitmax-clinical-cases-heading-row">
            <h2>
              Real Cases.
              <span>Practical Thinking.</span>
            </h2>

            <div className="fitmax-clinical-cases-intro">
              <p>
                Go beyond theory with practical clinical scenarios
                designed to help physiotherapists think through
                assessment, treatment and patient progression.
              </p>

              <a
                href="#clinical-cases"
                className="fitmax-clinical-cases-cta"
              >
                <span>Explore All Cases</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="fitmax-clinical-cases-grid">
          {clinicalCases.map((clinicalCase) => (
            <article
              className="fitmax-clinical-case-card"
              key={clinicalCase.number}
            >
              <div className="fitmax-clinical-case-image">
                <img
                  src={clinicalCase.image}
                  alt={clinicalCase.title}
                />

                <div className="fitmax-clinical-case-number">
                  {clinicalCase.number}
                </div>

                <div className="fitmax-clinical-case-category">
                  {clinicalCase.category}
                </div>

                <div className="fitmax-clinical-case-arrow">
                  ↗
                </div>
              </div>

              <div className="fitmax-clinical-case-content">
                <h3>{clinicalCase.title}</h3>

                <p>{clinicalCase.description}</p>

                <a href="#clinical-cases">
                  <span>View Case</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="fitmax-clinical-cases-footer">
          <div className="fitmax-clinical-cases-footer-line">
            <span />
          </div>

          <p>
            Assess the case.
            <strong>Understand the approach.</strong>
          </p>

          <span className="fitmax-clinical-cases-count">
            03 CASES
          </span>
        </div>

      </div>
    </section>
  );
}

export default ClinicalCasesSection;