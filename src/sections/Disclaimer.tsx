import React from 'react';

const Disclaimer = () => {
  return (
    <section className="py-10 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-white p-6 rounded-lg border border-secondary-100 text-center">
          <h3 className="font-heading font-semibold text-lg mb-4 text-secondary-800">Disclaimer</h3>
          <p className="text-secondary-600 text-sm leading-relaxed">
            Mehta Finvest is a registered Mutual Fund Distributor under AMFI (ARN-326946). We are not a registered 
            investment advisor. Mutual Fund investments are subject to market risks. Please read all scheme-related 
            documents carefully before investing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;