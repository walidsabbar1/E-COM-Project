/**
 * Cart Page
 */
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import NewsletterBanner from '../sections/NewsletterBanner';

const CartPage = () => {
  const breadcrumbItems = [
    { label: 'Home', active: false },
    { label: 'Cart', active: true }
  ];

  return (
    <>
      <Navbar />
      <div className="pageContainer">
        <Breadcrumb items={breadcrumbItems} />
        <Cart />
      </div>
      <NewsletterBanner />
      <Footer />
    </>
  );
};

export default CartPage;
