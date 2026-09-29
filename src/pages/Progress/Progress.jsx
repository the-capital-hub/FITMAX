import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PhysioLayout from "../../components/PhysioLayout/PhysioLayout";
import physioPatientService from "../../services/physioPatientService";
import "./Progress.css";

export default function Progress() {
  const [params] = useSearchParams();
  const selected = params.get("id");

  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState(selected || "");
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [patientsLoading, setPatientsLoading] = useState(true);

  const load = async (id) => {
    try {
      setError("");
      setPatientId(id);

      if (!id) {
        setItems([]);
        return;
      }

      setLoading(true);

      const data = await physioPatientService.getProgress(id);
      setItems(data?.progress || []);
    } catch (e) {
      setError(e?.message || "Unable to load progress.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      try {
        setPatientsLoading(true);

        const data = await physioPatientService.getPatients();

        if (!mounted) return;

        setPatients(data?.patients || []);

        if (selected) {
          await load(selected);
        }
      } catch (e) {
        if (!mounted) return;
        setError(e?.message || "Unable to load patients.");
      } finally {
        if (mounted) {
          setPatientsLoading(false);
        }
      }
    };

    initialize();

    return () => {
      mounted = false;
    };
  }, [selected]);

  const latest = items[0];

  const avg = useMemo(() => {
    if (!items.length) return 0;

    return Math.round(
      items.reduce(
        (sum, item) => sum + Number(item.exerciseCompletion || 0),
        0
      ) / items.length
    );
  }, [items]);

  const selectedPatient = useMemo(
    () => patients.find((patient) => patient._id === patientId),
    [patients, patientId]
  );

  const patientName = selectedPatient
    ? `${selectedPatient.firstName || ""} ${
        selectedPatient.lastName || ""
      }`.trim()
    : "No patient selected";

  return (
    <PhysioLayout>
      <main className="wk-page">

        {/* HERO */}

        <header className="wk-hero">
          <div className="wk-hero-content">
            <div className="wk-eyebrow">
              <span />
              PROGRESS TRACKING
            </div>

            <h1>
              See recovery,
              <br />
              <em>not just activity.</em>
            </h1>

            <p>
              Review pain, movement and exercise completion
              from patient check-ins.
            </p>
          </div>

          <Link
            to={
              patientId
                ? `/physio/patient?id=${patientId}`
                : "/physio/patients"
            }
            className="wk-workspace-btn"
          >
            Patient workspace
            <span>↗</span>
          </Link>
        </header>

        {/* ERROR */}

        {error && (
          <div className="wk-error-box">
            <div className="wk-error-icon">!</div>

            <div>
              <strong>Something went wrong</strong>
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* TOP GRID */}

        <section className="wk-grid">

          {/* PATIENT / LATEST */}

          <article className="wk-card wk-overview">

            <div className="wk-card-header">
              <div>
                <div className="wk-section-label">
                  <span />
                  PATIENT
                </div>

                <h2>Select a patient</h2>

                <p>
                  Choose a patient to review their latest
                  recovery information.
                </p>
              </div>

              {selectedPatient && (
                <div className="wk-patient-chip">
                  <div className="wk-mini-avatar">
                    {`${selectedPatient.firstName?.[0] || ""}${
                      selectedPatient.lastName?.[0] || ""
                    }`.toUpperCase()}
                  </div>

                  <span>{patientName}</span>
                </div>
              )}
            </div>

            <div className="wk-select-wrap">
              <label htmlFor="patient-select">
                Patient
              </label>

              <select
                id="patient-select"
                value={patientId}
                disabled={patientsLoading}
                onChange={(e) => load(e.target.value)}
              >
                <option value="">
                  {patientsLoading
                    ? "Loading patients..."
                    : "Choose patient"}
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
            </div>

            {loading ? (
              <div className="wk-loading">
                <div className="wk-spinner" />
                <span>Loading recovery data...</span>
              </div>
            ) : latest ? (
              <div className="wk-latest">

                <div className="wk-latest-heading">
                  <div>
                    <small>LATEST CHECK-IN</small>

                    <strong>
                      {new Date(
                        latest.recordedAt
                      ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </strong>
                  </div>

                  <span className="wk-recorded">
                    Recorded
                  </span>
                </div>

                <div className="wk-metrics">

                  {/* PAIN */}

                  <div className="wk-metric">
                    <div className="wk-metric-icon wk-pain-icon">
                      ◉
                    </div>

                    <div className="wk-metric-copy">
                      <span>Pain level</span>
                      <strong>
                        {latest.pain}
                        <small>/10</small>
                      </strong>
                    </div>
                  </div>

                  {/* MOVEMENT */}

                  <div className="wk-metric">
                    <div className="wk-metric-icon wk-movement-icon">
                      ↗
                    </div>

                    <div className="wk-metric-copy">
                      <span>Movement</span>
                      <strong className="wk-movement-value">
                        {latest.movementStatus ||
                          "Not recorded"}
                      </strong>
                    </div>
                  </div>

                  {/* COMPLETION */}

                  <div className="wk-metric">
                    <div className="wk-metric-icon wk-exercise-icon">
                      ✓
                    </div>

                    <div className="wk-metric-copy">
                      <span>Exercise completion</span>
                      <strong>
                        {latest.exerciseCompletion || 0}
                        <small>%</small>
                      </strong>
                    </div>
                  </div>

                </div>

                <div className="wk-notes">
                  <div className="wk-notes-label">
                    <span>NOTES</span>
                  </div>

                  <p>
                    {latest.notes || "No notes were recorded."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="wk-empty">

                <div className="wk-empty-icon">
                  ◎
                </div>

                <strong>
                  {patientId
                    ? "No progress check-ins yet"
                    : "Choose a patient"}
                </strong>

                <span>
                  {patientId
                    ? "Recovery records will appear here after the patient submits a check-in."
                    : "Select a patient above to view their recovery journey."}
                </span>
              </div>
            )}
          </article>

          {/* CONSISTENCY */}

          <aside className="wk-card wk-consistency">

            <div className="wk-section-label">
              <span />
              EXERCISE CONSISTENCY
            </div>

            <div className="wk-consistency-main">
              <strong>{avg}%</strong>

              <span>
                Average recorded
                <br />
                completion
              </span>
            </div>

            <div className="wk-progress-track">
              <div
                className="wk-progress-fill"
                style={{
                  width: `${Math.min(Math.max(avg, 0), 100)}%`,
                }}
              />
            </div>

            <div className="wk-progress-meta">
              <span>0%</span>
              <span>100%</span>
            </div>

            <div className="wk-consistency-divider" />

            <div className="wk-consistency-info">
              <div>
                <small>CHECK-INS</small>
                <strong>{items.length}</strong>
              </div>

              <div>
                <small>LATEST</small>
                <strong>
                  {latest
                    ? new Date(
                        latest.recordedAt
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                      })
                    : "—"}
                </strong>
              </div>
            </div>

          </aside>
        </section>

        {/* HISTORY */}

        <section className="wk-card wk-history">

          <div className="wk-history-header">

            <div>
              <div className="wk-section-label">
                <span />
                CHECK-IN HISTORY
              </div>

              <h2>
                {items.length} recorded{" "}
                {items.length === 1
                  ? "entry"
                  : "entries"}
              </h2>
            </div>

            {patientId && (
              <div className="wk-history-patient">
                {patientName}
              </div>
            )}
          </div>

          {loading ? (
            <div className="wk-history-loading">
              <div className="wk-spinner" />
              <span>Loading check-in history...</span>
            </div>
          ) : items.length ? (
            <div className="wk-history-list">

              {items.map((item, index) => (
                <div
                  className="wk-history-item"
                  key={item._id}
                >

                  <div className="wk-history-date">
                    <strong>
                      {new Date(
                        item.recordedAt
                      ).toLocaleDateString("en-IN", {
                        day: "2-digit",
                      })}
                    </strong>

                    <span>
                      {new Date(
                        item.recordedAt
                      ).toLocaleDateString("en-IN", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="wk-history-line">
                    <span />
                  </div>

                  <div className="wk-history-content">

                    <div className="wk-history-top">

                      <div>
                        <strong>
                          Recovery check-in
                        </strong>

                        <span>
                          {index === 0
                            ? "Latest recorded update"
                            : "Previous recovery update"}
                        </span>
                      </div>

                      <div className="wk-history-completion">
                        {item.exerciseCompletion || 0}%
                      </div>

                    </div>

                    <div className="wk-history-stats">

                      <span>
                        <b>Pain</b>
                        {item.pain}/10
                      </span>

                      <span>
                        <b>Movement</b>
                        {item.movementStatus ||
                          "Not recorded"}
                      </span>

                      <span>
                        <b>Exercise</b>
                        {item.exerciseCompletion || 0}%
                      </span>

                    </div>

                    <p>
                      {item.notes || "No note recorded."}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="wk-history-empty">

              <div className="wk-empty-icon">
                ◷
              </div>

              <strong>
                No check-in history
              </strong>

              <span>
                Select a patient with recorded progress
                to see their recovery timeline.
              </span>

            </div>
          )}

        </section>
      </main>
    </PhysioLayout>
  );
}