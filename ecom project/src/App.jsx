import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import BrowseStyle from "./components/BrowseStyle";
import Testimonials from "./components/Testimonials";
import NewsletterBanner from "./components/NewsletterBanner";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrivals />
      <TopSelling />
      <BrowseStyle />
      <Testimonials />
      <NewsletterBanner />
      <Footer />
    </>
  );
}

export default App;
