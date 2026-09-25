import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./BookAssessment.css";
import "../fitmax-premium.css";


const goals = [
  { title: "Move without pain", text: "Pain, stiffness or reduced mobility", icon: "01" },
  { title: "Recover from injury", text: "Sports, accident or everyday injuries", icon: "02" },
  { title: "Rebuild after surgery", text: "A structured return to movement", icon: "03" },
  { title: "Get stronger", text: "Strength, balance and confidence", icon: "04" },
];

export default function BookAssessment() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "" });
  const [focus, setFocus] = useState("");

  const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.goal) {
      setFocus("Please complete the details and choose a recovery goal.");
      return;
    }
    sessionStorage.setItem("fitmaxAssessment", JSON.stringify(form));
    navigate("/patient-intake");
  };

  return (
    <div className="p2-page">
      <Navbar />
      <main className="p2-book">
        <section className="p2-book-hero">
          <div className="p2-book-hero-copy">
            <span className="p2-kicker">START YOUR RECOVERY</span>
            <h1>Let’s build your next step around <em>you.</em></h1>
            <p>
              Begin with a focused assessment. Tell us where you are today,
              what has changed, and what getting better would mean for you.
            </p>
            <div className="p2-hero-links">
              <a href="#assessment">Begin assessment <span>↓</span></a>
              <Link to="/how-it-works">See how FitMax works ↗</Link>
            </div>
          </div>
          <div className="p2-book-hero-art">
            <img
              src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Physiotherapy session"
            />
            <div className="p2-float-card p2-float-top">
              <span>YOUR RECOVERY</span>
              <strong>Starts with understanding.</strong>
            </div>
            <div className="p2-float-card p2-float-bottom">
              <b>01</b>
              <span>Assessment → Plan → Progress</span>
            </div>
          </div>
        </section>

        <section className="p2-book-intro" id="assessment">
          <div className="p2-section-number">01</div>
          <div>
            <span className="p2-kicker">A BETTER START</span>
            <h2>Your first conversation should feel <em>personal.</em></h2>
          </div>
          <p>
            There is no one recovery path for everyone. Your answers help
            shape the questions, guidance and next steps around your situation.
          </p>
        </section>

        <section className="p2-assessment-panel">
          <div className="p2-form-side">
            <div className="p2-progress-line">
              <span>01</span><i></i><span>02</span><i></i><span>03</span>
            </div>
            <span className="p2-kicker">LET’S START WITH YOU</span>
            <h2>Tell us who we’re speaking with.</h2>
            <p className="p2-form-sub">A few basics first. You can share the deeper details on the next step.</p>

            <form onSubmit={submit}>
              <label>
                Your name
                <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" />
              </label>
              <div className="p2-two-inputs">
                <label>Email<input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></label>
                <label>Phone<input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91" /></label>
              </div>

              <div className="p2-goal-heading">
                <span>What would you like to work towards?</span>
                <small>Select one</small>
              </div>
              <div className="p2-goals">
                {goals.map((goal) => (
                  <button
                    type="button"
                    key={goal.title}
                    className={form.goal === goal.title ? "p2-goal active" : "p2-goal"}
                    onClick={() => update("goal", goal.title)}
                  >
                    <b>{goal.icon}</b>
                    <span><strong>{goal.title}</strong><small>{goal.text}</small></span>
                    <i>↗</i>
                  </button>
                ))}
              </div>

              {focus && <div className="p2-form-message">{focus}</div>}
              <button className="p2-main-button" type="submit">Continue to your intake <span>↗</span></button>
            </form>
          </div>

          <aside className="p2-side-note">
            <div className="p2-side-image">
              <img src="https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Patient receiving physiotherapy" />
            </div>
            <div className="p2-side-copy">
              <span>WHY WE ASK</span>
              <h3>Recovery is a journey, not a checkbox.</h3>
              <p>We want to understand the person behind the condition, not only the symptom.</p>
            </div>
          </aside>
        </section>

        <section className="p2-trust-strip">
          <span>FITMAX CARE JOURNEY</span>
          <strong>Understand</strong><i>→</i><strong>Personalize</strong><i>→</i><strong>Rehabilitate</strong><i>→</i><strong>Return to life</strong>
        </section>
      </main>
      <Footer />
    </div>
  );
}
