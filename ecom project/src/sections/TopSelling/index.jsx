/**
 * TopSelling Section
 * Displays top-selling products in a grid layout
 */
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import styles from './TopSelling.module.css';

function TopSelling() {
  // Get products 5-8 as top-selling items
  const topSellingProducts = products.slice(4, 8);

  return (
    <section className={styles.topSelling}>
      {/* Section Title */}
      <h2 className={styles.sectionTitle}>TOP SELLING</h2>
      <div className={styles.sectionUnderline}></div>

      {/* Products Grid */}
      <div className={styles.productsGrid}>
        {topSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <button className={styles.viewAllBtn}>View All</button>
    </section>
  );
}

export default TopSelling;
