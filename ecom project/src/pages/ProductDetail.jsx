/**
 * Product Detail Page
 * Clean, organized product detail page using modular components
 */
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ProductImageGallery from "../components/ProductImageGallery";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import NewsletterBanner from "../sections/NewsletterBanner";
import { products } from "../data/products";
import { reviewsData } from "../data/productDetailData"; // Keep reviews mock for now
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('reviews');
  
  // Derive product directly
  const foundProduct = products.find(p => p.id === parseInt(id));
  const product = foundProduct ? {
    ...foundProduct,
    images: foundProduct.images || [foundProduct.image],
    reviewCount: foundProduct.reviewCount || 124,
  } : null;

  // Derive related products
  const related = product ? products.filter(p => p.id !== parseInt(id)).slice(0, 4) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="pageContainer" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h2>Product not found</h2>
          <Link to="/category" className={styles.loadMoreBtn} style={{display: 'inline-block', marginTop: '1rem'}}>
            Back to Shop
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/category' },
    { label: product.category || 'Category', to: `/category/${product.category}` },
    { label: product.name, active: true }
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
                images={product.images} 
                productName={product.name} 
              />
              <ProductInfo product={product} />
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
                    All Reviews <span className={styles.reviewCount}>({product.reviewCount || reviewsData.length})</span>
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
                  {reviewsData.slice(0, 6).map(review => (
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
                <p>{product.description || "No description available."}</p>
                <ul style={{ marginTop: '1rem', listStyle: 'inside' }}>
                    <li>Style: {product.style}</li>
                    <li>Category: {product.category}</li>
                    <li>Material: High quality fabric</li>
                </ul>
              </div>
            </section>
          )}

          {/* Tab Content - FAQs */}
          {activeTab === 'faqs' && (
            <section className={styles.faqsSection}>
              <div className={styles.faqsContainer}>
                <h3>Frequently Asked Questions</h3>
                <div style={{ marginTop: '1rem' }}>
                    <details style={{ marginBottom: '1rem', cursor: 'pointer' }}>
                        <summary style={{ fontWeight: '600' }}>What is the return policy?</summary>
                        <p style={{ marginTop: '0.5rem', color: '#666' }}>You can return any item within 30 days of purchase.</p>
                    </details>
                    <details style={{ marginBottom: '1rem', cursor: 'pointer' }}>
                        <summary style={{ fontWeight: '600' }}>How do I choose the right size?</summary>
                        <p style={{ marginTop: '0.5rem', color: '#666' }}>Check our size guide or contact support for assistance.</p>
                    </details>
                </div>
              </div>
            </section>
          )}

          {/* You Might Also Like Section */}
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>YOU MIGHT ALSO LIKE</h2>
            <div className={styles.relatedGrid}>
              {related.map(item => (
                <ProductCard key={item.id} product={item} />
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
