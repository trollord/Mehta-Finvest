import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Integrity', description: 'Honest advice in your best interest' },
    { title: 'Client First', description: 'Your needs drive every decision' },
    { title: 'Knowledge Driven', description: 'Research-backed recommendations' },
    { title: 'Transparent Communication', description: 'Clear, straightforward advice' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="About Mehta Finvest"
          subtitle="Your trusted partner in financial growth and stability"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-secondary-600 mb-6 leading-relaxed">
              Mehta Finvest is a Mumbai-based mutual fund distribution firm dedicated to helping individuals 
              and families achieve their financial aspirations. We are an authorised sub-broker affiliated with 
              Sapient Wealth, one of India's most respected wealth management companies.
            </p>

            <p className="text-secondary-600 mb-6 leading-relaxed">
              Led by Gautam Chetan Mehta, Mehta Finvest operates with a strong focus on client-centricity, 
              compliance, and ethical advisory practices, strictly in line with AMFI and SEBI regulations.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500 mt-8">
              <h3 className="font-heading font-semibold text-xl mb-4 text-secondary-800">Our Purpose:</h3>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                  <span>To simplify investing.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                  <span>To educate investors.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                  <span>To empower every financial journey with personalised solutions.</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl mb-6 text-secondary-800">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-heading font-semibold text-lg mb-2 text-primary-500">{value.title}</h4>
                  <p className="text-secondary-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;