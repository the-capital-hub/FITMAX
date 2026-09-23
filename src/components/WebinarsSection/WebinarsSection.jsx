import FitMaxMark from "../FITMaxMark/FItMaxtMark";
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
  const featuredWebinar = webinars[0];
  const recordedWebinar = webinars[1];

  return (
    <section className="fitmax-webinars" id="webinars">
      <div className="fitmax-webinars-container">

        {/* TOP */}
        <div className="fitmax-webinars-top">
          <div className="fitmax-webinars-label">
            <FitMaxMark/>
            <span>WEBINARS &amp; LIVE LEARNING</span>
          </div>

          <div className="fitmax-webinars-index">
            <span>08</span>
            <span>LIVE LEARNING</span>
          </div>
        </div>

        {/* MAIN */}
        <div className="fitmax-webinars-main">

          {/* LEFT COPY */}
          <div className="fitmax-webinars-copy">
            <span className="fitmax-webinars-kicker">
              KNOWLEDGE IN CONVERSATION
            </span>

            <h2>
              Learn
              <span>live.</span>
              Ask.
              <span>Discuss.</span>
            </h2>

            <p>
              Join practical conversations with experienced
              physiotherapists, explore real clinical questions
              and keep learning with the FitMax community.
            </p>

            <a
              href="#webinar-space"
              className="fitmax-webinars-link"
            >
              <span>Explore live learning</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* WEBINAR EXPERIENCE */}
          <div
            className="fitmax-webinars-experience"
            id="webinar-space"
          >

            {/* FEATURED WEBINAR */}
            <article className="fitmax-webinar-feature">

              <div className="fitmax-webinar-feature-image">
                <img
                  src={featuredWebinar.image}
                  alt="Physiotherapy professional during a clinical session"
                />

                <div
                  className="fitmax-webinar-feature-overlay"
                  aria-hidden="true"
                />

                <div className="fitmax-webinar-feature-number">
                  {featuredWebinar.number}
                </div>

                <div className="fitmax-webinar-live">
                  <span />
                  {featuredWebinar.status}
                </div>
              </div>

              <div className="fitmax-webinar-feature-content">

                <div className="fitmax-webinar-date">
                  <strong>{featuredWebinar.date}</strong>
                  <span>{featuredWebinar.time}</span>
                </div>

                <FitMaxMark />

                <span className="fitmax-webinar-feature-role">
                  {featuredWebinar.role}
                </span>

                <h3>{featuredWebinar.title}</h3>

                <p>{featuredWebinar.description}</p>

                <div className="fitmax-webinar-speaker">
                  <div className="fitmax-webinar-avatar">
                    A
                  </div>

                  <div>
                    <strong>{featuredWebinar.speaker}</strong>
                    <span>{featuredWebinar.role}</span>
                  </div>
                </div>

                <a href="#webinars">
                  <span>Register for Session</span>
                  <span aria-hidden="true">↗</span>
                </a>

              </div>
            </article>

            {/* SIDE CONTENT */}
            <div className="fitmax-webinars-side">

              <div className="fitmax-webinars-side-heading">
                <span>FROM THE FITMAX SPACE</span>
                <strong>Continue learning.</strong>
              </div>

              {/* RECORDED WEBINAR */}
              <article className="fitmax-webinar-recorded">

                <div className="fitmax-webinar-recorded-image">
                  <img
                    src={recordedWebinar.image}
                    alt="Physiotherapist working with a patient"
                  />

                  <div
                    className="fitmax-webinar-recorded-overlay"
                    aria-hidden="true"
                  />

                  <span className="fitmax-webinar-recorded-number">
                    {recordedWebinar.number}
                  </span>
                </div>

                <div className="fitmax-webinar-recorded-content">

                  <div className="fitmax-webinar-recorded-meta">
                    <span>{recordedWebinar.status}</span>
                    <span>{recordedWebinar.date}</span>
                  </div>

                  <span className="fitmax-webinar-recorded-role">
                    {recordedWebinar.role}
                  </span>

                  <h3>{recordedWebinar.title}</h3>

                  <p>{recordedWebinar.description}</p>

                  <div className="fitmax-webinar-recorded-speaker">
                    <strong>{recordedWebinar.speaker}</strong>
                    <span>{recordedWebinar.role}</span>
                  </div>

                  <a href="#webinars">
                    <span>Watch Session</span>
                    <span aria-hidden="true">↗</span>
                  </a>

                </div>
              </article>

              {/* LEARNING FLOW */}
              <div className="fitmax-webinar-flow">

                <div
                  className="fitmax-webinar-flow-line"
                  aria-hidden="true"
                >
                  <span />
                </div>

                <div className="fitmax-webinar-flow-step active">
                  
                  <strong>LIVE</strong>
                  <p>Join the conversation.</p>
                </div>

                <div className="fitmax-webinar-flow-step">
                  
                  <strong>DISCUSS</strong>
                  <p>Ask what matters.</p>
                </div>

                <div className="fitmax-webinar-flow-step">
                
                  <strong>GROW</strong>
                  <p>Take it into practice.</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="fitmax-webinars-bottom">

          <div className="fitmax-webinars-bottom-line">
            <span />
          </div>

          <div className="fitmax-webinars-bottom-copy">
            <span>LEARN TOGETHER</span>

            <strong>
              Live conversations.
              <span>Practical knowledge.</span>
            </strong>
          </div>

          <FitMaxMark />

        </div>

      </div>
    </section>
  );
}

export default WebinarsSection;