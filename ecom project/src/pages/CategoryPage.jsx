/**
 * Category Page
 * Shop page with sidebar filters and product grid
 */
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './CategoryPage.css';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('most-popular');
  const productsPerPage = 9;

  // Category configuration
  const categoryConfig = {
    'sale': { title: 'On Sale', breadcrumb: 'On Sale' },
    'new-arrivals': { title: 'New Arrivals', breadcrumb: 'New Arrivals' },
    'brands': { title: 'Brands', breadcrumb: 'Brands' },
    'casual': { title: 'Casual', breadcrumb: 'Casual' },
    'formal': { title: 'Formal', breadcrumb: 'Formal' },
    'party': { title: 'Party', breadcrumb: 'Party' },
    'gym': { title: 'Gym', breadcrumb: 'Gym' },
  };

  const currentCategory = categoryConfig[categoryName] || { title: 'Shop', breadcrumb: 'All Products' };

  // Calculate pagination
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // Add sorting logic here if needed
  };

  return (
    <>
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="pageContainer">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">›</span>
          <Link to="/category">Shop</Link>
          <span className="separator">›</span>
          <span className="current">{currentCategory.breadcrumb}</span>
        </nav>
      </div>

      <div className="pageContainer category-layout">
        <Sidebar />

        <main className="category-main">
          {/* Category Header */}
          <div className="category-header">
            <h1>{currentCategory.title}</h1>
            <div className="category-controls">
              <span className="product-count">
                Showing {startIndex + 1}–{Math.min(endIndex, totalProducts)} of {totalProducts} Products
              </span>
              <div className="sort-dropdown">
                <label>Sort by:</label>
                <select value={sortBy} onChange={handleSortChange}>
                  <option value="most-popular">Most Popular</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous
            </button>

            <div className="pagination-numbers">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
