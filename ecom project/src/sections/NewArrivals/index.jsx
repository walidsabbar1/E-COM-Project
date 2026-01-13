/**
 * NewArrivals Section
 * Displays newly added products in a grid layout
 */
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import styles from './NewArrivals.module.css';

function NewArrivals() {
  // Get first 4 products as new arrivals
  const newArrivals = products.slice(0, 4);

  return (
    <section className={styles.newArrivals}>
      {/* Section Title */}
      <h2 className={styles.sectionTitle}>NEW ARRIVALS</h2>
      <div className={styles.sectionUnderline}></div>

      {/* Products Grid */}
      <div className={styles.productsGrid}>
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <button className={styles.viewAllBtn}>View All</button>
    </section>
  );
}

export default NewArrivals;
