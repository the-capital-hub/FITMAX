import "./WebinarsSection.css";

const webinars = [
  {
    number: "01",
    status: "UPCOMING",
    date: "18 OCT",
    time: "07:00 PM",
    title: "Building Better Rehabilitation Plans",
    speaker: "Dr. Ankith",
    role: "Lead Physiotherapist",
    description:
      "A practical session on assessment, treatment planning and creating structured rehabilitation programs for better patient outcomes.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    number: "02",
    status: "RECORDED",
    date: "04 OCT",
    time: "06:30 PM",
    title: "Managing Common Sports Injuries",
    speaker: "FitMax Clinical Team",
    role: "Physiotherapy Experts",
    description:
      "Learn practical considerations for assessment, rehabilitation and safe progression after common sports injuries.",
    image:
      "https://images.pexels.com/photos/6111581/pexels-photo-6111581.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function WebinarsSection() {
  return (
    <section className="fitmax-webinars" id="webinars">
      <div className="fitmax-webinars-container">

        <div className="fitmax-webinars-header">

          <div className="fitmax-webinars-label">
            <span />
            <span>WEBINARS &amp; LIVE LEARNING</span>
          </div>

          <div className="fitmax-webinars-heading-row">

            <h2>
              Learn Live.
              <span>Ask. Discuss. Grow.</span>
            </h2>

            <div className="fitmax-webinars-intro">

              <p>
                Join live sessions with experienced physiotherapists,
                ask clinical questions and learn through practical
                conversations.
              </p>

              <a
                href="#webinars"
                className="fitmax-webinars-cta"
              >
                <span>View All Webinars</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>
        </div>

        <div className="fitmax-webinars-layout">

          <article
            className="fitmax-webinar-feature"
            style={{
              backgroundImage: `url("${webinars[0].image}")`,
            }}
          >

            <div className="fitmax-webinar-feature-overlay" />

            <div className="fitmax-webinar-feature-top">

              <div className="fitmax-webinar-live">
                <span />
                {webinars[0].status}
              </div>

              <span className="fitmax-webinar-number">
                {webinars[0].number}
              </span>

            </div>

            <div className="fitmax-webinar-feature-content">

              <div className="fitmax-webinar-date">

                <strong>{webinars[0].date}</strong>

                <span>{webinars[0].time}</span>

              </div>

              <div className="fitmax-webinar-feature-copy">

                <span>{webinars[0].role}</span>

                <h3>{webinars[0].title}</h3>

                <p>{webinars[0].description}</p>

                <div className="fitmax-webinar-speaker">
                  <div className="fitmax-webinar-avatar">
                    A
                  </div>

                  <div>
                    <strong>{webinars[0].speaker}</strong>
                    <span>{webinars[0].role}</span>
                  </div>
                </div>

                <a href="#webinars">
                  <span>Register for Session</span>
                  <span aria-hidden="true">↗</span>
                </a>

              </div>

            </div>

          </article>

          <div className="fitmax-webinars-list">

            {webinars.slice(1).map((webinar) => (
              <article
                className="fitmax-webinar-card"
                key={webinar.number}
                style={{
                  backgroundImage: `url("${webinar.image}")`,
                }}
              >

                <div className="fitmax-webinar-card-overlay" />

                <div className="fitmax-webinar-card-top">

                  <span className="fitmax-webinar-card-status">
                    {webinar.status}
                  </span>

                  <span className="fitmax-webinar-number">
                    {webinar.number}
                  </span>

                </div>

                <div className="fitmax-webinar-card-content">

                  <div className="fitmax-webinar-small-date">
                    <strong>{webinar.date}</strong>
                    <span>{webinar.time}</span>
                  </div>

                  <span>{webinar.role}</span>

                  <h3>{webinar.title}</h3>

                  <p>{webinar.description}</p>

                  <div className="fitmax-webinar-card-speaker">
                    <strong>{webinar.speaker}</strong>
                    <span>{webinar.role}</span>
                  </div>

                  <a href="#webinars">
                    <span>Watch Session</span>
                    <span aria-hidden="true">↗</span>
                  </a>

                </div>

                <div className="fitmax-webinar-card-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>

        <div className="fitmax-webinars-footer">

          <div className="fitmax-webinars-footer-line">
            <span />
          </div>

          <p>
            Learn together.
            <strong>Live and practical.</strong>
          </p>

          <span className="fitmax-webinars-count">
            LIVE LEARNING
          </span>

        </div>

      </div>
    </section>
  );
}

export default WebinarsSection;