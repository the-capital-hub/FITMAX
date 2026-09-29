import { useEffect, useMemo, useState } from "react";
import notificationService from "../../../services/notificationService";
import "./PatientNotifications.css";

const iconFor = (type) => {
  const icons = {
    Exercise: "◇",
    Consultation: "◷",
    Rehab: "↗",
    Progress: "◒",
    Assessment: "▣",
    Payment: "₹",
    System: "○",
  };

  return icons[type] || "○";
};

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

  if (days === 1) return "Yesterday";

  if (days < 7) {
    return `${days} days ago`;
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function PatientNotifications() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [markingAll, setMarkingAll] = useState(false);

  const loadNotifications = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await notificationService.getMy();

      setItems(
        Array.isArray(data?.notifications)
          ? data.notifications
          : []
      );
    } catch (err) {
      console.error(
        "Patient notifications error:",
        err
      );

      setError(
        err.message ||
          "Unable to load your notifications."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  const unread = useMemo(() => {
    return items.filter(
      (item) => !item.isRead
    ).length;
  }, [items]);

  const markRead = async (id) => {
    try {
      await notificationService.markRead(id);

      setItems((current) =>
        current.map((item) =>
          item._id === id
            ? {
                ...item,
                isRead: true,
              }
            : item
        )
      );
    } catch (err) {
      console.error(
        "Mark notification read error:",
        err
      );

      setError(
        err.message ||
          "Unable to mark notification as read."
      );
    }
  };

  const markAll = async () => {
    if (!unread || markingAll) return;

    try {
      setMarkingAll(true);
      setError("");

      await notificationService.markAllRead();

      setItems((current) =>
        current.map((item) => ({
          ...item,
          isRead: true,
        }))
      );
    } catch (err) {
      console.error(
        "Mark all notifications error:",
        err
      );

      setError(
        err.message ||
          "Unable to mark notifications as read."
      );
    } finally {
      setMarkingAll(false);
    }
  };

  return (
    <div className="pn-page">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="pn-header">
        <div className="pn-header-copy">
          <span className="pn-kicker">
            <i />
            YOUR CARE UPDATES
          </span>

          <h1>
            Keep up with your{" "}
            <em>care journey.</em>
          </h1>

          <p>
            Important reminders, recovery updates and
            messages from your FitMax care team.
          </p>
        </div>

        <div className="pn-header-action">
          <div className="pn-unread-count">
            <strong>{unread}</strong>
            <span>Unread</span>
          </div>

          <button
            type="button"
            className="pn-mark-all"
            onClick={markAll}
            disabled={!unread || markingAll}
          >
            {markingAll
              ? "Updating..."
              : "Mark all as read"}
          </button>
        </div>
      </header>

      {/* =====================================================
          ERROR
      ===================================================== */}
      {error && (
        <div className="pn-error">
          <span>!</span>

          <div>
            <strong>Something went wrong</strong>
            <p>{error}</p>
          </div>

          <button
            type="button"
            onClick={loadNotifications}
          >
            Retry
          </button>
        </div>
      )}

      {/* =====================================================
          NOTIFICATION CARD
      ===================================================== */}
      <section className="pn-card">
        <div className="pn-card-head">
          <div>
            <span className="pn-label">
              RECENT UPDATES
            </span>

            <h2>
              Your notifications
            </h2>
          </div>

          <span className="pn-card-count">
            {items.length}{" "}
            {items.length === 1
              ? "update"
              : "updates"}
          </span>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="pn-loading">
            <div className="pn-loader" />

            <div>
              <strong>
                Loading your updates
              </strong>

              <span>
                Checking your latest care activity...
              </span>
            </div>
          </div>
        ) : items.length === 0 ? (
          /* EMPTY STATE */
          <div className="pn-empty">
            <div className="pn-empty-icon">
              ✓
            </div>

            <div>
              <strong>
                You are all caught up.
              </strong>

              <span>
                New care updates will appear here when
                your recovery journey progresses.
              </span>
            </div>
          </div>
        ) : (
          /* NOTIFICATIONS */
          <div className="pn-list">
            {items.map((item, index) => {
              const unreadItem = !item.isRead;

              return (
                <article
                  key={item._id}
                  className={`pn-item ${
                    unreadItem
                      ? "unread"
                      : "read"
                  }`}
                  style={{
                    "--notification-index": index,
                  }}
                  onClick={() =>
                    unreadItem &&
                    markRead(item._id)
                  }
                >
                  <div className="pn-icon-wrap">
                    <div className="pn-icon">
                      {iconFor(item.type)}
                    </div>
                  </div>

                  <div className="pn-item-copy">
                    <div className="pn-item-top">
                      <span className="pn-type">
                        {item.type ||
                          "CARE UPDATE"}
                      </span>

                      {unreadItem && (
                        <span className="pn-new">
                          NEW
                        </span>
                      )}
                    </div>

                    <h2>
                      {item.title ||
                        "FitMax Care Update"}
                    </h2>

                    <p>
                      {item.message ||
                        "You have a new update from your care team."}
                    </p>

                    <small>
                      {timeAgo(
                        item.createdAt
                      )}
                    </small>
                  </div>

                  {unreadItem && (
                    <span className="pn-unread-dot" />
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* =====================================================
          FOOTER NOTE
      ===================================================== */}
      {!loading && items.length > 0 && (
        <div className="pn-footer-note">
          <span>◎</span>

          <p>
            Notifications help you stay connected with
            your rehabilitation journey.
          </p>
        </div>
      )}
    </div>
  );
}