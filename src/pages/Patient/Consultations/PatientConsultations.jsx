import { Link } from "react-router-dom";
import "./PatientConsultations.css";

export default function PatientConsultations() {
  return (
    <div className="pc-page">
      <header className="pc-header">
        <div>
          <span className="pc-kicker">CONSULTATIONS</span>
          <h1>
            Time to talk about <em>your progress.</em>
          </h1>
          <p>
            Keep track of upcoming conversations and the guidance your care team
            has shared.
          </p>
        </div>
        <Link to="/book-assessment" className="pc-button">
          Request another assessment ↗
        </Link>
      </header>
      <section className="pc-next">
        <div className="pc-next-date">
          <span>THU</span>
          <strong>18</strong>
          <small>SEP</small>
        </div>
        <div className="pc-next-copy">
          <span className="pc-label">UPCOMING CONSULTATION</span>
          <h2>Movement check-in</h2>
          <p>Thursday · 04:00 PM · FitMax Care Team</p>
        </div>
        <button>View details ↗</button>
      </section>
      <section className="pc-card">
        <span className="pc-label">CONSULTATION HISTORY</span>
        <h2>Previous conversations</h2>
        <div className="pc-history">
          <div>
            <span>04 Sep</span>
            <strong>Initial rehabilitation review</strong>
            <small>Assessment discussed · Plan created</small>
            <b>Completed</b>
          </div>
          <div>
            <span>28 Aug</span>
            <strong>Assessment consultation</strong>
            <small>Recovery goals and movement reviewed</small>
            <b>Completed</b>
          </div>
        </div>
      </section>
    </div>
  );
}
