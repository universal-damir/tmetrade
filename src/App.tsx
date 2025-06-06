import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Markets from './components/Markets';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    document.title = 'TME Trade - European-UAE Business Connections';
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Markets />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;