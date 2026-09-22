import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="fitmax-about" id="about">
      <div className="fitmax-about-container">

        <div className="fitmax-about-visual">

          <img
            src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Physiotherapy rehabilitation session"
          />

          <div className="fitmax-about-image-overlay" />

          <div className="fitmax-about-experience">
            <strong>10+</strong>
            <span>Years of Physiotherapy Experience</span>
          </div>

          <div className="fitmax-about-image-label">
            <span>PHYSIO FITMAX</span>
            <span>CARE • LEARNING • GROWTH</span>
          </div>

        </div>

        <div className="fitmax-about-content">

          <div className="fitmax-about-label">
            <span />
            <span>ABOUT FITMAX</span>
          </div>

          <h2>
            More Than
            <span>Physiotherapy.</span>
          </h2>

          <p className="fitmax-about-lead">
            Physio FitMax is built around a simple idea:
            better physiotherapy comes from better knowledge,
            better guidance and a stronger connection between
            professionals and patients.
          </p>

          <p className="fitmax-about-description">
            From personalised physiotherapy care and
            rehabilitation to practical clinical learning,
            FitMax brings knowledge and professional experience
            together in one growing ecosystem.
          </p>

          <div className="fitmax-about-points">

            <div className="fitmax-about-point">
              <span className="fitmax-about-point-number">
                01
              </span>

              <div>
                <h3>Personalised Care</h3>
                <p>
                  Treatment and rehabilitation designed around
                  individual patient needs.
                </p>
              </div>
            </div>

            <div className="fitmax-about-point">
              <span className="fitmax-about-point-number">
                02
              </span>

              <div>
                <h3>Clinical Knowledge</h3>
                <p>
                  Practical learning that connects evidence
                  with everyday physiotherapy practice.
                </p>
              </div>
            </div>

            <div className="fitmax-about-point">
              <span className="fitmax-about-point-number">
                03
              </span>

              <div>
                <h3>Professional Community</h3>
                <p>
                  A space where physiotherapists can learn,
                  discuss cases and grow together.
                </p>
              </div>
            </div>

          </div>

          <a
            href="#about"
            className="fitmax-about-cta"
          >
            <span>Discover FitMax</span>
            <span aria-hidden="true">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;