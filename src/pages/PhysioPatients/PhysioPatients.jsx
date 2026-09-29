import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhysioLayout from "../../components/PhysioLayout/PhysioLayout";
import physioPatientService from "../../services/physioPatientService";
import "./PhysioPatients.css";

export default function PhysioPatients() {
  const [patients, setPatients] = useState([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [query, setQuery] = useState("");
  const navigate = useNavigate();
  const load = async () => {
    try {
      setLoading(true);
      setError("");
      const d = await physioPatientService.getPatients();
      setPatients(d.patients || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  const filtered = useMemo(
    () =>
      patients.filter((p) =>
        `${p.firstName} ${p.lastName} ${p.email}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [patients, query],
  );
  return (
    <PhysioLayout>
      <div className="physio-patients-page">
        <div className="physio-patients-heading">
          <div>
            <span className="physio-patients-eyebrow">CARE WORKSPACE</span>
            <h1>Patients</h1>
            <p>
              Review your patients and move from assessment to rehabilitation
              with the latest available records.
            </p>
          </div>
          <button className="physio-patients-primary-btn" onClick={load}>
            ↻ Refresh
          </button>
        </div>
        <div className="physio-patients-stats">
          <div className="physio-patients-stat-card">
            <span>TOTAL PATIENTS</span>
            <strong>{patients.length}</strong>
            <small>Active patient accounts</small>
          </div>
          <div className="physio-patients-stat-card">
            <span>VISIBLE RESULTS</span>
            <strong>{filtered.length}</strong>
            <small>Matching current search</small>
          </div>
          <div className="physio-patients-stat-card">
            <span>ACTIVE ACCOUNTS</span>
            <strong>{patients.filter((p) => p.isActive).length}</strong>
            <small>Currently enabled</small>
          </div>
          <div className="physio-patients-stat-card">
            <span>CARE WORKSPACE</span>
            <strong>Live</strong>
            <small>Connected to FitMax API</small>
          </div>
        </div>
        <section className="physio-patients-panel">
          <div className="physio-patients-panel-header">
            <div>
              <h2>Your patient list</h2>
              <p>Select a patient to open their care workspace.</p>
            </div>
            <input
              className="physio-patients-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search patient..."
            />
          </div>
          {loading ? (
            <div className="physio-patients-state">Loading patients...</div>
          ) : error ? (
            <div className="physio-patients-state error">
              {error}
              <button onClick={load}>Try again</button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="physio-patients-state">No patients found.</div>
          ) : (
            <div className="physio-patients-table-wrap">
              <table className="physio-patients-table">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Email</th>
                    <th>Account</th>
                    <th>Joined</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((p) => (
                    <tr
                      key={p._id}
                      onClick={() => navigate(`/physio/patient?id=${p._id}`)}
                    >
                      <td>
                        <div className="physio-patient-name">
                          <span className="physio-patient-avatar">
                            {p.firstName?.[0] || "P"}
                          </span>
                          <div>
                            <strong>
                              {p.firstName} {p.lastName}
                            </strong>
                            <small>Patient</small>
                          </div>
                        </div>
                      </td>
                      <td>{p.email}</td>
                      <td>
                        <span className="physio-patient-status active">
                          Active
                        </span>
                      </td>
                      <td>
                        {p.createdAt
                          ? new Date(p.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : "—"}
                      </td>
                      <td>
                        <button
                          className="physio-patient-view"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/physio/patient?id=${p._id}`);
                          }}
                        >
                          Open ↗
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </PhysioLayout>
  );
}
