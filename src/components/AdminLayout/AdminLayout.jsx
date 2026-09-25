import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./AdminLayout.css";
import fitmaxLogo from "../../assets/fitmax-logo.png";
const primaryNav = [
  { label: "Dashboard", path: "/admin", icon: "grid" },
  { label: "Patients", path: "/admin/patients", icon: "users" },
  { label: "Physiotherapists", path: "/admin/physiotherapists", icon: "team" },
  { label: "Appointments", path: "/admin/appointments", icon: "calendar" },
  { label: "Payments", path: "/admin/payments", icon: "wallet" },
  { label: "Exercise Library", path: "/admin/exercises", icon: "book" },
  { label: "Reports & Analytics", path: "/admin/reports", icon: "chart" },
];

const iconPaths = {
  grid: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  team: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M16 11h6",
  calendar: "M7 2v4M17 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  wallet: "M3 7h18v13H3zM3 7l2-4h14l2 4M16 14h5",
  book: "M4 4a2 2 0 0 1 2-2h14v18H6a2 2 0 0 0-2 2zM4 4v18",
  chart: "M4 19V5M4 19h17M8 16v-5M13 16V7M18 16V4",
  settings: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.42 1.42-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2v-.48a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.42-1.42.06-.06A1.7 1.7 0 0 0 9.4 15a1.7 1.7 0 0 0-1.56-1.04H7v-2h.84A1.7 1.7 0 0 0 9.4 10.9a1.7 1.7 0 0 0-.34-1.88L9 8.96l1.42-1.42.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 13.4 6.4V6h2v.4a1.7 1.7 0 0 0 1.04 1.54 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.42 1.42-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 20.96 12H21v2h-.04A1.7 1.7 0 0 0 19.4 15z",
  logout: "M10 17l5-5-5-5M15 12H3M21 19V5a2 2 0 0 0-2-2h-6",
};

function AdminIcon({ name }) {
  const path = iconPaths[name] || iconPaths.grid;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function AdminLayout({ children }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const active = (path) =>
    path === "/admin"
      ? location.pathname === "/admin"
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  const close = () => setOpen(false);

  return (
    <div className="admin-shell">
      <div className={`admin-overlay ${open ? "show" : ""}`} onClick={close} />

      <aside className={`admin-sidebar ${open ? "open" : ""}`}>
        <div className="admin-brand-row">
          <Link
                    to="/"
                    className="fitmax-logo"
                    aria-label="FitMax home"
                  
                  >
                    <img
                      src={fitmaxLogo}
                      alt="FitMax"
                      className="fitmax-logo-image"
                    />
                  </Link>
          <button className="admin-close" onClick={close} aria-label="Close menu">×</button>
        </div>

        <div className="admin-workspace">
          <span className="admin-section-label">OPERATIONS</span>
          <nav className="admin-nav">
            {primaryNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={close}
                className={`admin-nav-link ${active(item.path) ? "active" : ""}`}
              >
                <span className="admin-nav-icon"><AdminIcon name={item.icon} /></span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="admin-sidebar-bottom">
          <span className="admin-section-label">ACCOUNT</span>
          <Link
            to="/admin/settings"
            onClick={close}
            className={`admin-nav-link ${active("/admin/settings") ? "active" : ""}`}
          >
            <span className="admin-nav-icon"><AdminIcon name="settings" /></span>
            <span>Settings</span>
          </Link>
          <Link to="/" onClick={close} className="admin-nav-link admin-muted-link">
            <span className="admin-nav-icon"><AdminIcon name="logout" /></span>
            <span>Back to FitMax</span>
          </Link>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button className="admin-menu" onClick={() => setOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
            <div>
              <span className="admin-context-label">ADMIN WORKSPACE</span>
              <strong>Operations & care management</strong>
            </div>
          </div>

          <div className="admin-topbar-right">
            <button className="admin-bell" aria-label="Notifications">
              <span className="admin-bell-dot" />
              <svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
            </button>
            <Link to="/admin/settings" className="admin-account">
              <span className="admin-avatar">A</span>
              <span className="admin-account-copy">
                <strong>FitMax Admin</strong>
                <small>Administrator</small>
              </span>
              <span className="admin-chevron">⌄</span>
            </Link>
          </div>
        </header>

        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
