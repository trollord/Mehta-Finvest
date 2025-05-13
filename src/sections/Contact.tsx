import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { contactInfo } from '../constants/data';
import { Mail, Phone, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    setShowSuccess(true);
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Let's Build Your Financial Future Together"
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
              <h3 className="font-heading font-semibold text-xl mb-6 text-secondary-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-primary-50 rounded-full mr-4 flex-shrink-0">
                    <MapPin size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-800">{contactInfo.name}</p>
                    <p className="text-primary-600 text-sm">{contactInfo.title}</p>
                    <p className="text-secondary-600 mt-1">{contactInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 bg-primary-50 rounded-full mr-4 flex-shrink-0">
                    <Mail size={20} className="text-primary-500" />
                  </div>
                  <a href={`mailto:${contactInfo.email}`} className="text-secondary-600 hover:text-primary-500 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="p-2 bg-primary-50 rounded-full mr-4 flex-shrink-0">
                    <Phone size={20} className="text-primary-500" />
                  </div>
                  <a href={`tel:${contactInfo.phone}`} className="text-secondary-600 hover:text-primary-500 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center mb-4">
                  <Calendar size={20} className="text-primary-500 mr-2" />
                  <h4 className="font-heading font-medium text-secondary-800">Schedule a Meeting</h4>
                </div>
                <p className="text-secondary-600 mb-4">
                  Book a consultation to discuss your financial goals and investment strategy.
                </p>
                <Button href="#" variant="outline" fullWidth>
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 relative">
            {showSuccess && (
              <div className="absolute top-0 left-0 right-0 animate-slide-down">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-center mb-4">
                  <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0" size={20} />
                  <p className="text-green-700">
                    Thank you for reaching out! We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="font-heading font-semibold text-xl mb-6 text-secondary-800">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    required
                  />
                </div>
                
                <Button variant="primary" type="submit" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;