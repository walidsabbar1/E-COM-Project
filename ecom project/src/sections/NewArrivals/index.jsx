/**
 * NewArrivals Section
 * Displays newly added products in a grid layout
 */
import { Link } from 'react-router-dom';
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
      <Link to="/category/new-arrivals" className={styles.viewAllBtn}>View All</Link>
    </section>
  );
}

export default NewArrivals;
