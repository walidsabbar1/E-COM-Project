import "./ProductCard.css";

export default function ProductCard({ product }) {
  // Generate star rating display
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <h3 className="product-name">{product.name}</h3>

      <div className="product-rating">
        {renderStars(product.rating)}
        <span className="rating-number">{product.rating}</span>
      </div>

      <div className="product-price">
        <span className="current">${product.price}</span>
        {product.originalPrice && (
          <>
            <span className="old">${product.originalPrice}</span>
            <span className="discount-badge">-{product.discount}%</span>
          </>
        )}
      </div>

      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}
