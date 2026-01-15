/**
 * ProductImageGallery Component
 * Displays product images with thumbnail navigation
 */
import { useState } from 'react';
import styles from './ProductImageGallery.module.css';

export default function ProductImageGallery({ images, productName }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={styles.imageGallery}>
      {/* Thumbnail Column */}
      <div className={styles.thumbnails}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`${styles.thumbnail} ${selectedImage === idx ? styles.thumbnailActive : ''}`}
            onClick={() => setSelectedImage(idx)}
          >
            <img src={img} alt={`${productName} view ${idx + 1}`} />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className={styles.mainImage}>
        <img src={images[selectedImage]} alt={productName} />
      </div>
    </div>
  );
}
