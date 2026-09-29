import { useEffect, useState } from "react";
import notificationService from "../../services/notificationService";
import "./PhysioNotifications.css";
import PhysioLayout from "../../components/PhysioLayout/PhysioLayout";

const iconFor = (type) =>
  ({
    Progress: "◒",
    Consultation: "◷",
    Exercise: "◇",
    Rehab: "↗",
    Assessment: "▣",
    Payment: "₹",
    System: "○",
  })[type] || "○";

const timeAgo = (value) => {
  if (!value) return "Recently";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Recently";
  }

  const seconds = Math.max(
    0,
    Math.floor((Date.now() - date.getTime()) / 1000)
  );

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} min ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hr ago`;
  }

  const days = Math.floor(hours / 24);

  if (days === 1) {
    return "Yesterday";
  }

  if (days < 7) {
    return `${days} days ago`;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
};

export default function PhysioNotifications() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await notificationService.getMy();

      setItems(data?.notifications || []);
    } catch (e) {
      setError(
        e.message || "Unable to load notifications."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const markRead = async (id) => {
    try {
      await notificationService.markRead(id);

      setItems((current) =>
        current.map((item) =>
          item._id === id
            ? { ...item, isRead: true }
            : item
        )
      );
    } catch (e) {
      setError(
        e.message || "Unable to update notification."
      );
    }
  };

  const markAll = async () => {
    try {
      setError("");

      await notificationService.markAllRead();

      setItems((current) =>
        current.map((item) => ({
          ...item,
          isRead: true,
        }))
      );
    } catch (e) {
      setError(
        e.message || "Unable to update notifications."
      );
    }
  };

  const unread = items.filter(
    (item) => !item.isRead
  ).length;

  return (
    <PhysioLayout>
    <main className="phn-page">
      {/* HEADER */}

      <header className="phn-head">
        <div className="phn-head-copy">
          <span className="phn-kicker">
            CARE WORKSPACE · UPDATES
          </span>

          <h1 style={{color:"white"}}>
            Stay close to the{" "}
            <em>care journey.</em>
          </h1>

          <p>
            Keep track of patient recovery activity,
            consultations and important care updates.
          </p>
        </div>

        <div className="phn-head-action">
          <div className="phn-unread-badge">
            <strong>{unread}</strong>
            <span>unread</span>
          </div>

          <button
            type="button"
            disabled={!unread}
            onClick={markAll}
            className="phn-mark-all"
          >
            <span>✓</span>
            Mark all as read
          </button>
        </div>
      </header>

      {/* ERROR */}

      {error && (
        <div className="phn-error">
          <div className="phn-error-icon">!</div>

          <div>
            <strong>
              Unable to update notifications
            </strong>

            <span>{error}</span>
          </div>

          <button
            type="button"
            onClick={load}
          >
            Retry
          </button>
        </div>
      )}

      {/* NOTIFICATIONS */}

      <section className="phn-card">
        <div className="phn-card-head">
          <div>
            <span className="phn-card-kicker">
              ACTIVITY FEED
            </span>

            <h2>Recent updates</h2>
          </div>

          <span className="phn-total">
            {items.length}{" "}
            {items.length === 1
              ? "notification"
              : "notifications"}
          </span>
        </div>

        {loading ? (
          <div className="phn-loading-list">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="phn-skeleton"
                key={item}
              >
                <div className="phn-skeleton-icon" />

                <div className="phn-skeleton-content">
                  <span />
                  <strong />
                  <small />
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="phn-empty">
            <div className="phn-empty-icon">
              ○
            </div>

            <strong>
              No new notifications
            </strong>

            <span>
              Patient activity and care updates
              will appear here.
            </span>
          </div>
        ) : (
          <div className="phn-list">
            {items.map((item, index) => {
              const unreadItem = !item.isRead;

              return (
                <article
                  key={item._id}
                  className={`phn-item ${
                    unreadItem ? "unread" : ""
                  }`}
                  style={{
                    "--notification-delay": `${
                      index * 45
                    }ms`,
                  }}
                  onClick={() =>
                    unreadItem &&
                    markRead(item._id)
                  }
                >
                  <div
                    className={`phn-icon ${
                      unreadItem ? "active" : ""
                    }`}
                  >
                    {iconFor(item.type)}
                  </div>

                  <div className="phn-content">
                    <div className="phn-meta">
                      <span>
                        {item.type || "System"}
                      </span>

                      <time>
                        {timeAgo(item.createdAt)}
                      </time>
                    </div>

                    <h2>
                      {item.title ||
                        "FitMax update"}
                    </h2>

                    <p>
                      {item.message ||
                        "You have a new care update."}
                    </p>
                  </div>

                  {unreadItem && (
                    <div
                      className="phn-unread-dot"
                      aria-label="Unread"
                    />
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
    </PhysioLayout>
  );
}