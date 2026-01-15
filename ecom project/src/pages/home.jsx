import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import NewArrivals from '../sections/NewArrivals';
import TopSelling from '../sections/TopSelling';
import BrowseStyle from '../sections/BrowseStyle';
import Testimonials from '../sections/Testimonials';
import NewsletterBanner from '../sections/NewsletterBanner';
import Footer from '../components/Footer';  
function Home() {
  return (
    <>
      {/* Full-width sections */}
      <Navbar />
      <Hero />
      
      {/* Content sections with global horizontal padding */}
      <div className="pageContainer">
        <NewArrivals />
        <TopSelling />
        <BrowseStyle />
        <Testimonials />
        <NewsletterBanner />
      </div>
      
      {/* Full-width footer */}
      <Footer />
    </>
  );
}  
export default Home;