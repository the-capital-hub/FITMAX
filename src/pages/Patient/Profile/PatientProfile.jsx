import { useEffect, useMemo, useState } from "react";
import userService from "../../../services/userService";
import "./PatientProfile.css";

export default function PatientProfile() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
  });

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await userService.getProfile();
      const profile = data?.user;

      if (!profile) {
        throw new Error("Profile information was not found.");
      }

      setUser(profile);

      setForm({
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
        email: profile.email || "",
        profession: profile.profession || "",
      });
    } catch (err) {
      console.error("Patient profile error:", err);
      setError(err.message || "Unable to load your profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleCancel = () => {
    if (!user) return;

    setForm({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      profession: user.profession || "",
    });

    setEditing(false);
    setError("");
    setSuccess("");
  };

  const handleSave = async () => {
    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError("First name and last name are required.");
      return;
    }

    if (!form.email.trim()) {
      setError("Email address is required.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const data = await userService.updateProfile({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        profession: form.profession.trim(),
      });

      const updatedUser = data?.user;

      if (!updatedUser) {
        throw new Error("Profile update response was invalid.");
      }

      setUser(updatedUser);

      setForm({
        firstName: updatedUser.firstName || "",
        lastName: updatedUser.lastName || "",
        email: updatedUser.email || "",
        profession: updatedUser.profession || "",
      });

      setEditing(false);
      setSuccess("Your profile has been updated successfully.");
    } catch (err) {
      console.error("Patient profile update error:", err);
      setError(err.message || "Unable to update your profile.");
    } finally {
      setSaving(false);
    }
  };

  const initials = useMemo(() => {
    if (!user) return "P";

    const first = user.firstName?.trim()?.charAt(0) || "";
    const last = user.lastName?.trim()?.charAt(0) || "";

    return `${first}${last}`.toUpperCase() || "P";
  }, [user]);

  const fullName = useMemo(() => {
    if (!user) return "FitMax Patient";

    return `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
      "FitMax Patient";
  }, [user]);

  const roleLabel =
    user?.role === "member"
      ? "Patient"
      : user?.role === "patient"
      ? "Patient"
      : user?.role || "Patient";

  const accountStatus = user?.isActive !== false ? "Active" : "Inactive";

  if (loading) {
    return (
      <div className="pp-page">
        <div className="pp-loading-card">
          <div className="pp-loading-avatar" />

          <div className="pp-loading-content">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="pp-page">
        <section className="pp-error-card">
          <div className="pp-error-icon">!</div>

          <div>
            <span className="pp-label">PROFILE</span>
            <h2>We couldn't load your profile</h2>
            <p>{error}</p>

            <button type="button" onClick={loadProfile}>
              Try again ↗
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pp-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="pp-header">
        <div className="pp-header-copy">
          <span className="pp-kicker">
            <i />
            MY PROFILE
          </span>

          <h1>
            Your care starts with
            <em> knowing you.</em>
          </h1>

          <p>
            Keep your personal information current so your
            FitMax care team always has the right context.
          </p>
        </div>

        <div className="pp-header-actions">
          {editing && (
            <button
              type="button"
              className="pp-cancel-button"
              onClick={handleCancel}
              disabled={saving}
            >
              Cancel
            </button>
          )}

          <button
            type="button"
            className={`pp-primary-button ${
              editing ? "save-mode" : ""
            }`}
            onClick={editing ? handleSave : () => {
              setEditing(true);
              setError("");
              setSuccess("");
            }}
            disabled={saving}
          >
            {saving
              ? "Saving..."
              : editing
              ? "Save changes"
              : "Edit profile"}

            {!saving && <span>↗</span>}
          </button>
        </div>
      </header>

      {/* =====================================================
          FEEDBACK
      ===================================================== */}

      {error && (
        <div className="pp-feedback pp-feedback-error">
          <span>!</span>
          <p>{error}</p>
        </div>
      )}

      {success && (
        <div className="pp-feedback pp-feedback-success">
          <span>✓</span>
          <p>{success}</p>
        </div>
      )}

      {/* =====================================================
          PROFILE HERO CARD
      ===================================================== */}

      <section className="pp-profile-hero">
        <div className="pp-profile-glow" />

        <div className="pp-avatar">
          <span>{initials}</span>
        </div>

        <div className="pp-identity">
          <span className="pp-label">PATIENT PROFILE</span>

          <h2>{fullName}</h2>

          <p>
            {user?.profession || "FitMax Patient"}
          </p>
        </div>

        <div className="pp-identity-meta">
          <div className="pp-active-badge">
            <i />
            {accountStatus}
          </div>

          <span>FitMax care member</span>
        </div>
      </section>

      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div className="pp-main-grid">
        {/* PERSONAL INFORMATION */}

        <section className="pp-card pp-personal-card">
          <div className="pp-card-header">
            <div>
              <span className="pp-label">
                PERSONAL INFORMATION
              </span>

              <h2>About you</h2>

              <p>
                The information your care team uses to
                identify and communicate with you.
              </p>
            </div>

            <div className="pp-card-number">01</div>
          </div>

          <div className="pp-fields">
            <label className={editing ? "is-editing" : ""}>
              <span>FIRST NAME</span>

              <div className="pp-input-wrap">
                <i>◎</i>

                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  disabled={!editing}
                  placeholder="First name"
                  autoComplete="given-name"
                />
              </div>
            </label>

            <label className={editing ? "is-editing" : ""}>
              <span>LAST NAME</span>

              <div className="pp-input-wrap">
                <i>◎</i>

                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  disabled={!editing}
                  placeholder="Last name"
                  autoComplete="family-name"
                />
              </div>
            </label>

            <label
              className={`pp-field-full ${
                editing ? "is-editing" : ""
              }`}
            >
              <span>EMAIL ADDRESS</span>

              <div className="pp-input-wrap">
                <i>@</i>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={!editing}
                  placeholder="Email address"
                  autoComplete="email"
                />
              </div>
            </label>

            <label className={editing ? "is-editing" : ""}>
              <span>PROFESSION</span>

              <div className="pp-input-wrap">
                <i>◇</i>

                <input
                  type="text"
                  name="profession"
                  value={form.profession}
                  onChange={handleChange}
                  disabled={!editing}
                  placeholder="Your profession"
                />
              </div>
            </label>

            <div className="pp-field-info">
              <span>ACCOUNT ROLE</span>
              <strong>{roleLabel}</strong>
            </div>
          </div>
        </section>

        {/* ACCOUNT STATUS */}

        <aside className="pp-card pp-status-card">
          <div className="pp-status-top">
            <span className="pp-label">
              CARE CONNECTION
            </span>

            <span className="pp-status-icon">↗</span>
          </div>

          <h2>
            Your recovery space is
            <em> connected.</em>
          </h2>

          <p>
            Your profile keeps the information around
            your rehabilitation journey organized in one
            place.
          </p>

          <div className="pp-status-line">
            <span>
              <i />
              Account status
            </span>

            <strong>{accountStatus}</strong>
          </div>

          <div className="pp-status-line">
            <span>
              <i />
              Care role
            </span>

            <strong>{roleLabel}</strong>
          </div>

          <div className="pp-status-note">
            <span>✓</span>
            <p>
              Your care team can use your profile
              information while supporting your recovery.
            </p>
          </div>
        </aside>
      </div>

      {/* =====================================================
          RECOVERY CONTEXT
      ===================================================== */}

      <section className="pp-card pp-context-card">
        <div className="pp-context-header">
          <div>
            <span className="pp-label">
              RECOVERY CONTEXT
            </span>

            <h2>Your care information</h2>

            <p>
              Recovery-specific information will appear here
              as your assessment and rehabilitation journey
              develops.
            </p>
          </div>

          <span className="pp-context-number">02</span>
        </div>

        <div className="pp-context-grid">
          <div className="pp-context-item">
            <span>CURRENT CONDITION</span>
            <strong>Not recorded yet</strong>
            <small>
              Complete your assessment to add this information.
            </small>
          </div>

          <div className="pp-context-item">
            <span>RECOVERY GOAL</span>
            <strong>Not recorded yet</strong>
            <small>
              Your rehabilitation goal will appear here.
            </small>
          </div>

          <div className="pp-context-item">
            <span>CARE STATUS</span>
            <strong>{accountStatus}</strong>
            <small>
              Your FitMax account is currently {accountStatus.toLowerCase()}.
            </small>
          </div>
        </div>
      </section>
    </div>
  );
}