import { useEffect, useMemo, useState } from "react";
import exerciseService from "../../../services/exerciseService";
import "./PatientExercises.css";

export default function PatientExercises() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState("");

  const loadExercises = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await exerciseService.my();

      setItems(Array.isArray(data?.assignments) ? data.assignments : []);
    } catch (err) {
      console.error("Patient exercises error:", err);
      setError(err.message || "Unable to load your exercises.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExercises();
  }, []);

  const completed = useMemo(
    () => items.filter((item) => item.status === "Completed").length,
    [items]
  );

  const completionPercent = items.length
    ? Math.round((completed / items.length) * 100)
    : 0;

  const remaining = Math.max(items.length - completed, 0);

  const completeExercise = async (id) => {
    try {
      setUpdatingId(id);
      setError("");

      await exerciseService.updateAssignment(id, "Completed");

      setItems((current) =>
        current.map((item) =>
          item._id === id
            ? {
                ...item,
                status: "Completed",
              }
            : item
        )
      );
    } catch (err) {
      console.error("Exercise completion error:", err);
      setError(
        err.message || "Unable to update exercise status."
      );
    } finally {
      setUpdatingId("");
    }
  };

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="pe-page">
      {/* HERO */}
      <header className="pe-header">
        <div className="pe-header-copy">
          <span className="pe-kicker">
            YOUR MOVEMENT PLAN
          </span>

          <h1>
            Move with purpose.
            <em> Recover with confidence.</em>
          </h1>

          <p>
            Your physiotherapist has created this movement
            plan around your recovery. Complete each exercise
            at your prescribed pace and keep building consistency.
          </p>
        </div>

        <div className="pe-count-card">
          <div className="pe-count-ring">
            <span>{completionPercent}%</span>
          </div>

          <div>
            <strong>{completed} completed</strong>
            <span>
              {remaining > 0
                ? `${remaining} remaining`
                : items.length
                ? "Plan completed"
                : "No exercises yet"}
            </span>
          </div>
        </div>
      </header>

      {/* ERROR */}
      {error && (
        <section className="pe-error">
          <div className="pe-error-icon">!</div>

          <div>
            <strong>Something needs attention</strong>
            <p>{error}</p>
          </div>

          <button onClick={loadExercises}>
            Try again
          </button>
        </section>
      )}

      {/* SUMMARY */}
      <section className="pe-summary">
        <div className="pe-summary-copy">
          <span className="pe-label">TODAY'S PLAN</span>

          <h2>
            {loading
              ? "Preparing your movement plan..."
              : items.length
              ? remaining > 0
                ? `${remaining} movement ${
                    remaining === 1 ? "exercise" : "exercises"
                  } to go`
                : "Today's plan is complete"
              : "Your plan is being prepared"}
          </h2>

          <p>
            {items.length
              ? "Consistency matters more than speed. Follow the instructions provided by your physiotherapist."
              : "Exercises assigned by your physiotherapist will appear here."}
          </p>
        </div>

        <div className="pe-progress">
          <div className="pe-progress-top">
            <span>PLAN COMPLETION</span>
            <strong>{completionPercent}%</strong>
          </div>

          <div className="pe-progress-track">
            <span
              style={{
                width: `${completionPercent}%`,
              }}
            />
          </div>

          <div className="pe-progress-meta">
            <span>{completed} completed</span>
            <span>{items.length} total</span>
          </div>
        </div>
      </section>

      {/* LOADING */}
      {loading && (
        <section className="pe-grid pe-loading-grid">
          {[1, 2, 3].map((item) => (
            <article className="pe-skeleton-card" key={item}>
              <div className="pe-skeleton-image" />

              <div className="pe-skeleton-content">
                <span />
                <strong />
                <small />
                <div />
              </div>
            </article>
          ))}
        </section>
      )}

      {/* EMPTY */}
      {!loading && items.length === 0 && !error && (
        <section className="pe-empty">
          <div className="pe-empty-icon">◇</div>

          <span className="pe-label">MOVEMENT LIBRARY</span>

          <h2>Your exercises will appear here.</h2>

          <p>
            Your physiotherapist will assign exercises based
            on your assessment and rehabilitation plan.
          </p>
        </section>
      )}

      {/* EXERCISES */}
      {!loading && items.length > 0 && (
        <section className="pe-grid">
          {items.map((assignment, index) => {
            const exercise = assignment.exercise || {};
            const isCompleted = assignment.status === "Completed";
            const isUpdating = updatingId === assignment._id;

            return (
              <article
                className={`pe-card ${
                  isCompleted ? "is-complete" : ""
                }`}
                key={assignment._id}
                style={{
                  "--pe-delay": `${index * 80}ms`,
                }}
              >
                {/* IMAGE */}
                <div className="pe-image">
                  {exercise.imageUrl ? (
                    <img
                      src={exercise.imageUrl}
                      alt={exercise.title || "Exercise"}
                    />
                  ) : (
                    <div className="pe-image-placeholder">
                      <span>◇</span>
                      <small>FitMax Exercise</small>
                    </div>
                  )}

                  <div className="pe-image-overlay" />

                  <span className="pe-category">
                    {exercise.category || "Movement"}
                  </span>

                  {isCompleted && (
                    <span className="pe-completed-badge">
                      ✓ Completed
                    </span>
                  )}
                </div>

                {/* BODY */}
                <div className="pe-body">
                  <div className="pe-body-head">
                    <div>
                      <span className="pe-exercise-number">
                        EXERCISE {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2>
                        {exercise.title || "Assigned exercise"}
                      </h2>
                    </div>

                    <div
                      className={`pe-state ${
                        isCompleted ? "completed" : ""
                      }`}
                    >
                      <span />
                      {isCompleted ? "Done" : "Ready"}
                    </div>
                  </div>

                  {/* PRESCRIPTION */}
                  <div className="pe-prescription">
                    <div>
                      <span>SETS</span>
                      <strong>
                        {assignment.sets || "—"}
                      </strong>
                    </div>

                    <div>
                      <span>REPS</span>
                      <strong>
                        {assignment.reps || "—"}
                      </strong>
                    </div>

                    <div>
                      <span>FREQUENCY</span>
                      <strong>
                        {assignment.frequency || "—"}
                      </strong>
                    </div>
                  </div>

                  {/* INSTRUCTIONS */}
                  {assignment.instructions && (
                    <div className="pe-instructions">
                      <span>PHYSIOTHERAPIST NOTE</span>

                      <p>
                        {assignment.instructions}
                      </p>
                    </div>
                  )}

                  {/* FOOTER */}
                  <div className="pe-card-footer">
                    <div>
                      <span>
                        {assignment.assignedAt
                          ? `Assigned ${formatDate(
                              assignment.assignedAt
                            )}`
                          : "Assigned by your care team"}
                      </span>
                    </div>

                    <button
                      type="button"
                      className={
                        isCompleted
                          ? "pe-complete-button completed"
                          : "pe-complete-button"
                      }
                      disabled={
                        isCompleted || isUpdating
                      }
                      onClick={() =>
                        completeExercise(assignment._id)
                      }
                    >
                      {isUpdating ? (
                        <>
                          <i className="pe-spinner" />
                          Saving
                        </>
                      ) : isCompleted ? (
                        <>
                          <span>✓</span>
                          Completed
                        </>
                      ) : (
                        <>
                          Mark complete
                          <span>↗</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}

      {/* FOOT NOTE */}
      {!loading && items.length > 0 && (
        <div className="pe-care-note">
          <span>FITMAX CARE</span>

          <p>
            Follow your physiotherapist's instructions. If an
            exercise causes unexpected or significant discomfort,
            stop and contact your care team.
          </p>
        </div>
      )}
    </div>
  );
}