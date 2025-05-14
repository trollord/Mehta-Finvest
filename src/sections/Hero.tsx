import React, { useEffect, useState } from 'react';
import Button from '../components/Button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-secondary-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary-50 rounded-bl-full opacity-30 transform translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'}`}>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-secondary-800 mb-6 leading-tight">
              Welcome to <span className="text-primary-500">Mehta Finvest</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed">
              At Mehta Finvest, clarity meets conviction. We believe true wealth is built on thoughtful decisions, consistent discipline, and deep understanding. 
              With every interaction, we aim to simplify complexity and create long-term value tailored to your life's vision.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="#contact" variant="primary" size="lg">
                Start Your Journey
              </Button>
              <Button href="#about" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;