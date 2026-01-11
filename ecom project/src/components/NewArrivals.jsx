import ProductCard from "./ProductCard";
import { products } from "../data/products";
import "./NewArrivals.css";

function NewArrivals() {
  // Optional: You can filter only new products
  const newArrivals = products.slice(0, 4); // first 4 items

  return (
    <section className="new-arrivals">
      {/* Title */}
      <h2 className="section-title">NEW ARRIVALS</h2>
      <div className="section-underline"></div>

      {/* Grid */}
      <div className="products-grid">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <button className="view-all-btn">View All</button>
    </section>
  );
}

export default NewArrivals;
