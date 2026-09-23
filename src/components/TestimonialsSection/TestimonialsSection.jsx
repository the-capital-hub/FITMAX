import { useState } from "react";
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
      "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "02",
    rating: "4.5",
    quote:
      "The focus on understanding the problem first and then building the treatment plan made the overall experience very comfortable.",
    name: "FitMax Patient",
    role: "Rehabilitation Care",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    number: "03",
    rating: "4.7",
    quote:
      "The professional guidance and structured exercises helped me stay consistent throughout my recovery.",
    name: "FitMax Patient",
    role: "Recovery Support",
    image:
      "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      className="fitmax-testimonials"
      id="testimonials"
    >
      <div className="fitmax-testimonials-container">

        <div className="fitmax-testimonials-top">

          <div className="fitmax-testimonials-label">
            <FitMaxMark />

            <span>
              PATIENT EXPERIENCES
            </span>
          </div>

          <div className="fitmax-testimonials-counter">

            <span className="fitmax-testimonials-counter-current">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="fitmax-testimonials-counter-line" />

            <span>
              {String(testimonials.length).padStart(2, "0")}
            </span>

          </div>

        </div>


        <div className="fitmax-testimonials-main">

          <div className="fitmax-testimonials-story">

            <span className="fitmax-testimonials-kicker">
              THE HUMAN SIDE OF RECOVERY
            </span>

            <h2>
              Care that
              <span>
                moves people.
              </span>
            </h2>

            <p>
              Every recovery journey is different. Personalised care,
              clear guidance and consistent support can make the
              experience easier to understand and follow.
            </p>

            <a
              href="#patient-stories"
              className="fitmax-testimonials-link"
            >
              <span>
                Explore patient stories
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </a>


            <div className="fitmax-testimonials-journey">

              <div className="fitmax-testimonials-journey-line">
                <span />
              </div>

              <div className="fitmax-testimonials-journey-items">

                <div className="fitmax-testimonials-journey-item active">
                  <span>01</span>
                  <strong>UNDERSTAND</strong>
                </div>

                <div className="fitmax-testimonials-journey-item">
                  <span>02</span>
                  <strong>RECOVER</strong>
                </div>

                <div className="fitmax-testimonials-journey-item">
                  <span>03</span>
                  <strong>MOVE</strong>
                </div>

              </div>

            </div>

          </div>


          <div
            className="fitmax-testimonials-experience"
            id="patient-stories"
          >

            <div className="fitmax-testimonials-feature">

              <div className="fitmax-testimonials-image">

                <img
                  key={activeTestimonial.image}
                  src={activeTestimonial.image}
                  alt="Physiotherapy care experience"
                />

                <div
                  className="fitmax-testimonials-image-overlay"
                  aria-hidden="true"
                />

                <div className="fitmax-testimonials-image-top">

                  <span>
                    {activeTestimonial.number}
                  </span>

                  <span>
                    PATIENT EXPERIENCE
                  </span>

                </div>

                <div className="fitmax-testimonials-rating">

                  <span>
                    ★★★★★
                  </span>

                  <strong>
                    {activeTestimonial.rating}
                  </strong>

                </div>

              </div>


              <div className="fitmax-testimonials-content">

                <div className="fitmax-testimonials-content-top">

                  

                  

                </div>

                <div className="fitmax-testimonials-quote">
                  “
                </div>

                <p>
                  {activeTestimonial.quote}
                </p>

                <div className="fitmax-testimonials-person">

                  <div className="fitmax-testimonials-avatar">

                    <img
                      src={activeTestimonial.image}
                      alt=""
                    />

                  </div>

                  <div>

                    <strong>
                      {activeTestimonial.name}
                    </strong>

                    <span>
                      {activeTestimonial.role}
                    </span>

                  </div>

                </div>

              </div>

            </div>


            <div className="fitmax-testimonials-stories">

              <div className="fitmax-testimonials-stories-heading">

                <span>
                  FROM THE FITMAX JOURNEY
                </span>

                <strong>
                  Real experiences.
                </strong>

              </div>


              <div className="fitmax-testimonials-story-list">

                {testimonials.map((testimonial, index) => (
                  <button
                    type="button"
                    key={testimonial.number}
                    className={`fitmax-testimonial-story ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View experience ${testimonial.number}`}
                  >

                    <div className="fitmax-testimonial-story-image">

                      <img
                        src={testimonial.image}
                        alt=""
                      />

                      <span>
                        {testimonial.number}
                      </span>

                    </div>


                    <div className="fitmax-testimonial-story-content">

                      <div className="fitmax-testimonial-story-rating">

                        <span>
                          ★★★★★
                        </span>

                        <strong>
                          {testimonial.rating}
                        </strong>

                      </div>

                      <p>
                        {testimonial.quote}
                      </p>

                      <div className="fitmax-testimonial-story-person">

                        <strong>
                          {testimonial.name}
                        </strong>

                        <span>
                          {testimonial.role}
                        </span>

                      </div>

                    </div>


                    <span
                      className="fitmax-testimonial-story-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                  </button>
                ))}

              </div>

            </div>

          </div>

        </div>


        <div className="fitmax-testimonials-bottom">

          <div className="fitmax-testimonials-bottom-line">
            <span />
          </div>

          <div className="fitmax-testimonials-bottom-copy">

            <span>
              PEOPLE AT THE CENTRE
            </span>

            <strong>
              Personal care.
              <span>
                Real experiences.
              </span>
            </strong>

          </div>

          <FitMaxMark />

        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;