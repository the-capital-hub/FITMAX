import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhysioLayout from "../../components/PhysioLayout/PhysioLayout";
import physioService from "../../services/physioService";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await physioService.profile();

        if (!mounted) return;

        const profile = data?.user;

        setUser(profile);

        setForm({
          firstName: profile?.firstName || "",
          lastName: profile?.lastName || "",
          email: profile?.email || "",
          profession: profile?.profession || "",
        });
      } catch (e) {
        if (!mounted) return;

        setError(
          e?.message || "Unable to load your profile."
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProfile();

    return () => {
      mounted = false;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
    setError("");
  };

  const save = async () => {
    try {
      setSaving(true);
      setMessage("");
      setError("");

      const data = await physioService.updateProfile(form);

      setUser(data?.user);

      setMessage("Profile updated successfully.");
    } catch (e) {
      setError(
        e?.message || "Unable to update your profile."
      );
    } finally {
      setSaving(false);
    }
  };

  const initials =
    `${form.firstName?.[0] || ""}${
      form.lastName?.[0] || ""
    }`.toUpperCase() || "P";

  const fullName =
    `${form.firstName || ""} ${
      form.lastName || ""
    }`.trim() || "Physiotherapist";

  return (
    <PhysioLayout>
      <main className="pf-page">

        {/* HERO */}

        <header className="pf-hero">
          <div className="pf-hero-content">

            <div className="pf-eyebrow">
              
              PROFILE & SETTINGS
            </div>

            <h1>
              Your professional
              <br />
              <em>workspace.</em>
            </h1>

            <p>
              Keep the information connected to your
              FitMax professional account current.
            </p>
          </div>

          <Link
            to="/physio"
            className="pf-dashboard-btn"
          >
            Dashboard
            <span>↗</span>
          </Link>
        </header>

        {/* ERROR */}

        {error && (
          <div className="pf-alert pf-alert-error">
            <div className="pf-alert-icon">!</div>

            <div>
              <strong>Something went wrong</strong>
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* MAIN */}

        <section className="pf-grid">

          {/* PROFILE FORM */}

          <article className="pf-card pf-profile-card">

            <div className="pf-card-header">

              <div>
                <div className="pf-section-label">
                  <span />
                  ACCOUNT PROFILE
                </div>

                <h2>
                  {loading
                    ? "Loading profile..."
                    : "Professional details"}
                </h2>

                <p>
                  Update the information shown on your
                  professional account.
                </p>
              </div>

              <div className="pf-profile-avatar">
                {initials}
              </div>

            </div>

            <div className="pf-form">

              {/* NAME */}

              <div className="pf-form-row">

                <div className="pf-field">
                  <label htmlFor="firstName">
                    First name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    value={form.firstName}
                    onChange={handleChange}
                    disabled={loading || saving}
                  />
                </div>

                <div className="pf-field">
                  <label htmlFor="lastName">
                    Last name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={handleChange}
                    disabled={loading || saving}
                  />
                </div>

              </div>

              {/* EMAIL */}

              <div className="pf-field">
                <label htmlFor="email">
                  Email address
                </label>

                <div className="pf-input-wrap">
                  <span className="pf-input-icon">
                    @
                  </span>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    disabled={loading || saving}
                  />
                </div>
              </div>

              {/* PROFESSION */}

              <div className="pf-field">
                <label htmlFor="profession">
                  Profession
                </label>

                <div className="pf-input-wrap">
                  <span className="pf-input-icon">
                    ◇
                  </span>

                  <input
                    id="profession"
                    name="profession"
                    type="text"
                    placeholder="Profession"
                    value={form.profession}
                    onChange={handleChange}
                    disabled={loading || saving}
                  />
                </div>
              </div>

              {/* ACTION */}

              <div className="pf-form-footer">

                <span>
                  Your profile information is securely
                  connected to your FitMax account.
                </span>

                <button
                  className="pf-primary"
                  onClick={save}
                  disabled={loading || saving}
                >
                  {saving ? (
                    <>
                      <i className="pf-button-spinner" />
                      Saving...
                    </>
                  ) : (
                    <>
                      Save changes
                      <b>↗</b>
                    </>
                  )}
                </button>

              </div>

              {message && (
                <div className="pf-success">
                  <div>✓</div>
                  <span>{message}</span>
                </div>
              )}

            </div>
          </article>

          {/* ROLE CARD */}

          <aside className="pf-card pf-role-card">

            <div className="pf-role-top">

              <div className="pf-role-icon">
                ✦
              </div>

              <div>
                <small>ROLE</small>

                <strong>
                  {user?.role || "—"}
                </strong>
              </div>

            </div>

            <div className="pf-role-divider" />

            <div className="pf-authenticated">

              <span className="pf-auth-dot" />

              <div>
                <strong>
                  Authenticated FitMax account
                </strong>

                <span>
                  Your professional access is active.
                </span>
              </div>

            </div>

            <div className="pf-role-message">

              <div className="pf-role-message-icon">
                i
              </div>

              <p>
                Your role is controlled by the FitMax
                access system and cannot be changed
                from this profile form.
              </p>

            </div>

            <div className="pf-role-user">

              <div className="pf-role-avatar">
                {initials}
              </div>

              <div>
                <strong>{fullName}</strong>

                <span>
                  {form.profession ||
                    "Physiotherapist"}
                </span>
              </div>

            </div>

          </aside>

        </section>
      </main>
    </PhysioLayout>
  );
}