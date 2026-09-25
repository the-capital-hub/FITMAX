import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./PhysioLayout.css";

const navigation = [
  {
    label: "Overview",
    path: "/physio",
    icon: "▦",
  },
  {
    label: "Patients",
    path: "/physio/patients",
    icon: "♙",
  },
  {
    label: "Assessments",
    path: "/physio/assessment",
    icon: "⌁",
  },
  {
    label: "Rehab Plans",
    path: "/physio/rehab-plans",
    icon: "◈",
  },
  {
    label: "Exercise Library",
    path: "/physio/exercises",
    icon: "◫",
  },
  {
    label: "Consultations",
    path: "/physio/consultations",
    icon: "◷",
  },
  {
    label: "Progress",
    path: "/physio/progress",
    icon: "↗",
  },
];

function PhysioLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/physio") {
      return location.pathname === "/physio";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="physio-layout">
      {/* Mobile Overlay */}
      <div
        className={`physio-sidebar-overlay ${
          sidebarOpen ? "is-visible" : ""
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`physio-sidebar ${
          sidebarOpen ? "is-open" : ""
        }`}
      >
        <div className="physio-sidebar-top">
          {/* Brand */}
          <Link
            to="/physio"
            className="physio-brand"
            onClick={closeSidebar}
          >
            <div className="physio-brand-mark">
              <span>F</span>
            </div>

            <div className="physio-brand-text">
              <strong>FITMAX</strong>
              <span>Physio Portal</span>
            </div>
          </Link>

          {/* Close button mobile */}
          <button
            type="button"
            className="physio-sidebar-close"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>

        {/* Navigation */}
        <div className="physio-navigation">
          <div className="physio-navigation-label">
            CARE WORKSPACE
          </div>

          <nav className="physio-nav-list">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={`physio-nav-item ${
                  isActive(item.path) ? "is-active" : ""
                }`}
              >
                <span className="physio-nav-icon">
                  {item.icon}
                </span>

                <span className="physio-nav-label">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom navigation */}
        <div className="physio-sidebar-bottom">
          <div className="physio-navigation-label">
            ACCOUNT
          </div>

          <Link
            to="/physio/profile"
            onClick={closeSidebar}
            className={`physio-nav-item ${
              isActive("/physio/profile") ? "is-active" : ""
            }`}
          >
            <span className="physio-nav-icon">
              ⚙
            </span>

            <span className="physio-nav-label">
              Profile & Settings
            </span>
          </Link>

          <Link
            to="/"
            onClick={closeSidebar}
            className="physio-nav-item physio-back-link"
          >
            <span className="physio-nav-icon">
              ↩
            </span>

            <span className="physio-nav-label">
              Back to FitMax
            </span>
          </Link>
        </div>
      </aside>

      {/* Main Area */}
      <div className="physio-main">
        {/* Top Header */}
        <header className="physio-header">
          <div className="physio-header-left">
            <button
              type="button"
              className="physio-mobile-menu"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <span />
              <span />
              <span />
            </button>

            <div className="physio-header-context">
              <span>CLINICAL WORKSPACE</span>
              <strong>Patient care & rehabilitation</strong>
            </div>
          </div>

          <div className="physio-header-right">
            <button
              type="button"
              className="physio-notification"
              aria-label="Notifications"
            >
              <span className="physio-notification-icon">
                ♧
              </span>

              <span className="physio-notification-dot" />
            </button>

            <Link
              to="/physio/profile"
              className="physio-user"
            >
              <div className="physio-user-avatar">
                P
              </div>

              <div className="physio-user-info">
                <strong>Physiotherapist</strong>
                <span>Care Team</span>
              </div>

              <span className="physio-user-arrow">
                ˅
              </span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="physio-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default PhysioLayout;