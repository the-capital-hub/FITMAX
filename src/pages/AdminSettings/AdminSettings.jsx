import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./AdminSettings.css";
import "../fitmax-premium.css";


function AdminSettings() {
  return (
    <AdminLayout>
      <div className="admin-page-heading">
        <div><span className="admin-eyebrow">ACCOUNT</span><h1>Settings</h1><p>Manage the FitMax admin workspace configuration.</p></div>
        <button className="admin-primary-btn">Save Changes</button>
      </div>
      <div className="settings-grid">
        <section className="settings-card">
          <h2>Workspace profile</h2>
          <label>Workspace name<input value="FitMax Admin Portal" readOnly /></label>
          <label>Support email<input value="support@fitmax.com" readOnly /></label>
          <label>Timezone<input value="Asia/Kolkata" readOnly /></label>
        </section>
        <section className="settings-card">
          <h2>Notifications</h2>
          {[
            ["New assessment requests","Receive an alert when a patient submits an assessment.",true],
            ["Payment updates","Receive updates for pending and completed payments.",true],
            ["Daily operations summary","Receive a daily overview of the admin workspace.",false],
          ].map(([title,text,checked]) => (
            <label className="setting-toggle" key={title}>
              <span><strong>{title}</strong><small>{text}</small></span>
              <input type="checkbox" defaultChecked={checked} />
            </label>
          ))}
        </section>
      </div>
    </AdminLayout>
  );
}
export default AdminSettings;
