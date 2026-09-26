import { Link } from "react-router-dom";
import "./PatientRehab.css";

const phases = [
  {
    no: "01",
    title: "Restore movement",
    text: "Build comfortable range and establish movement confidence.",
    done: true,
  },
  {
    no: "02",
    title: "Strength & control",
    text: "Build strength and control for everyday movement.",
    active: true,
  },
  {
    no: "03",
    title: "Return to function",
    text: "Translate progress into the activities that matter to you.",
    done: false,
  },
];

export default function PatientRehab() {
  return (
    <div className="pr-page">
      <header className="pr-header">
        <div>
          <span className="pr-kicker">REHAB PLAN</span>
          <h1>
            Your plan is built around <em>your life.</em>
          </h1>
          <p>
            A structured rehabilitation path that can evolve with your progress.
          </p>
        </div>
        <span className="pr-active">ACTIVE PLAN</span>
      </header>
      <section className="pr-overview">
        <div>
          <span className="pr-label">CURRENT PHASE</span>
          <strong>02</strong>
          <h2>Strength & control</h2>
          <p>Focus on controlled strength, balance and confident movement.</p>
        </div>
        <div className="pr-overview-progress">
          <span>PHASE PROGRESS</span>
          <strong>68%</strong>
          <div>
            <i style={{ width: "68%" }} />
          </div>
          <small>Next review with your care team · Thursday</small>
        </div>
      </section>
      <section className="pr-card">
        <div className="pr-card-head">
          <div>
            <span className="pr-label">YOUR RECOVERY PATH</span>
            <h2>Where you are in the journey.</h2>
          </div>
        </div>
        <div className="pr-phases">
          {phases.map((phase) => (
            <article
              className={phase.active ? "active" : phase.done ? "done" : ""}
              key={phase.no}
            >
              <b>{phase.no}</b>
              <span>
                {phase.done
                  ? "Completed"
                  : phase.active
                    ? "Current phase"
                    : "Upcoming"}
              </span>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="pr-bottom">
        <div className="pr-card">
          <span className="pr-label">THIS WEEK</span>
          <h2>Consistency matters.</h2>
          <p>
            Complete your planned sessions and note how your body feels. Your
            care team can use this information to guide the next step.
          </p>
          <Link to="/patient/exercises">Open exercise plan ↗</Link>
        </div>
        <div className="pr-card pr-care">
          <span className="pr-label">CARE TEAM</span>
          <h2>FitMax Care Team</h2>
          <p>
            Your rehabilitation plan is reviewed and adjusted as your recovery
            develops.
          </p>
          <Link to="/patient/consultations">View consultations ↗</Link>
        </div>
      </section>
    </div>
  );
}
