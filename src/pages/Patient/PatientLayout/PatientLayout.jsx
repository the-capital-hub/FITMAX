import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import fitmaxLogo from "../../../assets/fitmax-logo.png";
import "./PatientLayout.css";

const navigation = [
  {
    label: "Overview",
    path: "/patient",
    icon: "⌂",
    end: true,
  },
  {
    label: "My Profile",
    path: "/patient/profile",
    icon: "◎",
  },
  {
    label: "Assessment",
    path: "/patient/assessment",
    icon: "▣",
  },
  {
    label: "Rehab Plan",
    path: "/patient/rehab",
    icon: "↗",
  },
  {
    label: "Exercises",
    path: "/patient/exercises",
    icon: "◇",
  },
  {
    label: "Progress",
    path: "/patient/progress",
    icon: "◒",
  },
  {
    label: "Consultations",
    path: "/patient/consultations",
    icon: "◷",
  },
  {
    label: "Notifications",
    path: "/patient/notifications",
    icon: "○",
  },
];

const pageInfo = {
  "/patient": {
    eyebrow: "YOUR RECOVERY",
    title: "Recovery overview",
    description: "Everything you need for your recovery, in one place.",
  },

  "/patient/profile": {
    eyebrow: "YOUR ACCOUNT",
    title: "My profile",
    description: "Keep your personal and care information up to date.",
  },

  "/patient/assessment": {
    eyebrow: "YOUR CARE",
    title: "Assessment",
    description: "Review the information that guides your rehabilitation.",
  },

  "/patient/rehab": {
    eyebrow: "YOUR RECOVERY",
    title: "Rehab plan",
    description: "Your personalized path back to movement and confidence.",
  },

  "/patient/exercises": {
    eyebrow: "YOUR PROGRAM",
    title: "Exercises",
    description: "Follow your prescribed exercises and stay consistent.",
  },

  "/patient/progress": {
    eyebrow: "YOUR JOURNEY",
    title: "Progress",
    description: "See how your recovery is developing over time.",
  },

  "/patient/consultations": {
    eyebrow: "YOUR CARE TEAM",
    title: "Consultations",
    description: "Stay connected with your physiotherapy care team.",
  },

  "/patient/notifications": {
    eyebrow: "UPDATES",
    title: "Notifications",
    description: "Important updates and messages from FitMax.",
  },
};

export default function PatientLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const current = pageInfo[location.pathname] || pageInfo["/patient"];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="patient-shell">
      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside className="patient-sidebar">
        <div className="patient-sidebar-top">
          {/* BRAND */}
          <button
            type="button"
            className="patient-logo-button"
            onClick={() => navigate("/patient")}
            aria-label="FitMax patient care"
          >
            <img src={fitmaxLogo} alt="FitMax" className="patient-logo" />
          </button>

          <div className="patient-brand-text">
            <span>Patient Care</span>
            <small>Recovery space</small>
          </div>
        </div>

        {/* NAV */}
        <div className="patient-navigation">
          <div className="patient-navigation-label">RECOVERY</div>

          <nav aria-label="Patient navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `patient-nav-item ${isActive ? "active" : ""}`
                }
              >
                <span className="patient-nav-icon">{item.icon}</span>

                <span className="patient-nav-text">{item.label}</span>

                <span className="patient-nav-arrow">→</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* SIDEBAR FOOTER */}
        <div className="patient-sidebar-footer">
          <button
            type="button"
            className="patient-support"
            onClick={() => navigate("/patient/consultations")}
          >
            <span className="patient-support-symbol">?</span>

            <span className="patient-support-content">
              <strong>Need some help?</strong>
              <small>Talk to your care team</small>
            </span>

            <span className="patient-support-arrow">↗</span>
          </button>

          <button
            type="button"
            className="patient-signout"
            onClick={handleLogout}
          >
            <span>↪</span>
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* =====================================================
          MAIN
      ===================================================== */}
      <div className="patient-main">
        {/* TOP HEADER */}
        <header className="patient-header">
          <div className="patient-header-left">
            {/* Mobile logo */}
            <button
              type="button"
              className="patient-mobile-logo"
              onClick={() => navigate("/patient")}
              aria-label="FitMax home"
            >
              <img src={fitmaxLogo} alt="FitMax" />
            </button>

            <div className="patient-header-copy">
              <span className="patient-eyebrow">{current.eyebrow}</span>

              <h1>{current.title}</h1>

              <p>{current.description}</p>
            </div>
          </div>

          <div className="patient-header-right">
            {/* Notification */}
            <button
              type="button"
              className="patient-header-icon"
              onClick={() => navigate("/patient/notifications")}
              aria-label="Notifications"
            >
              <span>○</span>
              <i />
            </button>

            {/* Divider */}
            <span className="patient-header-divider" />

            {/* Patient */}
            <button
              type="button"
              className="patient-profile-trigger"
              onClick={() => navigate("/patient/profile")}
            >
              <span className="patient-avatar">JN</span>

              <span className="patient-profile-copy">
                <strong>Patient</strong>
                <small>My account</small>
              </span>

              <span className="patient-profile-chevron">⌄</span>
            </button>
          </div>
        </header>

        {/* PAGE */}
        <main className="patient-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
