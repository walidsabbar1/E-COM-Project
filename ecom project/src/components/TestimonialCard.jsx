import "./TestimonialCard.css";

function TestimonialCard({ name, text, rating }) {
  return (
    <div className="testimonial-card">
      <div className="stars">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      <h4 className="customer-name">{name}</h4>
      <p className="customer-text">{text}</p>
    </div>
  );
}

export default TestimonialCard;
