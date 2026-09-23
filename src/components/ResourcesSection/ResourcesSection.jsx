import FitMaxMark from "../FITMaxMark/FItMaxtMark";
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
      "https://images.pexels.com/photos/7089626/pexels-photo-7089626.jpeg?auto=compress&cs=tinysrgb&w=1400",
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
  const featuredResource = resources[0];

  return (
    <section
      className="fitmax-resources"
      id="resources"
    >
      <div className="fitmax-resources-container">

        {/* =====================================================
            TOP
        ===================================================== */}

        <div className="fitmax-resources-top">

          <div className="fitmax-resources-label">
            <FitMaxMark />

            <span>
              RESOURCES &amp; TOOLS
            </span>
          </div>

          <div className="fitmax-resources-index">

            <span>
              09
            </span>

            <span>
              RESOURCE HUB
            </span>

          </div>

        </div>


        {/* =====================================================
            MAIN
        ===================================================== */}

        <div className="fitmax-resources-main">

          {/* ===================================================
              LEFT CONTENT
          =================================================== */}

          <div className="fitmax-resources-copy">

            <span className="fitmax-resources-kicker">
              YOUR CLINICAL TOOLKIT
            </span>

            <h2>
              Build your
              <span>
                toolkit.
              </span>

              Apply it
              <span>
                in practice.
              </span>
            </h2>

            <p>
              Access practical resources designed to help
              physiotherapists prepare better, learn faster
              and bring clinical knowledge into everyday practice.
            </p>

            <a
              href="#resource-hub"
              className="fitmax-resources-link"
            >
              <span>
                Explore the resource hub
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>


            {/* MINI RESOURCE PATH */}

            <div className="fitmax-resources-path">

              <div className="fitmax-resources-path-line">
                <span />
              </div>

              <div className="fitmax-resources-path-items">

                <div className="active">
                  <span>01</span>
                  <strong>ASSESS</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>LEARN</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>APPLY</strong>
                </div>

              </div>

            </div>

          </div>


          {/* ===================================================
              RESOURCE EXPERIENCE
          =================================================== */}

          <div
            className="fitmax-resources-experience"
            id="resource-hub"
          >

            {/* FEATURED */}

            <article className="fitmax-resource-feature">

              <div className="fitmax-resource-feature-image">

                <img
                  src={featuredResource.image}
                  alt="Physiotherapy professional using clinical resources"
                />

                <div
                  className="fitmax-resource-feature-overlay"
                  aria-hidden="true"
                />

                <div className="fitmax-resource-feature-top">

                  <span>
                    {featuredResource.number}
                  </span>

                  <span>
                    FEATURED RESOURCE
                  </span>

                </div>

                <div className="fitmax-resource-feature-badge">
                  CLINICAL GUIDE
                </div>

              </div>


              <div className="fitmax-resource-feature-content">

                <div className="fitmax-resource-feature-meta">
                  <span>
                    {featuredResource.category}
                  </span>
                </div>

                <FitMaxMark />

                <h3>
                  {featuredResource.title}
                </h3>

                <p>
                  {featuredResource.description}
                </p>

                <a href="#resources">

                  <span>
                    {featuredResource.link}
                  </span>

                  <span aria-hidden="true">
                    ↗
                  </span>

                </a>

              </div>

            </article>


            {/* SUPPORTING */}

            <div className="fitmax-resources-support">

              {resources.slice(1).map((resource) => (
                <article
                  className="fitmax-resource-support-card"
                  key={resource.number}
                >

                  <div className="fitmax-resource-support-image">

                    <img
                      src={resource.image}
                      alt={resource.title}
                    />

                    <span>
                      {resource.number}
                    </span>

                  </div>


                  <div className="fitmax-resource-support-content">

                    <span>
                      {resource.category}
                    </span>

                    <h3>
                      {resource.title}
                    </h3>

                    <p>
                      {resource.description}
                    </p>

                    <a href="#resources">

                      <span>
                        {resource.link}
                      </span>

                      <span aria-hidden="true">
                        ↗
                      </span>

                    </a>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="fitmax-resources-bottom">

          <div className="fitmax-resources-bottom-line">
            <span />
          </div>

          <div className="fitmax-resources-bottom-copy">

            <span>
              FROM KNOWLEDGE TO PRACTICE
            </span>

            <strong>
              Learn better.
              <span>
                Practice smarter.
              </span>
            </strong>

          </div>

          <FitMaxMark />

        </div>

      </div>
    </section>
  );
}

export default ResourcesSection;