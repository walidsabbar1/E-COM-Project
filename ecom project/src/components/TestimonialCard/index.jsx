/**
 * TestimonialCard Component
 * Displays customer testimonial with rating, name, and review text
 */
import styles from './TestimonialCard.module.css';

function TestimonialCard({ name, text, rating }) {
  return (
    <div className={styles.testimonialCard}>
      {/* Star Rating */}
      <div className={styles.stars}>
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      {/* Customer Name with Verified Badge */}
      <h4 className={styles.customerName}>{name}</h4>

      {/* Testimonial Text */}
      <p className={styles.customerText}>{text}</p>
    </div>
  );
}

export default TestimonialCard;
