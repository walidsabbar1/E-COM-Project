/**
 * Footer Component
 * Site footer with brand info, navigation columns, social links, and payment methods
 */
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Top Section: Brand + Navigation Columns */}
        <div className={styles.footerTop}>
          {/* Brand Section */}
          <div className={styles.footerBrand}>
            <h2 className={styles.brandLogo}>SHOP.CO</h2>
            <p>
              We have clothes that suits your style and which you're proud to wear.
              From women to men.
            </p>

            {/* Social Media Icons */}
            <div className={styles.footerSocials}>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#f0f0f0"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#f0f0f0" strokeWidth="2"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className={styles.footerColumns}>
            <div className={styles.footerCol}>
              <h4>COMPANY</h4>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Works</a>
              <a href="#">Career</a>
            </div>

            <div className={styles.footerCol}>
              <h4>HELP</h4>
              <a href="#">Customer Support</a>
              <a href="#">Delivery Details</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>

            <div className={styles.footerCol}>
              <h4>FAQ</h4>
              <a href="#">Account</a>
              <a href="#">Manage Deliveries</a>
              <a href="#">Orders</a>
              <a href="#">Payments</a>
            </div>

            <div className={styles.footerCol}>
              <h4>RESOURCES</h4>
              <a href="#">Free eBooks</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How-to Blog</a>
              <a href="#">YouTube Playlist</a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright + Payment Methods */}
        <div className={styles.footerBottom}>
          <p>Shop.co © 2000-2026, All Rights Reserved</p>

          <div className={styles.footerPayments}>
            <img src="/payment/Visa.svg" alt="Visa" className={styles.paymentIcon} />
            <img src="/payment/Mastercard.svg" alt="Mastercard" className={styles.paymentIcon} />
            <img src="/payment/Paypal.svg" alt="PayPal" className={styles.paymentIcon} />
            <img src="/payment/Pay.svg" alt="Apple Pay" className={styles.paymentIcon} />
            <img src="/payment/G Pay.svg" alt="Google Pay" className={styles.paymentIcon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
