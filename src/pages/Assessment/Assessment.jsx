import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PhysioLayout from "../../components/PhysioLayout/PhysioLayout";
import physioPatientService from "../../services/physioPatientService";
import physioAssessmentService from "../../services/physioAssessmentService";
import "./Assessment.css";

export default function Assessment() {
  const [params] = useSearchParams();
  const selectedId = params.get("id");

  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState(selectedId || "");
  const [assessment, setAssessment] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadPatients = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await physioPatientService.getPatients();

        if (!mounted) return;

        setPatients(data?.patients || []);

        if (selectedId) {
          await loadAssessment(selectedId);
        }
      } catch (err) {
        if (mounted) {
          setError(err?.message || "Unable to load patients.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadPatients();

    return () => {
      mounted = false;
    };
  }, [selectedId]);

  const loadAssessment = async (pid) => {
    setPatientId(pid);
    setMessage("");
    setError("");
    setAssessment(null);

    if (!pid) {
      return;
    }

    try {
      const data = await physioAssessmentService.get(pid);
      setAssessment(data?.assessment || null);
    } catch (err) {
      setAssessment(null);

      const errorMessage = err?.message || "Unable to load assessment.";

      setError(
        errorMessage.toLowerCase().includes("no assessment")
          ? "No assessment submitted yet."
          : errorMessage
      );
    }
  };

  const updateStatus = async (nextStatus) => {
    if (!assessment || saving) return;

    try {
      setSaving(true);
      setMessage("");
      setError("");

      const data = await physioAssessmentService.updateStatus(
        assessment._id,
        nextStatus
      );

      setAssessment(data?.assessment || assessment);
      setMessage("Assessment status updated successfully.");
    } catch (err) {
      setError(err?.message || "Unable to update assessment status.");
    } finally {
      setSaving(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return "Not recorded";

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) {
      return "Not recorded";
    }

    return parsed.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const selectedPatient = patients.find(
    (patient) => patient._id === patientId
  );

  return (
    <PhysioLayout>
      <main className="assessment-page">

        {/* HERO */}
        <header className="assessment-hero">
          <div className="assessment-hero-content">
            <span className="assessment-eyebrow">
              CLINICAL ASSESSMENT
            </span>

            <h1>
              Review the patient before defining the next step.
            </h1>

            <p>
              Review the latest patient assessment and keep the care review
              status up to date.
            </p>

            <div className="assessment-hero-meta">
              <span>
                <i></i>
                Clinical review workspace
              </span>

              <span>
                FitMax Physiotherapy
              </span>
            </div>
          </div>

          <Link
            className="assessment-workspace-link"
            to={
              patientId
                ? `/physio/patient?id=${patientId}`
                : "/physio/patients"
            }
          >
            Patient workspace
            <span>↗</span>
          </Link>
        </header>

        {/* ERROR */}
        {error && (
          <div className="assessment-alert assessment-alert-error">
            <div className="assessment-alert-icon">!</div>

            <div>
              <strong>Something needs attention</strong>
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* MAIN GRID */}
        <section className="assessment-layout">

          {/* PATIENT / ASSESSMENT */}
          <article className="assessment-card assessment-main-card">

            <div className="assessment-card-header">
              <div>
                <span className="assessment-label">
                  PATIENT ASSESSMENT
                </span>

                <h2>
                  Review clinical details
                </h2>

                <p>
                  Select a patient to view their latest submitted assessment.
                </p>
              </div>

              {assessment && (
                <span
                  className={`assessment-status assessment-status-${assessment.status
                    ?.toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <i></i>
                  {assessment.status}
                </span>
              )}
            </div>

            {/* PATIENT SELECT */}
            <div className="assessment-selector">
              <label htmlFor="patient-select">
                Select patient
              </label>

              <div className="assessment-select-wrap">
                <select
                  id="patient-select"
                  value={patientId}
                  onChange={(event) =>
                    loadAssessment(event.target.value)
                  }
                  disabled={loading}
                >
                  <option value="">
                    Choose a patient
                  </option>

                  {patients.map((patient) => (
                    <option
                      key={patient._id}
                      value={patient._id}
                    >
                      {patient.firstName} {patient.lastName}
                    </option>
                  ))}
                </select>

                <span>⌄</span>
              </div>
            </div>

            {/* SELECTED PATIENT */}
            {selectedPatient && (
              <div className="assessment-patient">
                <div className="assessment-patient-avatar">
                  {selectedPatient.firstName?.charAt(0)}
                  {selectedPatient.lastName?.charAt(0)}
                </div>

                <div>
                  <strong>
                    {selectedPatient.firstName}{" "}
                    {selectedPatient.lastName}
                  </strong>

                  <span>
                    Patient assessment record
                  </span>
                </div>
              </div>
            )}

            {/* LOADING */}
            {loading ? (
              <div className="assessment-loading">
                <div className="assessment-loading-line"></div>
                <div className="assessment-loading-line short"></div>

                <div className="assessment-loading-grid">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            ) : assessment ? (
              <>
                {/* ASSESSMENT DETAILS */}
                <div className="assessment-details">

                  <div className="assessment-detail">
                    <span>Condition</span>
                    <strong>
                      {assessment.condition || "Not recorded"}
                    </strong>
                    <small>
                      Primary assessment
                    </small>
                  </div>

                  <div className="assessment-detail">
                    <span>Duration</span>
                    <strong>
                      {assessment.duration || "Not recorded"}
                    </strong>
                    <small>
                      Reported duration
                    </small>
                  </div>

                  <div className="assessment-detail">
                    <span>Pain level</span>
                    <strong>
                      {assessment.pain ?? "—"}
                      {assessment.pain !== undefined && "/10"}
                    </strong>
                    <small>
                      Patient reported
                    </small>
                  </div>

                  <div className="assessment-detail">
                    <span>Assessment date</span>
                    <strong>
                      {formatDate(
                        assessment.createdAt ||
                          assessment.updatedAt
                      )}
                    </strong>
                    <small>
                      Latest record
                    </small>
                  </div>

                </div>

                {/* GOAL */}
                <div className="assessment-section">
                  <div className="assessment-section-heading">
                    <span>01</span>

                    <div>
                      <small>PATIENT GOAL</small>
                      <h3>Primary recovery goal</h3>
                    </div>
                  </div>

                  <div className="assessment-text-box">
                    {assessment.mainGoal || "No goal recorded."}
                  </div>
                </div>

                {/* NOTES */}
                <div className="assessment-section">
                  <div className="assessment-section-heading">
                    <span>02</span>

                    <div>
                      <small>CLINICAL CONTEXT</small>
                      <h3>Patient notes</h3>
                    </div>
                  </div>

                  <div className="assessment-text-box">
                    {assessment.notes || "No clinical notes recorded."}
                  </div>
                </div>
              </>
            ) : (
              <div className="assessment-empty">
                <div className="assessment-empty-icon">
                  +
                </div>

                <h3>
                  {patientId
                    ? "No assessment submitted yet."
                    : "Choose a patient to begin."}
                </h3>

                <p>
                  Select a patient from the list above to review
                  their latest clinical assessment.
                </p>
              </div>
            )}
          </article>

          {/* REVIEW PANEL */}
          <aside className="assessment-review-card">

            <div className="assessment-review-top">
              <span className="assessment-label">
                REVIEW ACTIONS
              </span>

              <div className="assessment-review-icon">
                ✓
              </div>
            </div>

            <div className="assessment-review-status">
              <small>CURRENT STATUS</small>

              <strong>
                {assessment?.status || "Awaiting assessment"}
              </strong>

              <span>
                {assessment
                  ? "Use the actions below to update the review."
                  : "Select a patient with an assessment to continue."}
              </span>
            </div>

            <div className="assessment-actions">

              <button
                type="button"
                className="assessment-action"
                disabled={!assessment || saving}
                onClick={() => updateStatus("Under Review")}
              >
                <span className="assessment-action-number">
                  01
                </span>

                <span>
                  <strong>Under Review</strong>
                  <small>
                    Mark assessment for clinical review
                  </small>
                </span>

                <b>→</b>
              </button>

              <button
                type="button"
                className="assessment-action assessment-action-primary"
                disabled={!assessment || saving}
                onClick={() => updateStatus("Reviewed")}
              >
                <span className="assessment-action-number">
                  02
                </span>

                <span>
                  <strong>
                    {saving ? "Updating..." : "Reviewed"}
                  </strong>

                  <small>
                    Complete the current assessment review
                  </small>
                </span>

                <b>→</b>
              </button>

            </div>

            {message && (
              <div className="assessment-success">
                <span>✓</span>
                {message}
              </div>
            )}

            <div className="assessment-review-note">
              <span>FITMAX</span>

              <p>
                Keep assessment status aligned with the patient's
                current care journey.
              </p>
            </div>
          </aside>
        </section>

      </main>
    </PhysioLayout>
  );
}