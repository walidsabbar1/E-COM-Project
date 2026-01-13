/**
 * Testimonials Section
 * Displays customer testimonials with navigation controls
 */
import TestimonialCard from "../../components/TestimonialCard";
import styles from './Testimonials.module.css';

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
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is diverse and stylish."
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      {/* Header with Title and Navigation */}
      <div className={styles.testimonialsHeader}>
        <h2 className={styles.sectionTitle}>OUR HAPPY CUSTOMERS</h2>
        
        <div className={styles.controls}>
          <button className={styles.arrowBtn} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.arrowBtn} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className={styles.testimonialsGrid}>
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
