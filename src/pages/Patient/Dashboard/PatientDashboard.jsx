import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import assessmentService from "../../../services/assessmentService";
import "./PatientDashboard.css";

const exercises = [
  {
    title: "Heel slides",
    meta: "2 sets · 12 reps",
    status: "Done",
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Knee extension",
    meta: "3 sets · 10 reps",
    status: "Next",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Controlled sit to stand",
    meta: "2 sets · 8 reps",
    status: "Next",
    image:
      "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
];

export default function PatientDashboard() {
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadAssessment = async () => {
      try {
        setLoading(true);
        setError("");

        const data =
          await assessmentService.getMyAssessment();

        if (!active) return;

        setAssessment(data?.assessment || null);
      } catch (err) {
        console.error(
          "Dashboard assessment loading error:",
          err
        );

        if (!active) return;

        setError(
          err?.message ||
            "Unable to load your assessment."
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadAssessment();

    return () => {
      active = false;
    };
  }, []);

  const formatDate = (date) => {
    if (!date) return "Not available";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Not available";
    }

    return parsedDate.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  const condition =
    assessment?.condition ||
    "Assessment pending";

  const duration =
    assessment?.duration ||
    "Not recorded yet";

  const pain =
    typeof assessment?.pain === "number"
      ? assessment.pain
      : null;

  const status =
    assessment?.status ||
    "Not submitted";

  const goal =
    assessment?.mainGoal ||
    "Recovery goal not recorded yet";

  const painPercent =
    pain !== null
      ? Math.min(Math.max(pain * 10, 0), 100)
      : 0;

  const statusClass = useMemo(() => {
    const value = status.toLowerCase();

    if (value.includes("reviewed")) {
      return "reviewed";
    }

    if (value.includes("under")) {
      return "review";
    }

    if (value.includes("submitted")) {
      return "submitted";
    }

    return "default";
  }, [status]);

  return (
    <div className="pd-page">

      {/* =====================================================
          WELCOME
      ===================================================== */}

      <section className="pd-welcome">
        <div className="pd-welcome-copy">
          <span className="pd-kicker">
            YOUR RECOVERY SPACE
          </span>

          <h1>
            Keep moving,
            <em> one step at a time.</em>
          </h1>

          <p>
            Your rehabilitation space keeps your
            assessment, recovery information and
            care journey together.
          </p>
        </div>

        <div className="pd-date">
          <span>ASSESSMENT STATUS</span>

          <strong>
            {loading
              ? "Loading..."
              : status}
          </strong>

          {!loading && assessment?.createdAt && (
            <small>
              Submitted{" "}
              {formatDate(
                assessment.createdAt
              )}
            </small>
          )}
        </div>
      </section>

      {/* =====================================================
          ERROR
      ===================================================== */}

      {error && (
        <section className="pd-error-card">
          <div className="pd-error-icon">
            !
          </div>

          <div>
            <span className="pd-label">
              ASSESSMENT
            </span>

            <h2>
              Unable to load assessment
            </h2>

            <p>{error}</p>
          </div>
        </section>
      )}

      {/* =====================================================
          TOP GRID
      ===================================================== */}

      <section className="pd-grid pd-top-grid">

        {/* RECOVERY CONTEXT */}

        <article className="pd-card pd-progress-card">

          <div className="pd-card-head">
            <div>
              <span className="pd-label">
                RECOVERY CONTEXT
              </span>

              <h2>
                {loading
                  ? "Loading your assessment..."
                  : condition}
              </h2>
            </div>

            <span
              className={`pd-status ${statusClass}`}
            >
              <i />
              {loading
                ? "Loading"
                : status}
            </span>
          </div>

          <div className="pd-recovery-body">

            {/* PAIN SCORE */}

            <div className="pd-pain-block">
              <div
                className="pd-pain-ring"
                style={{
                  "--pain-progress": `${painPercent}%`,
                }}
              >
                <div>
                  <strong>
                    {loading
                      ? "—"
                      : pain !== null
                      ? pain
                      : "—"}
                  </strong>

                  <span>
                    {pain !== null
                      ? "/ 10"
                      : "pain"}
                  </span>
                </div>
              </div>

              <span className="pd-pain-caption">
                CURRENT PAIN
              </span>
            </div>

            {/* RECOVERY DETAILS */}

            <div className="pd-recovery-copy">

              <span className="pd-small-label">
                RECOVERY DURATION
              </span>

              <strong>
                {loading
                  ? "Loading..."
                  : duration}
              </strong>

              <p>
                {loading
                  ? "Preparing your assessment details."
                  : `Your current recorded issue duration is ${duration}.`}
              </p>

              <div className="pd-info-line">
                <span />
              </div>

              <small>
                Assessment submitted{" "}
                {assessment?.createdAt
                  ? formatDate(
                      assessment.createdAt
                    )
                  : "not available"}
              </small>
            </div>
          </div>

          <Link
            className="pd-text-link"
            to="/patient/assessment"
          >
            View full assessment
            <span>↗</span>
          </Link>
        </article>

        {/* CURRENT ASSESSMENT */}

        <article className="pd-card pd-consult-card">

          <div className="pd-card-head">
            <span className="pd-label">
              CURRENT ASSESSMENT
            </span>

            <span className="pd-mini-icon">
              ◷
            </span>
          </div>

          <span className="pd-consult-day">
            PRIMARY CONDITION
          </span>

          <h2>
            {loading
              ? "Loading..."
              : condition}
          </h2>

          <div className="pd-assessment-facts">

            <div>
              <span>PAIN LEVEL</span>

              <strong>
                {loading
                  ? "—"
                  : pain !== null
                  ? `${pain} / 10`
                  : "Not recorded"}
              </strong>
            </div>

            <div>
              <span>DURATION</span>

              <strong>
                {loading
                  ? "—"
                  : duration}
              </strong>
            </div>

          </div>

          <Link
            className="pd-button"
            to="/patient/assessment"
          >
            View assessment
            <span>↗</span>
          </Link>
        </article>

      </section>

      {/* =====================================================
          EXERCISES
      ===================================================== */}

      <section className="pd-section-head">
        <div>
          <span className="pd-label">
            RECOVERY ESSENTIALS
          </span>

          <h2>
            Keep your movement consistent.
          </h2>

          <p>
            Explore your exercise space and
            continue the activities assigned to
            your recovery plan.
          </p>
        </div>

        <Link to="/patient/exercises">
          See all exercises
          <span>↗</span>
        </Link>
      </section>

      <section className="pd-exercise-grid">
        {exercises.map(
          (exercise, index) => (
            <article
              className="pd-exercise-card"
              key={exercise.title}
              style={{
                "--pd-delay": `${index * 90}ms`,
              }}
            >
              <div className="pd-exercise-image">

                <img
                  src={exercise.image}
                  alt={exercise.title}
                  loading="lazy"
                />

                <div className="pd-image-overlay" />

                <span
                  className={
                    exercise.status === "Done"
                      ? "done"
                      : ""
                  }
                >
                  {exercise.status}
                </span>

                <div className="pd-image-arrow">
                  ↗
                </div>
              </div>

              <div className="pd-exercise-body">

                <span className="pd-label">
                  EXERCISE
                </span>

                <h3>
                  {exercise.title}
                </h3>

                <p>
                  {exercise.meta}
                </p>

              </div>
            </article>
          )
        )}
      </section>

      {/* =====================================================
          BOTTOM GRID
      ===================================================== */}

      <section className="pd-bottom-grid">

        {/* GOAL */}

        <article className="pd-card pd-goal-card">

          <span className="pd-label">
            YOUR CURRENT GOAL
          </span>

          <h2>
            {loading
              ? "Loading your recovery goal..."
              : goal}
          </h2>

          <p>
            Your recovery goal is based on the
            information recorded during your
            assessment.
          </p>

          <div className="pd-goal-line">
            <span />
          </div>

          <div className="pd-goal-meta">
            <span>
              REHABILITATION PROGRESS
            </span>

            <strong>
              Track in Progress
            </strong>
          </div>

          <Link
            to="/patient/rehab"
            className="pd-goal-link"
          >
            Open rehab plan
            <span>↗</span>
          </Link>
        </article>

        {/* ACTIVITY */}

        <article className="pd-card pd-activity-card">

          <div className="pd-card-head">
            <span className="pd-label">
              RECOVERY ACTIVITY
            </span>

            <Link to="/patient/assessment">
              View assessment
              <span>↗</span>
            </Link>
          </div>

          <div className="pd-activity-item">

            <span className="complete">
              ✓
            </span>

            <div>
              <strong>
                Assessment submitted
              </strong>

              <small>
                {assessment?.createdAt
                  ? formatDate(
                      assessment.createdAt
                    )
                  : "Not available"}
              </small>
            </div>

          </div>

          <div className="pd-activity-item">

            <span>
              ◷
            </span>

            <div>
              <strong>
                Assessment status
              </strong>

              <small>
                {status}
              </small>
            </div>

          </div>

          <div className="pd-activity-item">

            <span>
              ↗
            </span>

            <div>
              <strong>
                Current condition
              </strong>

              <small>
                {condition}
              </small>
            </div>

          </div>

        </article>

      </section>

    </div>
  );
}