import "./Dashboard.css";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import userService from "../../services/userService";
function Dashboard() {
    const { user, logout } = useAuth();


      const [profile, setProfile] =
    useState(user);

  const [profileLoading, setProfileLoading] =
    useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data =
          await userService.getProfile();

        setProfile(data.user);
      } catch (error) {
        console.error(
          "Profile loading error:",
          error.message
        );
      } finally {
        setProfileLoading(false);
      }
    };

    loadProfile();
  }, []);






  return (
    <main className="fitmax-dashboard">

      <header className="fitmax-dashboard-header">

        <div>
          <span className="fitmax-dashboard-label">
            FITMAX DASHBOARD
          </span>

          <h1>
            Welcome back.
          </h1>

          <p>
            Continue learning, explore clinical knowledge
            and stay connected with the FitMax community.
          </p>
        </div>

       <div className="fitmax-dashboard-profile">

  <strong>
  {profileLoading
    ? "Loading..."
    : profile
      ? `${profile.firstName} ${profile.lastName}`
      : "FitMax Member"}
</strong>

  <div>
    

    <span>
      {user?.profession ||
        "Physiotherapy Professional"}
    </span>
  </div>

  <button
    type="button"
    onClick={logout}
    className="fitmax-dashboard-logout"
  >
    Logout
  </button>

</div>

      </header>

      <section className="fitmax-dashboard-stats">

        <article className="fitmax-dashboard-stat">
          <span>01</span>

          <strong>
            0
          </strong>

          <p>
            Courses in Progress
          </p>
        </article>

        <article className="fitmax-dashboard-stat">
          <span>02</span>

          <strong>
            0
          </strong>

          <p>
            Completed Courses
          </p>
        </article>

        <article className="fitmax-dashboard-stat">
          <span>03</span>

          <strong>
            0
          </strong>

          <p>
            Certificates
          </p>
        </article>

        <article className="fitmax-dashboard-stat">
          <span>04</span>

          <strong>
            0
          </strong>

          <p>
            Saved Resources
          </p>
        </article>

      </section>

      <section className="fitmax-dashboard-content">

        <article className="fitmax-dashboard-main-card">

          <div className="fitmax-dashboard-card-top">
            <div>
              <span>
                CONTINUE LEARNING
              </span>

              <h2>
                Your learning journey
              </h2>
            </div>

            <span className="fitmax-dashboard-card-number">
              01
            </span>
          </div>

          <div className="fitmax-dashboard-empty">

            <div className="fitmax-dashboard-empty-icon">
              +
            </div>

            <h3>
              No course started yet
            </h3>

            <p>
              Explore FitMax courses and start building
              your professional knowledge.
            </p>

            <a href="/courses">
              <span>
                Explore Courses
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>

          </div>

        </article>

        <aside className="fitmax-dashboard-side">

          <article className="fitmax-dashboard-side-card">

            <span>
              COMMUNITY
            </span>

            <h3>
              Join the conversation.
            </h3>

            <p>
              Connect with physiotherapists and
              discover clinical discussions.
            </p>

            <a href="/community">
              <span>
                Open Community
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>

          </article>

          <article className="fitmax-dashboard-side-card">

            <span>
              CLINICAL CASES
            </span>

            <h3>
              Learn from practice.
            </h3>

            <p>
              Explore practical cases and strengthen
              your clinical thinking.
            </p>

            <a href="/clinical-cases">
              <span>
                Explore Cases
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>

          </article>

        </aside>

      </section>

    </main>
  );
}

export default Dashboard;