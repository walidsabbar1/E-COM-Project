/**
 * ReviewCard Component
 * Displays individual customer review with rating and user info
 */
import styles from './ReviewCard.module.css';

export default function ReviewCard({ review }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className={styles.starFilled}>★</span>);
    }
    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className={styles.starEmpty}>★</span>);
    }
    return stars;
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewStars}>
          {renderStars(review.rating)}
        </div>
        <button className={styles.reviewMenu}>⋯</button>
      </div>

      <div className={styles.reviewAuthor}>
        <div className={styles.authorAvatar}>
          {review.name.charAt(0)}
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{review.name}</span>
          {review.verified && (
            <span className={styles.verifiedBadge}>✓</span>
          )}
        </div>
      </div>

      <p className={styles.reviewText}>{review.review}</p>

      <div className={styles.reviewDate}>Posted on {review.date}</div>
    </div>
  );
}
