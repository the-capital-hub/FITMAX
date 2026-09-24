import "./PatientStories.css";
import FitMaxMark from "../FITMaxMark/FItMaxtMark";

const featuredStory = {
  number: "01",
  condition: "Knee Rehabilitation",
  title: "Rebuilding movement, one step at a time.",
  description:
    "A structured rehabilitation journey focused on restoring movement, rebuilding strength and gradually returning to everyday activities.",
  image:
    "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg",
};

const stories = [
  {
    number: "02",
    condition: "Sports Rehabilitation",
    title: "Building confidence through progressive rehabilitation.",
    description:
      "A recovery journey built around movement, strength and the goal of returning to activity.",
    image:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
  },
  {
    number: "03",
    condition: "Mobility & Strength",
    title: "Finding better movement for everyday life.",
    description:
      "A patient focused rehabilitation approach designed around mobility, strength and everyday function.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
  },
];

function PatientStories() {
  return (
    <section className="fitmax-patient-stories" id="patient-stories">
      <div className="fitmax-patient-stories-container">

        {/* HEADER */}

        <div className="fitmax-patient-stories-header">
          <div className="fitmax-patient-stories-label">
            <FitMaxMark />
            <span>PATIENT STORIES</span>
          </div>

          <div className="fitmax-patient-stories-heading-row">
            <h2 className="fitmax-patient-stories-title">
              Recovery looks
              <span>different for everyone.</span>
            </h2>

            <p className="fitmax-patient-stories-intro">
              Every recovery journey starts from a different place.
              FitMax focuses on the individual, their goals and the
              progress they make along the way.
            </p>
          </div>
        </div>


        {/* FEATURED STORY */}

        <article className="fitmax-patient-story-featured">

          <div className="fitmax-patient-story-featured-image">
            <img
              src={featuredStory.image}
              alt="Physiotherapy rehabilitation session"
            />

            <div className="fitmax-patient-story-featured-overlay" />

            <span className="fitmax-patient-story-number">
              {featuredStory.number}
            </span>

            <span className="fitmax-patient-story-condition">
              {featuredStory.condition}
            </span>
          </div>


          <div className="fitmax-patient-story-featured-content">

            <div className="fitmax-patient-story-featured-top">
              <span>RECOVERY JOURNEY</span>
              <span>FEATURED STORY</span>
            </div>

            <h3>{featuredStory.title}</h3>

            <p>{featuredStory.description}</p>


            {/* JOURNEY */}

            <div className="fitmax-patient-story-progress">

              <div className="fitmax-patient-story-progress-line">
                <span />
              </div>

              <div className="fitmax-patient-story-progress-items">

                <div className="is-active">
                  <span>01</span>
                  <strong>Assessment</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Rehabilitation</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Progress</strong>
                </div>

                <div>
                  <span>04</span>
                  <strong>Return to Life</strong>
                </div>

              </div>
            </div>


            <a
              href="/patient-stories"
              className="fitmax-patient-story-link"
            >
              <span>Explore Patient Stories</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>

        </article>


        {/* SECONDARY STORIES */}

        <div className="fitmax-patient-stories-bottom">

          {stories.map((story) => (
            <article
              className="fitmax-patient-story-card"
              key={story.number}
            >

              <div className="fitmax-patient-story-card-image">

                <img
                  src={story.image}
                  alt={`${story.condition} rehabilitation`}
                />

                <div className="fitmax-patient-story-card-overlay" />

                <span>{story.number}</span>

              </div>


              <div className="fitmax-patient-story-card-content">

                <span className="fitmax-patient-story-card-condition">
                  {story.condition}
                </span>

                <h3>{story.title}</h3>

                <p>{story.description}</p>

                <a href="/patient-stories">
                  <span>Read Story</span>
                  <span aria-hidden="true">↗</span>
                </a>

              </div>

            </article>
          ))}


          {/* CONSENT */}

          <div className="fitmax-patient-story-note">

            <div className="fitmax-patient-story-note-icon">
              ✓
            </div>

            <span>REAL PATIENT EXPERIENCES</span>

            <p>
              Patient stories and outcomes should only be shared
              with appropriate consent and should reflect real
              rehabilitation experiences.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PatientStories;