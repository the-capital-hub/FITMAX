import "./Footer.css";

const footerNavigation = [
  { label: "Learn", href: "#learn" },
  { label: "Community", href: "#community" },
  { label: "Clinical Cases", href: "#clinical-cases" },
  { label: "Experts", href: "#experts" },
  { label: "Research", href: "#research" },
  { label: "Webinars", href: "#webinars" },
  { label: "Resources", href: "#resources" },
];

const footerLearning = [
  { label: "Courses", href: "#learn" },
  { label: "Clinical Cases", href: "#clinical-cases" },
  { label: "Research", href: "#research" },
  { label: "Webinars", href: "#webinars" },
  { label: "Community", href: "#community" },
];

function Footer() {
  return (
    <footer className="fitmax-footer">
      <div className="fitmax-footer-container">

        <div className="fitmax-footer-main">

          <div className="fitmax-footer-brand">

            <a
              href="/"
              className="fitmax-footer-logo"
            >
              FITMAX
            </a>

            <p>
              A professional physiotherapy ecosystem
              built around learning, clinical knowledge,
              connection and growth.
            </p>

            <a
              href="/register"
              className="fitmax-footer-join"
            >
              <span>Join FitMax</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>

          <div className="fitmax-footer-column">

            <span className="fitmax-footer-heading">
              EXPLORE
            </span>

            <nav>
              {footerNavigation.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}
            </nav>

          </div>

          <div className="fitmax-footer-column">

            <span className="fitmax-footer-heading">
              LEARNING
            </span>

            <nav>
              {footerLearning.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}
            </nav>

          </div>

          <div className="fitmax-footer-column fitmax-footer-contact">

            <span className="fitmax-footer-heading">
              CONNECT
            </span>

            <a href="mailto:hello@physiofitmax.com">
              hello@physiofitmax.com
            </a>

            <a href="#contact">
              Contact FitMax
            </a>

            <div className="fitmax-footer-socials">

              <a
                href="#"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                IN
              </a>

              <a
                href="#"
                aria-label="YouTube"
              >
                YT
              </a>

            </div>

          </div>

        </div>

        <div className="fitmax-footer-divider" />

        <div className="fitmax-footer-bottom">

          <span>
            © {new Date().getFullYear()} FitMax
          </span>

          <div className="fitmax-footer-legal">

            <a href="#privacy">
              Privacy
            </a>

            <a href="#terms">
              Terms
            </a>

          </div>

          <span>
            Built for better physiotherapy
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;