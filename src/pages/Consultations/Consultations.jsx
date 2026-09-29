import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PhysioLayout from "../../components/PhysioLayout/PhysioLayout";
import physioPatientService from "../../services/physioPatientService";
import consultationService from "../../services/consultationService";
import "./Consultations.css";

const initialForm = {
  patient: "",
  title: "Follow-up consultation",
  date: "",
  time: "",
  type: "Video",
  notes: "",
};

const formatDate = (value) => {
  if (!value) return "Date TBD";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Date TBD";

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getPatientName = (patient) => {
  if (!patient) return "Patient";

  return `${patient.firstName || ""} ${patient.lastName || ""}`.trim() || "Patient";
};

const getInitials = (patient) => {
  const name = getPatientName(patient);

  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

export default function Consultations() {
  const [items, setItems] = useState([]);
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState(initialForm);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);
      setError("");

      const [consultationData, patientData] = await Promise.all([
        consultationService.physio(),
        physioPatientService.getPatients(),
      ]);

      setItems(consultationData?.consultations || []);
      setPatients(patientData?.patients || []);
    } catch (err) {
      setError(err?.message || "Unable to load consultation data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const [consultationData, patientData] = await Promise.all([
          consultationService.physio(),
          physioPatientService.getPatients(),
        ]);

        if (!mounted) return;

        setItems(consultationData?.consultations || []);
        setPatients(patientData?.patients || []);
      } catch (err) {
        if (mounted) {
          setError(err?.message || "Unable to load consultation data.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  const scheduledCount = useMemo(
    () => items.filter((item) => ["Requested", "Confirmed"].includes(item?.status)).length,
    [items]
  );

  const todayCount = useMemo(() => {
    const today = new Date();

    return items.filter((item) => {
      if (!item?.date) return false;

      const date = new Date(item.date);

      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    }).length;
  }, [items]);

  const handleChange = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) setError("");
    if (message) setMessage("");
  };

  const createConsultation = async () => {
    if (!form.patient || !form.date) {
      setError("Select a patient and consultation date.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setMessage("");

      const data = await consultationService.create(form);

      if (data?.consultation) {
        setItems((current) => [data.consultation, ...current]);
      }

      setMessage("Consultation scheduled successfully.");

      setForm({
        ...initialForm,
        patient: "",
      });
    } catch (err) {
      setError(err?.message || "Unable to schedule consultation.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <PhysioLayout>
      <main className="consult-page">

        {/* HERO */}
        <header className="consult-hero">
          <div className="consult-hero-content">
            <div className="consult-eyebrow">
              
              PHYSIOTHERAPIST PORTAL
            </div>

            <h1>Keep every care conversation on schedule.</h1>

            <p>
              Schedule follow-ups, manage upcoming consultations and keep
              patient conversations connected to their recovery journey.
            </p>
          </div>

          <Link to="/physio/patients" className="consult-hero-link">
            <span>View patients</span>
            <span>↗</span>
          </Link>
        </header>

        {/* STATS */}
        <section className="consult-stats">
          <article className="consult-stat-card">
            <div className="consult-stat-icon">
              01
            </div>

            <div>
              <span>Total consultations</span>
              <strong>{items.length}</strong>
              <small>Patient conversations</small>
            </div>
          </article>

          <article className="consult-stat-card consult-stat-featured">
            <div className="consult-stat-icon">
              02
            </div>

            <div>
              <span>Scheduled</span>
              <strong>{scheduledCount}</strong>
              <small>Upcoming consultations</small>
            </div>
          </article>

          <article className="consult-stat-card">
            <div className="consult-stat-icon">
              03
            </div>

            <div>
              <span>Today</span>
              <strong>{todayCount}</strong>
              <small>Consultations today</small>
            </div>
          </article>

          <article className="consult-stat-card">
            <div className="consult-stat-icon">
              04
            </div>

            <div>
              <span>Patients</span>
              <strong>{patients.length}</strong>
              <small>Available for scheduling</small>
            </div>
          </article>
        </section>

        {/* ERROR */}
        {error && (
          <div className="consult-alert consult-alert-error">
            <span className="consult-alert-icon">!</span>

            <div>
              <strong>Something needs attention</strong>
              <p>{error}</p>
            </div>

            <button type="button" onClick={() => setError("")}>
              ×
            </button>
          </div>
        )}

        {/* MAIN GRID */}
        <section className="consult-main-grid">

          {/* CREATE FORM */}
          <article className="consult-panel consult-form-panel">

            <div className="consult-panel-heading">
              <div>
                <span>NEW CONSULTATION</span>
                <h2>Schedule a follow-up</h2>
                <p>
                  Create a consultation and connect it directly to a patient.
                </p>
              </div>

              <div className="consult-panel-number">
                01
              </div>
            </div>

            <div className="consult-form">

              <div className="consult-field">
                <label>Patient</label>

                <select
                  value={form.patient}
                  onChange={(e) =>
                    handleChange("patient", e.target.value)
                  }
                  disabled={loading || saving}
                >
                  <option value="">Choose patient</option>

                  {patients.map((patient) => (
                    <option key={patient._id} value={patient._id}>
                      {getPatientName(patient)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="consult-field">
                <label>Consultation title</label>

                <input
                  type="text"
                  placeholder="Consultation title"
                  value={form.title}
                  onChange={(e) =>
                    handleChange("title", e.target.value)
                  }
                  disabled={saving}
                />
              </div>

              <div className="consult-form-row">

                <div className="consult-field">
                  <label>Date</label>

                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) =>
                      handleChange("date", e.target.value)
                    }
                    disabled={saving}
                  />
                </div>

                <div className="consult-field">
                  <label>Time</label>

                  <input
                    type="text"
                    placeholder="04:00 PM"
                    value={form.time}
                    onChange={(e) =>
                      handleChange("time", e.target.value)
                    }
                    disabled={saving}
                  />
                </div>

              </div>

              <div className="consult-field">
                <label>Consultation type</label>

                <select
                  value={form.type}
                  onChange={(e) =>
                    handleChange("type", e.target.value)
                  }
                  disabled={saving}
                >
                  <option value="Video">Video consultation</option>
                  <option value="Phone">Phone consultation</option>
                  <option value="In-person">
                    In-person consultation
                  </option>
                </select>
              </div>

              <div className="consult-field">
                <label>Notes</label>

                <textarea
                  placeholder="Add any preparation notes or consultation context..."
                  value={form.notes}
                  onChange={(e) =>
                    handleChange("notes", e.target.value)
                  }
                  disabled={saving}
                />
              </div>

              <button
                type="button"
                className="consult-primary-btn"
                onClick={createConsultation}
                disabled={saving || loading}
              >
                {saving ? (
                  <>
                    <span className="consult-spinner" />
                    Scheduling...
                  </>
                ) : (
                  <>
                    Schedule consultation
                    <span>→</span>
                  </>
                )}
              </button>

              {message && (
                <div className="consult-alert consult-alert-success">
                  <span>✓</span>
                  <p>{message}</p>
                </div>
              )}
            </div>
          </article>

          {/* UPCOMING OVERVIEW */}
          <aside className="consult-panel consult-overview">

            <div className="consult-panel-heading">
              <div>
                <span>UPCOMING</span>
                <h2>Care conversations</h2>
              </div>

              <div className="consult-panel-number">
                02
              </div>
            </div>

            <div className="consult-big-number">
              <strong>{scheduledCount}</strong>
              <span>scheduled consultations</span>
            </div>

            <div className="consult-overview-line">
              <div>
                <span>Today</span>
                <strong>{todayCount}</strong>
              </div>

              <div>
                <span>Patients</span>
                <strong>{patients.length}</strong>
              </div>
            </div>

            <div className="consult-overview-note">
              <span className="consult-note-icon">i</span>

              <p>
                Keep consultation details updated so every patient interaction
                remains connected to their recovery plan.
              </p>
            </div>

          </aside>
        </section>

        {/* CONSULTATION LIST */}
        <section className="consult-panel consult-schedule-panel">

          <div className="consult-panel-heading consult-schedule-heading">
            <div>
              <span>PATIENT CONVERSATIONS</span>
              <h2>Consultation schedule</h2>
              <p>
                Review scheduled and recorded consultations in one place.
              </p>
            </div>

            <div className="consult-record-count">
              {items.length} records
            </div>
          </div>

          {loading ? (
            <div className="consult-loading-list">
              {[1, 2, 3].map((item) => (
                <div className="consult-skeleton" key={item}>
                  <span />
                  <div>
                    <i />
                    <i />
                  </div>
                  <em />
                </div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="consult-empty">
              <div className="consult-empty-icon">
                +
              </div>

              <h3>No consultations scheduled</h3>

              <p>
                Create your first patient consultation using the form above.
              </p>
            </div>
          ) : (
            <div className="consult-list">

              {items.map((consultation) => (
                <article
                  className="consult-list-item"
                  key={consultation._id}
                >
                  <div className="consult-patient-avatar">
                    {getInitials(consultation.patient)}
                  </div>

                  <div className="consult-list-main">
                    <div className="consult-list-title">
                      <h3>
                        {consultation.title || "Consultation"}
                      </h3>

                      <span
                        className={`consult-status ${
                          ["Requested", "Confirmed"].includes(consultation.status)
                            ? "is-scheduled"
                            : "is-other"
                        }`}
                      >
                        <i />
                        {consultation.status || "Pending"}
                      </span>
                    </div>

                    <p>
                      {getPatientName(consultation.patient)}
                    </p>

                    <div className="consult-meta">
                      <span>
                        <b>DATE</b>
                        {formatDate(consultation.date)}
                      </span>

                      <span>
                        <b>TIME</b>
                        {consultation.time || "Time TBD"}
                      </span>

                      <span>
                        <b>TYPE</b>
                        {consultation.type || "Consultation"}
                      </span>
                    </div>
                  </div>

                  <div className="consult-list-action">
                    <span>VIEW</span>
                    <span>→</span>
                  </div>
                </article>
              ))}

            </div>
          )}
        </section>

      </main>
    </PhysioLayout>
  );
}