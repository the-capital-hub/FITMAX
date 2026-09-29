import { useEffect, useState } from "react";
import assessmentService from "../../../services/assessmentService";
import "./PatientAssessment.css";

export default function PatientAssessment() {
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAssessment = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await assessmentService.getMyAssessment();

        setAssessment(data?.assessment || null);
      } catch (err) {
        console.error("Assessment loading error:", err);

        setError(
          err?.message || "Unable to load your assessment."
        );
      } finally {
        setLoading(false);
      }
    };

    loadAssessment();
  }, []);

  const formatDate = (date) => {
    if (!date) return "Not available";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Not available";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Reviewed":
        return "reviewed";

      case "Under Review":
        return "under-review";

      default:
        return "submitted";
    }
  };

  const getPainClass = (pain) => {
    const value = Number(pain);

    if (value >= 7) return "high";
    if (value >= 4) return "moderate";
    return "low";
  };

  const painValue = Number(assessment?.pain ?? 0);

  if (loading) {
    return (
      <div className="pa-page">
        <div className="pa-loading">
          <div className="pa-loading-orb" />
          <div>
            <strong>Loading your assessment</strong>
            <span>Preparing your recovery snapshot...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pa-page">
        <header className="pa-header">
          <div>
            
            
            <span className="pa-kicker">ASSESSMENT</span>

            <h1>
              Understand where you are.
              <em> Then move forward.</em>
            </h1>

            <p>
              Your assessment gives the care team context for
              building a rehabilitation plan around you.
            </p>
          </div>
        </header>

        <section className="pa-state-card pa-error-state">
          <div className="pa-state-icon">!</div>

          <div>
            <span className="pa-label">ASSESSMENT STATUS</span>
            <h2>We couldn't load your assessment</h2>
            <p>{error}</p>
          </div>
        </section>
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="pa-page">
        <header className="pa-header">
          <div>
            <span className="pa-kicker">ASSESSMENT</span>

            <h1>
              Understand where you are.
              <em> Then move forward.</em>
            </h1>

            <p>
              Your assessment gives the care team context for
              building a rehabilitation plan around you.
            </p>
          </div>
        </header>

        <section className="pa-state-card">
          <div className="pa-state-icon">01</div>

          <div>
            <span className="pa-label">YOUR FIRST STEP</span>

            <h2>No assessment yet</h2>

            <p>
              Your assessment information will appear here once
              you complete your patient intake.
            </p>
          </div>
        </section>
      </div>
    );
  }

  const items = [
    {
      label: "Primary condition",
      value: assessment.condition || "Not recorded yet",
      wide: true,
    },
    {
      label: "Issue duration",
      value: assessment.duration || "Not recorded yet",
    },
    {
      label: "Surgery / procedure",
      value: assessment.surgery || "Not recorded yet",
    },
    {
      label: "Main goal",
      value: assessment.mainGoal || "Not recorded yet",
      wide: true,
    },
  ];

  return (
    <div className="pa-page">
      {/* HEADER */}
      <header className="pa-header">
        <div>
          <span className="pa-kicker">ASSESSMENT</span>

          <h1>
            Understand where you are.
            <em> Then move forward.</em>
          </h1>

          <p>
            Your assessment gives the care team context for
            building a rehabilitation plan around you.
          </p>
        </div>

        <div className="pa-header-meta">
          <span>SUBMITTED</span>
          <strong>{formatDate(assessment.createdAt)}</strong>
        </div>
      </header>

      {/* TOP GRID */}
      <div className="pa-grid">
        {/* MAIN SUMMARY */}
        <section className="pa-card pa-summary">
          <div className="pa-card-head">
            <div>
              <span className="pa-label">ASSESSMENT SUMMARY</span>
              <h2>Your recovery snapshot</h2>
            </div>

            <span
              className={`pa-status ${getStatusClass(
                assessment.status
              )}`}
            >
              {assessment.status || "Submitted"}
            </span>
          </div>

          <div className="pa-data-grid">
            {items.map((item) => (
              <div
                key={item.label}
                className={item.wide ? "pa-data-wide" : ""}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          {/* PAIN */}
          <div className="pa-pain">
            <div className="pa-pain-head">
              <div>
                <span className="pa-label">CURRENT PAIN</span>
                <strong>How you're feeling today</strong>
              </div>

              <div
                className={`pa-pain-score ${getPainClass(
                  painValue
                )}`}
              >
                <b>{painValue}</b>
                <span>/ 10</span>
              </div>
            </div>

            <div className="pa-pain-track">
              <div
                className={`pa-pain-fill ${getPainClass(
                  painValue
                )}`}
                style={{
                  width: `${Math.min(
                    Math.max(painValue, 0),
                    10
                  ) * 10}%`,
                }}
              />
            </div>

            <div className="pa-pain-scale">
              <span>Minimal</span>
              <span>Moderate</span>
              <span>High</span>
            </div>
          </div>
        </section>

        {/* CARE NOTE */}
        <aside className="pa-card pa-note">
          <div className="pa-note-mark">FM</div>

          <span className="pa-label">CARE NOTE</span>

          <h2>Progress is personal.</h2>

          <p>
            Your assessment is a starting point. Your
            physiotherapist may update it as your movement,
            symptoms and goals change.
          </p>

          <div className="pa-note-bottom">
            <span>ASSESSMENT SUBMITTED</span>
            <strong>{formatDate(assessment.createdAt)}</strong>
          </div>
        </aside>
      </div>

      {/* HISTORY */}
      <section className="pa-card pa-history">
        <div className="pa-history-head">
          <div>
            <span className="pa-label">RECOVERY JOURNEY</span>
            <h2>Where you are in the process</h2>
          </div>

          <span className="pa-history-count">03 STEPS</span>
        </div>

        <div className="pa-timeline">
          <div className="pa-timeline-item active">
            <div className="pa-timeline-number">01</div>

            <div className="pa-timeline-content">
              <span>Initial intake</span>

              <small>
                Assessment information submitted
              </small>

              <b>Completed</b>
            </div>
          </div>

          <div
            className={`pa-timeline-item ${
              assessment.status === "Reviewed"
                ? "active"
                : "current"
            }`}
          >
            <div className="pa-timeline-number">02</div>

            <div className="pa-timeline-content">
              <span>Care review</span>

              <small>
                {assessment.status === "Reviewed"
                  ? "Assessment reviewed by care team"
                  : "Waiting for care team review"}
              </small>

              <b>
                {assessment.status === "Reviewed"
                  ? "Completed"
                  : "In progress"}
              </b>
            </div>
          </div>

          <div className="pa-timeline-item">
            <div className="pa-timeline-number">03</div>

            <div className="pa-timeline-content">
              <span>Rehab plan</span>

              <small>
                Personalized rehabilitation will follow your
                assessment
              </small>

              <b>Next step</b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}