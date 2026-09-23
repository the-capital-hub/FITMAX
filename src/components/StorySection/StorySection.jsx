import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./StorySection.css";

function StorySection() {
  return (
    <section className="fitmax-story" id="fitmax-story">
      <div className="fitmax-story-container">

        {/* LEFT VISUAL */}

        <div className="fitmax-story-visual">

          <div
            className="fitmax-story-blue-shape"
            aria-hidden="true"
          />

          <div className="fitmax-story-image-wrapper">
            <img
  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg"
  alt="Physiotherapist helping a patient with rehabilitation"
  className="fitmax-story-image"
/>

            <div
              className="fitmax-story-image-overlay"
              aria-hidden="true"
            />
          </div>

          {/* Journey */}

          <div className="fitmax-story-journey">
            <div className="fitmax-story-journey-item active">
              <span className="fitmax-story-journey-dot" />
              <span>Understand</span>
            </div>

            <div className="fitmax-story-journey-item">
              <span className="fitmax-story-journey-dot" />
              <span>Recover</span>
            </div>

            <div className="fitmax-story-journey-item">
              <span className="fitmax-story-journey-dot" />
              <span>Perform</span>
            </div>
          </div>

          {/* Movement Line */}

          <div
            className="fitmax-story-motion-line"
            aria-hidden="true"
          >
            <span className="fitmax-story-motion-dot" />
          </div>

          {/* Method Card */}

          <div className="fitmax-story-card">
            <div className="fitmax-story-card-header">
              <span>THE FITMAX METHOD</span>

              <strong>01</strong>
            </div>

            <h3>Understand</h3>

            <p>
              Start by understanding how your body moves.
            </p>

            <div className="fitmax-story-card-progress">
              <span />
            </div>
          </div>
        </div>


        {/* RIGHT CONTENT */}

        <div className="fitmax-story-content">

          <div className="fitmax-story-label">
            <FitMaxMark/>

            <span>
              MOVE IS MORE THAN MOTION
            </span>
          </div>


          <h2 className="fitmax-story-title">
            When you move
            <span> better,</span>
            you experience
            <span> life differently.</span>
          </h2>


          <p className="fitmax-story-description">
            Movement shapes how you recover, perform and
            experience everyday life. FitMax brings clinical
            knowledge and movement together to help you
            understand what your body can do.
          </p>


          <a
            href="#fitmax-explore"
            className="fitmax-story-link"
          >
            <span>
              Discover the FitMax approach
            </span>

            <span
              className="fitmax-story-link-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>


          {/* Bottom Journey */}

          <div className="fitmax-story-bottom">

            <span>01</span>

            <div
              className="fitmax-story-bottom-line"
              aria-hidden="true"
            >
              <span />
            </div>

            <span>
              BUILT AROUND THE WAY YOUR BODY MOVES
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default StorySection;