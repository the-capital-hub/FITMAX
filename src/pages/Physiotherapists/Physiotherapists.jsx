import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import adminService from "../../services/adminService";
import "./Physiotherapists.css";
import "../fitmax-premium.css";

function Physiotherapists() {
  const [physios, setPhysios] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const loadPhysios = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await adminService.getPhysiotherapists();

        if (!mounted) return;

        setPhysios(data?.physiotherapists || []);

        setStats(
          data?.stats || {
            total: 0,
            active: 0,
            inactive: 0,
          }
        );
      } catch (err) {
        if (mounted) {
          setError(
            err?.message || "Unable to load physiotherapists"
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadPhysios();

    return () => {
      mounted = false;
    };
  }, []);

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
      <main className="physios-page">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <header className="physios-header">
          <div className="physios-header-copy">
            <div className="physios-eyebrow">
              <span />
              FITMAX ADMIN
            </div>

            <h1>Physiotherapists</h1>

            <p>
              Manage registered physiotherapists and monitor
              account activity across the FitMax platform.
            </p>
          </div>

          <div className="physios-header-meta">
            <span className="physios-live-dot" />
            <span>Database connected</span>
          </div>
        </header>


        {/* =====================================================
            STAT CARDS
        ====================================================== */}

        <section className="physios-stats">

          <article className="physio-stat-card">
            <div className="physio-stat-top">
              <span>Total Physios</span>
              <span className="physio-stat-icon">01</span>
            </div>

            <strong>{stats.total}</strong>

            <small>
              Registered physiotherapists
            </small>
          </article>


          <article className="physio-stat-card physio-stat-active">
            <div className="physio-stat-top">
              <span>Active</span>
              <span className="physio-stat-icon">02</span>
            </div>

            <strong>{stats.active}</strong>

            <small>
              Currently active accounts
            </small>
          </article>


          <article className="physio-stat-card">
            <div className="physio-stat-top">
              <span>Inactive</span>
              <span className="physio-stat-icon">03</span>
            </div>

            <strong>{stats.inactive}</strong>

            <small>
              Inactive accounts
            </small>
          </article>


          <article className="physio-stat-card">
            <div className="physio-stat-top">
              <span>Loaded Records</span>
              <span className="physio-stat-icon">04</span>
            </div>

            <strong>{physios.length}</strong>

            <small>
              Current database records
            </small>
          </article>

        </section>


        {/* =====================================================
            ERROR
        ====================================================== */}

        {error && (
          <div className="physios-error">
            <div className="physios-error-icon">!</div>

            <div>
              <strong>Unable to load records</strong>
              <p>{error}</p>
            </div>
          </div>
        )}


        {/* =====================================================
            MAIN TABLE PANEL
        ====================================================== */}

        <section className="physios-panel">

          <div className="physios-panel-header">

            <div>
              <span className="physios-panel-label">
                PROFESSIONAL DIRECTORY
              </span>

              <h2>
                Physiotherapist records
              </h2>

              <p>
                Live registered physiotherapist data
                from the FitMax database.
              </p>
            </div>

            <div className="physios-record-count">
              <strong>{physios.length}</strong>
              <span>records loaded</span>
            </div>

          </div>


          {/* =====================================================
              TABLE
          ====================================================== */}

          <div className="physios-table-wrap">

            <table className="physios-table">

              <thead>
                <tr>
                  <th>Physiotherapist</th>
                  <th>Email</th>
                  <th>Specialty / Profession</th>
                  <th>Status</th>
                  <th>Joined</th>
                </tr>
              </thead>


              <tbody>

                {/* LOADING */}

                {loading ? (
                  <>
                    {[1, 2, 3, 4].map((item) => (
                      <tr
                        className="physios-skeleton-row"
                        key={item}
                      >
                        <td>
                          <div className="physios-skeleton name" />
                        </td>

                        <td>
                          <div className="physios-skeleton" />
                        </td>

                        <td>
                          <div className="physios-skeleton short" />
                        </td>

                        <td>
                          <div className="physios-skeleton status" />
                        </td>

                        <td>
                          <div className="physios-skeleton date" />
                        </td>
                      </tr>
                    ))}
                  </>
                ) : physios.length === 0 ? (

                  /* EMPTY */

                  <tr>
                    <td
                      colSpan="5"
                      className="physios-empty"
                    >
                      <div className="physios-empty-icon">
                        +
                      </div>

                      <strong>
                        No physiotherapists found
                      </strong>

                      <span>
                        There are currently no registered
                        physiotherapists in the database.
                      </span>
                    </td>
                  </tr>

                ) : (

                  /* DATA */

                  physios.map((physio) => (
                    <tr key={physio.id}>

                      <td>
                        <div className="physios-person">

                          <div className="physios-avatar">
                            {physio.name
                              ?.split(" ")
                              .map((part) => part[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase() || "P"}
                          </div>

                          <div>
                            <strong>
                              {physio.name || "Unknown"}
                            </strong>

                            <span>
                              Physiotherapist
                            </span>
                          </div>

                        </div>
                      </td>


                      <td>
                        <span className="physios-email">
                          {physio.email || "—"}
                        </span>
                      </td>


                      <td>
                        <span className="physios-profession">
                          {physio.profession || "Not specified"}
                        </span>
                      </td>


                      <td>
                        <span
                          className={`physios-status ${
                            physio.isActive
                              ? "is-active"
                              : "is-inactive"
                          }`}
                        >
                          <i />

                          {physio.isActive
                            ? "Active"
                            : "Inactive"}
                        </span>
                      </td>


                      <td>
                        <span className="physios-date">
                          {formatDate(physio.createdAt)}
                        </span>
                      </td>

                    </tr>
                  ))

                )}

              </tbody>

            </table>

          </div>

        </section>

      </main>
    </AdminLayout>
  );
}

export default Physiotherapists;