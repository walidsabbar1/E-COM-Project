/**
 * Hero Section
 * Main landing section with headline, CTA button, and stats
 */
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Left Content */}
      <div className={styles.heroLeft}>
        <h1>
          FIND CLOTHES <br />
          THAT MATCHES <br />
          <span>YOUR STYLE</span>
        </h1>

        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>

        <button className={styles.shopBtn}>Shop Now</button>

        {/* Stats Section */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div className={styles.stat}>
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div className={styles.stat}>
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Right Side (Background Image) */}
      <div className={styles.heroRight}>
        <img src="/hero-model.png" alt="hero model" />
        <div className={`${styles.decor} ${styles.decor1}`}></div>
        <div className={`${styles.decor} ${styles.decor2}`}></div>
      </div>
    </section>
  );
}
