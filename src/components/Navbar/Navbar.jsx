import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import fitmaxLogo from "../../assets/fitmax-logo.png";

const navItems = [
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Conditions",
    href: "/conditions",
  },
  {
    label: "Physiotherapy",
    href: "/services",
  },
  {
    label: "Our Physiotherapists",
    href: "/physiotherapists",
  },
  {
    label: "Patient Stories",
    href: "/patient-stories",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen((previous) => !previous);
  };

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === href ||
      location.pathname.startsWith(`${href}/`)
    );
  };

  return (
    <header className="fitmax-navbar">
      <div className="fitmax-navbar-inner">
        {/* Logo */}

        <Link
          to="/"
          className="fitmax-logo"
          aria-label="FitMax home"
          onClick={handleMobileLinkClick}
        >
          <img
            src={fitmaxLogo}
            alt="FitMax"
            className="fitmax-logo-image"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav
          className="fitmax-desktop-nav"
          aria-label="Primary navigation"
        >
          <Link
            to="/"
            className={`fitmax-nav-link ${
              isActive("/") ? "is-active" : ""
            }`}
          >
            Home
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`fitmax-nav-link ${
                isActive(item.href) ? "is-active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}

        <div className="fitmax-navbar-actions">
          <Link
            to="/login"
            className={`fitmax-login ${
              isActive("/login") ? "is-active" : ""
            }`}
          >
            Sign In
          </Link>

          <Link
            to="/book-assessment"
            className="fitmax-join-button"
          >
            <span>Book Assessment</span>

            <span
              className="fitmax-join-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          className={`fitmax-menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={handleMenuToggle}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}

      <div
        className={`fitmax-mobile-menu ${
          menuOpen ? "is-open" : ""
        }`}
      >
        <nav
          className="fitmax-mobile-nav"
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            className={isActive("/") ? "is-active" : ""}
            onClick={handleMobileLinkClick}
          >
            Home
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={isActive(item.href) ? "is-active" : ""}
              onClick={handleMobileLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Actions */}

        <div className="fitmax-mobile-actions">
          <Link
            to="/login"
            className={isActive("/login") ? "is-active" : ""}
            onClick={handleMobileLinkClick}
          >
            Sign In
          </Link>

          <Link
            to="/book-assessment"
            className="fitmax-mobile-join"
            onClick={handleMobileLinkClick}
          >
            <span>Book Assessment</span>

            <span
              className="fitmax-join-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;