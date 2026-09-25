import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./Appointments.css";
import "../fitmax-premium.css";


function Appointments() {
  const stats = [["Today","12","Scheduled"],["This Week","86","All appointments"],["Completed","61","This week"],["Cancelled","5","This week"]];
  const rows = [["Priya Sharma", "Assessment", "Today · 10:30 AM", "Movement Team"], ["Rahul Kumar", "Consultation", "Today · 12:00 PM", "Pain & Mobility"], ["Ananya Singh", "Follow up", "Tomorrow · 09:30 AM", "Recovery Team"], ["Amit Verma", "Assessment", "Tomorrow · 04:00 PM", "Sports Team"]];
  return (
    <AdminLayout>
      <div className="admin-page-heading">
        <div><span className="admin-eyebrow">FITMAX ADMIN</span><h1>Appointments</h1><p>Coordinate assessments, consultations and follow ups.</p></div>
        <button className="admin-primary-btn">+ Add New</button>
      </div>
      <div className="admin-stat-grid">
        {stats.map(([label,value,note]) => <article className="admin-stat-card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
      </div>
      <section className="admin-panel">
        <div className="admin-panel-header"><div><h2>Recent appointments</h2><p>Demo records for the current frontend build</p></div><button className="admin-secondary-btn">View all</button></div>
        <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Patient</th><th>Appointment</th><th>Date</th><th>Care team</th></tr></thead><tbody>
        {rows.map((row,index) => <tr key={index}>{row.map((value,i) => <td key={i}>{i === row.length - 1 ? <span className="admin-status">{value}</span> : value}</td>)}</tr>)}
        </tbody></table></div>
      </section>
    </AdminLayout>
  );
}
export default Appointments;
