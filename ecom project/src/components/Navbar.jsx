import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar-container">

      {/* Announcement Bar */}
      <div className="announcement">
        Sign up and get 20% off on your first order.
        <span> Sign Up Now</span>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo">SHOP.CO</div>

        <ul className="nav-links">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>

        <div className="nav-right">
          <div className="search-container">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search for products..." />
          </div>

          <i className="ri-shopping-cart-line"></i>
          <i className="ri-user-line"></i>
        </div>
      </nav>

    </header>
  );
}
