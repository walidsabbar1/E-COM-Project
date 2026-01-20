import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import SlideCart from "./components/SlideCart";

function App() {
  return (
    <>
      <SlideCart />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Product */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Categories */}
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />

        {/* Cart */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
