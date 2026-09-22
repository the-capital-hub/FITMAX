import { useState } from "react";
import "./Navbar.css";
const navItems = [
  { label: "Learn", href: "#learn" },
  { label: "Community", href: "#community" },
  { label: "Clinical Cases", href: "#clinical-cases" },
  { label: "Experts", href: "#experts" },
  { label: "Research", href: "#research" },
  { label: "Webinars", href: "#webinars" },
  { label: "Resources", href: "#resources" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((previous) => !previous);
  };

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fitmax-navbar">
      <div className="fitmax-navbar-inner">

        {/* Logo */}

        <a href="/" className="fitmax-logo">
          FITMAX
        </a>

        {/* Desktop Navigation */}

        <nav className="fitmax-desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="fitmax-nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}

        <div className="fitmax-navbar-actions">
          <a
            href="/login"
            className="fitmax-login"
          >
            Login
          </a>

          <a
            href="/register"
            className="fitmax-join-button"
          >
            <span>Join FitMax</span>

            <span
              className="fitmax-join-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          className={`fitmax-menu-button ${
            menuOpen ? "is-open" : ""
          }`}
          onClick={handleMenuToggle}
          aria-label="Open navigation menu"
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
        <nav className="fitmax-mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleMobileLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="fitmax-mobile-actions">
          <a
            href="/login"
            onClick={handleMobileLinkClick}
          >
            Login
          </a>

          <a
            href="/register"
            className="fitmax-mobile-join"
            onClick={handleMobileLinkClick}
          >
            <span>Join FitMax</span>

            <span
              className="fitmax-join-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;