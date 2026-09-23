import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./ExpertsSection.css";

const expert = {
  number: "01",
  name: "Dr. Ankith",
  specialty: "LEAD PHYSIOTHERAPIST",
  experience: "10+ YEARS",
  description:
    "Experienced physiotherapist focused on personalised care, rehabilitation and helping patients move towards a pain free and active life.",
  image:
    "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1400",
};

const expertiseAreas = [
  "Sports rehabilitation",
  "Post surgical recovery",
  "Back and neck pain",
  "Mobility and movement",
];

function ExpertsSection() {
  return (
    <section className="fitmax-experts" id="experts">
      <div className="fitmax-experts-container">

        {/* TOP */}
        <div className="fitmax-experts-top">

          <div className="fitmax-experts-label">
            <FitMaxMark />
            <span>THE PEOPLE BEHIND THE PRACTICE</span>
          </div>

          <div className="fitmax-experts-index">
            <span>06</span>
            <span className="fitmax-experts-line" />
            <span>EXPERTISE</span>
          </div>

        </div>

        {/* MAIN */}
        <div className="fitmax-experts-main">

          {/* INTRO */}
          <div className="fitmax-experts-intro">

            <span className="fitmax-experts-kicker">
              CLINICAL EXPERIENCE
            </span>

            <h2>
              Meet the
              <span> people</span>
              behind FitMax.
            </h2>

            <p>
              Learn from experienced physiotherapists who combine
              clinical knowledge with a practical understanding of
              movement and rehabilitation.
            </p>

            <div className="fitmax-experts-intro-bottom">
              <span>01</span>
              <div />
              <span>CLINICAL EXPERT</span>
            </div>

          </div>

          {/* PROFILE */}
          <div
            className="fitmax-expert-card"
            id="expert-profile"
          >

            {/* IMAGE */}
            <div className="fitmax-expert-image">

              <img
                src={expert.image}
                alt="Physiotherapist providing professional care"
              />

              <div className="fitmax-expert-overlay" />

              <div className="fitmax-expert-number">
                {expert.number}
              </div>

              <div className="fitmax-expert-experience">
                <span />
                {expert.experience}
              </div>

              <div className="fitmax-expert-mark">
                <FitMaxMark />
              </div>

              {/* SIMPLE MOTION PATH */}
              <svg
                className="fitmax-expert-path"
                viewBox="0 0 500 400"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M20 350 C120 290 100 220 205 205 C300 190 285 115 480 45"
                  pathLength="1"
                />
                <circle cx="205" cy="205" r="4" />
                <circle cx="480" cy="45" r="4" />
              </svg>

            </div>

            {/* CONTENT */}
            <div className="fitmax-expert-content">

              <div className="fitmax-expert-heading">

                <div>
                  <span>{expert.specialty}</span>
                  <h3>{expert.name}</h3>
                </div>

                <span className="fitmax-expert-profile-label">
                  PROFILE
                </span>

              </div>

              <p className="fitmax-expert-description">
                {expert.description}
              </p>

              {/* EXPERTISE */}
              <div className="fitmax-expertise">

                <div className="fitmax-expertise-title">
                  <span>AREAS OF EXPERTISE</span>
                  <FitMaxMark />
                </div>

                <div className="fitmax-expertise-grid">

                  {expertiseAreas.map((area, index) => (
                    <div
                      className="fitmax-expertise-item"
                      key={area}
                    >
                      <span>0{index + 1}</span>

                      <strong>{area}</strong>

                      <span className="fitmax-expertise-arrow">
                        ↗
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ExpertsSection;