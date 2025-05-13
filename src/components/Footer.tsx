import React from 'react';
import Logo from './Logo';
import { navLinks } from '../constants/data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-white inline-block p-2 rounded mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mt-4 max-w-xs">
              Your partner in purposeful investing. We believe that wealth is built on clarity, discipline, and a commitment to doing what's right.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">Gautam Chetan Mehta</p>
            <p className="text-gray-300 mb-2">ARN: 326946 | EUIN: E620286</p>
            <p className="text-gray-300 mb-2">Mumbai, India</p>
            <p className="text-gray-300 mb-2">Email: contact@mehtafinvest.com</p>
            <p className="text-gray-300">Phone: +91 98765 43210</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            &copy; {year} Mehta Finvest. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 md:mt-0">
            Mutual Fund investments are subject to market risks.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;