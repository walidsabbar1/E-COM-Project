/**
 * Cart Component
 * Displays shopping cart items and order summary
 */
import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, cartTotals } = useCart();
  const { subtotal, discountAmount, deliveryFee, total } = cartTotals;

  return (
    <div className={styles.cartSection}>
      <h2 className={styles.cartTitle}>Your Cart</h2>
      
      <div className={styles.cartContent}>
        {/* Cart Items List */}
        <div className={styles.cartItems}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.itemImage} onError={(e) => e.target.src = 'https://placehold.co/124x124/eaeaea/999?text=Product'} />
              
              <div className={styles.itemDetails}>
                <div className={styles.itemHeader}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <button className={styles.deleteBtn} onClick={() => removeItem(item.id)}>
                    <i className="ri-delete-bin-fill"></i>
                  </button>
                </div>
                
                <div className={styles.itemSpecs}>
                  <p><span className={styles.specLabel}>Size:</span> <span className={styles.specValue}>{item.size}</span></p>
                  <p><span className={styles.specLabel}>Color:</span> <span className={styles.specValue}>{item.color}</span></p>
                </div>
                
                <div className={styles.itemFooter}>
                  <span className={styles.itemPrice}>${item.price}</span>
                  
                  <div className={styles.quantityControls}>
                    <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>
                      <i className="ri-subtract-line"></i>
                    </button>
                    <span className={styles.qtyValue}>{item.quantity}</span>
                    <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {cartItems.length === 0 && <p>Your cart is empty.</p>}
        </div>

        {/* Order Summary */}
        <div className={styles.orderSummary}>
          <h3 className={styles.summaryTitle}>Order Summary</h3>
          
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Discount (-20%)</span>
            <span className={styles.discountValue}>-${discountAmount}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          
          <div className={`${styles.summaryRow} ${styles.total}`}>
            <span>Total</span>
            <span>${total}</span>
          </div>

          {/* Promo Code */}
          <div className={styles.promoCode}>
            <div className={styles.promoInputWrapper}>
              <i className={`ri-price-tag-3-line ${styles.promoIcon}`}></i>
              <input type="text" placeholder="Add promo code" className={styles.promoInput} />
            </div>
            <button className={styles.applyBtn}>Apply</button>
          </div>

          <button className={styles.checkoutBtn}>
            Go to Checkout <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
