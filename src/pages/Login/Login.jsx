import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import fitmaxLogo from "../../assets/fitmax-logo.png";
import "./Login.css";

function FitMaxMovementMark() {
  return (
    <span className="fitmax-login-mark" aria-hidden="true">
      <span className="login-mark-line login-mark-one" />
      <span className="login-mark-line login-mark-two" />
      <span className="login-mark-dot" />
    </span>
  );
}

function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError(
        "Please enter your email and password."
      );
      return;
    }

    try {
      setSubmitting(true);

      await login({
        email,
        password,
      });

      window.location.href = "/patient";
    } catch (error) {
      setError(
        error.message ||
          "Unable to sign in. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="fitmax-login-page">

      <div
        className="fitmax-login-bg"
        aria-hidden="true"
      >
        <span className="login-bg-orb login-orb-one" />
        <span className="login-bg-orb login-orb-two" />
        <span className="login-bg-grid" />
      </div>

      {/* LEFT CREATIVE VISUAL */}

      <section className="fitmax-login-visual">

        <div className="fitmax-login-image">
          <img
            src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Physiotherapy rehabilitation session"
          />

          <div className="fitmax-login-image-overlay" />
        </div>

        {/* Animated movement paths */}

        <div
          className="fitmax-login-movement"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 700 800"
            preserveAspectRatio="none"
          >
            <path
              className="login-motion-path login-path-one"
              d="M40 690 C130 590 90 500 225 440 C345 385 295 280 435 230 C530 195 595 130 680 60"
            />

            <path
              className="login-motion-path login-path-two"
              d="M0 490 C150 585 240 540 340 455 C440 370 500 315 700 330"
            />

            <path
              className="login-motion-path login-path-three"
              d="M120 800 C205 690 350 735 425 605 C500 475 570 500 700 405"
            />
          </svg>

          <span className="login-motion-node login-node-one">
            <i />
          </span>

          <span className="login-motion-node login-node-two">
            <i />
          </span>

          <span className="login-motion-node login-node-three">
            <i />
          </span>
        </div>

        <div className="fitmax-login-visual-content">

          <div className="fitmax-login-brand">
            <FitMaxMovementMark />

            <span>
              PHYSIO FITMAX
            </span>
          </div>

          <div className="fitmax-login-visual-heading">

            <span>
              KEEP MOVING
            </span>

            <h1 style={{color:"white"}}>
              Learn.
              <strong>Connect.</strong>
              Grow.
            </h1>

            <p>
              Continue building your clinical knowledge,
              connecting with professionals and growing
              your physiotherapy practice.
            </p>

          </div>

          <div className="fitmax-login-flow">

            <div className="login-flow-line">
              <span />
            </div>

            <div className="login-flow-item active">

              <div className="login-flow-number">
                01
              </div>

              <div>
                <strong>LEARN</strong>
                <p>
                  Discover clinical knowledge.
                </p>
              </div>

            </div>

            <div className="login-flow-item">

              <div className="login-flow-number">
                02
              </div>

              <div>
                <strong>CONNECT</strong>
                <p>
                  Share ideas with professionals.
                </p>
              </div>

            </div>

            <div className="login-flow-item">

              <div className="login-flow-number">
                03
              </div>

              <div>
                <strong>GROW</strong>
                <p>
                  Keep developing your practice.
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="fitmax-login-floating">

          <div className="login-floating-top">

            <span>
              THE FITMAX SPACE
            </span>

            <i />

          </div>

          <strong>
            Your practice.
            <span>Your potential.</span>
          </strong>

          <div className="login-floating-progress">
            <span />
          </div>

        </div>

        <div className="fitmax-login-visual-footer">

          <span>
            MAXIMISE YOUR POTENTIAL
          </span>

          <span>
            FITMAX
          </span>

        </div>

      </section>


      {/* RIGHT FORM */}

      <section className="fitmax-login-form-section">

        <div className="fitmax-login-form-wrapper">

          <div className="fitmax-login-header">
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

            <span>
              PROFESSIONAL COMMUNITY
            </span>

          </div>

          <div className="fitmax-login-intro">

            <div className="fitmax-login-intro-mark">
              <FitMaxMovementMark />
            </div>

            <span className="fitmax-login-eyebrow">
              WELCOME BACK
            </span>

            <h2>
              Continue your
              <strong>journey.</strong>
            </h2>

            <p>
              Sign in to continue learning,
              connecting and growing with FitMax.
            </p>

          </div>

          <form
            className="fitmax-login-form"
            onSubmit={handleSubmit}
          >

            <div className="fitmax-login-progress">

              <span className="active" />
              <span />
              <span />

            </div>

            <div className="fitmax-login-progress-label">

              <span>
                MEMBER ACCESS
              </span>

              <span>
                01 / 03
              </span>

            </div>


            <div className="fitmax-login-field">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />

            </div>


            <div className="fitmax-login-field">

              <div className="fitmax-login-password-label">

                <label htmlFor="password">
                  Password
                </label>

                <a href="/forgot-password">
                  Forgot Password?
                </a>

              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
              />

            </div>


            <label className="fitmax-login-remember">

              <input
                type="checkbox"
                name="remember"
              />

              <span className="login-custom-check" />

              <span>
                Remember me
              </span>

            </label>


            {error && (
              <p className="fitmax-login-error">
                {error}
              </p>
            )}


            <button
              type="submit"
              className="fitmax-login-submit"
              disabled={submitting}
            >

              <span>
                {submitting
                  ? "Signing In..."
                  : "Sign In"}
              </span>

              <span
                className="login-submit-arrow"
                aria-hidden="true"
              >
                ↗
              </span>

              <span
                className="login-submit-shine"
                aria-hidden="true"
              />

            </button>

          </form>


          <div className="fitmax-login-register">

            <span>
              Don't have a FitMax account?
            </span>

            <a href="/register">
              Create Account
            </a>

          </div>


          <a
            href="/"
            className="fitmax-login-back"
          >
            <span>
              ←
            </span>

            <span>
              Back to FitMax
            </span>

          </a>

        </div>

      </section>

    </main>
  );
}

export default Login;