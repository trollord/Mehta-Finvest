import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center">
      <div className="flex items-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path d="M4 12L12 4V12L4 20V12Z" className="fill-primary-500"/>
          <path d="M20 20L28 12V20L20 28V20Z" className="fill-primary-500"/>
          <path d="M12 4L28 20V12L12 12V4Z" className="fill-primary-500"/>
        </svg>
        <div className="flex flex-col">
          <span className="text-secondary-600 font-heading font-bold text-xl leading-none">MEHTA</span>
          <span className="text-secondary-500 font-heading text-sm tracking-wider leading-none">FINVEST</span>
        </div>
      </div>
    </a>
  );
};

export default Logo;