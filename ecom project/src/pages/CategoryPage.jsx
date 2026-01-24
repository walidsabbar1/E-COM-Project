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
  const [filters, setFilters] = useState({
    priceRange: [50, 200],
    colors: [],
    sizes: []
  });
  
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
    // Map standard categories too if needed for titles, otherwise fallback
    'tshirts': { title: 'T-Shirts', breadcrumb: 'T-Shirts' },
    'shirts': { title: 'Shirts', breadcrumb: 'Shirts' },
    'shorts': { title: 'Shorts', breadcrumb: 'Shorts' },
    'jeans': { title: 'Jeans', breadcrumb: 'Jeans' },
    'hoodie': { title: 'Hoodies', breadcrumb: 'Hoodies' },
  };

  const currentCategory = categoryConfig[categoryName] || { 
    title: categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : 'Shop', 
    breadcrumb: categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : 'All Products' 
  };
  
  // Filter Logic
  const filteredProducts = products.filter(product => {
    // 1. Category/Style Filter (URL param)
    if (categoryName) {
      if (categoryName === 'sale' || categoryName === 'new-arrivals') {
        // Special logic for these if data supports it, or ignore for now/show all
        // For now let's assume 'sale' means discount > 0
        if (categoryName === 'sale' && !product.discount) return false;
        // 'new-arrivals' might be ID based or just show all
      } else {
        const matchesCategory = product.category === categoryName;
        const matchesStyle = product.style && product.style.toLowerCase() === categoryName;
        if (!matchesCategory && !matchesStyle) return false;
      }
    }

    // 2. Price Filter
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }

    // 3. Color Filter
    if (filters.colors.length > 0) {
      const productColors = product.colors || [];
      const hasMatch = filters.colors.some(color => productColors.includes(color));
      if (!hasMatch) return false;
    }

    // 4. Size Filter
    if (filters.sizes.length > 0) {
      const productSizes = product.sizes || [];
      const hasMatch = filters.sizes.some(size => productSizes.includes(size));
      if (!hasMatch) return false;
    }

    return true;
  });

  // Sort Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low-high') return a.price - b.price;
    if (sortBy === 'price-high-low') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return b.id - a.id; // Assuming higher ID is newer
    return 0; // 'most-popular' default order
  });

  // Pagination
  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  // Reset page when filters/category change
  // Note: we might want a useEffect for this, but simplest is to just clamp or check render.
  // Better: separate effect.
  
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };
  
  const handleApplyFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1);
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
          {categoryName && (
             <>
               <span className="separator">›</span>
               <span className="current">{currentCategory.breadcrumb}</span>
             </>
          )}
        </nav>
      </div>

      <div className="pageContainer category-layout">
        <Sidebar onApply={handleApplyFilters} />

        <main className="category-main">
          {/* Category Header */}
          <div className="category-header">
            <h1>{currentCategory.title}</h1>
            <div className="category-controls">
              <span className="product-count">
                Showing {totalProducts > 0 ? startIndex + 1 : 0}–{Math.min(endIndex, totalProducts)} of {totalProducts} Products
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
          {currentProducts.length > 0 ? (
            <div className="products-grid">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No products match your filters.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
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
                {[...Array(totalPages)].map((_, index) => {
                  // Logic to show limited page numbers can be added here, currently showing all
                  return (
                    <button
                      key={index + 1}
                      className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  );
                })}
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
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}
