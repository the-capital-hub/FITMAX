import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./StorySection.css";

function StorySection() {
  const recoveryGoals = [
    {
      number: "01",
      title: "Move without pain",
      text: "Build the movement and confidence you need for everyday life.",
    },
    {
      number: "02",
      title: "Get stronger",
      text: "Rebuild strength gradually with a plan designed around your recovery.",
    },
    {
      number: "03",
      title: "Return to your routine",
      text: "Work, walk, climb stairs, play sport and get back to doing what matters.",
    },
  ];

  return (
    <section className="fitmax-story" id="fitmax-promise">
      <div className="fitmax-story-container">

        {/* LEFT CONTENT */}

        <div className="fitmax-story-content">

          <div className="fitmax-story-label">
            <FitMaxMark />

            <span>THE FITMAX PROMISE</span>
          </div>

          <h2 className="fitmax-story-title">
            Get back to
            <span> doing what matters</span>
            to you.
          </h2>

          <p className="fitmax-story-description">
            Recovery is not only about reducing pain. It is about
            rebuilding movement, strength and confidence so you can
            return to the life you want to live.
          </p>

          <p className="fitmax-story-description fitmax-story-description-secondary">
            Your rehabilitation plan is built around your condition,
            your goals and your progress.
          </p>

          <a
            href="/book-assessment"
            className="fitmax-story-link"
          >
            <span>Start Your Recovery</span>

            <span
              className="fitmax-story-link-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

        </div>


        {/* RIGHT RECOVERY GOALS */}

        <div className="fitmax-story-visual">

          <div
            className="fitmax-story-blue-shape"
            aria-hidden="true"
          />

          <div className="fitmax-story-image-wrapper">

            <img
              src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg"
              alt="Physiotherapist helping a patient during rehabilitation"
              className="fitmax-story-image"
            />

            <div
              className="fitmax-story-image-overlay"
              aria-hidden="true"
            />

          </div>


          {/* RECOVERY GOALS CARD */}

          <div className="fitmax-story-card">

            <div className="fitmax-story-card-header">
              <span>YOUR RECOVERY GOALS</span>

              <strong>03</strong>
            </div>

            <div className="fitmax-story-goals">

              {recoveryGoals.map((goal) => (
                <div
                  className="fitmax-story-goal"
                  key={goal.number}
                >
                  <div className="fitmax-story-goal-number">
                    {goal.number}
                  </div>

                  <div className="fitmax-story-goal-content">
                    <h3>{goal.title}</h3>

                    <p>{goal.text}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>


          {/* PROGRESS LINE */}

          <div
            className="fitmax-story-motion-line"
            aria-hidden="true"
          >
            <span className="fitmax-story-motion-dot" />
          </div>


          {/* JOURNEY */}

          <div className="fitmax-story-journey">

            <div className="fitmax-story-journey-item active">
              <span className="fitmax-story-journey-dot" />
              <span>Recover</span>
            </div>

            <div className="fitmax-story-journey-item">
              <span className="fitmax-story-journey-dot" />
              <span>Rebuild</span>
            </div>

            <div className="fitmax-story-journey-item">
              <span className="fitmax-story-journey-dot" />
              <span>Return</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default StorySection;