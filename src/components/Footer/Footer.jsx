import "./Footer.css";
import fitmaxLogo from "../../assets/fitmax-logo.png";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Conditions", href: "/conditions" },
  { label: "Physiotherapy", href: "/services" },
  { label: "Our Physiotherapists", href: "/physiotherapists" },
  { label: "Patient Stories", href: "/patient-stories" },
];

const footerSupport = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Book Assessment", href: "/book-assessment" },
];

function Footer() {
  return (
    <footer className="fitmax-footer">

      <div className="fitmax-footer-container">

        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div className="fitmax-footer-main">

          {/* BRAND */}

          <div className="fitmax-footer-brand">

            <a
              href="/"
              className="fitmax-footer-logo"
              aria-label="FitMax Home"
            >
              <img
                src={fitmaxLogo}
                alt="FitMax"
              />
            </a>

            <p>
              Digital physiotherapy and rehabilitation
              designed to help you recover movement,
              strength, confidence and independence.
            </p>

            <a
              href="/book-assessment"
              className="fitmax-footer-join"
            >
              <span>Start Your Recovery</span>

              <span
                className="fitmax-footer-join-icon"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>

          </div>


          {/* EXPLORE */}

          <div className="fitmax-footer-column">

            <span className="fitmax-footer-heading">
              EXPLORE
            </span>

            <nav aria-label="Explore">

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


          {/* SUPPORT */}

          <div className="fitmax-footer-column">

            <span className="fitmax-footer-heading">
              PATIENT SUPPORT
            </span>

            <nav aria-label="Patient support">

              {footerSupport.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}

            </nav>

          </div>


          {/* CONNECT */}

          <div className="fitmax-footer-column fitmax-footer-contact">

            <span className="fitmax-footer-heading">
              GET IN TOUCH
            </span>

            <a href="mailto:hello@physiofitmax.com">
              hello@physiofitmax.com
            </a>

            <a href="/contact">
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


        {/* =================================================
            RECOVERY STRIP
        ================================================= */}

        <div className="fitmax-footer-recovery">

          <div className="fitmax-footer-recovery-label">
            <span>YOUR RECOVERY JOURNEY</span>
          </div>

          <div className="fitmax-footer-recovery-path">

            <span>Assessment</span>

            <i aria-hidden="true" />

            <span>Rehabilitation</span>

            <i aria-hidden="true" />

            <span>Progress</span>

            <i aria-hidden="true" />

            <span>Return to Life</span>

          </div>

        </div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="fitmax-footer-divider" />


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="fitmax-footer-bottom">

          <span>
            © {new Date().getFullYear()} FitMax
          </span>

          <div className="fitmax-footer-legal">

            <a href="/privacy">
              Privacy
            </a>

            <a href="/terms">
              Terms
            </a>

          </div>

          <span>
            Built around your recovery
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;