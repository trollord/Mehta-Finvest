import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src="/favicon.svg" alt="Mehta Finvest Logo" className="h-8 w-8 mr-2" />
      <div className="flex flex-col">
        <span className="text-secondary-800 font-heading font-bold text-2xl tracking-wide">MEHTA</span>
        <span className="text-secondary-600 font-heading text-base tracking-[0.2em] -mt-1">FINVEST</span>
      </div>
    </div>
  );
};

export default Logo;