import "./Dashboard.css";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import userService from "../../services/userService";
import fitmaxLogo from "../../assets/fitmax-logo.png";
function FitMaxMark() {
  return (
    <span className="fitmax-dashboard-mark" aria-hidden="true">
      <span className="dashboard-mark-top" />
      <span className="dashboard-mark-bottom" />
      <span className="dashboard-mark-dot" />
    </span>
  );
}

function Dashboard() {
  const { user, logout } = useAuth();

  const [profile, setProfile] = useState(user);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await userService.getProfile();

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

  const firstName =
    profile?.firstName ||
    user?.firstName ||
    "Member";

  const fullName =
    profile?.firstName && profile?.lastName
      ? `${profile.firstName} ${profile.lastName}`
      : profile?.firstName ||
        user?.firstName ||
        "FitMax Member";

  const profession =
    profile?.profession ||
    user?.profession ||
    "Physiotherapy Professional";

  return (
    <main className="fitmax-dashboard">

      {/* Background atmosphere */}

      <div
        className="fitmax-dashboard-atmosphere"
        aria-hidden="true"
      >
        <span className="dashboard-orbit orbit-one" />
        <span className="dashboard-orbit orbit-two" />
        <span className="dashboard-orbit orbit-three" />
        <span className="dashboard-blue-glow" />
      </div>


      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fitmax-dashboard-navbar">

        <a
  href="/"
  className="fitmax-dashboard-brand"
>
  <img
    src={fitmaxLogo}
    alt="FitMax"
  />
</a>


        <nav className="fitmax-dashboard-navigation">

          <a
            href="/courses"
            className="active"
          >
            Learn
          </a>

          <a href="/community">
            Community
          </a>

          <a href="/clinical-cases">
            Clinical Cases
          </a>

          <a href="/resources">
            Resources
          </a>

        </nav>


        <div className="fitmax-dashboard-account">

          <div className="dashboard-account-text">

            <strong>
              {profileLoading
                ? "Loading..."
                : fullName}
            </strong>

            <span>
              {profession}
            </span>

          </div>


          <div className="dashboard-account-avatar">
            {firstName
              .charAt(0)
              .toUpperCase()}
          </div>


          <button
            type="button"
            onClick={logout}
            className="dashboard-logout"
          >
            Logout
          </button>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="fitmax-dashboard-shell">


        {/* ===================================================
            HERO
        ==================================================== */}

        <section className="fitmax-dashboard-hero">

          <div className="dashboard-hero-copy">

            <div className="dashboard-eyebrow">

              <FitMaxMark />

              <span>
                YOUR FITMAX SPACE
              </span>

            </div>


            <h1>
              Welcome back,
              <span>
                {firstName}.
              </span>
            </h1>


            <p>
              Your professional journey continues here.
              Learn something new, explore clinical
              knowledge and connect with the people
              shaping physiotherapy.
            </p>


            <div className="dashboard-hero-actions">

              <a
                href="/courses"
                className="dashboard-primary-action"
              >
                <span>
                  Start Learning
                </span>

                <span>
                  ↗
                </span>
              </a>


              <a
                href="/community"
                className="dashboard-text-action"
              >
                Explore Community
              </a>

            </div>

          </div>


          {/* =================================================
              HERO VISUAL
          ================================================== */}

          <div className="dashboard-hero-visual">

            <div className="dashboard-visual-label">
              <span>
                01
              </span>

              <span>
                YOUR JOURNEY
              </span>
            </div>


            <div className="dashboard-visual-circle circle-large" />
            <div className="dashboard-visual-circle circle-medium" />
            <div className="dashboard-visual-circle circle-small" />


            <div className="dashboard-visual-path path-one" />
            <div className="dashboard-visual-path path-two" />
            <div className="dashboard-visual-path path-three" />


            <div className="dashboard-visual-center">

              <FitMaxMark />

              <span>
                FITMAX
              </span>

              <strong>
                Learn
                <i>Connect</i>
                Grow
              </strong>

            </div>


            <div className="dashboard-visual-point point-one">
              <span />
              <strong>
                LEARN
              </strong>
            </div>

            <div className="dashboard-visual-point point-two">
              <span />
              <strong>
                CONNECT
              </strong>
            </div>

            <div className="dashboard-visual-point point-three">
              <span />
              <strong>
                GROW
              </strong>
            </div>

          </div>

        </section>


        {/* ===================================================
            JOURNEY STATUS
        ==================================================== */}

        <section className="dashboard-journey">

          <div className="dashboard-journey-intro">

            <span>
              YOUR PROGRESS
            </span>

            <h2>
              The journey
              <strong>
                starts here.
              </strong>
            </h2>

          </div>


          <div className="dashboard-journey-track">

            <div className="dashboard-track-line">
              <span />
            </div>


            <div className="dashboard-track-step active">

              <div>
                01
              </div>

              <span>
                LEARN
              </span>

            </div>


            <div className="dashboard-track-step">

              <div>
                02
              </div>

              <span>
                PRACTICE
              </span>

            </div>


            <div className="dashboard-track-step">

              <div>
                03
              </div>

              <span>
                CONNECT
              </span>

            </div>


            <div className="dashboard-track-step">

              <div>
                04
              </div>

              <span>
                GROW
              </span>

            </div>

          </div>

        </section>


        {/* ===================================================
            EXPLORE
        ==================================================== */}

        <section className="dashboard-explore">

          <div className="dashboard-explore-heading">

            <div>

              <span>
                EXPLORE FITMAX
              </span>

              <h2>
                Find your next
                <strong>
                  move.
                </strong>
              </h2>

            </div>

            <p>
              Everything you need to keep learning,
              thinking and connecting.
            </p>

          </div>


          <div className="dashboard-explore-grid">


            {/* Learning */}

            <a
              href="/courses"
              className="dashboard-explore-card dashboard-card-learning"
            >

              <div className="explore-card-number">
                01
              </div>

              <div className="explore-card-visual">

                <div className="explore-learning-line line-a" />
                <div className="explore-learning-line line-b" />
                <div className="explore-learning-line line-c" />

                <span />
                <span />
                <span />

              </div>


              <div className="explore-card-content">

                <span>
                  LEARN
                </span>

                <h3>
                  Build your
                  <strong>
                    knowledge.
                  </strong>
                </h3>

                <p>
                  Explore courses, practical learning
                  and clinical education.
                </p>

                <div className="explore-card-link">
                  Explore Learning
                  <span>
                    ↗
                  </span>
                </div>

              </div>

            </a>


            {/* Community */}

            <a
              href="/community"
              className="dashboard-explore-card dashboard-card-community"
            >

              <div className="explore-card-number">
                02
              </div>


              <div className="explore-network">

                <span className="network-center">
                  F
                </span>

                <span className="network-node network-one" />
                <span className="network-node network-two" />
                <span className="network-node network-three" />

                <span className="network-line network-line-one" />
                <span className="network-line network-line-two" />
                <span className="network-line network-line-three" />

              </div>


              <div className="explore-card-content">

                <span>
                  COMMUNITY
                </span>

                <h3>
                  Connect with
                  <strong>
                    your profession.
                  </strong>
                </h3>

                <p>
                  Share ideas, ask questions and
                  discover professional perspectives.
                </p>

                <div className="explore-card-link">
                  Enter Community
                  <span>
                    ↗
                  </span>
                </div>

              </div>

            </a>


            {/* Clinical */}

            <a
              href="/clinical-cases"
              className="dashboard-explore-card dashboard-card-cases"
            >

              <div className="explore-card-number">
                03
              </div>


              <div className="explore-case-visual">

                <span className="case-shape case-shape-one" />
                <span className="case-shape case-shape-two" />
                <span className="case-shape case-shape-three" />

                <div className="case-center">
                  <FitMaxMark />
                </div>

              </div>


              <div className="explore-card-content">

                <span>
                  CLINICAL CASES
                </span>

                <h3>
                  Think through
                  <strong>
                    real practice.
                  </strong>
                </h3>

                <p>
                  Explore practical cases and strengthen
                  your clinical reasoning.
                </p>

                <div className="explore-card-link">
                  Explore Cases
                  <span>
                    ↗
                  </span>
                </div>

              </div>

            </a>

          </div>

        </section>


        {/* ===================================================
            EMPTY LEARNING STATE
        ==================================================== */}

        <section className="dashboard-learning-state">

          <div className="learning-state-number">
            04
          </div>


          <div className="learning-state-copy">

            <span>
              CONTINUE LEARNING
            </span>

            <h2>
              Your learning space
              is ready.
            </h2>

            <p>
              You have not started a course yet.
              Choose your first learning experience
              and begin building your FitMax journey.
            </p>

          </div>


          <a
            href="/courses"
            className="learning-state-button"
          >
            <span>
              Explore Courses
            </span>

            <span>
              ↗
            </span>
          </a>

        </section>


        {/* ===================================================
            FOOTER
        ==================================================== */}

        <footer className="dashboard-footer">

          <div>
            <FitMaxMark />

            <span>
              MAXIMISE YOUR POTENTIAL
            </span>
          </div>

          <span>
            FITMAX MEMBER SPACE
          </span>

        </footer>

      </div>

    </main>
  );
}

export default Dashboard;