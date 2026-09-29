import { useEffect, useMemo, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import adminService from "../../services/adminService";

import "./Patients.css";
import "../fitmax-premium.css";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    let mounted = true;

    const loadPatients = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await adminService.getPatients();

        if (!mounted) return;

        setPatients(data?.patients || []);

        setStats(
          data?.stats || {
            total: 0,
            active: 0,
            inactive: 0,
          }
        );
      } catch (err) {
        if (!mounted) return;

        setError(
          err.message || "Unable to load patient records."
        );
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
  }, []);

  const filteredPatients = useMemo(() => {
    const query = search.trim().toLowerCase();

    return patients.filter((patient) => {
      const matchesSearch =
        !query ||
        patient.name?.toLowerCase().includes(query) ||
        patient.email?.toLowerCase().includes(query) ||
        patient.profession?.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active" && patient.isActive) ||
        (statusFilter === "inactive" && !patient.isActive);

      return matchesSearch && matchesStatus;
    });
  }, [patients, search, statusFilter]);

  const getInitials = (name = "") => {
    const parts = name.trim().split(" ").filter(Boolean);

    if (!parts.length) return "P";

    return parts
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
  };

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <AdminLayout>
      <main className="patients-page">

        {/* HERO */}

        <header className="patients-header">
          <div className="patients-header-glow" />

          <div className="patients-header-copy">
            <div className="patients-eyebrow">
              <span className="patients-eyebrow-line" />
              FITMAX ADMIN
              <span className="patients-eyebrow-dot">•</span>
              PATIENTS
            </div>

            <h1>
              Patient
              <span> records.</span>
            </h1>

            <p>
              Manage registered patients, account status and
              profile information from one focused workspace.
            </p>
          </div>

          <div className="patients-live-card">
            <div className="patients-live-icon">
              <span />
            </div>

            <div>
              <strong>Live database</strong>
              <small>Patient records synced</small>
            </div>

            <div className="patients-live-arrow">↗</div>
          </div>
        </header>


        {/* STATS */}

        <section className="patients-stats">

          <article className="patients-stat patients-stat-primary">
            <div className="patients-stat-top">
              <span>Total patients</span>
              <div className="patients-stat-icon">◎</div>
            </div>

            <strong>{stats.total}</strong>

            <div className="patients-stat-bottom">
              <span>Registered records</span>
              <span className="patients-stat-mark">01</span>
            </div>
          </article>


          <article className="patients-stat">
            <div className="patients-stat-top">
              <span>Active</span>
              <div className="patients-stat-icon blue">✓</div>
            </div>

            <strong>{stats.active}</strong>

            <div className="patients-stat-bottom">
              <span>Active accounts</span>
              <span className="patients-stat-mark">02</span>
            </div>
          </article>


          <article className="patients-stat">
            <div className="patients-stat-top">
              <span>Inactive</span>
              <div className="patients-stat-icon muted">○</div>
            </div>

            <strong>{stats.inactive}</strong>

            <div className="patients-stat-bottom">
              <span>Inactive accounts</span>
              <span className="patients-stat-mark">03</span>
            </div>
          </article>


          <article className="patients-stat patients-stat-dark">
            <div className="patients-stat-top">
              <span>Loaded records</span>
              <div className="patients-stat-icon dark">↗</div>
            </div>

            <strong>{patients.length}</strong>

            <div className="patients-stat-bottom">
              <span>Current database view</span>
              <span className="patients-stat-mark">04</span>
            </div>
          </article>

        </section>


        {/* DIRECTORY */}

        <section className="patients-panel">

          <div className="patients-panel-top">

            <div className="patients-panel-heading">
              <div className="patients-panel-kicker">
                <span />
                PATIENT DIRECTORY
              </div>

              <h2>Registered patients</h2>

              <p>
                Browse and manage the patients currently available
                in FitMax.
              </p>
            </div>

            <div className="patients-result-count">
              <strong>{filteredPatients.length}</strong>
              <span>records shown</span>
            </div>

          </div>


          {/* CONTROLS */}

          <div className="patients-controls">

            <div className="patients-search">

              <span className="patients-search-icon">
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, email or profession"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="patients-clear"
                >
                  ×
                </button>
              )}

            </div>


            <div className="patients-filters">

              <span className="patients-filter-label">
                STATUS
              </span>

              <div className="patients-filter-buttons">

                <button
                  type="button"
                  className={
                    statusFilter === "all"
                      ? "active"
                      : ""
                  }
                  onClick={() => setStatusFilter("all")}
                >
                  All
                </button>

                <button
                  type="button"
                  className={
                    statusFilter === "active"
                      ? "active"
                      : ""
                  }
                  onClick={() => setStatusFilter("active")}
                >
                  Active
                </button>

                <button
                  type="button"
                  className={
                    statusFilter === "inactive"
                      ? "active"
                      : ""
                  }
                  onClick={() => setStatusFilter("inactive")}
                >
                  Inactive
                </button>

              </div>
            </div>

          </div>


          {/* ERROR */}

          {error && (
            <div className="patients-error">

              <div className="patients-error-icon">
                !
              </div>

              <div>
                <strong>Unable to load patients</strong>
                <span>{error}</span>
              </div>

            </div>
          )}


          {/* DESKTOP TABLE */}

          <div className="patients-table-wrap">

            <table className="patients-table">

              <thead>
                <tr>
                  <th>
                    <span>Patient</span>
                  </th>

                  <th>
                    <span>Email</span>
                  </th>

                  <th>
                    <span>Profession</span>
                  </th>

                  <th>
                    <span>Status</span>
                  </th>

                  <th>
                    <span>Joined</span>
                  </th>
                </tr>
              </thead>


              <tbody>

                {loading ? (
                  <>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <tr
                        className="patients-loading-row"
                        key={item}
                      >
                        <td>
                          <div className="patient-loading-person">
                            <div className="patients-skeleton avatar" />

                            <div className="patient-loading-lines">
                              <div className="patients-skeleton name" />
                              <div className="patients-skeleton mini" />
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="patients-skeleton" />
                        </td>

                        <td>
                          <div className="patients-skeleton short" />
                        </td>

                        <td>
                          <div className="patients-skeleton status" />
                        </td>

                        <td>
                          <div className="patients-skeleton short" />
                        </td>
                      </tr>
                    ))}
                  </>
                ) : filteredPatients.length === 0 ? (

                  <tr>
                    <td
                      colSpan="5"
                      className="patients-empty-cell"
                    >
                      <div className="patients-empty">

                        <div className="patients-empty-icon">
                          ◎
                        </div>

                        <strong>
                          No patients found
                        </strong>

                        <span>
                          Try changing your search or status filter.
                        </span>

                        {(search || statusFilter !== "all") && (
                          <button
                            type="button"
                            onClick={() => {
                              setSearch("");
                              setStatusFilter("all");
                            }}
                          >
                            Clear filters
                          </button>
                        )}

                      </div>
                    </td>
                  </tr>

                ) : (

                  filteredPatients.map((patient, index) => (

                    <tr
                      key={patient.id || patient._id}
                      className="patients-row"
                      style={{
                        "--row-delay": `${index * 45}ms`,
                      }}
                    >

                      <td>

                        <div className="patient-identity">

                          <div className="patient-avatar">
                            {getInitials(patient.name)}
                          </div>

                          <div className="patient-identity-copy">

                            <strong>
                              {patient.name || "Unnamed patient"}
                            </strong>

                            <span>
                              Patient account
                            </span>

                          </div>

                        </div>

                      </td>


                      <td>
                        <span className="patient-email">
                          {patient.email || "—"}
                        </span>
                      </td>


                      <td>
                        <span className="patient-profession">
                          {patient.profession || "Not recorded"}
                        </span>
                      </td>


                      <td>

                        <span
                          className={
                            patient.isActive
                              ? "patient-status active"
                              : "patient-status inactive"
                          }
                        >
                          <i />
                          {patient.isActive
                            ? "Active"
                            : "Inactive"}
                        </span>

                      </td>


                      <td>
                        <span className="patient-date">
                          {formatDate(patient.createdAt)}
                        </span>
                      </td>

                    </tr>

                  ))
                )}

              </tbody>

            </table>

          </div>


          {/* MOBILE */}

          {!loading &&
            filteredPatients.length > 0 && (

              <div className="patients-mobile-list">

                {filteredPatients.map((patient, index) => (

                  <article
                    className="patient-mobile-card"
                    key={patient.id || patient._id}
                    style={{
                      "--row-delay": `${index * 45}ms`,
                    }}
                  >

                    <div className="patient-mobile-top">

                      <div className="patient-identity">

                        <div className="patient-avatar">
                          {getInitials(patient.name)}
                        </div>

                        <div className="patient-identity-copy">

                          <strong>
                            {patient.name || "Unnamed patient"}
                          </strong>

                          <span>
                            {patient.email || "No email"}
                          </span>

                        </div>

                      </div>


                      <span
                        className={
                          patient.isActive
                            ? "patient-status active"
                            : "patient-status inactive"
                        }
                      >
                        <i />
                        {patient.isActive
                          ? "Active"
                          : "Inactive"}
                      </span>

                    </div>


                    <div className="patient-mobile-details">

                      <div>
                        <span>Profession</span>

                        <strong>
                          {patient.profession || "Not recorded"}
                        </strong>
                      </div>


                      <div>
                        <span>Joined</span>

                        <strong>
                          {formatDate(patient.createdAt)}
                        </strong>
                      </div>

                    </div>

                  </article>

                ))}

              </div>

            )}

        </section>

      </main>
    </AdminLayout>
  );
}

export default Patients;