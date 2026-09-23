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

            <span>GET BACK TO WHAT MOVES YOU</span>
          </div>

          <h1 className="fitmax-hero-title">
            <span className="fitmax-hero-title-black">
              MAXIMISE
            </span>

            <span className="fitmax-hero-title-blue">
              YOUR POTENTIAL
            </span>
          </h1>

          <p className="fitmax-hero-description">
            Move better. Recover stronger. Build the confidence
            to do more of what you love.
          </p>

          <div className="fitmax-hero-actions">
            <a
              href="#fitmax-explore"
              className="fitmax-hero-primary"
            >
              Explore FitMax
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/register"
              className="fitmax-hero-secondary"
            >
              Start Your Journey
            </a>
          </div>

          <div className="fitmax-hero-meta">
            <div className="fitmax-hero-meta-item">
              <strong>10+</strong>
              <span>Years of experience</span>
            </div>

            <div className="fitmax-hero-meta-divider" />

            <div className="fitmax-hero-meta-item">
              <strong>2000+</strong>
              <span>Patients supported</span>
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
              <span>THE FITMAX JOURNEY</span>
              <span className="fitmax-hero-story-number">
                01
              </span>
            </div>

            <div className="fitmax-hero-story-line">
              <span className="fitmax-hero-story-line-progress" />
            </div>

            <div className="fitmax-hero-story-steps">
              <span>Move</span>
              <span>Recover</span>
              <span>Perform</span>
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
        <span>SCROLL TO EXPLORE</span>

        <span
          className="fitmax-hero-bottom-line"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default Hero;