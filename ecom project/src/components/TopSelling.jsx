import ProductCard from "./ProductCard";
import { products } from "../data/products";
import "./TopSelling.css";

function TopSelling() {
  // Example: pick any 4 top-selling products
  const topSellingProducts = products.slice(4, 8);

  return (
    <section className="top-selling">
      <h2 className="section-title">TOP SELLING</h2>
      <div className="section-underline top"></div>

      <div className="products-grid">
        {topSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <button className="view-all-btn">View All</button>
    </section>
  );
}

export default TopSelling;
