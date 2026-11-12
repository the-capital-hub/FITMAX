
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import fitmaxLogo from "../../assets/fitmax-logo.png";

const navItems = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Conditions", href: "/conditions" },
  { label: "Physiotherapy", href: "/services" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="fitmax-navbar" ref={navbarRef}>
      <div className="fitmax-navbar-inner">

        {/* LOGO */}
        <Link
          to="/"
          className="fitmax-logo"
          aria-label="FitMax Home"
          onClick={closeMenu}
        >
          <img
            src={fitmaxLogo}
            alt="FitMax"
            className="fitmax-logo-image"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
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
              key={item.href}
              to={item.href}
              className={`fitmax-nav-link ${
                isActive(item.href) ? "is-active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
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
            <span className="fitmax-join-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`fitmax-menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="fitmax-mobile-menu"
        >
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="fitmax-mobile-menu"
        className={`fitmax-mobile-menu ${
          menuOpen ? "is-open" : ""
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav
          className="fitmax-mobile-nav"
          aria-label="Mobile navigation"
        >
          <Link
            to="/"
            className={isActive("/") ? "is-active" : ""}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Home
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={isActive(item.href) ? "is-active" : ""}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="fitmax-mobile-actions">
          <Link
            to="/login"
            className={`fitmax-mobile-login ${
              isActive("/login") ? "is-active" : ""
            }`}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Sign In
          </Link>

          <Link
            to="/book-assessment"
            className="fitmax-mobile-join"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span>Book Assessment</span>
            <span className="fitmax-join-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
