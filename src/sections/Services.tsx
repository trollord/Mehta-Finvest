import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { services } from '../constants/data';
import Button from '../components/Button';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="What We Offer"
          subtitle="At Mehta Finvest, we offer a curated range of investment solutions designed around your unique needs and goals"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="animate-fade-in h-[200px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-600 italic mb-6">
            Our solutions are advisory-driven, not product-pushed.
          </p>
          <Button href="#contact" variant="primary">
            Discover Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services