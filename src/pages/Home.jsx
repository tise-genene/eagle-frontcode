// src/pages/Home.jsx

import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Blog from './Blog';
import FAQsSection from './FAQsSection';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Services/>
      <Testimonials/>
      <Blog/>
      <FAQsSection/>
      <Contact/>
    </div>
  );
};

export default Home;
