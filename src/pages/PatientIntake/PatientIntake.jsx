import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import assessmentService from "../../services/assessmentService";

import "./PatientIntake.css";
import "../fitmax-premium.css";

const conditions = [
  "ACL / Knee",
  "Back",
  "Neck",
  "Shoulder",
  "Sports injury",
  "Accident recovery",
  "Post surgery",
  "Fracture",
  "Mobility",
];

const durations = [
  "Under 2 weeks",
  "2–6 weeks",
  "1–3 months",
  "3+ months",
  "Not sure",
];

const painLabels = {
  0: "No pain",
  1: "Very mild",
  2: "Very mild",
  3: "Mild",
  4: "Moderate",
  5: "Moderate",
  6: "Moderate",
  7: "High",
  8: "High",
  9: "Very high",
  10: "Severe",
};

export default function PatientIntake() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    condition: "",
    duration: "",
    pain: 5,
    surgery: "",
    notes: "",
    mainGoal: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const set = (key, value) => {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));

    setError("");
  };

  const submit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.condition) {
      setError("Please select what you are recovering from.");
      return;
    }

    if (!form.duration) {
      setError("Please select how long this has been affecting you.");
      return;
    }

    try {
      setSubmitting(true);

      const data = await assessmentService.createAssessment({
        ...form,
        pain: Number(form.pain),
      });

      if (!data?.success) {
        throw new Error(
          data?.message || "Unable to submit assessment."
        );
      }

      sessionStorage.setItem(
        "fitmaxIntake",
        JSON.stringify({
          ...form,
          assessmentId: data.assessment?._id || null,
        })
      );

      navigate("/consultation-booking");
    } catch (err) {
      console.error("Assessment submission error:", err);

      setError(
        err.message ||
          "Unable to submit your assessment. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p2-page">
      <Navbar />

      <main className="p2-intake">
        {/* HERO */}
        <section className="p2-intake-hero">
          <div className="p2-hero-copy">
            <span className="p2-kicker">02 / PATIENT INTAKE</span>

            <h1>
              The details behind the{" "}
              <em>recovery.</em>
            </h1>

            <p>
              Tell us what you are experiencing. Your answers help your
              physiotherapy team understand where you are starting from.
            </p>
          </div>

          <div className="p2-intake-hero-note">
            <span className="p2-note-number">01</span>

            <div>
              <b>YOUR STORY MATTERS</b>
              <span>
                Every recovery starts from a different place.
              </span>
            </div>
          </div>
        </section>

        {/* PROGRESS */}
        <div className="p2-intake-progress">
          <div className="p2-step active">
            <span>01</span>
            <strong>Assessment</strong>
          </div>

          <i />

          <div className="p2-step active">
            <span>02</span>
            <strong>Your story</strong>
          </div>

          <i />

          <div className="p2-step">
            <span>03</span>
            <strong>Booking</strong>
          </div>

          <i />

          <div className="p2-step">
            <span>04</span>
            <strong>Payment</strong>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="p2-error">
            <div className="p2-error-icon">!</div>

            <div>
              <strong>Something needs your attention</strong>
              <span>{error}</span>
            </div>
          </div>
        )}

        <form className="p2-intake-form" onSubmit={submit}>
          {/* CONDITION */}
          <section className="p2-question">
            <div className="p2-q-index">01</div>

            <div className="p2-q-body">
              <span className="p2-kicker">WHERE ARE YOU STARTING?</span>

              <h2>What are you recovering from?</h2>

              <p>
                Choose the option that best describes your current situation.
              </p>

              <div className="p2-condition-grid">
                {conditions.map((condition) => {
                  const active = form.condition === condition;

                  return (
                    <button
                      type="button"
                      key={condition}
                      className={
                        active
                          ? "p2-choice active"
                          : "p2-choice"
                      }
                      onClick={() => set("condition", condition)}
                    >
                      <span>{condition}</span>

                      <i>{active ? "✓" : "↗"}</i>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* DURATION */}
          <section className="p2-question">
            <div className="p2-q-index">02</div>

            <div className="p2-q-body">
              <span className="p2-kicker">YOUR TIMELINE</span>

              <h2>How long has this been affecting you?</h2>

              <p>
                This helps your care team understand the stage of your
                recovery.
              </p>

              <div className="p2-duration-row">
                {durations.map((duration) => {
                  const active = form.duration === duration;

                  return (
                    <button
                      type="button"
                      key={duration}
                      className={
                        active
                          ? "p2-duration active"
                          : "p2-duration"
                      }
                      onClick={() => set("duration", duration)}
                    >
                      <span>{duration}</span>

                      {active && <i>✓</i>}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PAIN */}
          <section className="p2-question p2-pain-question">
            <div className="p2-q-index">03</div>

            <div className="p2-q-body">
              <span className="p2-kicker">YOUR PAIN TODAY</span>

              <h2>Where would you place your pain right now?</h2>

              <p>
                Move across the scale. This is a starting point, not a
                diagnosis.
              </p>

              <div className="p2-pain-display">
                <div className="p2-pain-number">
                  <strong>{form.pain}</strong>

                  <span>/ 10</span>
                </div>

                <div className="p2-pain-status">
                  <span>Current level</span>
                  <strong>{painLabels[form.pain]}</strong>
                </div>
              </div>

              <div className="p2-slider-wrap">
                <input
                  className="p2-range"
                  type="range"
                  min="0"
                  max="10"
                  value={form.pain}
                  style={{
                    "--pain-progress": `${form.pain * 10}%`,
                  }}
                  onChange={(e) =>
                    set("pain", Number(e.target.value))
                  }
                />

                <div className="p2-range-labels">
                  <span>0 · Comfortable</span>
                  <span>10 · Most intense</span>
                </div>
              </div>
            </div>
          </section>

          {/* SURGERY */}
          <section className="p2-question">
            <div className="p2-q-index">04</div>

            <div className="p2-q-body">
              <span className="p2-kicker">TREATMENT HISTORY</span>

              <h2>Have you had surgery related to this?</h2>

              <p>
                If applicable, share a short description. If not, you can
                leave this blank.
              </p>

              <textarea
                className="p2-large-textarea"
                value={form.surgery}
                onChange={(e) => set("surgery", e.target.value)}
                placeholder="For example: ACL reconstruction in June 2026..."
              />
            </div>
          </section>

          {/* GOAL */}
          <section className="p2-question">
            <div className="p2-q-index">05</div>

            <div className="p2-q-body">
              <span className="p2-kicker">YOUR GOAL</span>

              <h2>What would you like to get back to?</h2>

              <p>
                Recovery is about more than pain. Tell us what matters most
                to you.
              </p>

              <input
                className="p2-text-input"
                type="text"
                value={form.mainGoal}
                onChange={(e) => set("mainGoal", e.target.value)}
                placeholder="For example: walking comfortably, returning to sport..."
              />
            </div>
          </section>

          {/* NOTES */}
          <section className="p2-question">
            <div className="p2-q-index">06</div>

            <div className="p2-q-body">
              <span className="p2-kicker">THE CONTEXT</span>

              <h2>Anything else your care team should know?</h2>

              <p>
                Previous treatment, symptoms, limitations or anything else
                that may help your physiotherapist understand your situation.
              </p>

              <textarea
                className="p2-large-textarea p2-notes"
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
                placeholder="Write a few words about your situation..."
              />

              <span className="p2-field-hint">
                You do not need to write everything. Just share what feels
                useful.
              </span>
            </div>
          </section>

          {/* ACTIONS */}
          <div className="p2-intake-actions">
            <button
              type="button"
              onClick={() => navigate("/book-assessment")}
              className="p2-back"
              disabled={submitting}
            >
              <span>←</span>
              Back
            </button>

            <button
              className="p2-main-button"
              type="submit"
              disabled={submitting}
            >
              <span>
                {submitting
                  ? "Submitting assessment..."
                  : "Continue to consultation"}
              </span>

              <strong>↗</strong>
            </button>
          </div>

          <div className="p2-privacy-note">
            <span>✓</span>

            <p>
              Your information is used to help your physiotherapy team
              understand your recovery needs and prepare for your
              consultation.
            </p>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}