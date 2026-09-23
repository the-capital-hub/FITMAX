import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import "./Login.css";

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

window.location.href = "/dashboard";
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

      <section className="fitmax-login-visual">

        <img
          src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Physiotherapy rehabilitation session"
        />

        <div className="fitmax-login-visual-overlay" />

        <div className="fitmax-login-visual-content">

          <span>
            FITMAX
          </span>

          <h1>
            Learn.
            <strong>Connect.</strong>
            Grow.
          </h1>

          <p>
            Your professional physiotherapy
            learning ecosystem.
          </p>

        </div>

      </section>

      <section className="fitmax-login-form-section">

        <div className="fitmax-login-form-wrapper">

          <a
            href="/"
            className="fitmax-login-logo"
          >
            FITMAX
          </a>

          <div className="fitmax-login-heading">

            <span>
              WELCOME BACK
            </span>

            <h2>
              Sign in to
              <strong>FitMax.</strong>
            </h2>

            <p>
              Continue your learning journey and
              stay connected with the FitMax community.
            </p>

          </div>

          <form
            className="fitmax-login-form"
            onSubmit={handleSubmit}
          >

            <div className="fitmax-form-group">

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

            <div className="fitmax-form-group">

              <div className="fitmax-password-label">

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

            <label className="fitmax-remember">

              <input
                type="checkbox"
                name="remember"
              />

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

              <span aria-hidden="true">
                ↗
              </span>
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

export default Login;