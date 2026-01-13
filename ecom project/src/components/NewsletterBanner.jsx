import "./NewsletterBanner.css";

const NewsletterBanner = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-left">
          <h2>
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>
        </div>

        <div className="newsletter-right">
          <div className="input-wrapper">
            <svg className="email-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
          </div>
          <button className="newsletter-btn">Subscribe to Newsletter</button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
