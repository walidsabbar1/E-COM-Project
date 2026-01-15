/**
 * ProductInfo Component
 * Displays product details, options, and add to cart functionality
 */
import { useState } from 'react';
import styles from './ProductInfo.module.css';

export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className={styles.starFilled}>★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className={styles.starHalf}>★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className={styles.starEmpty}>★</span>);
    }
    return stars;
  };

  return (
    <div className={styles.productInfo}>
      <h1 className={styles.productTitle}>{product.name}</h1>

      {/* Rating */}
      <div className={styles.ratingSection}>
        <div className={styles.stars}>
          {renderStars(product.rating)}
        </div>
        <span className={styles.ratingNumber}>{product.rating}/5</span>
      </div>

      {/* Price */}
      <div className={styles.priceSection}>
        <span className={styles.currentPrice}>${product.price}</span>
        {product.originalPrice && (
          <>
            <span className={styles.originalPrice}>${product.originalPrice}</span>
            <span className={styles.discountBadge}>-{product.discount}%</span>
          </>
        )}
      </div>

      {/* Description */}
      <p className={styles.description}>{product.description}</p>

      <hr className={styles.divider} />

      {/* Color Select */}
      <div className={styles.optionGroup}>
        <label className={styles.optionLabel}>Select Colors</label>
        <div className={styles.colorOptions}>
          {product.colors.map((color, idx) => (
            <div
              key={idx}
              className={`${styles.colorCircle} ${selectedColor === idx ? styles.colorCircleActive : ''}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(idx)}
              title={color.name}
            >
              {selectedColor === idx && <span className={styles.checkmark}>✓</span>}
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Size Select */}
      <div className={styles.optionGroup}>
        <label className={styles.optionLabel}>Choose Size</label>
        <div className={styles.sizeOptions}>
          {product.sizes.map((size, idx) => (
            <button
              key={idx}
              className={`${styles.sizeButton} ${selectedSize === idx ? styles.sizeButtonActive : ''}`}
              onClick={() => setSelectedSize(idx)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Quantity and Add to Cart */}
      <div className={styles.actionRow}>
        <div className={styles.quantitySelector}>
          <button onClick={decrementQuantity} className={styles.quantityBtn}>−</button>
          <span className={styles.quantityValue}>{quantity}</span>
          <button onClick={incrementQuantity} className={styles.quantityBtn}>+</button>
        </div>
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>
    </div>
  );
}
