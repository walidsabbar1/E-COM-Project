import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import SlideCart from "./components/SlideCart";

function App() {
  return (
    <>
      <SlideCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
