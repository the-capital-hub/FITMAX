import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import fitmaxLogo from "../../assets/fitmax-logo.png";

import "./ForgotPassword.css";

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

      {/* VISUAL SIDE */}
      <section className="fitmax-forgot-visual">

        <img
          src="https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Physiotherapy care session"
        />

        <div
          className="fitmax-forgot-visual-overlay"
          aria-hidden="true"
        />

        <div className="fitmax-forgot-visual-content">

          <span className="fitmax-forgot-visual-label">
            PHYSIO FITMAX
          </span>

          <h1>
            Keep learning.
            <span>Keep growing.</span>
          </h1>

          <p>
            Your professional journey continues with
            knowledge, community and practical learning.
          </p>

          <div className="fitmax-forgot-points">

            <div className="fitmax-forgot-point">
              <span>01</span>

              <div>
                <strong>Learn</strong>
                <p>
                  Discover practical clinical knowledge.
                </p>
              </div>
            </div>

            <div className="fitmax-forgot-point">
              <span>02</span>

              <div>
                <strong>Connect</strong>
                <p>
                  Stay connected with professionals.
                </p>
              </div>
            </div>

            <div className="fitmax-forgot-point">
              <span>03</span>

              <div>
                <strong>Grow</strong>
                <p>
                  Continue building your practice.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="fitmax-forgot-visual-footer">
          <span>MAXIMISE YOUR POTENTIAL</span>
          <span>FITMAX</span>
        </div>

      </section>


      {/* FORM SIDE */}
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

            <span className="fitmax-forgot-community">
              ACCOUNT RECOVERY
            </span>

          </div>


          <div className="fitmax-forgot-heading">

            <span className="fitmax-forgot-eyebrow">
              RECOVER YOUR ACCOUNT
            </span>

            <h2>
              Reset your
              <span>password.</span>
            </h2>

            <p>
              Enter the email address connected to your
              FitMax account and we will help you recover
              access.
            </p>

          </div>


          <form
            className="fitmax-forgot-form"
            onSubmit={handleSubmit}
          >

            <div className="fitmax-form-group">

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

              <span aria-hidden="true">
                ↗
              </span>

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
            <span aria-hidden="true">
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