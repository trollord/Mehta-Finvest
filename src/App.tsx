import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Resources from './sections/Resources';
import Contact from './sections/Contact';
import Disclaimer from './sections/Disclaimer';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Mehta Finvest - Your Partner in Purposeful Investing';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Resources />
        <Contact />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
}

export default App;