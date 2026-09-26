import { Link } from "react-router-dom";
import "./PatientDashboard.css";

const exercises = [
  {
    title: "Heel slides",
    meta: "2 sets · 12 reps",
    status: "Done",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Knee extension",
    meta: "3 sets · 10 reps",
    status: "Next",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Controlled sit to stand",
    meta: "2 sets · 8 reps",
    status: "Next",
    image:
      "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
];

export default function PatientDashboard() {
  return (
    <div className="pd-page">
      <section className="pd-welcome">
        <div>
          <span className="pd-kicker">YOUR RECOVERY SPACE</span>
          <h1>
            Keep moving, <em>one step at a time.</em>
          </h1>
          <p>Your rehabilitation plan is ready. Here is what matters today.</p>
        </div>
        <div className="pd-date">
          <span>TODAY</span>
          <strong>Recovery day 18</strong>
        </div>
      </section>

      <section className="pd-grid pd-top-grid">
        <article className="pd-card pd-progress-card">
          <div className="pd-card-head">
            <div>
              <span className="pd-label">RECOVERY PROGRESS</span>
              <h2>Your knee rehabilitation</h2>
            </div>
            <span className="pd-status">On track</span>
          </div>
          <div className="pd-progress-row">
            <div className="pd-ring">
              <strong>64%</strong>
              <span>overall</span>
            </div>
            <div className="pd-progress-copy">
              <strong>Phase 2 · Strength & control</strong>
              <p>
                Your current plan focuses on restoring comfortable movement and
                building confidence.
              </p>
              <div className="pd-progress-bar">
                <span style={{ width: "64%" }} />
              </div>
              <small>12 of 19 planned milestones</small>
            </div>
          </div>
          <Link className="pd-text-link" to="/patient/rehab">
            View rehabilitation plan ↗
          </Link>
        </article>

        <article className="pd-card pd-consult-card">
          <div className="pd-card-head">
            <span className="pd-label">NEXT CONSULTATION</span>
            <span className="pd-mini-icon">◷</span>
          </div>
          <span className="pd-consult-day">THURSDAY · 04:00 PM</span>
          <h2>Movement check-in</h2>
          <p>
            Review your exercise progress and adjust your next phase with the
            care team.
          </p>
          <Link className="pd-button" to="/patient/consultations">
            View consultation
          </Link>
        </article>
      </section>

      <section className="pd-section-head">
        <div>
          <span className="pd-label">TODAY'S PLAN</span>
          <h2>Three small actions for today.</h2>
        </div>
        <Link to="/patient/exercises">See all exercises ↗</Link>
      </section>

      <section className="pd-exercise-grid">
        {exercises.map((exercise) => (
          <article className="pd-exercise-card" key={exercise.title}>
            <div className="pd-exercise-image">
              <img src={exercise.image} alt="" />
              <span className={exercise.status === "Done" ? "done" : ""}>
                {exercise.status}
              </span>
            </div>
            <div className="pd-exercise-body">
              <span className="pd-label">EXERCISE</span>
              <h3>{exercise.title}</h3>
              <p>{exercise.meta}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="pd-bottom-grid">
        <article className="pd-card pd-goal-card">
          <span className="pd-label">YOUR CURRENT GOAL</span>
          <h2>Walk stairs with more confidence.</h2>
          <p>
            Small improvements in strength, control and consistency are building
            toward this goal.
          </p>
          <div className="pd-goal-line">
            <span style={{ width: "72%" }} />
          </div>
          <div className="pd-goal-meta">
            <span>Current progress</span>
            <strong>72%</strong>
          </div>
        </article>

        <article className="pd-card pd-activity-card">
          <div className="pd-card-head">
            <span className="pd-label">RECENT ACTIVITY</span>
            <Link to="/patient/progress">Progress ↗</Link>
          </div>
          <div className="pd-activity-item">
            <span>✓</span>
            <div>
              <strong>Exercise session completed</strong>
              <small>Today · 09:20 AM</small>
            </div>
          </div>
          <div className="pd-activity-item">
            <span>↗</span>
            <div>
              <strong>Rehab plan updated</strong>
              <small>Yesterday · Care team</small>
            </div>
          </div>
          <div className="pd-activity-item">
            <span>◷</span>
            <div>
              <strong>Consultation scheduled</strong>
              <small>2 days ago</small>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
