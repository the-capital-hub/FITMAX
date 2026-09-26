import { useState } from "react";
import "./PatientProfile.css";

export default function PatientProfile() {
  const [editing, setEditing] = useState(false);
  return (
    <div className="pp-page">
      <header className="pp-header">
        <div><span className="pp-kicker">MY PROFILE</span><h1>Your care, your information.</h1><p>Keep your personal and recovery details up to date for your care team.</p></div>
        <button className="pp-button" onClick={() => setEditing(!editing)}>{editing ? "Save changes" : "Edit profile"} ↗</button>
      </header>

      <section className="pp-hero-card">
        <div className="pp-avatar-large">JN</div>
        <div><span className="pp-label">PATIENT PROFILE</span><h2>Patient</h2><p>Active FitMax recovery plan · Knee rehabilitation</p></div>
        <div className="pp-profile-status"><span /> Care plan active</div>
      </section>

      <div className="pp-grid">
        <section className="pp-card">
          <div className="pp-card-head"><div><span className="pp-label">PERSONAL DETAILS</span><h2>About you</h2></div></div>
          <div className="pp-fields">
            {[
              ["Full name","Patient"],
              ["Email address","patient@example.com"],
              ["Phone number","+91 00000 00000"],
              ["Preferred contact","Email"],
            ].map(([label,value]) => (
              <label key={label}><span>{label}</span><input disabled={!editing} defaultValue={value} /></label>
            ))}
          </div>
        </section>

        <section className="pp-card">
          <span className="pp-label">RECOVERY DETAILS</span><h2>Your recovery context</h2>
          <div className="pp-detail-list">
            <div><span>Current condition</span><strong>Knee rehabilitation</strong></div>
            <div><span>Recovery phase</span><strong>Strength & control</strong></div>
            <div><span>Current goal</span><strong>Walk stairs with confidence</strong></div>
            <div><span>Care team</span><strong>FitMax Care Team</strong></div>
          </div>
        </section>
      </div>
    </div>
  );
}
