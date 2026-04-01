import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const initialCartItems = [];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(prev => !prev);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const updateQuantity = (cartItemId, change) => {
    setCartItems(items => items.map(item => {
      const currentId = item.cartItemId || item.id;
      if (currentId === cartItemId) {
        const newQty = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (cartItemId) => {
    setCartItems(items => items.filter(item => {
      const currentId = item.cartItemId || item.id;
      return currentId !== cartItemId;
    }));
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const size = product.size || 'Large';
      const color = product.color || 'White';
      const cartItemId = `${product.id}-${size}-${color}`;

      const existing = prev.find(item => {
        const currentId = item.cartItemId || item.id;
        return currentId === cartItemId || currentId === product.id && item.size === size && item.color === color;
      });
      const quantityToAdd = product.quantity || 1;
      
      if (existing) {
        return prev.map(item => {
          const currentId = item.cartItemId || item.id;
          if (currentId === cartItemId || currentId === product.id && item.size === size && item.color === color) {
            return { ...item, quantity: item.quantity + quantityToAdd };
          }
          return item;
        });
      }
      return [...prev, { ...product, cartItemId, quantity: quantityToAdd, size, color }];
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
