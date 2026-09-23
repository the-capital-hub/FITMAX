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

        <div className="fitmax-experts-top">

          <div className="fitmax-experts-label">
            <FitMaxMark/>
            <span>THE PEOPLE BEHIND THE PRACTICE</span>
          </div>

          <div className="fitmax-experts-index">
            <span>06</span>
            <span>EXPERTISE</span>
          </div>

        </div>

        <div className="fitmax-experts-main">

          <div className="fitmax-experts-copy">

            <span className="fitmax-experts-kicker">
              CLINICAL EXPERIENCE
            </span>

            <h2>
              Learn from
              <span>experience.</span>
              Move with
              <span>confidence.</span>
            </h2>

            <p>
              FitMax brings clinical experience and personalised
              physiotherapy together to help people understand
              their movement, recover well and return to what
              matters to them.
            </p>

            <a
              href="#expert-profile"
              className="fitmax-experts-link"
            >
              <span>Meet the FitMax expert</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>

          <div
            className="fitmax-expert-feature"
            id="expert-profile"
          >

            <div className="fitmax-expert-image">

              <img
                src={expert.image}
                alt="Physiotherapist providing professional care"
              />

              <div
                className="fitmax-expert-image-overlay"
                aria-hidden="true"
              />

              <div className="fitmax-expert-number">
                {expert.number}
              </div>

              <div className="fitmax-expert-status">
                <span />
                {expert.experience}
              </div>

              <div className="fitmax-expert-image-mark">
                <FitMaxMark/>
              </div>

            </div>

            <div className="fitmax-expert-profile">

              <div className="fitmax-expert-profile-top">
                <span>{expert.specialty}</span>

                <span>
                  CLINICAL PROFILE
                </span>
              </div>

              <h3>{expert.name}</h3>

              <p>{expert.description}</p>

              <div className="fitmax-expertise-list">

                {expertiseAreas.map((area, index) => (
                  <div
                    className="fitmax-expertise-item"
                    key={area}
                  >
                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {area}
                    </strong>
                  </div>
                ))}

              </div>

              <a
                href="#experts"
                className="fitmax-expert-profile-link"
              >
                <span>View professional profile</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>

        </div>

        <div className="fitmax-experts-bottom">

          <div className="fitmax-experts-bottom-line">
            <span />
          </div>

          <div className="fitmax-experts-bottom-copy">
            <span>BUILT AROUND EXPERIENCE</span>

            <strong>
              Knowledge that supports
              <span>better movement.</span>
            </strong>
          </div>

          <FitMaxMark/>

        </div>

      </div>
    </section>
  );
}

export default ExpertsSection;