import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const initialCartItems = [];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(prev => !prev);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      const quantityToAdd = product.quantity || 1;
      
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item);
      }
      return [...prev, { ...product, quantity: quantityToAdd, size: product.size || 'Large', color: product.color || 'White' }];
    });
    openCart();
  };

  // Derived state
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountRate = 0.20;
  const discountAmount = Math.round(subtotal * discountRate);
  const deliveryFee = 15;
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      toggleCart,
      openCart,
      closeCart,
      updateQuantity,
      removeItem,
      addToCart,
      cartTotals: { subtotal, discountAmount, deliveryFee, total }
    }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
