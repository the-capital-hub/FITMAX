import AdminLayout from "../../components/AdminLayout/AdminLayout";
import { adminStats, appointments } from "../../components/AdminLayout/adminData";
import "./AdminDashboard.css";
import "../fitmax-premium.css";


function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="admin-page-heading">
        <div>
          <span className="admin-eyebrow">OVERVIEW</span>
          <h1>Good morning, Admin.</h1>
          <p>Monitor patient care, appointments and FitMax operations from one workspace.</p>
        </div>
        <button className="admin-primary-btn">Export Report</button>
      </div>

      <div className="admin-stat-grid">
        {adminStats.map((stat) => (
          <article className="admin-stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <small>{stat.note}</small>
          </article>
        ))}
      </div>

      <div className="admin-dashboard-columns">
        <section className="admin-panel">
          <div className="admin-panel-header">
            <div><h2>Today’s care schedule</h2><p>Upcoming patient appointments</p></div>
            <button className="admin-secondary-btn">View all</button>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead><tr><th>Patient</th><th>Recovery path</th><th>Time</th><th>Care team</th></tr></thead>
              <tbody>
                {appointments.map((row) => (
                  <tr key={row[0]}>
                    <td><strong>{row[0]}</strong></td>
                    <td>{row[1]}</td>
                    <td><span className="admin-status">{row[2]}</span></td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="admin-panel">
          <div className="admin-panel-header">
            <div><h2>Operations pulse</h2><p>Current workspace signals</p></div>
          </div>
          <div className="admin-pulse">
            <div><span>Assessment requests</span><strong>31</strong><small>Awaiting review</small></div>
            <div><span>Pending payments</span><strong>7</strong><small>Needs attention</small></div>
            <div><span>Exercise updates</span><strong>14</strong><small>Added this week</small></div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
