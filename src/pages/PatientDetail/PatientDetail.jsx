import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PhysioLayout from "../../components/PhysioLayout/PhysioLayout";
import physioPatientService from "../../services/physioPatientService";
import "./PatientDetail.css";

export default function PatientDetail() {
  const [params] = useSearchParams();
  const id = params.get("id");

  const [data, setData] = useState({
    patient: null,
    assessment: null,
    rehabPlan: null,
    progress: [],
    exercises: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("Select a patient from the patient list.");
      setLoading(false);
      return;
    }

    const loadPatientWorkspace = async () => {
      try {
        setLoading(true);
        setError("");

        const [patient, assessment, rehabPlan, exercises, progress] =
          await Promise.allSettled([
            physioPatientService.getPatient(id),
            physioPatientService.getAssessment(id),
            physioPatientService.getRehabPlan(id),
            physioPatientService.getExercises(id),
            physioPatientService.getProgress(id),
          ]);

        if (patient.status === "rejected") {
          throw patient.reason;
        }

        setData({
          patient: patient.value?.patient || null,
          assessment:
            assessment.status === "fulfilled"
              ? assessment.value?.assessment || null
              : null,
          rehabPlan:
            rehabPlan.status === "fulfilled"
              ? rehabPlan.value?.rehabPlan || null
              : null,
          exercises:
            exercises.status === "fulfilled"
              ? exercises.value?.assignments || []
              : [],
          progress:
            progress.status === "fulfilled"
              ? progress.value?.progress || []
              : [],
        });
      } catch (e) {
        setError(e.message || "Unable to load patient workspace.");
      } finally {
        setLoading(false);
      }
    };

    loadPatientWorkspace();
  }, [id]);

  const patient = data.patient;
  const assessment = data.assessment;
  const rehabPlan = data.rehabPlan;
  const latestProgress = data.progress[0];

  const initials = useMemo(() => {
    if (!patient) return "P";

    return `${patient.firstName?.[0] || ""}${
      patient.lastName?.[0] || ""
    }`.toUpperCase();
  }, [patient]);

  const progressValue = Math.min(
    Math.max(Number(rehabPlan?.phaseProgress || 0), 0),
    100
  );

  const assignedExerciseNames = data.exercises
    .map((item) => item.exercise?.title)
    .filter(Boolean);

  const visibleExercises = assignedExerciseNames.slice(0, 3);

  const formatDate = (value) => {
    if (!value) return "Not recorded";

    return new Date(value).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <PhysioLayout>
        <main className="dt-page">
          <div className="dt-loading">
            <div className="dt-loading-orb">FM</div>
            <h2>Opening patient workspace</h2>
            <p>
              Bringing together assessment, rehabilitation and progress data.
            </p>

            <div className="dt-loading-line">
              <span />
            </div>
          </div>
        </main>
      </PhysioLayout>
    );
  }

  if (error) {
    return (
      <PhysioLayout>
        <main className="dt-page">
          <Link to="/physio/patients" className="dt-back">
            <span>←</span>
            Back to patients
          </Link>

          <div className="dt-error-card">
            <div className="dt-error-icon">!</div>

            <div>
              <span className="dt-label">PATIENT WORKSPACE</span>
              <h2>{error}</h2>
              <p>
                Return to the patient list and select a patient to continue.
              </p>

              <Link to="/physio/patients" className="dt-primary-link">
                View patients
                <span>→</span>
              </Link>
            </div>
          </div>
        </main>
      </PhysioLayout>
    );
  }

  if (!patient) {
    return null;
  }

  return (
    <PhysioLayout>
      <main className="dt-page">
        {/* BACK */}
        <Link to="/physio/patients" className="dt-back">
          <span>←</span>
          Back to patients
        </Link>

        {/* PATIENT HERO */}
        <section className="dt-hero">
          <div className="dt-person">
            <div className="dt-avatar">
              {initials}

              <span className="dt-online-dot" />
            </div>

            <div className="dt-person-info">
              <span className="dt-label">PATIENT WORKSPACE</span>

              <h1>
                {patient.firstName} {patient.lastName}
              </h1>

              <div className="dt-person-meta">
                <span>{patient.email}</span>
                <i />
                <span>Active patient</span>
              </div>
            </div>
          </div>

          <div className="dt-actions">
            <Link
              to={`/physio/assessment?id=${id}`}
              className="dt-action secondary"
            >
              <span>▣</span>
              Assessment
            </Link>

            <Link
              to={`/physio/rehab-plans?id=${id}`}
              className="dt-action primary"
            >
              <span>↗</span>
              Rehab plan
            </Link>
          </div>
        </section>

        {/* QUICK SNAPSHOT */}
        <section className="dt-section">
          <div className="dt-section-heading">
            <div>
              <span className="dt-label">RECOVERY SNAPSHOT</span>
              <h2>Current patient overview</h2>
            </div>

            <span className="dt-updated">
              Joined {formatDate(patient.createdAt)}
            </span>
          </div>

          <div className="dt-grid">
            {/* RECOVERY */}
            <article className="dt-card dt-recovery-card">
              <div className="dt-card-top">
                <span>RECOVERY STATUS</span>
                <i>01</i>
              </div>

              <div className="dt-recovery-number">
                <strong>{progressValue}%</strong>
                <span>plan progress</span>
              </div>

              <div className="dt-progress-track">
                <span style={{ width: `${progressValue}%` }} />
              </div>

              <div className="dt-card-bottom">
                <span>
                  Phase {rehabPlan?.currentPhase || "—"}
                </span>

                <strong>
                  {rehabPlan?.status || "No active plan"}
                </strong>
              </div>
            </article>

            {/* CONDITION */}
            <article className="dt-card">
              <div className="dt-card-top">
                <span>CURRENT CONDITION</span>
                <i>02</i>
              </div>

              <h3 className="dt-condition">
                {assessment?.condition || "Assessment pending"}
              </h3>

              <p className="dt-muted">
                {assessment?.mainGoal ||
                  "No recovery goal has been recorded yet."}
              </p>

              <div className="dt-pain">
                <span>Current pain</span>

                <strong>
                  {assessment ? `${assessment.pain}/10` : "—"}
                </strong>
              </div>
            </article>

            {/* MOVEMENT */}
            <article className="dt-card">
              <div className="dt-card-top">
                <span>LATEST MOVEMENT</span>
                <i>03</i>
              </div>

              <h3 className="dt-condition">
                {latestProgress?.movementStatus || "No check-in"}
              </h3>

              <p className="dt-muted">
                {latestProgress
                  ? "Based on the patient's latest progress check-in."
                  : "Movement information will appear after the patient's first check-in."}
              </p>

              <div className="dt-pain">
                <span>Exercise completion</span>

                <strong>
                  {latestProgress
                    ? `${latestProgress.exerciseCompletion}%`
                    : "—"}
                </strong>
              </div>
            </article>
          </div>
        </section>

        {/* ASSESSMENT */}
        <section className="dt-section">
          <div className="dt-section-heading">
            <div>
              <span className="dt-label">CLINICAL INFORMATION</span>
              <h2>Assessment overview</h2>
            </div>

            <Link
              to={`/physio/assessment?id=${id}`}
              className="dt-text-link"
            >
              Open assessment →
            </Link>
          </div>

          <div className="dt-assessment">
            <div className="dt-assessment-status">
              <span className="dt-label">ASSESSMENT STATUS</span>

              <strong>
                {assessment?.status || "No assessment"}
              </strong>

              <p>
                {assessment
                  ? "Patient assessment information is available for review."
                  : "Complete an assessment before creating a rehabilitation plan."}
              </p>
            </div>

            <div className="dt-detail">
              <span>Condition</span>
              <strong>
                {assessment?.condition || "Not recorded"}
              </strong>
            </div>

            <div className="dt-detail">
              <span>Duration</span>
              <strong>
                {assessment?.duration || "Not recorded"}
              </strong>
            </div>

            <div className="dt-detail">
              <span>Surgery</span>
              <strong>
                {assessment?.surgery || "None recorded"}
              </strong>
            </div>

            <div className="dt-detail dt-detail-wide">
              <span>Clinical notes</span>
              <strong>
                {assessment?.notes || "No notes recorded."}
              </strong>
            </div>
          </div>
        </section>

        {/* CARE PLAN */}
        <section className="dt-care-grid">
          {/* REHAB */}
          <article className="dt-feature-card">
            <div className="dt-feature-icon">↗</div>

            <span className="dt-label">REHABILITATION</span>

            <h2>{rehabPlan?.title || "No rehab plan yet"}</h2>

            <p>
              {rehabPlan?.weeklyFocus ||
                "Create a structured rehabilitation plan after reviewing the patient's assessment."}
            </p>

            <div className="dt-feature-meta">
              <span>
                {rehabPlan
                  ? `Phase ${rehabPlan.currentPhase || 1}`
                  : "Not started"}
              </span>

              <span>
                {rehabPlan?.status || "Draft"}
              </span>
            </div>

            <Link
              to={`/physio/rehab-plans?id=${id}`}
              className="dt-feature-link"
            >
              {rehabPlan ? "Manage rehabilitation" : "Create rehab plan"}
              <span>→</span>
            </Link>
          </article>

          {/* EXERCISES */}
          <article className="dt-feature-card">
            <div className="dt-feature-icon">◇</div>

            <span className="dt-label">EXERCISE PROGRAM</span>

            <h2>{data.exercises.length} assigned</h2>

            <p>
              {visibleExercises.length > 0
                ? visibleExercises.join(" · ")
                : "No exercises assigned to this patient yet."}
            </p>

            {data.exercises.length > 3 && (
              <span className="dt-more">
                +{data.exercises.length - 3} more exercises
              </span>
            )}

            <Link
              to={`/physio/exercises?id=${id}`}
              className="dt-feature-link"
            >
              Manage exercises
              <span>→</span>
            </Link>
          </article>
        </section>

        {/* PROGRESS */}
        <section className="dt-section dt-progress-section">
          <div className="dt-section-heading">
            <div>
              <span className="dt-label">PATIENT PROGRESS</span>
              <h2>Recent recovery activity</h2>
            </div>

            <Link
              to={`/physio/progress?id=${id}`}
              className="dt-text-link"
            >
              View full progress →
            </Link>
          </div>

          <div className="dt-progress-card">
            {latestProgress ? (
              <>
                <div className="dt-progress-date">
                  <span>Latest check-in</span>
                  <strong>
                    {formatDate(latestProgress.recordedAt)}
                  </strong>
                </div>

                <div className="dt-progress-stat">
                  <span>Pain</span>
                  <strong>{latestProgress.pain}/10</strong>
                </div>

                <div className="dt-progress-stat">
                  <span>Movement</span>
                  <strong>{latestProgress.movementStatus}</strong>
                </div>

                <div className="dt-progress-stat">
                  <span>Exercises</span>
                  <strong>
                    {latestProgress.exerciseCompletion}%
                  </strong>
                </div>

                <div className="dt-progress-note">
                  <span>Patient note</span>
                  <p>
                    {latestProgress.notes ||
                      "No additional note was added for this check-in."}
                  </p>
                </div>
              </>
            ) : (
              <div className="dt-no-progress">
                <div>◒</div>

                <div>
                  <strong>No progress check-ins yet</strong>
                  <p>
                    Patient recovery updates will appear here after the first
                    daily check-in.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </PhysioLayout>
  );
}