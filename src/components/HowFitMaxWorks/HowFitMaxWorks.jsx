import "./HowFitMaxWorks.css";
import FitMaxMark from "../FITMaxMark/FItMaxtMark";

const steps = [
  {
    number: "01",
    title: "Assessment",
    description:
      "Understand your condition, movement limitations, recovery needs and personal goals.",
    label: "Understand",
  },
  {
    number: "02",
    title: "Personalized Plan",
    description:
      "Your physiotherapist creates a rehabilitation plan around your condition and progress.",
    label: "Plan",
  },
  {
    number: "03",
    title: "Guided Exercises",
    description:
      "Follow structured exercises with clear guidance designed for your stage of recovery.",
    label: "Rehabilitate",
  },
  {
    number: "04",
    title: "Regular Check ins",
    description:
      "Stay connected with your physiotherapist and receive guidance as your recovery develops.",
    label: "Connect",
  },
  {
    number: "05",
    title: "Track Progress",
    description:
      "Follow your exercise consistency, movement and recovery progress over time.",
    label: "Progress",
  },
  {
    number: "06",
    title: "Return to Life",
    description:
      "Build the confidence, strength and function needed to get back to what matters.",
    label: "Return",
  },
];

function HowFitMaxWorks() {
  return (
    <section className="fitmax-how-works" id="how-fitmax-works">
      <div className="fitmax-how-works-container">

        {/* HEADER */}

        <div className="fitmax-how-works-header">
          <div className="fitmax-how-works-label">
            <FitMaxMark />
            <span>HOW FITMAX WORKS</span>
          </div>

          <div className="fitmax-how-works-heading-row">
            <h2 className="fitmax-how-works-title">
              A clear path from
              <span> recovery to real life.</span>
            </h2>

            <p className="fitmax-how-works-description">
              Your recovery should not feel confusing. FitMax gives you
              a structured rehabilitation journey with professional
              guidance at every important step.
            </p>
          </div>
        </div>

        {/* JOURNEY */}

        <div className="fitmax-how-works-journey">

          <div
            className="fitmax-how-works-progress"
            aria-hidden="true"
          >
            <span />
          </div>

          {steps.map((step, index) => (
            <article
              className="fitmax-how-step"
              key={step.number}
            >
              <div className="fitmax-how-step-top">
                <span className="fitmax-how-step-number">
                  {step.number}
                </span>

                <span className="fitmax-how-step-label">
                  {step.label}
                </span>
              </div>

              <div className="fitmax-how-step-marker">
                <span />
              </div>

              <div className="fitmax-how-step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <div className="fitmax-how-step-index">
                {String(index + 1).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM */}

        <div className="fitmax-how-works-bottom">
          <div className="fitmax-how-works-bottom-line" />

          <div className="fitmax-how-works-bottom-content">
            <span>YOUR RECOVERY JOURNEY</span>

            <strong>
              Assessment → Rehabilitation → Progress → Return
            </strong>

            <a href="/book-assessment">
              <span>Start Your Recovery</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowFitMaxWorks;