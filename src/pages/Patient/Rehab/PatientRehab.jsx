import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rehabPlanService from "../../../services/rehabPlanService";
import "./PatientRehab.css";
import FitMaxMark from "../../../components/FITMaxMark/FItMaxtMark";

export default function PatientRehab() {
  const [rehabPlan, setRehabPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRehabPlan = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await rehabPlanService.getMyRehabPlan();

        setRehabPlan(data.rehabPlan);
      } catch (err) {
        console.error("Rehab plan loading error:", err);
        setError(err.message || "Unable to load your rehab plan.");
      } finally {
        setLoading(false);
      }
    };

    loadRehabPlan();
  }, []);

  if (loading) {
    return (
      <div className="pr-page">
        <div className="pr-card">
          <p>Loading your rehab plan...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pr-page">
        <div className="pr-card">
          
          <span className="pr-label">
            
            REHAB PLAN</span>
          <h2>No rehab plan yet</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const currentPhase =
    rehabPlan?.phases?.find(
      (phase) => Number(phase.no) === Number(rehabPlan.currentPhase)
    ) || rehabPlan?.phases?.[0];

  return (
    <div className="pr-page">
      <header className="pr-header">
        <div>
          <span className="pr-kicker">
            <FitMaxMark/>
            REHAB PLAN</span>

          <h1>
            Your plan is built around <em>your life.</em>
          </h1>

          <p>
            A structured rehabilitation path that can evolve with your progress.
          </p>
        </div>

        <span className="pr-active">
          {rehabPlan.status || "ACTIVE PLAN"}
        </span>
      </header>

      <section className="pr-overview">
        <div>
          <span className="pr-label">CURRENT PHASE</span>

          <strong>
            {String(rehabPlan.currentPhase || 1).padStart(2, "0")}
          </strong>

          <h2>
            {currentPhase?.title || "Recovery phase"}
          </h2>

          <p>
            {currentPhase?.description ||
              "Your physiotherapy team will guide you through this phase."}
          </p>
        </div>

        <div className="pr-overview-progress">
          <span>PHASE PROGRESS</span>

          <strong>{rehabPlan.phaseProgress || 0}%</strong>

          <div>
            <i
              style={{
                width: `${rehabPlan.phaseProgress || 0}%`,
              }}
            />
          </div>

          <small>
            {rehabPlan.nextReviewDate
              ? `Next review · ${new Date(
                  rehabPlan.nextReviewDate
                ).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}`
              : "Next review will be scheduled by your care team."}
          </small>
        </div>
      </section>

      <section className="pr-card">
        <div className="pr-card-head">
          <div>
            <span className="pr-label">YOUR RECOVERY PATH</span>

            <h2>Where you are in the journey.</h2>
          </div>
        </div>

        <div className="pr-phases">
          {rehabPlan.phases?.map((phase) => (
            <article
              className={
                phase.status === "Current"
                  ? "active"
                  : phase.status === "Completed"
                    ? "done"
                    : ""
              }
              key={phase.no}
            >
              <b>{String(phase.no).padStart(2, "0")}</b>

              <span>
                {phase.status === "Completed"
                  ? "Completed"
                  : phase.status === "Current"
                    ? "Current phase"
                    : "Upcoming"}
              </span>

              <h3>{phase.title}</h3>

              <p>{phase.description}</p>

              {phase.progress > 0 && (
                <small>{phase.progress}% complete</small>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="pr-bottom">
        <div className="pr-card">
          <span className="pr-label">THIS WEEK</span>

          <h2>Consistency matters.</h2>

          <p>
            {rehabPlan.weeklyFocus ||
              "Complete your planned sessions and note how your body feels. Your care team can use this information to guide the next step."}
          </p>

          <Link to="/patient/exercises">
            Open exercise plan ↗
          </Link>
        </div>

        <div className="pr-card pr-care">
          <span className="pr-label">CARE TEAM</span>

          <h2>
            {rehabPlan.physio
              ? `${rehabPlan.physio.firstName || ""} ${
                  rehabPlan.physio.lastName || ""
                }`.trim()
              : "FitMax Care Team"}
          </h2>

          <p>
            Your rehabilitation plan is reviewed and adjusted as your recovery
            develops.
          </p>

          <Link to="/patient/consultations">
            View consultations ↗
          </Link>
        </div>
      </section>
    </div>
  );
}