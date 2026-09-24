import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./CTASection.css";

function CTASection() {
  return (
    <section
      className="fitmax-cta-section"
      id="final-cta"
    >
      {/* Background */}

      <div className="fitmax-cta-background">
        <img
          src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Physiotherapist guiding a patient through rehabilitation"
        />

        <div
          className="fitmax-cta-overlay"
          aria-hidden="true"
        />
      </div>


      <div className="fitmax-cta-container">

        {/* TOP */}

        <div className="fitmax-cta-top">

          <div className="fitmax-cta-label">
            <FitMaxMark />
            <span>READY TO START YOUR RECOVERY</span>
          </div>

          <div className="fitmax-cta-index">
            <span>09</span>
            <span>YOUR NEXT STEP</span>
          </div>

        </div>


        {/* MAIN */}

        <div className="fitmax-cta-main">

          {/* COPY */}

          <div className="fitmax-cta-copy">

            <span className="fitmax-cta-kicker">
              MOVE TOWARD WHAT MATTERS
            </span>

            <h2>
              Ready to start
              <span>your recovery?</span>
            </h2>

            <p>
              Get professional physiotherapy and a structured
              rehabilitation plan built around your condition,
              goals and progress.
            </p>


            {/* ACTIONS */}

            <div className="fitmax-cta-actions">

              <a
                href="/book-assessment"
                className="fitmax-cta-primary"
              >
                <span>Start Your Recovery</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/book-assessment"
                className="fitmax-cta-secondary"
              >
                <span>Book an Assessment</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>


          {/* RECOVERY JOURNEY VISUAL */}

          <div className="fitmax-cta-experience">

            <div
              className="fitmax-cta-orbit orbit-one"
              aria-hidden="true"
            />

            <div
              className="fitmax-cta-orbit orbit-two"
              aria-hidden="true"
            />


            <div className="fitmax-cta-center">

              <FitMaxMark />

              <span>THE FITMAX JOURNEY</span>

              <strong>
                Recover.
                <br />
                Rebuild.
                <br />
                Return.
              </strong>

            </div>


            {/* STEP 01 */}

            <div className="fitmax-cta-path path-one">

              <span>01</span>

              <strong>ASSESS</strong>

              <small>
                Understand your recovery.
              </small>

            </div>


            {/* STEP 02 */}

            <div className="fitmax-cta-path path-two">

              <span>02</span>

              <strong>REHABILITATE</strong>

              <small>
                Follow your care plan.
              </small>

            </div>


            {/* STEP 03 */}

            <div className="fitmax-cta-path path-three">

              <span>03</span>

              <strong>PROGRESS</strong>

              <small>
                Track your recovery.
              </small>

            </div>


            {/* STEP 04 */}

            <div className="fitmax-cta-path path-four">

              <span>04</span>

              <strong>RETURN</strong>

              <small>
                Get back to life.
              </small>

            </div>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="fitmax-cta-bottom">

          <div className="fitmax-cta-bottom-line">
            <span />
          </div>


          <div className="fitmax-cta-bottom-copy">

            <span>BUILT AROUND YOUR RECOVERY</span>

            <strong>
              Your recovery.
              <span>Your next step.</span>
            </strong>

          </div>


          <FitMaxMark />

        </div>

      </div>
    </section>
  );
}

export default CTASection;