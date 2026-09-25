import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./Payments.css";
import "../fitmax-premium.css";


function Payments() {
  const stats = [["Collected","₹4.82L","Current month"],["Pending","₹38,500","7 payments"],["Transactions","184","Current month"],["Refunds","₹12,000","2 requests"]];
  const rows = [["Priya Sharma", "Assessment", "₹1,500", "Paid"], ["Rahul Kumar", "Consultation", "₹2,000", "Paid"], ["Ananya Singh", "Rehab Plan", "₹3,500", "Pending"], ["Amit Verma", "Assessment", "₹1,500", "Paid"]];
  return (
    <AdminLayout>
      <div className="admin-page-heading">
        <div><span className="admin-eyebrow">FITMAX ADMIN</span><h1>Payments</h1><p>Track assessment fees, consultations and payment status.</p></div>
        <button className="admin-primary-btn">+ Add New</button>
      </div>
      <div className="admin-stat-grid">
        {stats.map(([label,value,note]) => <article className="admin-stat-card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
      </div>
      <section className="admin-panel">
        <div className="admin-panel-header"><div><h2>Recent payments</h2><p>Demo records for the current frontend build</p></div><button className="admin-secondary-btn">View all</button></div>
        <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Patient</th><th>Service</th><th>Amount</th><th>Status</th></tr></thead><tbody>
        {rows.map((row,index) => <tr key={index}>{row.map((value,i) => <td key={i}>{i === row.length - 1 ? <span className="admin-status">{value}</span> : value}</td>)}</tr>)}
        </tbody></table></div>
      </section>
    </AdminLayout>
  );
}
export default Payments;
