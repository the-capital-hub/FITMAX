import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhysioLayout from "../../components/PhysioLayout/PhysioLayout";
import physioService from "../../services/physioService";
import physioPatientService from "../../services/physioPatientService";
import "./PhysioDashboard.css";

export default function PhysioDashboard() {
  const [stats, setStats] = useState(null);
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadDashboard = async () => {
      try {
        const [dashboardData, patientData] = await Promise.all([
          physioService.dashboard(),
          physioPatientService.getPatients(),
        ]);

        if (!mounted) return;

        setStats(dashboardData?.stats || null);
        setPatients(patientData?.patients || []);
      } catch (e) {
        if (!mounted) return;
        setError(e?.message || "Unable to load dashboard data.");
      }
    };

    loadDashboard();

    return () => {
      mounted = false;
    };
  }, []);

  const statCards = [
    {
      title: "Active patients",
      value: stats?.activePatients ?? "—",
      label: "Patient accounts",
      number: "01",
      icon: "◎",
    },
    {
      title: "Pending assessments",
      value: stats?.pendingAssessments ?? "—",
      label: "Need review",
      number: "02",
      icon: "◷",
    },
    {
      title: "Plans in progress",
      value: stats?.activePlans ?? "—",
      label: "Active rehab plans",
      number: "03",
      icon: "↗",
    },
    {
      title: "Scheduled consultations",
      value: stats?.scheduledConsultations ?? "—",
      label: "Upcoming",
      number: "04",
      icon: "□",
    },
  ];

  return (
    <PhysioLayout>
      <main className="pd-page">

        {/* HERO */}

        <header className="pd-hero">
          <div className="pd-hero-glow" />

          <div className="pd-hero-content">
            <div className="pd-eyebrow">
              
              
              PHYSIOTHERAPIST PORTAL
            </div>

            <h1 style={{color:"white"}}>
              Good morning.
              <br />
              <em>Let’s keep recovery moving.</em>
            </h1>

            <p>
              Review patients, assessments and rehabilitation work
              from one focused care workspace.
            </p>
          </div>

          <div className="pd-actions">
            <Link
              to="/physio/patients"
              className="pd-primary-action"
            >
              View patients
              <span>↗</span>
            </Link>

            <Link
              to="/physio/consultations"
              className="pd-secondary-action"
            >
              Today’s schedule
              <span>→</span>
            </Link>
          </div>
        </header>


        {/* ERROR */}

        {error && (
          <div className="pd-error">
            <div className="pd-error-icon">!</div>

            <div>
              <strong>Dashboard unavailable</strong>
              <span>{error}</span>
            </div>
          </div>
        )}


        {/* STATS */}

        <section className="pd-stats">

          {statCards.map((item, index) => (
            <article
              className={`pd-stat ${
                index === 0 ? "pd-stat-featured" : ""
              }`}
              key={item.title}
              style={{
                "--stat-delay": `${index * 70}ms`,
              }}
            >
              <div className="pd-stat-top">
                <small>{item.title}</small>

                <div className="pd-stat-icon">
                  {item.icon}
                </div>
              </div>

              <strong>{item.value}</strong>

              <div className="pd-stat-bottom">
                <span>{item.label}</span>
                <b>{item.number}</b>
              </div>
            </article>
          ))}

        </section>


        {/* MAIN GRID */}

        <section className="pd-grid">

          {/* PATIENT OVERVIEW */}

          <article className="pd-card pd-patients">

            <div className="pd-head">

              <div>
                <div className="pd-section-label">
                  <span />
                  PATIENT OVERVIEW
                </div>

                <h2>Current patient list</h2>

                <p>
                  Your recently available patient accounts.
                </p>
              </div>

              <Link
                to="/physio/patients"
                className="pd-view-all"
              >
                View all
                <span>↗</span>
              </Link>

            </div>


            <div className="pd-patient-list">

              {patients.slice(0, 6).map((patient, index) => {

                const firstName =
                  patient.firstName || "";

                const lastName =
                  patient.lastName || "";

                const initials =
                  `${firstName?.[0] || ""}${lastName?.[0] || ""}`
                    .toUpperCase() || "P";

                return (
                  <div
                    className="pd-row"
                    key={patient._id}
                    style={{
                      "--row-delay": `${index * 45}ms`,
                    }}
                  >

                    <div className="pd-avatar">
                      {initials}
                    </div>

                    <div className="pd-patient-info">
                      <strong>
                        {firstName} {lastName}
                      </strong>

                      <span>
                        {patient.email || "No email available"}
                      </span>
                    </div>

                    <label className="pd-status">
                      <i />
                      Active
                    </label>

                    <Link
                      to={`/physio/patient?id=${patient._id}`}
                      className="pd-open"
                    >
                      Open
                      <span>↗</span>
                    </Link>

                  </div>
                );
              })}

              {!patients.length && (
                <div className="pd-empty">
                  <div className="pd-empty-icon">
                    ◎
                  </div>

                  <strong>
                    No patient accounts found
                  </strong>

                  <span>
                    Patient accounts will appear here when available.
                  </span>
                </div>
              )}

            </div>

          </article>


          {/* QUICK ACTIONS */}

          <aside className="pd-card pd-quick">

            <div className="pd-section-label">
              <span />
              QUICK ACTIONS
            </div>

            <h2>
              Keep care
              <br />
              <em>moving.</em>
            </h2>

            <p>
              Jump directly into the most common clinical
              workflows.
            </p>


            <div className="pd-quick-list">

              <Link to="/physio/assessment">
                <div className="pd-quick-icon">
                  ✓
                </div>

                <div>
                  <strong>Review assessments</strong>
                  <span>Check pending evaluations</span>
                </div>

                <b>↗</b>
              </Link>


              <Link to="/physio/rehab-plans">
                <div className="pd-quick-icon">
                  +
                </div>

                <div>
                  <strong>Create rehab plan</strong>
                  <span>Build a recovery program</span>
                </div>

                <b>↗</b>
              </Link>


              <Link to="/physio/exercises">
                <div className="pd-quick-icon">
                  ◇
                </div>

                <div>
                  <strong>Assign exercises</strong>
                  <span>Manage patient exercises</span>
                </div>

                <b>↗</b>
              </Link>


              <Link to="/physio/consultations">
                <div className="pd-quick-icon">
                  ◷
                </div>

                <div>
                  <strong>Schedule consultation</strong>
                  <span>Plan upcoming sessions</span>
                </div>

                <b>↗</b>
              </Link>

            </div>

          </aside>

        </section>

      </main>
    </PhysioLayout>
  );
}