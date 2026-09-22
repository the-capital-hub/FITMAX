import "./ExpertsSection.css";

const experts = [
  {
    number: "01",
    name: "Dr. Ankith",
    specialty: "Lead Physiotherapist",
    experience: "10+ Years",
    description:
      "Experienced physiotherapist focused on personalised care, rehabilitation and helping patients move towards a pain free and active life.",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    number: "02",
    name: "Expert Physiotherapists",
    specialty: "Clinical Care",
    experience: "Certified Experts",
    description:
      "A dedicated team of certified physiotherapists focused on personalised treatment and practical rehabilitation for every patient.",
    image:
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    number: "03",
    name: "Online Consultation",
    specialty: "Remote Physiotherapy",
    experience: "Online + Clinic",
    description:
      "Get physiotherapy guidance through online consultation while also having access to personalised care at the Physio FitMax clinic.",
    image:
      "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

function ExpertsSection() {
  return (
    <section className="fitmax-experts" id="experts">
      <div className="fitmax-experts-container">

        <div className="fitmax-experts-header">

          <div className="fitmax-experts-label">
            <span />
            <span>LEARN FROM EXPERIENCED PHYSIOTHERAPISTS</span>
          </div>

          <div className="fitmax-experts-heading-row">

            <h2>
              Learn From
              <span>Experienced Physiotherapists.</span>
            </h2>

            <div className="fitmax-experts-intro">
              <p>
                Meet the professionals behind Physio FitMax,
                bringing personalised physiotherapy care,
                rehabilitation experience and practical
                clinical knowledge to every patient.
              </p>

              <a
                href="#experts"
                className="fitmax-experts-cta"
              >
                <span>Meet the FitMax Team</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

          </div>
        </div>

        <div className="fitmax-experts-grid">

          {experts.map((expert) => (
            <article
              className="fitmax-expert-card"
              key={expert.number}
            >

              <div className="fitmax-expert-image">

                <img
                  src={expert.image}
                  alt={expert.name}
                />

                <div className="fitmax-expert-number">
                  {expert.number}
                </div>

                <div className="fitmax-expert-experience">
                  {expert.experience}
                </div>

                <div className="fitmax-expert-arrow">
                  ↗
                </div>

              </div>

              <div className="fitmax-expert-content">

                <span className="fitmax-expert-specialty">
                  {expert.specialty}
                </span>

                <h3>{expert.name}</h3>

                <p>{expert.description}</p>

                <a href="#experts">
                  <span>View Profile</span>
                  <span aria-hidden="true">↗</span>
                </a>

              </div>

            </article>
          ))}

        </div>

        <div className="fitmax-experts-footer">

          <div className="fitmax-experts-footer-line">
            <span />
          </div>

          <p>
            Personalised care.
            <strong>Experienced guidance.</strong>
          </p>

          <span className="fitmax-experts-count">
            10+ YEARS
          </span>

        </div>

      </div>
    </section>
  );
}

export default ExpertsSection;