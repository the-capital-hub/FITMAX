import "./WhyOnlinePhysiotherapy.css";
import FitMaxMark from "../FITMaxMark/FItMaxtMark";

const features = [
  {
    number: "01",
    title: "Meet your physiotherapist",
    text: "Start with professional guidance built around your condition and recovery goals.",
  },
  {
    number: "02",
    title: "Receive a personal plan",
    text: "Follow a structured rehabilitation plan designed around your stage of recovery.",
  },
  {
    number: "03",
    title: "Follow guided exercises",
    text: "Know what to do, how to do it and how your rehabilitation should progress.",
  },
  {
    number: "04",
    title: "Stay connected",
    text: "Keep communication with your physiotherapist part of your recovery journey.",
  },
  {
    number: "05",
    title: "Track your progress",
    text: "See your consistency and progress as you move through rehabilitation.",
  },
  {
    number: "06",
    title: "Adapt as you recover",
    text: "Your plan can change with your movement, strength and recovery needs.",
  },
];

function WhyOnlinePhysiotherapy() {
  return (
    <section
      className="fitmax-online-physio"
      id="why-online-physiotherapy"
    >
      <div className="fitmax-online-physio-container">

        {/* LEFT */}

        <div className="fitmax-online-physio-visual">

          <div className="fitmax-online-physio-image-frame">
            <img
              src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg"
              alt="Physiotherapist guiding a patient through rehabilitation"
            />

            <div className="fitmax-online-physio-image-shade" />

            <div className="fitmax-online-physio-image-caption">
              <span>FITMAX CARE</span>
              <strong>Guided recovery, wherever you are.</strong>
            </div>
          </div>

          <div className="fitmax-online-physio-image-number">
            04
          </div>

          <div
            className="fitmax-online-physio-circle"
            aria-hidden="true"
          />

        </div>


        {/* RIGHT */}

        <div className="fitmax-online-physio-content">

          <div className="fitmax-online-physio-label">
            <FitMaxMark />
            <span>WHY ONLINE PHYSIOTHERAPY</span>
          </div>

          <h2 className="fitmax-online-physio-title">
            More than a
            <span>video call.</span>
          </h2>

          <p className="fitmax-online-physio-intro">
            FitMax brings professional physiotherapy, guided
            rehabilitation and ongoing support together into one
            structured recovery experience.
          </p>


          <div className="fitmax-online-physio-list">

            {features.map((feature) => (
              <article
                className="fitmax-online-physio-item"
                key={feature.number}
              >
                <div className="fitmax-online-physio-item-number">
                  {feature.number}
                </div>

                <div className="fitmax-online-physio-item-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>

                <div
                  className="fitmax-online-physio-item-arrow"
                  aria-hidden="true"
                >
                  ↗
                </div>
              </article>
            ))}

          </div>

        </div>

      </div>


      {/* BOTTOM JOURNEY */}

      <div className="fitmax-online-physio-bottom">
        <div className="fitmax-online-physio-bottom-inner">

          <span className="fitmax-online-physio-bottom-label">
            A STRUCTURED RECOVERY EXPERIENCE
          </span>

          <div className="fitmax-online-physio-journey">

            <span>Assessment</span>

            <i aria-hidden="true" />

            <span>Personalized Plan</span>

            <i aria-hidden="true" />

            <span>Guided Rehab</span>

            <i aria-hidden="true" />

            <span>Progress</span>

            <i aria-hidden="true" />

            <span>Recovery</span>

          </div>

        </div>
      </div>

    </section>
  );
}

export default WhyOnlinePhysiotherapy;