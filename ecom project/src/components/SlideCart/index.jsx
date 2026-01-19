import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './SlideCart.module.css';

const SlideCart = () => {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    updateQuantity, 
    removeItem, 
    cartTotals 
  } = useCart();
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate('/cart');
  };

  if (!isCartOpen && typeof document !== 'undefined') {
    // We could return null here to not render, but for CSS transitions 
    // we often render it always and toggle classes. 
    // However, if we want it to be fully removed when closed, that's fine too.
    // Better to keep it mounted for transition.
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className={`${styles.overlay} ${isCartOpen ? styles.overlayOpen : ''}`} 
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isCartOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Your Cart ({cartItems.length})</h2>
          <button className={styles.closeBtn} onClick={closeCart}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className={styles.content}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty.</p>
              <button onClick={() => { closeCart(); navigate('/'); }} style={{marginTop: '1rem', textDecoration: 'underline', background: 'none', border:'none', cursor:'pointer', color: 'var(--color-primary)'}}>
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className={styles.itemImage}
                  onError={(e) => e.target.src = 'https://placehold.co/80x80/eaeaea/999?text=Product'} 
                />
                
                <div className={styles.itemInfo}>
                  <div>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <div className={styles.itemMeta}>
                      {item.size} / {item.color}
                    </div>
                  </div>
                  
                  <div className={styles.itemControls}>
                    <span className={styles.price}>${item.price}</span>
                    
                    <div className={styles.qtyControls}>
                      <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>
                        <i className="ri-subtract-line"></i>
                      </button>
                      <span className={styles.qtyValue}>{item.quantity}</span>
                      <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>
                        <i className="ri-add-line"></i>
                      </button>
                    </div>

                    <button className={styles.deleteBtn} onClick={() => removeItem(item.id)}>
                      <i className="ri-delete-bin-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${cartTotals.subtotal}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Total</span>
              <span>${cartTotals.total}</span>
            </div>
            
            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Checkout <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SlideCart;
