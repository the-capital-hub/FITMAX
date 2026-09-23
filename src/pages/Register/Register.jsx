import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import fitmaxLogo from "../../assets/fitmax-logo.png";

import "./Register.css";

function FitMaxMovementMark() {
  return (
    <span className="fitmax-register-mark" aria-hidden="true">
      <span className="fitmax-register-mark-line mark-line-one" />
      <span className="fitmax-register-mark-line mark-line-two" />
      <span className="fitmax-register-mark-dot" />
    </span>
  );
}

function Register() {
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.profession ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setError("Please accept the terms and privacy policy.");
      return;
    }

    try {
      setSubmitting(true);

      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        profession: formData.profession,
        password: formData.password,
      });

      window.location.href = "/login";
    } catch (error) {
      setError(
        error.message ||
          "Unable to create your account. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="fitmax-register-page">
      <div className="fitmax-register-bg" aria-hidden="true">
        <span className="register-bg-orb orb-one" />
        <span className="register-bg-orb orb-two" />
        <span className="register-bg-grid" />
      </div>

      {/* LEFT FORM */}

      <section className="fitmax-register-form-section">
        <div className="fitmax-register-form-wrapper">

          <div className="fitmax-register-header">
            <a href="/" className="fitmax-register-logo">
              <img src={fitmaxLogo} alt="FitMax" />
            </a>

            <span className="fitmax-register-community">
              FITMAX COMMUNITY
            </span>
          </div>

          <div className="fitmax-register-intro">
            <div className="fitmax-register-intro-mark">
              <FitMaxMovementMark />
            </div>

            <span className="fitmax-register-eyebrow">
              CREATE YOUR ACCOUNT
            </span>

            <h1>
              Your journey
              <span> starts here.</span>
            </h1>

            <p>
              Join a professional space built around movement,
              clinical knowledge and continuous growth.
            </p>
          </div>

          <form
            className="fitmax-register-form"
            onSubmit={handleSubmit}
          >
            <div className="fitmax-register-progress">
              <span className="progress-active" />
              <span />
              <span />
            </div>

            <div className="fitmax-register-progress-text">
              <span>YOUR DETAILS</span>
              <span>01 / 03</span>
            </div>

            <div className="fitmax-register-row">
              <div className="fitmax-form-group">
                <label htmlFor="firstName">
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="fitmax-form-group">
                <label htmlFor="lastName">
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="fitmax-form-group">
              <label htmlFor="registerEmail">
                Email Address
              </label>

              <input
                id="registerEmail"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="fitmax-form-group">
              <label htmlFor="profession">
                Professional Role
              </label>

              <div className="fitmax-select-wrapper">
                <select
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select your professional role
                  </option>

                  <option value="physiotherapist">
                    Physiotherapist
                  </option>

                  <option value="student">
                    Physiotherapy Student
                  </option>

                  <option value="researcher">
                    Researcher
                  </option>

                  <option value="healthcare-professional">
                    Healthcare Professional
                  </option>
                </select>

                <span>⌄</span>
              </div>
            </div>

            <div className="fitmax-register-row">
              <div className="fitmax-form-group">
                <label htmlFor="registerPassword">
                  Password
                </label>

                <input
                  id="registerPassword"
                  name="password"
                  type="password"
                  placeholder="Create password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="fitmax-form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label className="fitmax-register-terms">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              <span className="fitmax-custom-checkbox" />

              <span>
                I agree to the FitMax terms and privacy policy.
              </span>
            </label>

            {error && (
              <p className="fitmax-register-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="fitmax-register-submit"
              disabled={submitting}
            >
              <span className="fitmax-submit-text">
                {submitting
                  ? "Creating Account..."
                  : "Create FitMax Account"}
              </span>

              <span className="fitmax-submit-icon">
                ↗
              </span>

              <span
                className="fitmax-submit-shine"
                aria-hidden="true"
              />
            </button>
          </form>

          <div className="fitmax-register-login">
            <span>
              Already have an account?
            </span>

            <a href="/login">
              Sign In
            </a>
          </div>

          <a
            href="/"
            className="fitmax-register-back"
          >
            <span>←</span>
            <span>Back to FitMax</span>
          </a>

        </div>
      </section>

      {/* RIGHT CREATIVE VISUAL */}

      <section className="fitmax-register-visual">

        <div className="fitmax-register-image">
          <img
            src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Physiotherapy professional"
          />

          <div className="fitmax-register-image-overlay" />
        </div>

        {/* Animated movement system */}

        <div className="fitmax-movement-system">
          <svg
            className="fitmax-movement-svg"
            viewBox="0 0 700 800"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="movement-path path-one"
              d="M80 650 C160 560 100 470 240 410 C350 360 300 260 430 210 C510 180 580 130 630 70"
            />

            <path
              className="movement-path path-two"
              d="M30 520 C180 610 250 520 340 470 C440 415 470 300 620 310"
            />

            <path
              className="movement-path path-three"
              d="M150 760 C230 670 380 700 430 590 C490 460 550 480 670 390"
            />
          </svg>

          <span className="movement-node node-one">
            <span />
          </span>

          <span className="movement-node node-two">
            <span />
          </span>

          <span className="movement-node node-three">
            <span />
          </span>
        </div>

        {/* Visual content */}

        <div className="fitmax-register-visual-content">

          <div className="fitmax-visual-top">
            <div className="fitmax-visual-mark">
              <FitMaxMovementMark />
            </div>

            <span>
              PHYSIO FITMAX
            </span>
          </div>

          <div className="fitmax-visual-heading">
            <span className="visual-small-heading">
              MOVE
            </span>

            <h2 style={{color:"white"}}>
              Better
              <span>practice.</span>
            </h2>

            <p>
              Learn from experience. Connect with professionals.
              Keep moving your practice forward.
            </p>
          </div>

          <div className="fitmax-register-story">

            <div className="story-line">
              <span />
            </div>

            <div className="story-item story-active">
              <div className="story-number">
                01
              </div>

              <div>
                <strong>LEARN</strong>
                <p>
                  Build clinical knowledge.
                </p>
              </div>
            </div>

            <div className="story-item">
              <div className="story-number">
                02
              </div>

              <div>
                <strong>CONNECT</strong>
                <p>
                  Exchange professional ideas.
                </p>
              </div>
            </div>

            <div className="story-item">
              <div className="story-number">
                03
              </div>

              <div>
                <strong>GROW</strong>
                <p>
                  Develop your practice.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Floating card */}

        <div className="fitmax-floating-card">
          <div className="floating-card-top">
            <span>THE FITMAX SPACE</span>

            <span className="floating-card-dot" />
          </div>

          <strong>
            Learn.
            <span>Connect.</span>
            Grow.
          </strong>

          <div className="floating-card-line">
            <span />
          </div>
        </div>

        <div className="fitmax-register-visual-footer">
          <span>
            MAXIMISE YOUR POTENTIAL
          </span>

          <span>
            FITMAX
          </span>
        </div>

      </section>
    </main>
  );
}

export default Register;