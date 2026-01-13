/**
 * Main App Component
 * Assembles all sections to create the homepage
 */
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import NewArrivals from "./sections/NewArrivals";
import TopSelling from "./sections/TopSelling";
import BrowseStyle from "./sections/BrowseStyle";
import Testimonials from "./sections/Testimonials";
import NewsletterBanner from "./sections/NewsletterBanner";
import Footer from "./components/Footer";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
