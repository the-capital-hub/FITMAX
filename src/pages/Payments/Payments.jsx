import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import paymentService from "../../services/paymentService";
import "./Payments.css";

function Payments() {
  const [payments, setPayments] = useState([]);
  const [stats, setStats] = useState({ total: 0, paid: 0, pending: 0, failed: 0, refunded: 0, revenue: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPayments = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await paymentService.getAdminPayments();
      setPayments(data?.payments || []);
      setStats(data?.stats || stats);
    } catch (err) {
      setError(err.message || "Unable to load payments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPayments();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await paymentService.updateStatus(id, status);
      await loadPayments();
    } catch (err) {
      setError(err.message || "Unable to update payment");
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page-heading">
        <div>
          <span className="admin-eyebrow">FITMAX ADMIN</span>
          <h1>Payments</h1>
          <p>Track consultation payments and payment status.</p>
        </div>
      </div>

      <div className="admin-stat-grid">
        {[
          ["Collected", `₹${Number(stats.revenue || 0).toLocaleString("en-IN")}`, "Paid payments"],
          ["Pending", stats.pending, "Needs attention"],
          ["Transactions", stats.total, "All payment records"],
          ["Refunds", stats.refunded, "Refunded payments"],
        ].map(([label, value, note]) => (
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
            <h2>Recent payments</h2>
            <p>Live records from the FitMax backend</p>
          </div>
          <button className="admin-secondary-btn" onClick={loadPayments} disabled={loading}>
            Refresh
          </button>
        </div>

        {error && <div className="admin-error">{error}</div>}

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr><th>Patient</th><th>Consultation</th><th>Amount</th><th>Method</th><th>Status</th><th>Action</th></tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan="6">Loading payments...</td></tr>
              ) : payments.length === 0 ? (
                <tr><td colSpan="6">No payment records yet.</td></tr>
              ) : (
                payments.map((payment) => (
                  <tr key={payment._id}>
                    <td>{payment.patient ? `${payment.patient.firstName || ""} ${payment.patient.lastName || ""}`.trim() : "Unknown patient"}</td>
                    <td>{payment.consultation?.careTeam || "Consultation"}</td>
                    <td>₹{Number(payment.amount || 0).toLocaleString("en-IN")}</td>
                    <td>{String(payment.method || "card").toUpperCase()}</td>
                    <td><span className="admin-status">{payment.status}</span></td>
                    <td>
                      <select value={payment.status} onChange={(e) => updateStatus(payment._id, e.target.value)}>
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                        <option value="Failed">Failed</option>
                        <option value="Refunded">Refunded</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  );
}

export default Payments;
