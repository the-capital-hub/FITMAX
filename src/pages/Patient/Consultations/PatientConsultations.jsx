import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import consultationService from "../../../services/consultationService";
import "./PatientConsultations.css";
import FitMaxMark from "../../../components/FITMaxMark/FItMaxtMark";

export default function PatientConsultations() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadConsultations = async () => {
      try {
        setLoading(true);
        setError("");

        const data =
          await consultationService.getMyConsultations();

        console.log(
          "PATIENT CONSULTATIONS API RESPONSE:",
          data
        );

        if (!mounted) return;

        setItems(
          Array.isArray(data?.consultations)
            ? data.consultations
            : []
        );
      } catch (err) {
        console.error(
          "Patient consultations error:",
          err
        );

        if (!mounted) return;

        setError(
          err?.message ||
            "Unable to load consultations."
        );
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadConsultations();

    return () => {
      mounted = false;
    };
  }, []);

  const formatDate = (date) => {
    if (!date) return "Date TBD";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Date TBD";
    }

    return parsedDate.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  const formatPhysio = (physio) => {
    if (!physio) {
      return "FitMax Care Team";
    }

    const name = `${physio.firstName || ""} ${
      physio.lastName || ""
    }`.trim();

    return name || "FitMax Care Team";
  };

  const getStatusClass = (status) => {
    const value = String(
      status || "Pending"
    ).toLowerCase();

    if (
      value.includes("complete") ||
      value.includes("approved") ||
      value.includes("confirmed")
    ) {
      return "completed";
    }

    if (
      value.includes("cancel") ||
      value.includes("reject")
    ) {
      return "cancelled";
    }

    if (
      value.includes("progress") ||
      value.includes("scheduled")
    ) {
      return "scheduled";
    }

    return "pending";
  };

  return (
    <div className="pc-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="pc-header">
        <div className="pc-header-copy">
          <span className="pc-kicker">
            <FitMaxMark/>
            CONSULTATIONS
          </span>

          <h1>
            Time to talk about{" "}
            <em>your progress.</em>
          </h1>

          <p>
            Your scheduled conversations,
            physiotherapy guidance and care-team
            updates appear here.
          </p>
        </div>

        <Link
          to="/book-assessment"
          className="pc-button"
        >
          <span>Request another assessment</span>
          <strong>↗</strong>
        </Link>
      </header>

      {/* =====================================================
          ERROR
      ===================================================== */}

      {error && (
        <section className="pc-state-card pc-error">
          <div className="pc-state-icon">
            !
          </div>

          <div>
            <span className="pc-label">
              CONNECTION ISSUE
            </span>

            <h2>
              Unable to load consultations
            </h2>

            <p>{error}</p>
          </div>
        </section>
      )}

      {/* =====================================================
          MAIN CARD
      ===================================================== */}

      {!error && (
        <section className="pc-card">

          <div className="pc-card-header">
            <div>
              <span className="pc-label">
                CONSULTATION SCHEDULE
              </span>

              <h2>
                Your care conversations
              </h2>
            </div>

            {!loading && items.length > 0 && (
              <span className="pc-count">
                {items.length}{" "}
                {items.length === 1
                  ? "consultation"
                  : "consultations"}
              </span>
            )}
          </div>

          {/* =================================================
              LOADING
          ================================================= */}

          {loading ? (
            <div className="pc-loading">
              <div className="pc-loader" />

              <div>
                <strong>
                  Loading your consultations
                </strong>

                <p>
                  Preparing your care schedule...
                </p>
              </div>
            </div>
          ) : items.length > 0 ? (

            /* =================================================
               CONSULTATION LIST
            ================================================= */

            <div className="pc-list">
              {items.map(
                (consultation, index) => {
                  const status =
                    consultation.status ||
                    "Pending";

                  return (
                    <article
                      className="pc-consultation"
                      key={consultation._id}
                      style={{
                        "--pc-delay": `${index * 80}ms`,
                      }}
                    >

                      {/* DATE */}
                      <div className="pc-date">
                        <span>
                          {formatDate(
                            consultation.date
                          )}
                        </span>

                        <div className="pc-date-line" />
                      </div>

                      {/* CONTENT */}
                      <div className="pc-consultation-main">

                        <div className="pc-consultation-top">
                          <div className="pc-type">
                            <span className="pc-type-icon">
                              ◷
                            </span>

                            <span>
                              {consultation.type ||
                                "Online"}
                            </span>
                          </div>

                          <span
                            className={`pc-status ${getStatusClass(
                              status
                            )}`}
                          >
                            <i />

                            {status}
                          </span>
                        </div>

                        <h3>
                          {consultation.title ||
                            "Physiotherapy Consultation"}
                        </h3>

                        <div className="pc-meta">

                          <span>
                            <b>TIME</b>
                            {consultation.time ||
                              "Time TBD"}
                          </span>

                          <span>
                            <b>PHYSIOTHERAPIST</b>
                            {formatPhysio(
                              consultation.physio
                            )}
                          </span>

                        </div>

                      </div>

                      {/* ARROW */}
                      <div className="pc-arrow">
                        ↗
                      </div>
                    </article>
                  );
                }
              )}
            </div>

          ) : (

            /* =================================================
               EMPTY STATE
            ================================================= */

            <div className="pc-empty">

              <div className="pc-empty-icon">
                ◷
              </div>

              <span className="pc-label">
                YOUR CARE SCHEDULE
              </span>

              <h3>
                No consultations scheduled yet
              </h3>

              <p>
                Your upcoming physiotherapy
                conversations will appear here
                once a consultation is booked.
              </p>

              <Link
                to="/book-assessment"
                className="pc-empty-button"
              >
                Book an assessment
                <strong>↗</strong>
              </Link>

            </div>
          )}
        </section>
      )}

      {/* =====================================================
          CARE NOTE
      ===================================================== */}

      {!loading && !error && (
        <section className="pc-care-note">

          <div className="pc-care-mark">
            FM
          </div>

          <div>
            <span>
              FITMAX CARE
            </span>

            <p>
              Every consultation is part of your
              wider recovery journey. Your
              physiotherapist uses these
              conversations to understand progress,
              answer questions and guide your next
              steps.
            </p>
          </div>

        </section>
      )}
    </div>
  );
}