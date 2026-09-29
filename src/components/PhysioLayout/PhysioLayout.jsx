import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./PhysioLayout.css";

const items = [
  { label: "Overview", to: "/physio" },
  { label: "Patients", to: "/physio/patients" },
  { label: "Assessments", to: "/physio/assessment" },
  { label: "Rehab Plans", to: "/physio/rehab-plans" },
  { label: "Exercise Library", to: "/physio/exercises" },
  { label: "Consultations", to: "/physio/consultations" },
  { label: "Progress", to: "/physio/progress" },
  { label: "Notifications", to: "/physio/notifications" },
];

export default function PhysioLayout({ children }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="physio-shell">

      {/* Sidebar */}
      <aside className={`physio-sidebar ${open ? "is-open" : ""}`}>

        <div className="physio-brand">
          <div className="physio-brand-mark">F</div>

          <div className="physio-brand-text">
            <strong>FITMAX</strong>
            <span>Physio Portal</span>
          </div>
        </div>

        <div className="physio-profile-mini">
          <div className="physio-avatar-mini">P</div>

          <div className="physio-profile-mini-info">
            <strong>Your Physiotherapist</strong>
            <span>Musculoskeletal Rehab</span>
          </div>
        </div>

        <nav className="physio-side-nav">

          <span className="physio-nav-title">
            CARE WORKSPACE
          </span>

          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/physio"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `physio-nav-link ${isActive ? "is-active" : ""}`
              }
            >
              <span className="physio-nav-dot" />
              <span>{item.label}</span>
            </NavLink>
          ))}

          <span className="physio-nav-title account-title">
            ACCOUNT
          </span>

          <NavLink
            to="/physio/profile"
            onClick={closeMenu}
            className={({ isActive }) =>
              `physio-nav-link ${isActive ? "is-active" : ""}`
            }
          >
            <span className="physio-nav-dot" />
            <span>Profile & Settings</span>
          </NavLink>

          <NavLink
            to="/"
            onClick={closeMenu}
            className="physio-nav-link physio-back-link"
          >
            <span className="physio-nav-dot" />
            <span>Back to FitMax</span>
          </NavLink>

        </nav>

        <div className="physio-side-footer">
          <span>CARE STATUS</span>

          <strong>
            <i />
            Portal ready
          </strong>
        </div>

      </aside>

      {/* Mobile Overlay */}
      <div
        className={`physio-sidebar-overlay ${
          open ? "is-visible" : ""
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Button */}
      <button
        type="button"
        className={`physio-mobile-toggle ${
          open ? "is-open" : ""
        }`}
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle physiotherapist menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Main */}
      <main className="physio-main">
        {children}
      </main>

    </div>
  );
}