import "./Hero.css";

function Hero() {
  return (
    <section className="fitmax-hero">
      <div className="fitmax-hero-main">

        <div className="fitmax-hero-content">

          <div className="fitmax-hero-label hero-reveal">
            <span className="fitmax-hero-label-dot" />
            <span>FITMAX ACADEMY</span>
          </div>

          <h1 className="fitmax-hero-title hero-reveal">
            The Future of
            <span>Physiotherapy Learning.</span>
          </h1>

          <p className="fitmax-hero-description hero-reveal">
            Learn from experienced physiotherapists, explore real clinical
            cases, build practical skills and grow with a professional
            community.
          </p>

          <div className="fitmax-hero-actions hero-reveal">
            <a href="#learn" className="fitmax-hero-primary">
              <span>Explore Courses</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#community" className="fitmax-hero-secondary">
              Join Community
            </a>
          </div>

          <div className="fitmax-hero-trust hero-reveal">
            <div className="fitmax-hero-trust-avatars">
              <span className="trust-avatar avatar-one">P</span>
              <span className="trust-avatar avatar-two">R</span>
              <span className="trust-avatar avatar-three">A</span>
              <span className="trust-avatar avatar-four">S</span>
            </div>

            <div>
              <strong>Built for physiotherapists</strong>
              <p>Learn, practice and grow together.</p>
            </div>
          </div>

        </div>

        <div className="fitmax-hero-visual hero-reveal">

          <div className="fitmax-hero-image-wrapper">

            <div className="fitmax-hero-image">
              <img
                src="https://images.pexels.com/photos/20860624/pexels-photo-20860624/free-photo-of-patient-exercising-under-care-of-therapist.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Physiotherapist helping a patient during rehabilitation"
              />
            </div>

            <div className="fitmax-hero-floating-card fitmax-hero-card-one">
              <div className="fitmax-floating-icon">
                +
              </div>

              <div>
                <strong>Clinical Learning</strong>
                <p>Real world cases</p>
              </div>
            </div>

            <div className="fitmax-hero-floating-card fitmax-hero-card-two">
              <strong>150+</strong>
              <span>Learning Resources</span>
            </div>

            <div className="fitmax-hero-note">
              <span>Move better</span>
              <span>Live stronger</span>
            </div>

          </div>

        </div>

      </div>

      <div className="fitmax-hero-stats">

        <div className="fitmax-hero-stat">
          <div className="fitmax-stat-icon stat-icon-learners">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
              <path d="M8 6h8" />
              <path d="M8 10h8" />
            </svg>
          </div>

          <div className="fitmax-stat-content">
            <strong>10K+</strong>
            <span>Learners</span>
            <small>Growing together</small>
          </div>
        </div>

        <div className="fitmax-hero-stat">
          <div className="fitmax-stat-icon stat-icon-lessons">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="4" width="18" height="16" rx="3" />
              <path d="m10 9 5 3-5 3V9Z" />
            </svg>
          </div>

          <div className="fitmax-stat-content">
            <strong>150+</strong>
            <span>Clinical Lessons</span>
            <small>Practical learning</small>
          </div>
        </div>

        <div className="fitmax-hero-stat">
          <div className="fitmax-stat-icon stat-icon-experts">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="9" cy="8" r="3" />
              <circle cx="17" cy="9" r="2.5" />
              <path d="M3.5 19c.7-3.2 2.6-5 5.5-5s4.8 1.8 5.5 5" />
              <path d="M14 15c2.7-.3 4.8 1 5.5 4" />
            </svg>
          </div>

          <div className="fitmax-stat-content">
            <strong>50+</strong>
            <span>Expert Educators</span>
            <small>Learn from experts</small>
          </div>
        </div>

        <div className="fitmax-hero-stat">
          <div className="fitmax-stat-icon stat-icon-courses">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 5h16" />
              <path d="M4 9h16" />
              <path d="M4 13h16" />
              <path d="M4 17h16" />
              <path d="M7 5v14" />
              <path d="M11 5v14" />
              <path d="M15 5v14" />
            </svg>
          </div>

          <div className="fitmax-stat-content">
            <strong>25+</strong>
            <span>Specialized Courses</span>
            <small>From basics to advanced</small>
          </div>
        </div>

      </div>

      <div className="fitmax-hero-bottom-line">
        <span>Evidence Based Learning</span>
        <span>Professional Community</span>
        <span>Learn Anytime</span>
      </div>

    </section>
  );
}

export default Hero;