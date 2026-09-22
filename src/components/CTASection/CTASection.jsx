import "./CTASection.css";

function CTASection() {
  return (
    <section className="fitmax-cta-section" id="contact">
      <div className="fitmax-cta-background">
        <img
          src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Physiotherapy rehabilitation session"
        />

        <div className="fitmax-cta-overlay" />
      </div>

      <div className="fitmax-cta-container">

        <div className="fitmax-cta-top">

          <div className="fitmax-cta-label">
            <span />
            <span>START YOUR FITMAX JOURNEY</span>
          </div>

          <span className="fitmax-cta-number">
            15
          </span>

        </div>

        <div className="fitmax-cta-content">

          <h2>
            Better Knowledge.
            <span>Better Practice.</span>
          </h2>

          <p>
            Join a growing physiotherapy ecosystem built around
            clinical learning, professional connection and
            practical growth.
          </p>

          <div className="fitmax-cta-actions">

            <a
              href="/register"
              className="fitmax-cta-primary"
            >
              <span>Join FitMax</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="/contact"
              className="fitmax-cta-secondary"
            >
              <span>Talk to FitMax</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>

        </div>

        <div className="fitmax-cta-bottom">

          <span>
            LEARN
          </span>

          <span>
            CONNECT
          </span>

          <span>
            GROW
          </span>

        </div>

      </div>
    </section>
  );
}

export default CTASection;