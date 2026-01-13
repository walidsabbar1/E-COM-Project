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
export default Home;