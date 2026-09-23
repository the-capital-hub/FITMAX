import { useState } from "react";
import "./Navbar.css";
import fitmaxLogo from "../../assets/fitmax-logo.png";

const navItems = [
  {
    label: "Learn",
    href: "#learn",
  },
  {
    label: "Community",
    href: "#community",
  },
  {
    label: "Clinical Cases",
    href: "#clinical-cases",
  },
  {
    label: "About",
    href: "#about",
  },
];

const exploreItems = [
  {
    title: "Learn",
    description: "Build clinical knowledge and practical skills.",
    href: "#learn",
  },
  {
    title: "Clinical Cases",
    description: "Explore real world physiotherapy cases.",
    href: "#clinical-cases",
  },
  {
    title: "Experts",
    description: "Learn from experienced physiotherapy professionals.",
    href: "#experts",
  },
  {
    title: "Research",
    description: "Discover evidence and clinical insights.",
    href: "#research",
  },
  {
    title: "Webinars",
    description: "Join conversations with physiotherapy experts.",
    href: "#webinars",
  },
  {
    title: "Resources",
    description: "Access useful clinical learning resources.",
    href: "#resources",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((previous) => !previous);
  };

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
    setExploreOpen(false);
  };

  const handleExploreToggle = () => {
    setExploreOpen((previous) => !previous);
  };

  return (
    <header className="fitmax-navbar">
      <div className="fitmax-navbar-inner">
        {/* Logo */}

        <a
          href="/"
          className="fitmax-logo"
          aria-label="FitMax home"
        >
          <img
            src={fitmaxLogo}
            alt="FitMax"
            className="fitmax-logo-image"
          />
        </a>

        {/* Desktop Navigation */}

        <nav
          className="fitmax-desktop-nav"
          aria-label="Primary navigation"
        >
          {/* Explore */}

          <div
            className={`fitmax-explore-wrapper ${
              exploreOpen ? "is-open" : ""
            }`}
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button
              type="button"
              className="fitmax-nav-link fitmax-explore-trigger"
              onClick={handleExploreToggle}
              aria-expanded={exploreOpen}
            >
              <span>Explore</span>

              <span
                className="fitmax-explore-chevron"
                aria-hidden="true"
              >
                ↓
              </span>
            </button>

            {/* Explore Mega Menu */}

            <div className="fitmax-explore-menu">
              <div className="fitmax-explore-header">
                <span>EXPLORE FITMAX</span>

                <p>
                  Everything you need to learn, connect and grow.
                </p>
              </div>

              <div className="fitmax-explore-grid">
                {exploreItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="fitmax-explore-item"
                    onClick={() => setExploreOpen(false)}
                  >
                    <div className="fitmax-explore-item-top">
                      <span>{item.title}</span>

                      <span
                        className="fitmax-explore-item-arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </div>

                    <p>{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main Navigation */}

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
          {/* Mobile Explore */}

          <div className="fitmax-mobile-explore">
            <button
              type="button"
              className={`fitmax-mobile-explore-trigger ${
                exploreOpen ? "is-open" : ""
              }`}
              onClick={handleExploreToggle}
              aria-expanded={exploreOpen}
            >
              <span>Explore</span>

              <span
                className="fitmax-mobile-explore-chevron"
                aria-hidden="true"
              >
                ↓
              </span>
            </button>

            <div
              className={`fitmax-mobile-explore-list ${
                exploreOpen ? "is-open" : ""
              }`}
            >
              {exploreItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={handleMobileLinkClick}
                >
                  <span>{item.title}</span>

                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Main Links */}

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

        {/* Mobile Actions */}

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