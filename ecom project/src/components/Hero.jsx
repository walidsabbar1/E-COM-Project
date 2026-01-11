import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>
          FIND CLOTHES <br />
          THAT MATCHES <br />
          <span>YOUR STYLE</span>
        </h1>

        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>

        <button className="shop-btn">Shop Now</button>

        {/* Stats */}
        <div className="stats">
          <div className="stat">
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div className="stat">
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div className="stat">
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <img src="/hero-model.png" alt="hero model" />
        <div className="decor decor-1"></div>
        <div className="decor decor-2"></div>
      </div>

    </section>
  );
}
