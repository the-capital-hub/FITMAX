import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./AboutSection.css";


const aboutPoints = [
  {
    number: "01",
    title: "Personalised Care",
    description:
      "Treatment and rehabilitation designed around individual patient needs.",
  },
  {
    number: "02",
    title: "Clinical Knowledge",
    description:
      "Practical learning that connects evidence with everyday physiotherapy practice.",
  },
  {
    number: "03",
    title: "Professional Community",
    description:
      "A space where physiotherapists can learn, discuss cases and grow together.",
  },
];

function AboutSection() {
  return (
    <section className="fitmax-about" id="about">
      <div className="fitmax-about-container">

        {/* TOP */}
        <div className="fitmax-about-top">

          <div className="fitmax-about-label">
            <FitMaxMark/>
            <span>ABOUT FITMAX</span>
          </div>

          <div className="fitmax-about-index">
            <span>10</span>
            <span>THE FITMAX STORY</span>
          </div>

        </div>

        {/* MAIN */}
        <div className="fitmax-about-main">

          {/* VISUAL */}
          <div className="fitmax-about-visual">

            <div className="fitmax-about-image-wrapper">

              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Physiotherapy professional helping a patient during rehabilitation"
              />

              <div
                className="fitmax-about-image-overlay"
                aria-hidden="true"
              />

            </div>

            <div className="fitmax-about-experience">
              <strong>10+</strong>
              <span>YEARS OF EXPERIENCE</span>
            </div>

            <div className="fitmax-about-mark">
              <FitMaxMark/>
              <span>PHYSIO FITMAX</span>
            </div>

            <div
              className="fitmax-about-motion motion-one"
              aria-hidden="true"
            />

            <div
              className="fitmax-about-motion motion-two"
              aria-hidden="true"
            />

            <div className="fitmax-about-image-caption">
              <span>CARE</span>
              <span>LEARNING</span>
              <span>GROWTH</span>
            </div>

          </div>

          {/* CONTENT */}
          <div className="fitmax-about-content">

            <span className="fitmax-about-kicker">
              THE IDEA BEHIND FITMAX
            </span>

            <h2>
              More than
              <span>physiotherapy.</span>
            </h2>

            <p className="fitmax-about-lead">
              FitMax is built around a simple idea:
              better physiotherapy comes from better
              knowledge, better guidance and stronger
              connections.
            </p>

            <p className="fitmax-about-description">
              From personalised physiotherapy care and
              rehabilitation to practical clinical learning,
              FitMax brings professional experience,
              movement and knowledge together in one
              growing ecosystem.
            </p>

            <div className="fitmax-about-points">

              {aboutPoints.map((point) => (
                <article
                  className="fitmax-about-point"
                  key={point.number}
                >

                  <span className="fitmax-about-point-number">
                    {point.number}
                  </span>

                  <div className="fitmax-about-point-content">

                    <h3>{point.title}</h3>

                    <p>{point.description}</p>

                  </div>

                  <span
                    className="fitmax-about-point-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>

                </article>
              ))}

            </div>

            <a
              href="#about"
              className="fitmax-about-cta"
            >
              <span>Discover the FitMax story</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="fitmax-about-bottom">

          <div className="fitmax-about-bottom-line">
            <span />
          </div>

         

        </div>

      </div>
    </section>
  );
}

export default AboutSection;