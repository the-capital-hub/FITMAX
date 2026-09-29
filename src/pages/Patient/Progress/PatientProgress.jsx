import { useEffect, useMemo, useState } from "react";
import progressService from "../../../services/progressService";
import "./PatientProgress.css";

export default function PatientProgress() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    pain: 4,
    movementStatus: "Better",
    exerciseCompletion: 80,
    notes: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await progressService.my();
      setItems(data.progress || []);
    } catch (e) {
      setError(e.message || "Unable to load progress.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const latest = items[0];

  const progressScore = useMemo(() => {
    const painScore = Math.max(0, 10 - Number(form.pain || 0)) * 10;
    const exerciseScore = Number(form.exerciseCompletion || 0);

    return Math.round((painScore + exerciseScore) / 2);
  }, [form.pain, form.exerciseCompletion]);

  const handleChange = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setMessage("");
    setError("");
  };

  const save = async () => {
    try {
      setSaving(true);
      setMessage("");
      setError("");

      const data = await progressService.checkin({
        ...form,
        pain: Number(form.pain),
        exerciseCompletion: Number(form.exerciseCompletion),
      });

      if (data?.progress) {
        setItems((current) => [data.progress, ...current]);
      }

      setMessage("Today's check-in has been saved successfully.");

      setForm((current) => ({
        ...current,
        notes: "",
      }));
    } catch (e) {
      setError(e.message || "Unable to save today's check-in.");
    } finally {
      setSaving(false);
    }
  };

  const formatDate = (value) => {
    if (!value) return "—";

    return new Date(value).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getPainLabel = (pain) => {
    const value = Number(pain);

    if (value <= 2) return "Low";
    if (value <= 5) return "Moderate";
    if (value <= 7) return "High";

    return "Severe";
  };

  return (
    <div className="pg-page">
      {/* HERO */}
      <section className="pg-hero">
        <div className="pg-hero-copy">
          <span className="pg-kicker">RECOVERY JOURNEY</span>

          <h1 style={{color:"white"}}>
            Notice the change.
            <em> Keep building.</em>
          </h1>

          <p>
            Track how your body is responding, share your daily experience,
            and keep your physiotherapist connected to your recovery.
          </p>
        </div>

        <div className="pg-hero-side">
          <div className="pg-hero-orbit">
            <span>01</span>
            <strong>Track</strong>
          </div>

          <div className="pg-hero-orbit pg-orbit-two">
            <span>02</span>
            <strong>Recover</strong>
          </div>
        </div>
      </section>

      {/* LATEST SNAPSHOT */}
      <section className="pg-section">
        <div className="pg-section-heading">
          <div>
            <span className="pg-label">LATEST SNAPSHOT</span>
            <h2>Your recovery at a glance</h2>
          </div>

          {latest?.recordedAt && (
            <span className="pg-updated">
              Updated {formatDate(latest.recordedAt)}
            </span>
          )}
        </div>

        <div className="pg-metrics">
          <article className="pg-metric pg-metric-dark">
            <div className="pg-metric-top">
              <span>Current pain</span>
              <i>01</i>
            </div>

            <strong>
              {latest?.pain ?? "—"}
              <small>/10</small>
            </strong>

            <div className="pg-meter">
              <span
                style={{
                  width: `${latest ? Math.min(Number(latest.pain) * 10, 100) : 0}%`,
                }}
              />
            </div>

            <p>{latest ? getPainLabel(latest.pain) : "No check-in yet"}</p>
          </article>

          <article className="pg-metric">
            <div className="pg-metric-top">
              <span>Exercise completion</span>
              <i>02</i>
            </div>

            <strong>
              {latest?.exerciseCompletion ?? "—"}
              {latest && <small>%</small>}
            </strong>

            <div className="pg-meter">
              <span
                style={{
                  width: `${latest ? Number(latest.exerciseCompletion) : 0}%`,
                }}
              />
            </div>

            <p>
              {latest
                ? "Based on your latest check-in"
                : "Complete your first check-in"}
            </p>
          </article>

          <article className="pg-metric">
            <div className="pg-metric-top">
              <span>Movement</span>
              <i>03</i>
            </div>

            <strong className="pg-movement-value">
              {latest?.movementStatus || "—"}
            </strong>

            <div className="pg-status-line">
              <span
                className={
                  latest?.movementStatus === "Worse"
                    ? "pg-status-dot pg-status-worse"
                    : "pg-status-dot"
                }
              />
              <span>
                {latest
                  ? "Latest movement update"
                  : "Waiting for your first update"}
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* CHECK-IN */}
      <section className="pg-checkin-layout">
        <div className="pg-checkin-intro">
          <span className="pg-label">DAILY CHECK-IN</span>

          <h2>
            How is your body
            <em> feeling today?</em>
          </h2>

          <p>
            Your check-ins help create a clearer picture of your recovery
            between physiotherapy sessions.
          </p>

          <div className="pg-checkin-note">
            <span>FITMAX</span>
            <p>
              Honest updates are more useful than perfect updates. Tell us
              what you actually experienced today.
            </p>
          </div>
        </div>

        <div className="pg-card pg-form-card">
          <div className="pg-form-header">
            <div>
              <span className="pg-label">TODAY'S UPDATE</span>
              <h3>Recovery check-in</h3>
            </div>

            <div className="pg-score">
              <span>CHECK-IN SCORE</span>
              <strong>{progressScore}%</strong>
            </div>
          </div>

          <div className="pg-form">
            <div className="pg-field">
              <div className="pg-field-heading">
                <label htmlFor="pain">Pain level</label>
                <span>{form.pain}/10</span>
              </div>

              <input
                id="pain"
                className="pg-range"
                type="range"
                min="0"
                max="10"
                value={form.pain}
                onChange={(e) => handleChange("pain", e.target.value)}
              />

              <div className="pg-range-labels">
                <span>No pain</span>
                <span>Severe pain</span>
              </div>
            </div>

            <div className="pg-field">
              <label htmlFor="movement">How is your movement?</label>

              <div className="pg-choice-grid">
                {["Better", "Same", "Worse"].map((option) => (
                  <button
                    type="button"
                    key={option}
                    className={
                      form.movementStatus === option
                        ? "pg-choice active"
                        : "pg-choice"
                    }
                    onClick={() => handleChange("movementStatus", option)}
                  >
                    <span>
                      {option === "Better"
                        ? "↗"
                        : option === "Same"
                        ? "→"
                        : "↘"}
                    </span>

                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="pg-field">
              <div className="pg-field-heading">
                <label htmlFor="exerciseCompletion">
                  Exercise completion
                </label>

                <span>{form.exerciseCompletion}%</span>
              </div>

              <input
                id="exerciseCompletion"
                className="pg-range"
                type="range"
                min="0"
                max="100"
                value={form.exerciseCompletion}
                onChange={(e) =>
                  handleChange("exerciseCompletion", e.target.value)
                }
              />

              <div className="pg-range-labels">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>

            <div className="pg-field">
              <label htmlFor="notes">Anything you want to tell us?</label>

              <textarea
                id="notes"
                value={form.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                placeholder="For example: walking felt easier today..."
                rows="4"
              />
            </div>

            {message && (
              <div className="pg-feedback pg-success">
                <span>✓</span>
                {message}
              </div>
            )}

            {error && (
              <div className="pg-feedback pg-error">
                <span>!</span>
                {error}
              </div>
            )}

            <button
              type="button"
              className="pg-save-button"
              onClick={save}
              disabled={saving}
            >
              <span>{saving ? "Saving check-in..." : "Save today's check-in"}</span>
              <strong>→</strong>
            </button>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="pg-history-section">
        <div className="pg-section-heading">
          <div>
            <span className="pg-label">YOUR HISTORY</span>
            <h2>Recent check-ins</h2>
          </div>

          <span className="pg-history-count">
            {items.length} {items.length === 1 ? "entry" : "entries"}
          </span>
        </div>

        <div className="pg-history-card">
          {loading ? (
            <div className="pg-loading">
              <span />
              <span />
              <span />
              <p>Loading your recovery history...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="pg-empty">
              <div className="pg-empty-icon">◒</div>

              <h3>No check-ins yet</h3>

              <p>
                Your recovery history will appear here after your first daily
                check-in.
              </p>
            </div>
          ) : (
            <div className="pg-history-list">
              {items.map((item, index) => (
                <article
                  className="pg-history-row"
                  key={item._id}
                  style={{ "--row-delay": `${index * 70}ms` }}
                >
                  <div className="pg-history-date">
                    <span>{formatDate(item.recordedAt)}</span>
                    {index === 0 && <small>Latest</small>}
                  </div>

                  <div className="pg-history-main">
                    <div className="pg-history-pills">
                      <span className="pg-history-pill">
                        Pain {item.pain}/10
                      </span>

                      <span className="pg-history-pill">
                        Movement: {item.movementStatus}
                      </span>

                      <span className="pg-history-pill">
                        Exercises {item.exerciseCompletion}%
                      </span>
                    </div>

                    <p>{item.notes || "No additional note added."}</p>
                  </div>

                  <div className="pg-history-arrow">→</div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}