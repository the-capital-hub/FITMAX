import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./CTASection.css";


function CTASection() {
  return (
    <section
      className="fitmax-cta-section"
      id="contact"
    >
      <div className="fitmax-cta-background">

        <img
          src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Physiotherapy professional helping a patient during rehabilitation"
        />

        <div
          className="fitmax-cta-overlay"
          aria-hidden="true"
        />

      </div>

      <div className="fitmax-cta-container">

        <div className="fitmax-cta-top">

          <div className="fitmax-cta-label">
            <FitMaxMark/>
            <span>START YOUR FITMAX JOURNEY</span>
          </div>

          <div className="fitmax-cta-index">
            <span>12</span>
            <span>THE NEXT STEP</span>
          </div>

        </div>

        <div className="fitmax-cta-main">

          <div className="fitmax-cta-copy">

            <span className="fitmax-cta-kicker">
              MOVE FORWARD WITH FITMAX
            </span>

            <h2>
              Better knowledge.
              <span>Better practice.</span>
            </h2>

            <p>
              Join a growing physiotherapy ecosystem built
              around clinical learning, professional connection
              and practical growth.
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

          <div className="fitmax-cta-experience">

            <div className="fitmax-cta-orbit orbit-one" />
            <div className="fitmax-cta-orbit orbit-two" />

            <div className="fitmax-cta-center">

              <FitMaxMark/>

              <span>THE FITMAX SPACE</span>

              <strong>
                Learn.
                <br />
                Connect.
                <br />
                Grow.
              </strong>

            </div>

            <div className="fitmax-cta-path path-one">
              <span>01</span>
              <strong>LEARN</strong>
              <small>Build knowledge.</small>
            </div>

            <div className="fitmax-cta-path path-two">
              <span>02</span>
              <strong>CONNECT</strong>
              <small>Share experience.</small>
            </div>

            <div className="fitmax-cta-path path-three">
              <span>03</span>
              <strong>GROW</strong>
              <small>Move forward.</small>
            </div>

          </div>

        </div>

        <div className="fitmax-cta-bottom">

          <div className="fitmax-cta-bottom-line">
            <span />
          </div>

          <div className="fitmax-cta-bottom-copy">
            <span>BUILT FOR PHYSIOTHERAPISTS</span>

            <strong>
              Your knowledge.
              <span>Your movement.</span>
            </strong>
          </div>

          <FitMaxMark/>

        </div>

      </div>
    </section>
  );
}

export default CTASection;