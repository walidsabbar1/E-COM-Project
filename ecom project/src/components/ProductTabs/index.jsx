/**
 * ProductTabs Component
 * Tab navigation for product details, reviews, and FAQs
 */
import styles from './ProductTabs.module.css';

export default function ProductTabs({ activeTab, onTabChange }) {
  return (
    <section className={styles.tabsSection}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabNav}>
          <button
            className={`${styles.tabButton} ${activeTab === 'details' ? styles.tabButtonActive : ''}`}
            onClick={() => onTabChange('details')}
          >
            Product Details
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'reviews' ? styles.tabButtonActive : ''}`}
            onClick={() => onTabChange('reviews')}
          >
            Rating & Reviews
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'faqs' ? styles.tabButtonActive : ''}`}
            onClick={() => onTabChange('faqs')}
          >
            FAQs
          </button>
        </div>
      </div>
    </section>
  );
}
