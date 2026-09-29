import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PhysioLayout from "../../components/PhysioLayout/PhysioLayout";
import physioPatientService from "../../services/physioPatientService";
import physioRehabService from "../../services/physioRehabService";
import "./RehabPlans.css";

const emptyPhases = [
  {
    no: 1,
    title: "Protection & early mobility",
    description:
      "Restore comfortable movement and establish a safe foundation.",
    status: "Current",
    progress: 0,
  },
  {
    no: 2,
    title: "Strength & control",
    description:
      "Build strength and control for everyday movement.",
    status: "Upcoming",
    progress: 0,
  },
  {
    no: 3,
    title: "Functional progression",
    description:
      "Progress toward the activities that matter to the patient.",
    status: "Upcoming",
    progress: 0,
  },
];

export default function RehabPlans() {
  const [params] = useSearchParams();
  const selectedId = params.get("id");

  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState(selectedId || "");
  const [plan, setPlan] = useState(null);

  const [form, setForm] = useState({
    title: "",
    weeklyFocus: "",
    phaseProgress: 0,
    status: "Active",
  });

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
          await loadPlan(selectedId);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err?.message || "Unable to load patients."
          );
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

  const resetForm = () => {
    setForm({
      title: "",
      weeklyFocus: "",
      phaseProgress: 0,
      status: "Active",
    });
  };

  const loadPlan = async (pid) => {
    setPatientId(pid);
    setMessage("");
    setError("");

    if (!pid) {
      setPlan(null);
      resetForm();
      return;
    }

    try {
      const data = await physioRehabService.get(pid);

      const rehabPlan = data?.rehabPlan || null;

      setPlan(rehabPlan);

      if (rehabPlan) {
        setForm({
          title: rehabPlan.title || "",
          weeklyFocus: rehabPlan.weeklyFocus || "",
          phaseProgress: rehabPlan.phaseProgress ?? 0,
          status: rehabPlan.status || "Active",
        });
      } else {
        resetForm();
      }
    } catch (err) {
      setPlan(null);
      resetForm();

      setError(
        err?.message || "Unable to load rehabilitation plan."
      );
    }
  };

  const handleChange = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
    setMessage("");
  };

  const save = async () => {
    if (!patientId) {
      setError("Please select a patient first.");
      return;
    }

    if (!form.title.trim()) {
      setError("Please enter a rehabilitation plan title.");
      return;
    }

    const progress = Math.min(
      100,
      Math.max(0, Number(form.phaseProgress) || 0)
    );

    try {
      setSaving(true);
      setError("");
      setMessage("");

      const payload = {
        title: form.title.trim(),
        weeklyFocus: form.weeklyFocus.trim(),
        phaseProgress: progress,
        status: form.status,
      };

      let data;

      if (plan) {
        data = await physioRehabService.update(
          plan._id,
          payload
        );
      } else {
        data = await physioRehabService.create({
          patient: patientId,
          ...payload,
          currentPhase: 1,
          phaseProgress: progress,
          phases: emptyPhases,
        });
      }

      const updatedPlan = data?.rehabPlan || null;

      setPlan(updatedPlan);

      if (updatedPlan) {
        setForm({
          title: updatedPlan.title || "",
          weeklyFocus: updatedPlan.weeklyFocus || "",
          phaseProgress: updatedPlan.phaseProgress ?? 0,
          status: updatedPlan.status || "Active",
        });
      }

      setMessage(
        plan
          ? "Rehabilitation plan updated successfully."
          : "Rehabilitation plan created successfully."
      );
    } catch (err) {
      setError(
        err?.message || "Unable to save rehabilitation plan."
      );
    } finally {
      setSaving(false);
    }
  };

  const progress = Math.min(
    100,
    Math.max(0, Number(plan?.phaseProgress) || 0)
  );

  const formProgress = Math.min(
    100,
    Math.max(0, Number(form.phaseProgress) || 0)
  );

  const selectedPatient = patients.find(
    (patient) => patient._id === patientId
  );

  const phases =
    plan?.phases?.length > 0
      ? plan.phases
      : emptyPhases;

  return (
    <PhysioLayout>
      <main className="rehab-page">

        {/* =========================
            HERO
        ========================= */}

        <header className="rehab-hero">
          <div className="rehab-hero-content">
            <span className="rehab-eyebrow">
              REHABILITATION PLANS
            </span>

            <h1 style={{color:"white"}}>
              Turn the assessment into a clear recovery path.
            </h1>

            <p>
              Create or update a structured rehabilitation plan
              and keep every stage of the patient's recovery
              clearly defined.
            </p>

            <div className="rehab-hero-meta">
              <span>
                <i />
                Guided recovery planning
              </span>

              <span>
                FitMax Physiotherapy
              </span>
            </div>
          </div>

          <Link
            to={
              patientId
                ? `/physio/patient?id=${patientId}`
                : "/physio/patients"
            }
            className="rehab-workspace-link"
          >
            <span>Patient workspace</span>
            <b>↗</b>
          </Link>
        </header>

        {/* =========================
            ERROR
        ========================= */}

        {error && (
          <div className="rehab-alert">
            <div className="rehab-alert-icon">!</div>

            <div>
              <strong>Something needs attention</strong>
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <section className="rehab-layout">

          {/* =========================
              BUILDER
          ========================= */}

          <article className="rehab-card rehab-builder">

            <div className="rehab-card-header">
              <div>
                <span className="rehab-label">
                  PLAN BUILDER
                </span>

                <h2>
                  {plan
                    ? "Update rehabilitation plan"
                    : "Create a rehabilitation plan"}
                </h2>

                <p>
                  Define the patient's recovery focus,
                  progress and current plan status.
                </p>
              </div>

              <div className="rehab-builder-number">
                {plan ? "02" : "01"}
              </div>
            </div>

            {/* PATIENT */}

            <div className="rehab-field">
              <label htmlFor="rehab-patient">
                Patient
              </label>

              <div className="rehab-select-wrap">
                <select
                  id="rehab-patient"
                  value={patientId}
                  onChange={(e) =>
                    loadPlan(e.target.value)
                  }
                  disabled={loading || saving}
                >
                  <option value="">
                    Choose patient
                  </option>

                  {patients.map((patient) => (
                    <option
                      key={patient._id}
                      value={patient._id}
                    >
                      {patient.firstName}{" "}
                      {patient.lastName}
                    </option>
                  ))}
                </select>

                <span>⌄</span>
              </div>
            </div>

            {/* SELECTED PATIENT */}

            {selectedPatient && (
              <div className="rehab-patient">
                <div className="rehab-patient-avatar">
                  {selectedPatient.firstName?.charAt(0)}
                  {selectedPatient.lastName?.charAt(0)}
                </div>

                <div className="rehab-patient-info">
                  <strong>
                    {selectedPatient.firstName}{" "}
                    {selectedPatient.lastName}
                  </strong>

                  <span>
                    Rehabilitation workspace
                  </span>
                </div>

                <span className="rehab-patient-active">
                  Active patient
                </span>
              </div>
            )}

            {/* PLAN TITLE */}

            <div className="rehab-field">
              <label htmlFor="plan-title">
                Plan title
              </label>

              <input
                id="plan-title"
                type="text"
                placeholder="Example: Lower limb recovery plan"
                value={form.title}
                onChange={(e) =>
                  handleChange("title", e.target.value)
                }
                disabled={saving}
              />
            </div>

            {/* WEEKLY FOCUS */}

            <div className="rehab-field">
              <label htmlFor="weekly-focus">
                Weekly focus
              </label>

              <textarea
                id="weekly-focus"
                rows="5"
                placeholder="Describe the main focus for the patient's current recovery stage..."
                value={form.weeklyFocus}
                onChange={(e) =>
                  handleChange(
                    "weeklyFocus",
                    e.target.value
                  )
                }
                disabled={saving}
              />

              <small className="rehab-field-hint">
                Keep the focus simple, clear and practical.
              </small>
            </div>

            {/* FORM GRID */}

            <div className="rehab-form-grid">

              <div className="rehab-field">
                <label htmlFor="phase-progress">
                  Current progress
                </label>

                <div className="rehab-number-wrap">
                  <input
                    id="phase-progress"
                    type="number"
                    min="0"
                    max="100"
                    value={form.phaseProgress}
                    onChange={(e) =>
                      handleChange(
                        "phaseProgress",
                        e.target.value
                      )
                    }
                    disabled={saving}
                  />

                  <span>%</span>
                </div>
              </div>

              <div className="rehab-field">
                <label htmlFor="plan-status">
                  Plan status
                </label>

                <div className="rehab-select-wrap">
                  <select
                    id="plan-status"
                    value={form.status}
                    onChange={(e) =>
                      handleChange(
                        "status",
                        e.target.value
                      )
                    }
                    disabled={saving}
                  >
                    <option value="Active">
                      Active
                    </option>

                    <option value="Draft">
                      Draft
                    </option>

                    <option value="Paused">
                      Paused
                    </option>

                    <option value="Completed">
                      Completed
                    </option>
                  </select>

                  <span>⌄</span>
                </div>
              </div>

            </div>

            {/* PROGRESS PREVIEW */}

            <div className="rehab-progress-preview">
              <div className="rehab-progress-top">
                <span>
                  PLAN PROGRESS
                </span>

                <strong>
                  {formProgress}%
                </strong>
              </div>

              <div className="rehab-progress-track">
                <i
                  style={{
                    width: `${formProgress}%`,
                  }}
                />
              </div>
            </div>

            {/* SAVE BUTTON */}

            <button
              type="button"
              className="rehab-save-button"
              onClick={save}
              disabled={
                saving ||
                loading ||
                !patientId
              }
            >
              {saving ? (
                <>
                  <span className="rehab-spinner" />
                  Saving plan...
                </>
              ) : (
                <>
                  <span>
                    {plan
                      ? "Update rehabilitation plan"
                      : "Create rehabilitation plan"}
                  </span>

                  <b>→</b>
                </>
              )}
            </button>

            {/* SUCCESS */}

            {message && (
              <div className="rehab-success">
                <span>✓</span>
                <p>{message}</p>
              </div>
            )}

          </article>

          {/* =========================
              PLAN OVERVIEW
          ========================= */}

          <aside className="rehab-card rehab-overview">

            <div className="rehab-overview-header">
              <div>
                <span className="rehab-label">
                  CURRENT PLAN
                </span>

                <h2>
                  Recovery overview
                </h2>
              </div>

              <div className="rehab-overview-icon">
                ↗
              </div>
            </div>

            {/* PROGRESS */}

            <div
              className="rehab-progress-circle"
              style={{
                "--progress": `${progress}%`,
              }}
            >
              <div>
                <strong>
                  {progress}%
                </strong>

                <span>
                  complete
                </span>
              </div>
            </div>

            {/* PLAN INFO */}

            <div className="rehab-overview-title">
              <strong>
                {plan?.title || "No plan selected"}
              </strong>

              <span>
                {plan?.status ||
                  "Waiting for patient selection"}
              </span>
            </div>

            <div className="rehab-overview-line" />

            {/* PHASES */}

            <div className="rehab-phases-heading">
              <span>
                RECOVERY PHASES
              </span>

              <small>
                {phases.length} stages
              </small>
            </div>

            <div className="rehab-phases">
              {phases.map((phase, index) => {
                const phaseNumber =
                  phase.no || index + 1;

                const phaseProgress = Math.min(
                  100,
                  Math.max(
                    0,
                    Number(phase.progress) || 0
                  )
                );

                return (
                  <div
                    className={`rehab-phase ${
                      phase.status === "Current"
                        ? "is-current"
                        : ""
                    }`}
                    key={phase.no || index}
                  >
                    <div className="rehab-phase-number">
                      {String(
                        phaseNumber
                      ).padStart(2, "0")}
                    </div>

                    <div className="rehab-phase-content">

                      <div className="rehab-phase-top">
                        <strong>
                          {phase.title}
                        </strong>

                        <span>
                          {phase.status}
                        </span>
                      </div>

                      <p>
                        {phase.description ||
                          "Recovery phase details"}
                      </p>

                      <div className="rehab-phase-progress">
                        <i
                          style={{
                            width: `${phaseProgress}%`,
                          }}
                        />
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* NOTE */}

            <div className="rehab-overview-note">
              <span>
                FITMAX
              </span>

              <p>
                A structured recovery plan keeps every
                stage of rehabilitation clear and measurable.
              </p>
            </div>

          </aside>
        </section>
      </main>
    </PhysioLayout>
  );
}