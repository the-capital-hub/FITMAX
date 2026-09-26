import { useState } from "react";
import "./PatientNotifications.css";

const initial = [
  {
    id: 1,
    type: "Exercise",
    title: "Today's exercise plan is ready",
    text: "You have 4 assigned exercises waiting in your daily plan.",
    time: "20 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "Consultation",
    title: "Your consultation is scheduled",
    text: "Movement check-in · Thursday at 04:00 PM.",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 3,
    type: "Rehab",
    title: "Your rehabilitation plan was updated",
    text: "Your care team updated your current phase and focus.",
    time: "2 days ago",
    unread: false,
  },
];

export default function PatientNotifications() {
  const [items, setItems] = useState(initial);

  const markAll = () =>
    setItems((current) => current.map((item) => ({ ...item, unread: false })));

  return (
    <div className="pn-page">
      <header className="pn-header">
        <div>
          <span className="pn-kicker">NOTIFICATIONS</span>
          <h1>
            Keep up with your <em>care journey.</em>
          </h1>
          <p>Important reminders and updates from your rehabilitation space.</p>
        </div>
        <button onClick={markAll}>Mark all as read</button>
      </header>
      <section className="pn-card">
        <div className="pn-card-head">
          <span className="pn-label">RECENT UPDATES</span>
          <span>{items.filter((item) => item.unread).length} unread</span>
        </div>
        {items.map((item) => (
          <article
            className={`pn-item ${item.unread ? "unread" : ""}`}
            key={item.id}
          >
            <div className="pn-icon">
              {item.type === "Exercise"
                ? "◇"
                : item.type === "Consultation"
                  ? "◷"
                  : "↗"}
            </div>
            <div>
              <span className="pn-type">{item.type}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <small>{item.time}</small>
            </div>
            {item.unread && <i />}
          </article>
        ))}
      </section>
    </div>
  );
}
