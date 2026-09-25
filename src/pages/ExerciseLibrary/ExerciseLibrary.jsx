import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./ExerciseLibrary.css";
import "../fitmax-premium.css";


function ExerciseLibrary() {
  const stats = [["Exercises","186","In library"],["Categories","18","Movement groups"],["New This Month","14","Recently added"],["Needs Review","6","Clinical review"]];
  const rows = [["Knee Extension", "Knee", "42", "Published"], ["Bridge", "Core & Back", "38", "Published"], ["Shoulder Mobility", "Shoulder", "31", "Published"], ["Balance Reach", "Mobility", "24", "Review"]];
  return (
    <AdminLayout>
      <div className="admin-page-heading">
        <div><span className="admin-eyebrow">FITMAX ADMIN</span><h1>Exercise Library</h1><p>Manage guided exercises available to the clinical care team.</p></div>
        <button className="admin-primary-btn">+ Add New</button>
      </div>
      <div className="admin-stat-grid">
        {stats.map(([label,value,note]) => <article className="admin-stat-card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
      </div>
      <section className="admin-panel">
        <div className="admin-panel-header"><div><h2>Recent exercise library</h2><p>Demo records for the current frontend build</p></div><button className="admin-secondary-btn">View all</button></div>
        <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Exercise</th><th>Category</th><th>Used in plans</th><th>Status</th></tr></thead><tbody>
        {rows.map((row,index) => <tr key={index}>{row.map((value,i) => <td key={i}>{i === row.length - 1 ? <span className="admin-status">{value}</span> : value}</td>)}</tr>)}
        </tbody></table></div>
      </section>
    </AdminLayout>
  );
}
export default ExerciseLibrary;
