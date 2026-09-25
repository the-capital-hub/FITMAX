import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./Patients.css";
import "../fitmax-premium.css";


function Patients() {
  const stats = [["Total Patients","248","18 added this month"],["Active Rehab","186","75% currently active"],["Assessments","31","Awaiting review"],["Completed","62","This month"]];
  const rows = [["Priya Sharma", "Knee Rehabilitation", "Active", "Sep 24, 2026"], ["Rahul Kumar", "Back Pain", "Active", "Sep 23, 2026"], ["Ananya Singh", "Post Surgical", "Assessment", "Sep 22, 2026"], ["Amit Verma", "Sports Injury", "Active", "Sep 21, 2026"]];
  return (
    <AdminLayout>
      <div className="admin-page-heading">
        <div><span className="admin-eyebrow">FITMAX ADMIN</span><h1>Patients</h1><p>Manage patient records, recovery paths and care status.</p></div>
        <button className="admin-primary-btn">+ Add New</button>
      </div>
      <div className="admin-stat-grid">
        {stats.map(([label,value,note]) => <article className="admin-stat-card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
      </div>
      <section className="admin-panel">
        <div className="admin-panel-header"><div><h2>Recent patients</h2><p>Demo records for the current frontend build</p></div><button className="admin-secondary-btn">View all</button></div>
        <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Patient</th><th>Recovery path</th><th>Status</th><th>Joined</th></tr></thead><tbody>
        {rows.map((row,index) => <tr key={index}>{row.map((value,i) => <td key={i}>{i === row.length - 1 ? <span className="admin-status">{value}</span> : value}</td>)}</tr>)}
        </tbody></table></div>
      </section>
    </AdminLayout>
  );
}
export default Patients;
