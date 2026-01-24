/**
 * Sidebar Component
 * Filters sidebar with categories, price range, colors, sizes, and dress styles
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar({ onApply }) {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({
    tshirts: true,
    shorts: false,
    shirts: false,
    hoodie: false,
    jeans: false,
  });

  const colors = [
    { name: 'Green', hex: '#00C12B' },
    { name: 'Red', hex: '#F50606' },
    { name: 'Yellow', hex: '#F5DD06' },
    { name: 'Orange', hex: '#F57906' },
    { name: 'Cyan', hex: '#06CAF5' },
    { name: 'Blue', hex: '#063AF5' },
    { name: 'Purple', hex: '#7D06F5' },
    { name: 'Pink', hex: '#F506A4' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Black', hex: '#000000' },
  ];

  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];

  const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

  const handleColorToggle = (colorName) => {
    setSelectedColors(prev =>
      prev.includes(colorName)
        ? prev.filter(c => c !== colorName)
        : [...prev, colorName]
    );
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  
  const handleApply = () => {
    if (onApply) {
      onApply({
        priceRange,
        colors: selectedColors,
        sizes: selectedSizes
      });
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Filters</h2>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7H21M10 12H21M3 17H21" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Categories */}
      <div className="filter-section">
        <ul className="category-list">
             {/* Updated to use Links for navigation filtering */}
          <li>
             <Link to="/category/tshirts" className="category-link">T-shirts</Link>
             <button onClick={() => toggleCategory('tshirts')} className="expand-btn">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={expandedCategories.tshirts ? 'rotated' : ''}>
                  <path d="M6 9L8 11L10 9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </button>
          </li>
          <li>
             <Link to="/category/shorts" className="category-link">Shorts</Link>
             <button onClick={() => toggleCategory('shorts')} className="expand-btn">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={expandedCategories.shorts ? 'rotated' : ''}>
                  <path d="M6 9L8 11L10 9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </button>
          </li>
          <li>
             <Link to="/category/shirts" className="category-link">Shirts</Link>
             <button onClick={() => toggleCategory('shirts')} className="expand-btn">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={expandedCategories.shirts ? 'rotated' : ''}>
                  <path d="M6 9L8 11L10 9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </button>
          </li>
           <li>
             <Link to="/category/hoodie" className="category-link">Hoodie</Link>
             <button onClick={() => toggleCategory('hoodie')} className="expand-btn">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={expandedCategories.hoodie ? 'rotated' : ''}>
                  <path d="M6 9L8 11L10 9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </button>
          </li>
          <li>
             <Link to="/category/jeans" className="category-link">Jeans</Link>
             <button onClick={() => toggleCategory('jeans')} className="expand-btn">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={expandedCategories.jeans ? 'rotated' : ''}>
                  <path d="M6 9L8 11L10 9" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </button>
          </li>
        </ul>
      </div>

      <hr className="divider" />

      {/* Price Range */}
      <div className="filter-section">
        <h3>Price</h3>
        <div className="price-slider">
          <input
            type="range"
            min="50"
            max="200"
            value={priceRange[0]}
            onChange={(e) => {
                const val = Math.min(Number(e.target.value), priceRange[1] - 1);
                setPriceRange([val, priceRange[1]]);
            }}
            className="slider slider-min"
          />
          <input
            type="range"
            min="50"
            max="200"
            value={priceRange[1]}
            onChange={(e) => {
                const val = Math.max(Number(e.target.value), priceRange[0] + 1);
                setPriceRange([priceRange[0], val]);
            }}
            className="slider slider-max"
          />
          <div className="slider-track"></div>
          <div 
            className="slider-range" 
            style={{
                left: `${((priceRange[0] - 50) / 150) * 100}%`,
                width: `${((priceRange[1] - priceRange[0]) / 150) * 100}%`
            }}
          ></div>
        </div>
        <div className="price-labels">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <hr className="divider" />

      {/* Colors */}
      <div className="filter-section">
        <h3>Colors</h3>
        <div className="colors-grid">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`color-dot ${selectedColors.includes(color.name) ? 'selected' : ''}`}
              style={{ 
                backgroundColor: color.hex,
                border: color.hex === '#FFFFFF' ? '1px solid #e5e5e5' : 'none'
              }}
              onClick={() => handleColorToggle(color.name)}
              aria-label={color.name}
            >
              {selectedColors.includes(color.name) && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L6 11L13 4" stroke={color.hex === '#FFFFFF' || color.hex === '#F5DD06' ? '#000' : '#FFF'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Sizes */}
      <div className="filter-section">
        <h3>Size</h3>
        <div className="sizes-grid">
          {sizes.map((size) => (
            <button
              key={size}
              className={`size-button ${selectedSizes.includes(size) ? 'selected' : ''}`}
              onClick={() => handleSizeToggle(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Dress Style */}
      <div className="filter-section">
        <h3>Dress Style</h3>
        <ul className="dress-style-list">
          {dressStyles.map((style) => (
            <li key={style}>
              <Link to={`/category/${style.toLowerCase()}`} className="dress-style-link">
                <span>{style}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Filter Button */}
      <button className="apply-filter-btn" onClick={handleApply}>Apply Filter</button>
    </aside>
  );
}
