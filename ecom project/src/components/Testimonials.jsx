import TestimonialCard from "./TestimonialCard";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.CO. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      name: "Alex K.",
      rating: 5,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable."
    },
    {
      name: "James L.",
      rating: 4,
      text: "As someone who’s always on the lookout for unique fashion pieces, I’m thrilled to have stumbled upon Shopco. The selection of clothes is diverse and stylish."
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>
        <div className="controls">
          <button className="arrow-btn" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="arrow-btn" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <TestimonialCard
            key={item.name}
            name={item.name}
            rating={item.rating}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
