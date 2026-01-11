import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card" data-animate="fade-up">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        {/* Hover overlay */}
        <div className="product-hover">
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>

      <h3 className="product-name">{product.name}</h3>

      <div className="product-rating">
        ⭐ {product.rating}
      </div>

      <div className="product-price">
        <span className="current">${product.price}</span>

        {product.oldPrice && (
          <>
            <span className="old">${product.oldPrice}</span>
            <span className="discount">-{product.discount}%</span>
          </>
        )}
      </div>
    </div>
  );
}
