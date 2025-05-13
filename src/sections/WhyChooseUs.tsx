import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { whyChooseUs } from '../constants/data';
import * as LucideIcons from 'lucide-react';
import Button from '../components/Button';

const WhyChooseUs = () => {
  return (
    <section 
      id="why-us" 
      className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We differentiate ourselves through our unwavering commitment to your financial success"
          center
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {whyChooseUs.map((item, index) => {
            const Icon = (LucideIcons as any)[item.icon];
            
            return (
              <div 
                key={item.title}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 animate-fade-in hover:-translate-y-2 h-[200px] flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start h-full">
                  <div className="p-2 bg-white/20 rounded-full mr-4 transition-transform duration-500 group-hover:scale-110 flex-shrink-0">
                    {Icon && <Icon size={24} className="text-white transition-transform duration-500 group-hover:rotate-12" />}
                  </div>
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-2 transition-colors duration-300 group-hover:text-primary-100">{item.title}</h3>
                      <p className="text-white/90 line-clamp-3">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            href="#contact" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 focus:ring-white animate-pulse-subtle"
          >
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;