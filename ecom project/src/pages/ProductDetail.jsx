/**
 * Product Detail Page
 * Clean, organized product detail page using modular components
 */
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProductImageGallery from "../components/ProductImageGallery";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import NewsletterBanner from "../sections/NewsletterBanner";
import { productData, reviewsData, relatedProducts } from "../data/productDetailData";
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const [activeTab, setActiveTab] = useState('reviews');

  const breadcrumbItems = [
    { label: 'Home', active: false },
    { label: 'Shop', active: false },
    { label: 'Men', active: false },
    { label: 'T-shirts', active: true }
  ];

  return (
    <>
      <Navbar />

      <main className={styles.productDetailPage}>
        <div className="pageContainer">
          {/* Breadcrumb Navigation */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Main Product Section */}
          <section className={styles.productSection}>
            <div className={styles.productContainer}>
              <ProductImageGallery 
                images={productData.images} 
                productName={productData.name} 
              />
              <ProductInfo product={productData} />
            </div>
          </section>

          {/* Tabs Navigation */}
          <ProductTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Tab Content - Reviews */}
          {activeTab === 'reviews' && (
            <section className={styles.reviewsSection}>
              <div className={styles.reviewsContainer}>
                {/* Reviews Header */}
                <div className={styles.reviewsHeader}>
                  <h2 className={styles.reviewsTitle}>
                    All Reviews <span className={styles.reviewCount}>({productData.reviewCount})</span>
                  </h2>
                  <div className={styles.reviewsActions}>
                    <select className={styles.sortDropdown}>
                      <option>Latest</option>
                      <option>Highest Rating</option>
                      <option>Lowest Rating</option>
                    </select>
                    <button className={styles.writeReviewBtn}>Write a Review</button>
                  </div>
                </div>

                {/* Reviews Grid */}
                <div className={styles.reviewsGrid}>
                  {reviewsData.map(review => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>

                {/* Load More Button */}
                <div className={styles.loadMoreContainer}>
                  <button className={styles.loadMoreBtn}>Load More Reviews</button>
                </div>
              </div>
            </section>
          )}

          {/* Tab Content - Product Details */}
          {activeTab === 'details' && (
            <section className={styles.detailsSection}>
              <div className={styles.detailsContainer}>
                <h3>Product Details</h3>
                <p>Detailed product specifications and features will go here.</p>
              </div>
            </section>
          )}

          {/* Tab Content - FAQs */}
          {activeTab === 'faqs' && (
            <section className={styles.faqsSection}>
              <div className={styles.faqsContainer}>
                <h3>Frequently Asked Questions</h3>
                <p>Common questions and answers will go here.</p>
              </div>
            </section>
          )}

          {/* You Might Also Like Section */}
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>YOU MIGHT ALSO LIKE</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
          <NewsletterBanner />
        </div>
      </main>

      
      <Footer />
    </>
  );
}

export default ProductDetail;
