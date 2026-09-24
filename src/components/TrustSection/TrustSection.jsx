import "./TrustSection.css";
import FitMaxMark from "../FITMaxMark/FItMaxtMark";

const physiotherapists = [
  {
    id: "01",
    role: "Clinical Rehabilitation",
    name: "Physiotherapist",
    expertise: "Injury & Recovery",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
  },
  {
    id: "02",
    role: "Movement & Mobility",
    name: "Physiotherapist",
    expertise: "Strength & Mobility",
    image:
      "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg",
  },
  {
    id: "03",
    role: "Sports Rehabilitation",
    name: "Physiotherapist",
    expertise: "Performance & Recovery",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
  },
];

function TrustSection() {
  return (
    <section className="fitmax-trust" id="our-physiotherapists">
      <div className="fitmax-trust-container">

        {/* TOP HEADER */}

        <div className="fitmax-trust-header">

          <div className="fitmax-trust-label">
            <FitMaxMark />
            <span>OUR PHYSIOTHERAPISTS</span>
          </div>

          <div className="fitmax-trust-heading-row">

            <h2 className="fitmax-trust-title">
              Care that understands
              <span>your recovery.</span>
            </h2>

            <div className="fitmax-trust-intro">

              <p>
                Your recovery deserves professional guidance,
                thoughtful planning and care that adapts to where
                you are in your rehabilitation journey.
              </p>

              <a
                href="/physiotherapists"
                className="fitmax-trust-link"
              >
                <span>Meet Our Physiotherapists</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>

        </div>


        {/* PHYSIOTHERAPIST SHOWCASE */}

        <div className="fitmax-trust-showcase">

          {physiotherapists.map((physio, index) => (
            <article
              className={`fitmax-trust-profile ${
                index === 1 ? "is-featured" : ""
              }`}
              key={physio.id}
            >

              {/* IMAGE */}

              <div className="fitmax-trust-profile-image">

                <img
                  src={physio.image}
                  alt={`${physio.role} physiotherapist`}
                />

                <div className="fitmax-trust-profile-shade" />

                <span className="fitmax-trust-profile-number">
                  {physio.id}
                </span>

                <span className="fitmax-trust-profile-badge">
                  Clinical Care
                </span>

                <div className="fitmax-trust-profile-bottom">

                  <span>{physio.role}</span>

                  <h3>{physio.name}</h3>

                </div>

              </div>


              {/* INFO */}

              <div className="fitmax-trust-profile-info">

                <div>
                  <span>AREA OF FOCUS</span>

                  <strong>{physio.expertise}</strong>
                </div>

                <span
                  className="fitmax-trust-profile-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </div>

            </article>
          ))}

        </div>


        {/* APPROACH */}

        <div className="fitmax-trust-approach">

          <div className="fitmax-trust-approach-intro">

            <div className="fitmax-trust-approach-label">
              <span>FITMAX APPROACH</span>
              <span>04</span>
            </div>

            <h3>
              Professional care,
              <span>built around you.</span>
            </h3>

          </div>


          <div className="fitmax-trust-approach-description">

            <p>
              Every recovery journey is different. We focus on
              understanding your condition, your goals and your
              progress so rehabilitation can move at the right pace.
            </p>

            <a
              href="/how-it-works"
              className="fitmax-trust-approach-link"
            >
              <span>See How FitMax Works</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>


          <div className="fitmax-trust-principles">

            <div>
              <span>01</span>
              <strong>Condition</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Goals</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Progress</strong>
            </div>

            <div>
              <span>04</span>
              <strong>Recovery</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TrustSection;