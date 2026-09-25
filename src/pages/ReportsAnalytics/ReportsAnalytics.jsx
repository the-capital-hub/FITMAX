import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./ReportsAnalytics.css";
import "../fitmax-premium.css";


function ReportsAnalytics() {
  const stats = [["Patient Growth","18%","Month over month"],["Completion","78%","Rehab adherence"],["Bookings","86","This week"],["Revenue","₹4.82L","Current month"]];
  const rows = [["Active patients", "248", "230", "Up"], ["Plan completion", "78%", "74%", "Up"], ["Appointments", "86", "79", "Up"], ["Revenue", "₹4.82L", "₹4.36L", "Up"]];
  return (
    <AdminLayout>
      <div className="admin-page-heading">
        <div><span className="admin-eyebrow">FITMAX ADMIN</span><h1>Reports & Analytics</h1><p>Review operational trends, care activity and business metrics.</p></div>
        <button className="admin-primary-btn">+ Add New</button>
      </div>
      <div className="admin-stat-grid">
        {stats.map(([label,value,note]) => <article className="admin-stat-card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
      </div>
      <section className="admin-panel">
        <div className="admin-panel-header"><div><h2>Recent reports & analytics</h2><p>Demo records for the current frontend build</p></div><button className="admin-secondary-btn">View all</button></div>
        <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Metric</th><th>Current</th><th>Previous</th><th>Direction</th></tr></thead><tbody>
        {rows.map((row,index) => <tr key={index}>{row.map((value,i) => <td key={i}>{i === row.length - 1 ? <span className="admin-status">{value}</span> : value}</td>)}</tr>)}
        </tbody></table></div>
      </section>
    </AdminLayout>
  );
}
export default ReportsAnalytics;
