import AdminLayout from "../../components/AdminLayout/AdminLayout";
import "./AdminPatients.css";
import "../fitmax-premium.css";


const patients = [
  {
    name: "Priya Sharma",
    email: "priya@example.com",
    recovery: "Knee Rehabilitation",
    status: "Active",
    joined: "Sep 24, 2026",
  },
  {
    name: "Rahul Kumar",
    email: "rahul@example.com",
    recovery: "Back Pain",
    status: "Active",
    joined: "Sep 23, 2026",
  },
  {
    name: "Ananya Singh",
    email: "ananya@example.com",
    recovery: "Post Surgical",
    status: "Assessment",
    joined: "Sep 22, 2026",
  },
  {
    name: "Amit Verma",
    email: "amit@example.com",
    recovery: "Sports Injury",
    status: "Active",
    joined: "Sep 21, 2026",
  },
];

function AdminPatients() {
  return (
    <AdminLayout>
      <div className="admin-patients-page">

        <div className="admin-patients-heading">
          <div>
            <span className="admin-patients-eyebrow">
              PATIENT MANAGEMENT
            </span>

            <h1>Patients</h1>

            <p>
              Manage patient records, recovery paths and care status
              from one workspace.
            </p>
          </div>

          <button className="admin-patients-primary-btn">
            + Add Patient
          </button>
        </div>


        <div className="admin-patients-stats">

          <div className="admin-patient-stat">
            <span>Total Patients</span>
            <strong>248</strong>
            <small>18 added this month</small>
          </div>

          <div className="admin-patient-stat">
            <span>Active Rehab</span>
            <strong>186</strong>
            <small>Currently in rehabilitation</small>
          </div>

          <div className="admin-patient-stat">
            <span>Assessments</span>
            <strong>31</strong>
            <small>Awaiting review</small>
          </div>

          <div className="admin-patient-stat">
            <span>Completed</span>
            <strong>62</strong>
            <small>This month</small>
          </div>

        </div>


        <section className="admin-patients-panel">

          <div className="admin-patients-panel-header">

            <div>
              <h2>Patient records</h2>
              <p>
                View and manage the latest patient activity.
              </p>
            </div>

            <div className="admin-patients-actions">
              <input
                type="text"
                placeholder="Search patients..."
              />

              <button className="admin-patients-filter">
                Filter
              </button>
            </div>

          </div>


          <div className="admin-patients-table-wrapper">

            <table className="admin-patients-table">

              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Recovery Path</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {patients.map((patient) => (

                  <tr key={patient.email}>

                    <td>
                      <div className="admin-patient-profile">

                        <span className="admin-patient-avatar">
                          {patient.name.charAt(0)}
                        </span>

                        <div>
                          <strong>{patient.name}</strong>
                          <small>{patient.email}</small>
                        </div>

                      </div>
                    </td>

                    <td>
                      {patient.recovery}
                    </td>

                    <td>
                      <span
                        className={`admin-patient-status ${
                          patient.status === "Active"
                            ? "active"
                            : "assessment"
                        }`}
                      >
                        {patient.status}
                      </span>
                    </td>

                    <td>
                      {patient.joined}
                    </td>

                    <td>
                      <button className="admin-patient-view">
                        View
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

      </div>
    </AdminLayout>
  );
}

export default AdminPatients;