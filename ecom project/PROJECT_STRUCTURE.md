# E-Commerce Project - Professional React Structure

## 📁 Project Structure

```
ecom-project/
├── assets/
│   ├── images/           # Product images, banners, etc.
│   └── icons/            # SVG icons and icon assets
│
├── public/
│   ├── hero-model.png
│   ├── images/
│   └── payment/
│
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar/
│   │   │   ├── index.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Footer/
│   │   │   ├── index.jsx
│   │   │   └── Footer.module.css
│   │   ├── ProductCard/
│   │   │   ├── index.jsx
│   │   │   └── ProductCard.module.css
│   │   └── TestimonialCard/
│   │       ├── index.jsx
│   │       └── TestimonialCard.module.css
│   │
│   ├── sections/         # Page sections (Hero, Features, etc.)
│   │   ├── Hero/
│   │   │   ├── index.jsx
│   │   │   └── Hero.module.css
│   │   ├── NewArrivals/
│   │   │   ├── index.jsx
│   │   │   └── NewArrivals.module.css
│   │   ├── TopSelling/
│   │   │   ├── index.jsx
│   │   │   └── TopSelling.module.css
│   │   ├── BrowseStyle/
│   │   │   ├── index.jsx
│   │   │   └── BrowseStyle.module.css
│   │   ├── Testimonials/
│   │   │   ├── index.jsx
│   │   │   └── Testimonials.module.css
│   │   └── NewsletterBanner/
│   │       ├── index.jsx
│   │       └── NewsletterBanner.module.css
│   │
│   ├── data/             # Static data and configurations
│   │   └── products.js
│   │
│   ├── styles/           # Global styles and CSS variables
│   │   ├── variables.css
│   │   └── global.css
│   │
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # App entry point
│   └── index.css         # Root styles
│
├── package.json
├── vite.config.js
└── README.md
```

## 🏗️ Architecture Overview

### **Components** (`src/components/`)
Reusable UI components that can be used across multiple sections or pages:
- **Navbar**: Fixed navigation bar with announcement, logo, links, search
- **Footer**: Site footer with links, social media, payment methods
- **ProductCard**: Individual product display with image, rating, price, CTA
- **TestimonialCard**: Customer review card with rating and verified badge

### **Sections** (`src/sections/`)
Page-level sections that compose the homepage:
- **Hero**: Main landing section with headline, CTA, and stats
- **NewArrivals**: Product grid showing newly added items
- **TopSelling**: Product grid showing best-selling items
- **BrowseStyle**: Style category browser with image cards
- **Testimonials**: Customer reviews carousel
- **NewsletterBanner**: Email subscription form

### **Data** (`src/data/`)
Static data and configuration files:
- `products.js`: Product catalog with 8 items (images, prices, ratings)

### **Styles** (`src/styles/`)
Global styling system:
- `variables.css`: 110+ CSS custom properties (design tokens)
- `global.css`: Global resets and utility classes

## 🎨 CSS Modules Convention

All components use **CSS Modules** for scoped styling:

```jsx
// Component file: components/ProductCard/index.jsx
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <h3 className={styles.productName}>{product.name}</h3>
    </div>
  );
}
```

```css
/* CSS Module: components/ProductCard/ProductCard.module.css */
.productCard {
  background: var(--color-bg-light);
  padding: var(--spacing-xl);
}

.productName {
  font-size: var(--font-size-xl);
  color: var(--color-text-primary);
}
```

### Class Naming Convention
- **CSS Modules**: camelCase (`.productCard`, `.sectionTitle`)
- **Global classes**: kebab-case (`.container`, `.flex-center`)
- **CSS Variables**: kebab-case (`--color-primary`, `--spacing-xl`)

## 🎯 Design System (CSS Variables)

The project uses a centralized design system in `styles/variables.css`:

### Color System
```css
--color-primary: #111           /* Main brand color */
--color-text-primary: #111      /* Primary text */
--color-text-secondary: #666    /* Secondary text */
--color-bg-primary: #ffffff     /* Main background */
--color-accent-yellow: #FFC107  /* Star ratings */
```

### Typography
```css
--font-size-xs: 12px
--font-size-sm: 13px
--font-size-md: 15px
--font-size-lg: 16px
--font-size-xl: 18px
--font-size-2xl: 20px
/* ... up to 8xl */

--font-weight-light: 300
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

### Spacing System
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-lg: 15px
--spacing-xl: 20px
/* ... up to 9xl (100px) */
```

### Border Radius
```css
--radius-sm: 6px
--radius-md: 8px
--radius-lg: 10px
--radius-xl: 12px
--radius-2xl: 14px
--radius-3xl: 18px
--radius-4xl: 20px
--radius-5xl: 30px
--radius-full: 9999px
--radius-round: 50%
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📦 Component Usage Examples

### Using ProductCard
```jsx
import ProductCard from './components/ProductCard';

const product = {
  id: 1,
  name: "T-shirt with Tape Details",
  image: "/images/product1.png",
  rating: 4.5,
  price: 120,
  originalPrice: 160,
  discount: 25
};

<ProductCard product={product} />
```

### Using Sections
```jsx
import Hero from './sections/Hero';
import NewArrivals from './sections/NewArrivals';

function HomePage() {
  return (
    <>
      <Hero />
      <NewArrivals />
    </>
  );
}
```

## 🎯 Key Features

✅ **CSS Modules** - Scoped styling, no naming conflicts
✅ **Design Tokens** - 110+ CSS variables for consistency
✅ **Component Architecture** - Reusable, modular components
✅ **Professional Structure** - Industry-standard folder organization
✅ **Type Safety Ready** - Easy to add TypeScript later
✅ **Performance** - Vite for fast development and builds
✅ **Maintainable** - Clean code with helpful comments

## 📝 Code Standards

### Naming Conventions
- **Components**: PascalCase (`ProductCard`, `Hero`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Modules**: camelCase class names (`.productCard`)
- **Functions**: camelCase (`renderStars`, `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_PRODUCTS`)

### Import Order
```jsx
// 1. External libraries
import { useState, useEffect } from 'react';

// 2. Internal components
import ProductCard from '../../components/ProductCard';

// 3. Data/utilities
import { products } from '../../data/products';

// 4. Styles (always last)
import styles from './Component.module.css';
```

### Component Structure
```jsx
/**
 * Component description
 * Brief explanation of what this component does
 */
import styles from './Component.module.css';

export default function Component({ prop1, prop2 }) {
  // 1. Hooks
  const [state, setState] = useState(null);

  // 2. Derived state / computed values
  const computedValue = useMemo(() => {...}, [dep]);

  // 3. Event handlers
  const handleClick = () => {...};

  // 4. Effects
  useEffect(() => {...}, []);

  // 5. Render
  return (
    <div className={styles.component}>
      {/* JSX */}
    </div>
  );
}
```

## 🔧 Next Steps

Future enhancements to consider:
- [ ] Add TypeScript for type safety
- [ ] Implement React Router for multi-page navigation
- [ ] Add state management (Context API or Zustand)
- [ ] Create custom hooks (`useCart`, `useProducts`)
- [ ] Add unit tests (Vitest + React Testing Library)
- [ ] Implement lazy loading for images
- [ ] Add error boundaries
- [ ] Create a component library/Storybook

## 📄 License

This project is part of a learning exercise.

---

**Refactored on**: January 2026
**Stack**: React 18 + Vite + CSS Modules
**Design System**: Custom CSS Variables (110+ tokens)
