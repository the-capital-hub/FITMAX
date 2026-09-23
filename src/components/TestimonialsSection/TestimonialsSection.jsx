import FitMaxMark from "../FITMaxMark/FItMaxtMark";
import "./TestimonialsSection.css";


const testimonials = [
  {
    number: "01",
    rating: "4.6",
    quote:
      "The treatment approach was personalised and the guidance made my rehabilitation journey much easier to understand.",
    name: "FitMax Patient",
    role: "Physiotherapy Care",
    image:
      "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    number: "02",
    rating: "4.5",
    quote:
      "The focus on understanding the problem first and then building the treatment plan made the overall experience very comfortable.",
    name: "FitMax Patient",
    role: "Rehabilitation Care",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    number: "03",
    rating: "4.7",
    quote:
      "The professional guidance and structured exercises helped me stay consistent throughout my recovery.",
    name: "FitMax Patient",
    role: "Recovery Support",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
];

function TestimonialsSection() {
  return (
    <section
      className="fitmax-testimonials"
      id="testimonials"
    >
      <div className="fitmax-testimonials-container">

        <div className="fitmax-testimonials-top">

          <div className="fitmax-testimonials-label">
            <FitMaxMark/>
            <span>PATIENT EXPERIENCES</span>
          </div>

          <div className="fitmax-testimonials-index">
            <span>11</span>
            <span>REAL EXPERIENCES</span>
          </div>

        </div>

        <div className="fitmax-testimonials-main">

          <div className="fitmax-testimonials-copy">

            <span className="fitmax-testimonials-kicker">
              THE HUMAN SIDE OF RECOVERY
            </span>

            <h2>
              Care that
              <span>moves people.</span>
            </h2>

            <p>
              Every recovery journey is different. These
              experiences reflect the value of personalised
              care, clear guidance and consistent support.
            </p>

            <a
              href="#patient-stories"
              className="fitmax-testimonials-link"
            >
              <span>Explore patient stories</span>
              <span aria-hidden="true">↗</span>
            </a>

          </div>

          <div
            className="fitmax-testimonials-experience"
            id="patient-stories"
          >

            <div className="fitmax-testimonials-feature">

              <div className="fitmax-testimonials-feature-image">

                <img
                  src={testimonials[0].image}
                  alt="Patient receiving physiotherapy care"
                />

                <div
                  className="fitmax-testimonials-feature-overlay"
                  aria-hidden="true"
                />

                <span className="fitmax-testimonials-feature-number">
                  {testimonials[0].number}
                </span>

                <div className="fitmax-testimonials-feature-rating">
                  <span>★★★★★</span>
                  <strong>{testimonials[0].rating}</strong>
                </div>

              </div>

              <div className="fitmax-testimonials-feature-content">

                <FitMaxMark/>

                <span className="fitmax-testimonials-feature-label">
                  PATIENT EXPERIENCE
                </span>

                <div className="fitmax-testimonials-quote-mark">
                  “
                </div>

                <p>
                  {testimonials[0].quote}
                </p>

                <div className="fitmax-testimonials-feature-person">

                  <div className="fitmax-testimonials-avatar">
                    <img
                      src={testimonials[0].image}
                      alt=""
                    />
                  </div>

                  <div>
                    <strong>
                      {testimonials[0].name}
                    </strong>

                    <span>
                      {testimonials[0].role}
                    </span>
                  </div>

                </div>

              </div>

            </div>

            <div className="fitmax-testimonials-side">

              <div className="fitmax-testimonials-side-heading">
                <span>FROM THE FITMAX JOURNEY</span>
                <strong>Real experiences.</strong>
              </div>

              {testimonials.slice(1).map((testimonial) => (
                <article
                  className="fitmax-testimonial-mini"
                  key={testimonial.number}
                >

                  <div className="fitmax-testimonial-mini-image">

                    <img
                      src={testimonial.image}
                      alt="Patient experience with physiotherapy"
                    />

                    <span>
                      {testimonial.number}
                    </span>

                  </div>

                  <div className="fitmax-testimonial-mini-content">

                    <div className="fitmax-testimonial-mini-rating">
                      <span>★★★★★</span>
                      <strong>
                        {testimonial.rating}
                      </strong>
                    </div>

                    <p>
                      {testimonial.quote}
                    </p>

                    <div className="fitmax-testimonial-mini-person">
                      <strong>
                        {testimonial.name}
                      </strong>

                      <span>
                        {testimonial.role}
                      </span>
                    </div>

                  </div>

                </article>
              ))}

              <div className="fitmax-testimonials-flow">

                <div
                  className="fitmax-testimonials-flow-line"
                  aria-hidden="true"
                >
                  <span />
                </div>

                

                

                

              </div>

            </div>

          </div>

        </div>

        <div className="fitmax-testimonials-bottom">

          <div className="fitmax-testimonials-bottom-line">
            <span />
          </div>

          <div className="fitmax-testimonials-bottom-copy">
            <span>PEOPLE AT THE CENTRE</span>

            <strong>
              Personal care.
              <span>Real experiences.</span>
            </strong>
          </div>

          <FitMaxMark/>

        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;