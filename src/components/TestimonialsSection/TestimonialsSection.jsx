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

        <div className="fitmax-testimonials-header">

          <div className="fitmax-testimonials-label">
            <span />
            <span>PATIENT EXPERIENCES</span>
          </div>

          <div className="fitmax-testimonials-heading-row">

            <h2>
              Care That
              <span>People Remember.</span>
            </h2>

            <div className="fitmax-testimonials-intro">

              <p>
                Discover how personalised physiotherapy,
                professional guidance and structured
                rehabilitation can make a difference.
              </p>

              <a
                href="#testimonials"
                className="fitmax-testimonials-cta"
              >
                <span>Explore Patient Stories</span>
                <span aria-hidden="true">↗</span>
              </a>

            </div>

          </div>

        </div>

        <div className="fitmax-testimonials-grid">

          {testimonials.map((testimonial) => (
            <article
              className="fitmax-testimonial-card"
              key={testimonial.number}
            >

              <div className="fitmax-testimonial-top">

                <span className="fitmax-testimonial-number">
                  {testimonial.number}
                </span>

                <div className="fitmax-testimonial-rating">

                  <span className="fitmax-testimonial-stars">
                    ★ ★ ★ ★ ★
                  </span>

                  <strong>
                    {testimonial.rating}
                  </strong>

                </div>

              </div>

              <div className="fitmax-testimonial-quote">
                “
              </div>

              <p className="fitmax-testimonial-text">
                {testimonial.quote}
              </p>

              <div className="fitmax-testimonial-person">

                <img
                  src={testimonial.image}
                  alt=""
                />

                <div>
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

        </div>

        <div className="fitmax-testimonials-footer">

          <div className="fitmax-testimonials-footer-line">
            <span />
          </div>

          <p>
            Personal care.
            <strong>Real experiences.</strong>
          </p>

          <span className="fitmax-testimonials-count">
            PATIENT STORIES
          </span>

        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;