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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://cqgo2gggpg.execute-api.ap-northeast-1.amazonaws.com/default/mailer_function', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formState),
    });
    
    const responseText = await response.text();
    
    let data;
    try {
      data = JSON.parse(responseText);
      console.log('Parsed response data:', data);
    } catch (e) {
      console.error('Could not parse response as JSON:', e);
    }

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} ${responseText}`);
    }

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
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error sending your message. Please try again later.');
    // You might want to add error state handling here
  }
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

                <div className="flex items-center">
                  <div className="p-2 bg-primary-50 rounded-full mr-4 flex-shrink-0">
                    <svg 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="currentColor"
                      className="text-primary-500 transform scale-90"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-secondary-600 hover:text-primary-500 transition-colors"
                  >
                    Chat on WhatsApp
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