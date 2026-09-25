import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./Physiotherapists.css";
import "../fitmax-premium.css";

function Physiotherapists() {
  const stats = [
    ["Total Physios", "24", "20 active today"],
    ["Pending Review", "4", "Profile verification"],
    ["Patients Covered", "248", "Across the team"],
    ["Specialties", "9", "Clinical areas"],
  ];
  const rows = [
    ["Care Team", "Musculoskeletal Rehabilitation", "42", "Active"],
    ["Movement Team", "Sports Rehabilitation", "31", "Active"],
    ["Recovery Team", "Post Surgical Rehabilitation", "28", "Active"],
    ["Pain & Mobility", "Back & Neck", "35", "Review"],
  ];
  return (
    <AdminLayout>
      <div className="admin-page-heading">
        <div>
          <span className="admin-eyebrow">FITMAX ADMIN</span>
          <h1>Physiotherapists</h1>
          <p>Manage the clinical team, specialties and profile review.</p>
        </div>
        <button className="admin-primary-btn">+ Add New</button>
      </div>
      <div className="admin-stat-grid">
        {stats.map(([label, value, note]) => (
          <article className="admin-stat-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{note}</small>
          </article>
        ))}
      </div>
      <section className="admin-panel">
        <div className="admin-panel-header">
          <div>
            <h2>Recent physiotherapists</h2>
            <p>Demo records for the current frontend build</p>
          </div>
          <button className="admin-secondary-btn">View all</button>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Physiotherapist</th>
                <th>Specialty</th>
                <th>Patients</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  {row.map((value, i) => (
                    <td key={i}>
                      {i === row.length - 1 ? (
                        <span className="admin-status">{value}</span>
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}
export default Physiotherapists;
