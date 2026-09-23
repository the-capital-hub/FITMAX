import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import fitmaxLogo from "../../assets/fitmax-logo.png";

import "./ForgotPassword.css";

function FitMaxMovementMark() {
  return (
    <span className="fitmax-forgot-mark" aria-hidden="true">
      <span className="forgot-mark-line forgot-mark-one" />
      <span className="forgot-mark-line forgot-mark-two" />
      <span className="forgot-mark-dot" />
    </span>
  );
}

function ForgotPassword() {
  const { forgotPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setSubmitting(true);

      await forgotPassword(email);

      setMessage(
        "If an account exists with this email, a recovery link will be sent."
      );

      setEmail("");
    } catch (error) {
      setError(
        error.message ||
          "Unable to process your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="fitmax-forgot-page">

      {/* =====================================================
          VISUAL SIDE
      ====================================================== */}

      <section className="fitmax-forgot-visual">

        <div className="fitmax-forgot-image">

          <img
            src="https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Physiotherapy care session"
          />

          <div
            className="fitmax-forgot-visual-overlay"
            aria-hidden="true"
          />

        </div>


        {/* Animated movement paths */}

        <div
          className="fitmax-forgot-movement"
          aria-hidden="true"
        >

          <svg
            viewBox="0 0 700 800"
            preserveAspectRatio="none"
          >

            <path
              className="forgot-motion-path forgot-path-one"
              d="M40 680 C130 585 100 505 225 435 C345 370 300 285 430 230 C530 190 600 120 680 55"
            />

            <path
              className="forgot-motion-path forgot-path-two"
              d="M0 470 C140 560 240 535 340 450 C450 360 520 310 700 325"
            />

            <path
              className="forgot-motion-path forgot-path-three"
              d="M120 800 C205 690 350 730 425 605 C500 480 570 500 700 400"
            />

          </svg>


          <span className="forgot-motion-node forgot-node-one">
            <i />
          </span>

          <span className="forgot-motion-node forgot-node-two">
            <i />
          </span>

          <span className="forgot-motion-node forgot-node-three">
            <i />
          </span>

        </div>


        <div className="fitmax-forgot-visual-content">

          <div className="fitmax-forgot-brand">

            <FitMaxMovementMark />

            <span>
              PHYSIO FITMAX
            </span>

          </div>


          <div className="fitmax-forgot-story">

            <span>
              YOUR JOURNEY CONTINUES
            </span>

            <h1 style={{color:"white"}}>
              Keep learning.
              <strong>Keep growing.</strong>
            </h1>

            <p>
              Your FitMax journey keeps moving through
              knowledge, professional connection and
              practical learning.
            </p>

          </div>


          <div className="fitmax-forgot-flow">

            <div className="forgot-flow-line">
              <span />
            </div>


            <div className="forgot-flow-item active">

              <div className="forgot-flow-number">
                01
              </div>

              <div>
                <strong>LEARN</strong>

                <p>
                  Build clinical knowledge.
                </p>
              </div>

            </div>


            <div className="forgot-flow-item">

              <div className="forgot-flow-number">
                02
              </div>

              <div>
                <strong>CONNECT</strong>

                <p>
                  Exchange professional ideas.
                </p>
              </div>

            </div>


            <div className="forgot-flow-item">

              <div className="forgot-flow-number">
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


        {/* Floating recovery card */}

        <div className="fitmax-forgot-floating">

          <div className="forgot-floating-header">

            <span>
              FITMAX SPACE
            </span>

            <i />

          </div>

          <strong>
            Find your way
            <span>back in.</span>
          </strong>

          <div className="forgot-floating-line">
            <span />
          </div>

        </div>


        <div className="fitmax-forgot-visual-footer">

          <span>
            MAXIMISE YOUR POTENTIAL
          </span>

          <span>
            FITMAX
          </span>

        </div>

      </section>


      {/* =====================================================
          FORM SIDE
      ====================================================== */}

      <section className="fitmax-forgot-form-section">

        <div className="fitmax-forgot-form-wrapper">


          <div className="fitmax-forgot-header">

            <a
              href="/"
              className="fitmax-forgot-logo"
            >
              <img
                src={fitmaxLogo}
                alt="FitMax"
              />
            </a>

            <span>
              ACCOUNT RECOVERY
            </span>

          </div>


          <div className="fitmax-forgot-heading">

            <div className="fitmax-forgot-heading-mark">
              <FitMaxMovementMark />
            </div>

            <span className="fitmax-forgot-eyebrow">
              RECOVER YOUR ACCOUNT
            </span>

            <h2>
              Find your
              <strong>way back.</strong>
            </h2>

            <p>
              Enter the email address connected to your
              FitMax account and we will help you recover
              access to your account.
            </p>

          </div>


          <form
            className="fitmax-forgot-form"
            onSubmit={handleSubmit}
          >

            <div className="fitmax-forgot-progress">

              <span className="active" />
              <span />
              <span />

            </div>


            <div className="fitmax-forgot-progress-label">

              <span>
                ACCOUNT RECOVERY
              </span>

              <span>
                01 / 03
              </span>

            </div>


            <div className="fitmax-forgot-field">

              <label htmlFor="forgotEmail">
                Email Address
              </label>

              <input
                id="forgotEmail"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />

            </div>


            {error && (
              <p className="fitmax-forgot-error">
                {error}
              </p>
            )}


            {message && (
              <p className="fitmax-forgot-success">
                {message}
              </p>
            )}


            <button
              type="submit"
              className="fitmax-forgot-submit"
              disabled={submitting}
            >

              <span>
                {submitting
                  ? "Sending..."
                  : "Send Recovery Link"}
              </span>

              <span
                className="forgot-submit-arrow"
                aria-hidden="true"
              >
                ↗
              </span>

              <span
                className="forgot-submit-shine"
                aria-hidden="true"
              />

            </button>

          </form>


          <div className="fitmax-forgot-login">

            <span>
              Remember your password?
            </span>

            <a href="/login">
              Sign In
            </a>

          </div>


          <a
            href="/"
            className="fitmax-forgot-back"
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

export default ForgotPassword;