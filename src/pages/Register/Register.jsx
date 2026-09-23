import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import fitmaxLogo from "../../assets/fitmax-logo.png";

import "./Register.css";

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

      {/* LEFT */}
      <section className="fitmax-register-form-section">

        <div className="fitmax-register-form-wrapper">

          <div className="fitmax-register-header">

            <a
              href="/"
              className="fitmax-register-logo"
            >
              <img
                src={fitmaxLogo}
                alt="FitMax"
              />
            </a>

            <span className="fitmax-register-secure">
              FITMAX COMMUNITY
            </span>

          </div>

          <div className="fitmax-register-intro">

            <span className="fitmax-register-eyebrow">
              CREATE YOUR ACCOUNT
            </span>

            <h1>
              Join the
              <span>FitMax community.</span>
            </h1>

            <p>
              Create your account to access professional learning,
              clinical knowledge and a growing physiotherapy community.
            </p>

          </div>

          <form
            className="fitmax-register-form"
            onSubmit={handleSubmit}
          >

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
              <span>
                {submitting
                  ? "Creating Account..."
                  : "Create FitMax Account"}
              </span>

              <span aria-hidden="true">
                ↗
              </span>
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
            <span aria-hidden="true">←</span>
            <span>Back to FitMax</span>
          </a>

        </div>

      </section>


      {/* RIGHT VISUAL */}
      <section className="fitmax-register-visual">

        <img
          src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Physiotherapy professional"
        />

        <div
          className="fitmax-register-visual-overlay"
          aria-hidden="true"
        />

        <div className="fitmax-register-visual-content">

          <span className="fitmax-register-visual-label">
            PHYSIO FITMAX
          </span>

          <h2>
            Built around
            <span>better practice.</span>
          </h2>

          <p>
            A professional space for physiotherapists to learn,
            exchange knowledge and keep growing.
          </p>

          <div className="fitmax-register-benefits">

            <div className="fitmax-register-benefit">
              <span>01</span>
              <div>
                <strong>Learn</strong>
                <p>Clinical knowledge and practical education.</p>
              </div>
            </div>

            <div className="fitmax-register-benefit">
              <span>02</span>
              <div>
                <strong>Connect</strong>
                <p>Exchange ideas with fellow professionals.</p>
              </div>
            </div>

            <div className="fitmax-register-benefit">
              <span>03</span>
              <div>
                <strong>Grow</strong>
                <p>Keep developing your professional practice.</p>
              </div>
            </div>

          </div>

        </div>

        <div className="fitmax-register-visual-footer">
          <span>MAXIMISE YOUR POTENTIAL</span>
          <span>FITMAX</span>
        </div>

      </section>

    </main>
  );
}

export default Register;