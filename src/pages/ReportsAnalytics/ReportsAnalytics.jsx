import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./ReportsAnalytics.css";
import "../fitmax-premium.css";

function ReportsAnalytics() {
  const stats = [
    {
      label: "Patient Growth",
      value: "18%",
      note: "Month over month",
      type: "growth",
    },
    {
      label: "Completion",
      value: "78%",
      note: "Rehab adherence",
      type: "completion",
    },
    {
      label: "Bookings",
      value: "86",
      note: "This week",
      type: "bookings",
    },
    {
      label: "Revenue",
      value: "₹4.82L",
      note: "Current month",
      type: "revenue",
    },
  ];

  const bookings = [
    ["Mon", 10],
    ["Tue", 15],
    ["Wed", 12],
    ["Thu", 18],
    ["Fri", 14],
    ["Sat", 11],
    ["Sun", 6],
  ];

  const revenue = [
    ["Week 1", 2.8],
    ["Week 2", 3.4],
    ["Week 3", 4.1],
    ["Week 4", 4.82],
  ];

  const rows = [
    ["Active patients", "248", "230", "Up"],
    ["Plan completion", "78%", "74%", "Up"],
    ["Appointments", "86", "79", "Up"],
    ["Revenue", "₹4.82L", "₹4.36L", "Up"],
  ];

  const maxBookings = Math.max(
    ...bookings.map((item) => item[1])
  );

  const maxRevenue = Math.max(
    ...revenue.map((item) => item[1])
  );

  return (
    <AdminLayout>
      <main className="reports-page">
        {/* HEADER */}
        <header className="reports-header">
          <div>
            

            <h1>
              Reports & <em>Analytics.</em>
            </h1>

            <p>
              Track patient activity, rehabilitation performance,
              appointments and business growth from one workspace.
            </p>
          </div>

          <div className="reports-header-actions">
            <button className="reports-filter-btn">
              This Month
              <span>⌄</span>
            </button>

            <button className="reports-export-btn">
              Export Report
              <span>↗</span>
            </button>
          </div>
        </header>

        {/* STAT CARDS */}
        <section className="reports-stat-grid">
          {stats.map((stat) => (
            <article
              className={`reports-stat-card reports-stat-${stat.type}`}
              key={stat.label}
            >
              <div className="reports-stat-top">
                <span>{stat.label}</span>

                <div className="reports-stat-icon">
                  {stat.type === "growth" && "↗"}
                  {stat.type === "completion" && "◒"}
                  {stat.type === "bookings" && "◷"}
                  {stat.type === "revenue" && "₹"}
                </div>
              </div>

              <strong>{stat.value}</strong>

              <small>{stat.note}</small>

              <div className="reports-mini-line">
                <span />
              </div>
            </article>
          ))}
        </section>

        {/* MAIN CHART AREA */}
        <section className="reports-chart-grid">
          {/* PATIENT GROWTH */}
          <article className="reports-panel reports-growth-panel">
            <div className="reports-panel-heading">
              <div>
                <span>RECOVERY OVERVIEW</span>
                <h2>Patient Growth</h2>
              </div>

              <div className="reports-chart-value">
                <strong>18%</strong>
                <small>Growth</small>
              </div>
            </div>

            <div className="reports-line-chart">
              <div className="reports-y-axis">
                <span>300</span>
                <span>225</span>
                <span>150</span>
                <span>75</span>
                <span>0</span>
              </div>

              <div className="reports-chart-area">
                <div className="reports-grid-lines">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <svg
                  className="reports-growth-svg"
                  viewBox="0 0 700 260"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="growthFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#1688e8"
                        stopOpacity="0.22"
                      />

                      <stop
                        offset="100%"
                        stopColor="#1688e8"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    className="reports-growth-area"
                    d="M0 210 C80 200 105 175 170 182 C230 190 245 140 315 148 C380 156 405 105 465 112 C530 120 560 70 620 82 C650 88 675 55 700 40 L700 260 L0 260 Z"
                  />

                  <path
                    className="reports-growth-line"
                    d="M0 210 C80 200 105 175 170 182 C230 190 245 140 315 148 C380 156 405 105 465 112 C530 120 560 70 620 82 C650 88 675 55 700 40"
                  />

                  <circle
                    cx="700"
                    cy="40"
                    r="6"
                    className="reports-chart-dot"
                  />
                </svg>

                <div className="reports-x-axis">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>
          </article>

          {/* COMPLETION */}
          <article className="reports-panel reports-completion-panel">
            <div className="reports-panel-heading">
              <div>
                <span>REHABILITATION</span>
                <h2>Plan Completion</h2>
              </div>
            </div>

            <div className="reports-donut-wrap">
              <div
                className="reports-donut"
                style={{
                  "--completion": "78%",
                }}
              >
                <div>
                  <strong>78%</strong>
                  <span>Completed</span>
                </div>
              </div>
            </div>

            <div className="reports-completion-meta">
              <div>
                <span className="reports-dot active" />
                <strong>Active</strong>
                <b>78%</b>
              </div>

              <div>
                <span className="reports-dot remaining" />
                <strong>Remaining</strong>
                <b>22%</b>
              </div>
            </div>
          </article>
        </section>

        {/* BOOKINGS + REVENUE */}
        <section className="reports-chart-grid reports-second-grid">
          {/* BOOKINGS */}
          <article className="reports-panel">
            <div className="reports-panel-heading">
              <div>
                <span>APPOINTMENTS</span>
                <h2>Weekly Bookings</h2>
              </div>

              <div className="reports-chart-value">
                <strong>86</strong>
                <small>This week</small>
              </div>
            </div>

            <div className="reports-bar-chart">
              {bookings.map(([day, value]) => {
                const height =
                  (value / maxBookings) * 100;

                return (
                  <div
                    className="reports-bar-column"
                    key={day}
                  >
                    <div className="reports-bar-value">
                      {value}
                    </div>

                    <div className="reports-bar-track">
                      <span
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    </div>

                    <small>{day}</small>
                  </div>
                );
              })}
            </div>
          </article>

          {/* REVENUE */}
          <article className="reports-panel">
            <div className="reports-panel-heading">
              <div>
                <span>BUSINESS PERFORMANCE</span>
                <h2>Revenue Overview</h2>
              </div>

              <div className="reports-chart-value">
                <strong>₹4.82L</strong>
                <small>Current month</small>
              </div>
            </div>

            <div className="reports-revenue-chart">
              {revenue.map(([week, value]) => {
                const height =
                  (value / maxRevenue) * 100;

                return (
                  <div
                    className="reports-revenue-column"
                    key={week}
                  >
                    <div className="reports-revenue-value">
                      ₹{value}L
                    </div>

                    <div className="reports-revenue-track">
                      <span
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    </div>

                    <small>{week}</small>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        {/* PERFORMANCE */}
        <section className="reports-panel reports-performance-panel">
          <div className="reports-panel-heading">
            <div>
              <span>PERFORMANCE SUMMARY</span>
              <h2>Current vs Previous</h2>
            </div>

            <button className="reports-view-btn">
              View Details ↗
            </button>
          </div>

          <div className="reports-table-wrap">
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current</th>
                  <th>Previous</th>
                  <th>Change</th>
                </tr>
              </thead>

              <tbody>
                {rows.map(
                  ([metric, current, previous, direction]) => (
                    <tr key={metric}>
                      <td>
                        <strong>{metric}</strong>
                      </td>

                      <td>{current}</td>

                      <td>{previous}</td>

                      <td>
                        <span className="reports-up">
                          ↗ {direction}
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </AdminLayout>
  );
}

export default ReportsAnalytics;