/**
 * Navbar Component
 * Fixed navigation bar with announcement banner, logo, nav links, search, and user icons
 */
import { useEffect, useState } from "react";
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.navbarContainer}>
      {/* Announcement Bar */}
      <div className={styles.announcement}>
        Sign up and get 20% off on your first order.
        <span> Sign Up Now</span>
      </div>

      {/* Main Navbar */}
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
        <div className={`pageContainer ${styles.navContent}`}>
          {/* Logo */}
          <div className={styles.logo}>SHOP.CO</div>

          {/* Navigation Links */}
          <ul className={styles.navLinks}>
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>

          {/* Right Side: Search + Icons */}
          <div className={styles.navRight}>
            <div className={styles.searchContainer}>
              <i className="ri-search-line"></i>
              <input type="text" placeholder="Search for products..." />
            </div>

            <i className="ri-shopping-cart-line"></i>
            <i className="ri-user-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
