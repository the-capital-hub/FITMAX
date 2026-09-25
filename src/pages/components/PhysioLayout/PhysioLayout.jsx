import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./PhysioLayout.css";
import "../../fitmax-premium.css";


const items = [
  { label: "Overview", to: "/physio" },
  { label: "Patients", to: "/physio/patients" },
  { label: "Assessments", to: "/physio/assessment" },
  { label: "Rehab Plans", to: "/physio/rehab-plans" },
  { label: "Exercise Library", to: "/physio/exercises" },
  { label: "Consultations", to: "/physio/consultations" },
  { label: "Progress", to: "/physio/progress" },
];

export default function PhysioLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="physio-shell">
      <aside className={`physio-sidebar ${open ? "is-open" : ""}`}>
        <div className="physio-brand">
          <div className="physio-brand-mark">F</div>
          <div><strong>FITMAX</strong><span>Physio Portal</span></div>
        </div>
        <div className="physio-profile-mini">
          <div className="physio-avatar-mini">P</div>
          <div><strong>Your Physiotherapist</strong><span>Musculoskeletal Rehab</span></div>
        </div>
        <nav className="physio-side-nav">
          <span className="physio-nav-title">CARE WORKSPACE</span>
          {items.map(item => (
            <NavLink key={item.to} to={item.to} end={item.to === "/physio"} onClick={() => setOpen(false)}>
              <span className="physio-nav-dot" />{item.label}
            </NavLink>
          ))}
          <span className="physio-nav-title">ACCOUNT</span>
          <NavLink to="/physio/profile" onClick={() => setOpen(false)}><span className="physio-nav-dot" />Profile & Settings</NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}><span className="physio-nav-dot" />Back to FitMax</NavLink>
        </nav>
        <div className="physio-side-footer">
          <span>CARE STATUS</span>
          <strong><i /> Portal ready</strong>
        </div>
      </aside>
      <button className={`physio-mobile-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <div className="physio-main">{children}</div>
    </div>
  );
}
