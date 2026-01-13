# E-Commerce Project - Clean Code Structure

## 📁 Project Structure

```
src/
├── components/          # React components with their CSS
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── ProductCard.jsx
│   ├── ProductCard.css
│   ├── NewArrivals.jsx
│   ├── NewArrivals.css
│   ├── TopSelling.jsx
│   ├── TopSelling.css
│   ├── BrowseStyle.jsx
│   ├── BrowseStyle.css
│   ├── Testimonials.jsx
│   ├── Testimonials.css
│   ├── TestimonialCard.jsx
│   ├── TestimonialCard.css
│   ├── NewsletterBanner.jsx
│   ├── NewsletterBanner.css
│   ├── Footer.jsx
│   └── Footer.css
│
├── data/               # Data files
│   └── products.js
│
├── styles/             # Global styles
│   ├── variables.css   # CSS custom properties (design tokens)
│   └── global.css      # Global resets and utilities
│
├── assets/             # Images, fonts, etc.
│
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🎨 Design System

### CSS Variables (Design Tokens)
All design values are centralized in `src/styles/variables.css`:

- **Colors**: Primary, text, background, border, and accent colors
- **Typography**: Font sizes, weights, and families
- **Spacing**: Consistent spacing scale (xs to 9xl)
- **Border Radius**: Predefined radius sizes
- **Shadows**: Elevation system
- **Transitions**: Standard animation durations
- **Z-Index**: Layering system

### Usage Example
```css
.my-component {
  color: var(--color-text-primary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  transition: var(--transition-base);
}
```

## 🧹 Code Quality Standards

### CSS Best Practices

1. **Use CSS Variables**: Always use design tokens from `variables.css`
   ```css
   /* ✅ Good */
   color: var(--color-text-primary);
   
   /* ❌ Bad */
   color: #111;
   ```

2. **Consistent Naming**: Use BEM-like naming convention
   ```css
   .component-name { }
   .component-name__element { }
   .component-name--modifier { }
   ```

3. **Mobile-First**: Write mobile styles first, then add media queries
   ```css
   .grid {
     grid-template-columns: 1fr;
   }
   
   @media (min-width: 768px) {
     .grid {
       grid-template-columns: repeat(4, 1fr);
     }
   }
   ```

4. **Organize CSS Properties**:
   - Positioning
   - Display & Box Model
   - Typography
   - Visual (colors, shadows)
   - Misc (transitions, transforms)

5. **Avoid Magic Numbers**: Use spacing variables
   ```css
   /* ✅ Good */
   padding: var(--spacing-xl) var(--spacing-4xl);
   
   /* ❌ Bad */
   padding: 20px 40px;
   ```

### Component Structure

Each component should:
- Have its own file
- Include its own CSS file
- Be self-contained and reusable
- Use semantic HTML
- Be accessible (ARIA labels where needed)

## 🚀 Getting Started

1. All components automatically have access to CSS variables
2. Import order in `main.jsx`:
   - Variables first
   - Global styles second
   - Components last

3. Component CSS files only contain component-specific styles
4. Global utilities and resets are in `global.css`

## 📝 Maintenance

- **Adding new colors**: Update `variables.css`
- **New spacing values**: Add to spacing section in `variables.css`
- **Common utilities**: Add to `global.css`
- **Component styles**: Keep in component's own CSS file

## 🎯 Benefits

✅ Consistent design across the entire app
✅ Easy to maintain and update
✅ Better performance (CSS variables are native)
✅ Scalable architecture
✅ Clear organization
✅ No duplicate code
✅ Professional code structure
