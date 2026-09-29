import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import fitmaxLogo from "../../assets/fitmax-logo.png";
import "./ResetPassword.css";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const { resetPassword } = useAuth();
  const token = useMemo(() => params.get("token") || "", [params]);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!token) {
      setError("This password reset link is missing or invalid.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setSubmitting(true);
      await resetPassword(token, password);
      setMessage("Password reset successfully. You can now sign in.");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message || "Unable to reset your password.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="fitmax-reset-page">
      <section className="fitmax-reset-card">
        <Link to="/" className="fitmax-reset-logo">
          <img src={fitmaxLogo} alt="FitMax" />
        </Link>

        <span className="fitmax-reset-eyebrow">ACCOUNT RECOVERY</span>
        <h1>Set a new password.</h1>
        <p>Choose a new password to regain access to your FitMax account.</p>

        <form onSubmit={handleSubmit} className="fitmax-reset-form">
          <label htmlFor="newPassword">New Password</label>
          <input
            id="newPassword"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
          />

          {error && <p className="fitmax-reset-error">{error}</p>}
          {message && <p className="fitmax-reset-success">{message}</p>}

          <button type="submit" disabled={submitting || !!message}>
            {submitting ? "Updating..." : "Update Password"}
          </button>
        </form>

        <Link to="/login" className="fitmax-reset-login">Back to Sign In</Link>
      </section>
    </main>
  );
}
