/**
 * ProductCard Component
 * Displays individual product with image, name, rating, price, and add to cart button
 */
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  /**
   * Generate star rating display
   * @param {number} rating - Product rating (0-5)
   * @returns {Array} Array of star elements
   */
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className={`${styles.star} ${styles.full}`}>★</span>);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<span key="half" className={`${styles.star} ${styles.half}`}>★</span>);
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className={`${styles.star} ${styles.empty}`}>★</span>);
    }

    return stars;
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation if button is inside Link (though currently it's outside, safer to keep)
    e.stopPropagation(); // Stop event bubbling
    addToCart(product);
  };

  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        {/* Product Image */}
        <div className={styles.productImage}>
          <img src={product.image} alt={product.name} />
        </div>

        {/* Product Name */}
        <h3 className={styles.productName}>{product.name}</h3>

        {/* Rating */}
        <div className={styles.productRating}>
          {renderStars(product.rating)}
          <span className={styles.ratingNumber}>{product.rating}</span>
        </div>

        {/* Price */}
        <div className={styles.productPrice}>
          <span className={styles.current}>${product.price}</span>
          {product.originalPrice && (
            <>
              <span className={styles.old}>${product.originalPrice}</span>
              <span className={styles.discountBadge}>-{product.discount}%</span>
            </>
          )}
        </div>
      </Link>

      {/* Add to Cart Button */}
      <button 
        className={styles.addToCartBtn}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
