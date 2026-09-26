import { useState } from "react";
import "./PatientExercises.css";

const list = [
  {
    title: "Heel slides",
    category: "Mobility",
    detail: "2 sets · 12 reps",
    done: true,
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Knee extension",
    category: "Strength",
    detail: "3 sets · 10 reps",
    done: false,
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Sit to stand",
    category: "Control",
    detail: "2 sets · 8 reps",
    done: false,
    image:
      "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Supported balance",
    category: "Balance",
    detail: "3 × 30 seconds",
    done: false,
    image:
      "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export default function PatientExercises() {
  const [done, setDone] = useState(() => list.map((x) => x.done));
  const completed = done.filter(Boolean).length;

  return (
    <div className="pe-page">
      <header className="pe-header">
        <div>
          <span className="pe-kicker">EXERCISES</span>
          <h1>
            Today's movement <em>starts here.</em>
          </h1>
          <p>
            Follow your assigned exercises, complete what you can, and keep your
            care team informed.
          </p>
        </div>
        <div className="pe-count">
          <strong>
            {completed}/{list.length}
          </strong>
          <span>completed today</span>
        </div>
      </header>
      <section className="pe-summary">
        <div>
          <span className="pe-label">TODAY'S PLAN</span>
          <strong>
            {completed === list.length
              ? "All exercises complete"
              : `${list.length - completed} exercises remaining`}
          </strong>
          <p>Move at the pace recommended by your care team.</p>
        </div>
        <div className="pe-summary-bar">
          <div>
            <span>Daily completion</span>
            <b>{Math.round((completed / list.length) * 100)}%</b>
          </div>
          <i>
            <em style={{ width: `${(completed / list.length) * 100}%` }} />
          </i>
        </div>
      </section>
      <section className="pe-grid">
        {list.map((item, index) => (
          <article
            className={`pe-card ${done[index] ? "complete" : ""}`}
            key={item.title}
          >
            <div className="pe-image">
              <img src={item.image} alt="" />
              <span>{item.category}</span>
            </div>
            <div className="pe-body">
              <div className="pe-body-top">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </div>
                <button
                  onClick={() =>
                    setDone((current) =>
                      current.map((value, i) => (i === index ? !value : value)),
                    )
                  }
                >
                  {done[index] ? "✓" : "+"}
                </button>
              </div>
              <div className="pe-status">
                {done[index] ? "Completed today" : "Ready for today"}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
