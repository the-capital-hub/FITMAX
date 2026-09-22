import "./ResourcesSection.css";

const resources = [
  {
    number: "01",
    category: "CLINICAL GUIDES",
    title: "Clinical Assessment Guides",
    description:
      "Practical guides to help physiotherapists structure assessment, identify key findings and plan the next clinical step.",
    link: "Explore Guides",
    image:
      "https://images.pexels.com/photos/7089626/pexels-photo-7089626.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "02",
    category: "ASSESSMENT TOOLS",
    title: "Assessment Resources",
    description:
      "Useful resources for clinical assessment, patient evaluation and structured physiotherapy practice.",
    link: "View Resources",
    image:
      "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    category: "EXERCISE LIBRARY",
    title: "Exercise & Movement",
    description:
      "Explore practical exercise ideas and movement focused resources that can support rehabilitation planning.",
    link: "Explore Library",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function ResourcesSection() {
  return (
    <section className="fitmax-resources" id="resources">
      <div className="fitmax-resources-container">

        <div className="fitmax-resources-header">

          <div className="fitmax-resources-label">
            <span />
            <span>RESOURCES &amp; TOOLS</span>
          </div>

          <div className="fitmax-resources-heading-row">

            <h2>
              Tools For
              <span>Better Clinical Practice.</span>
            </h2>

            <div className="fitmax-resources-intro">

              <p>
                Access practical resources designed to help
                physiotherapists learn faster, prepare better
                and apply clinical knowledge with confidence.
              </p>

              <a
                href="#resources"
                className="fitmax-resources-cta"
              >
                <span>Explore All Resources</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>

        </div>

        <div className="fitmax-resources-grid">

          {resources.map((resource) => (
            <article
              className="fitmax-resource-card"
              key={resource.number}
              style={{
                backgroundImage: `url("${resource.image}")`,
              }}
            >

              <div className="fitmax-resource-overlay" />

              <div className="fitmax-resource-top">

                <span className="fitmax-resource-number">
                  {resource.number}
                </span>

                <span className="fitmax-resource-category">
                  {resource.category}
                </span>

              </div>

              <div className="fitmax-resource-content">

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>

                <a href="#resources">
                  <span>{resource.link}</span>
                  <span aria-hidden="true">↗</span>
                </a>

              </div>

              <div className="fitmax-resource-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>

        <div className="fitmax-resources-footer">

          <div className="fitmax-resources-footer-line">
            <span />
          </div>

          <p>
            Learn better.
            <strong>Practice smarter.</strong>
          </p>

          <span className="fitmax-resources-count">
            RESOURCE HUB
          </span>

        </div>

      </div>
    </section>
  );
}

export default ResourcesSection;