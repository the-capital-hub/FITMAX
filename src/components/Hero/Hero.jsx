import "./Hero.css";

function Hero() {
  return (
    <section className="fitmax-hero">
      <div className="fitmax-hero-bg-orb fitmax-hero-bg-orb-one" />
      <div className="fitmax-hero-bg-orb fitmax-hero-bg-orb-two" />

      <div className="fitmax-hero-container">
        <div className="fitmax-hero-content">
          <div className="fitmax-hero-eyebrow">
            <span
              className="fitmax-hero-movement-mark"
              aria-hidden="true"
            >
              <span className="fitmax-hero-mark-top" />
              <span className="fitmax-hero-mark-bottom" />
            </span>

            <span>PHYSIOTHERAPY & REHABILITATION</span>
          </div>

          <h1 className="fitmax-hero-title">
            <span className="fitmax-hero-title-black">
              Your body has been through enough.
            </span>

            <span className="fitmax-hero-title-blue">
              Now let's rebuild it.
            </span>
          </h1>

          <p className="fitmax-hero-description">
            Personalized physiotherapy and rehabilitation for
            people recovering from injuries, surgeries,
            accidents and movement related conditions.
          </p>

          <div className="fitmax-hero-actions">
            <a
              href="/book-assessment"
              className="fitmax-hero-primary"
            >
              Start Your Recovery
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/book-assessment"
              className="fitmax-hero-secondary"
            >
              Book an Assessment
            </a>
          </div>

          <div className="fitmax-hero-meta">
            <div className="fitmax-hero-meta-item">
              <strong>01</strong>
              <span>Personalized care</span>
            </div>

            <div className="fitmax-hero-meta-divider" />

            <div className="fitmax-hero-meta-item">
              <strong>02</strong>
              <span>Guided rehabilitation</span>
            </div>

            <div className="fitmax-hero-meta-divider" />

            <div className="fitmax-hero-meta-item">
              <strong>03</strong>
              <span>Progress focused recovery</span>
            </div>
          </div>
        </div>

        <div className="fitmax-hero-visual">
          <div className="fitmax-hero-image-card">
            <img
              src="https://images.pexels.com/photos/31234755/pexels-photo-31234755.jpeg"
              alt="Physiotherapist assisting a patient during rehabilitation"
            />

            <div className="fitmax-hero-image-overlay" />
          </div>

          <div className="fitmax-hero-story-card">
            <div className="fitmax-hero-story-top">
              <span>YOUR RECOVERY JOURNEY</span>

              <span className="fitmax-hero-story-number">
                01
              </span>
            </div>

            <div className="fitmax-hero-story-line">
              <span className="fitmax-hero-story-line-progress" />
            </div>

            <div className="fitmax-hero-story-steps">
              <span>Assess</span>
              <span>Rehabilitate</span>
              <span>Recover</span>
            </div>
          </div>

          <div
            className="fitmax-hero-motion-path fitmax-hero-motion-path-one"
            aria-hidden="true"
          />

          <div
            className="fitmax-hero-motion-path fitmax-hero-motion-path-two"
            aria-hidden="true"
          />

          <div
            className="fitmax-hero-motion-dot fitmax-hero-motion-dot-one"
            aria-hidden="true"
          />

          <div
            className="fitmax-hero-motion-dot fitmax-hero-motion-dot-two"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="fitmax-hero-bottom">
        <span>START YOUR RECOVERY</span>

        <span
          className="fitmax-hero-bottom-line"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default Hero;