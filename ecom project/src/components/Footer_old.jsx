import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top: About + Columns */}
      <div className="footer-top">
        {/* Brand + description */}
        <div className="footer-brand">
          <h2>SHOP.CO</h2>
          <p>
            We have clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>

          <div className="footer-socials">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-youtube-fill"></i>
          </div>
        </div>

        {/* Columns */}
        <div className="footer-columns">
          <div className="footer-col">
            <h4>COMPANY</h4>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>

          <div className="footer-col">
            <h4>HELP</h4>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="footer-col">
            <h4>FAQ</h4>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Orders</a>
            <a href="#">Payments</a>
          </div>

          <div className="footer-col">
            <h4>RESOURCES</h4>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How-to Blog</a>
            <a href="#">YouTube Playlist</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="footer-payments">
          <img src="/visa.png" alt="Visa" />
          <img src="/paypal.png" alt="Paypal" />
          <img src="/mastercard.png" alt="Mastercard" />
          <img src="/applepay.png" alt="Apple Pay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
