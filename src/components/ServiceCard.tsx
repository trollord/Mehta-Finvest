import React from 'react';
import * as LucideIcons from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const Icon = (LucideIcons as any)[icon];

  return (
    <div className="group bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-500 hover:shadow-lg hover:border-primary-100 hover:-translate-y-2 h-full flex flex-col">
      <div className="flex items-start h-full">
        <div className="p-3 bg-primary-50 rounded-full inline-flex mb-4 transition-transform duration-500 group-hover:scale-110 flex-shrink-0">
          {Icon && <Icon className="text-primary-500 transition-transform duration-500 group-hover:rotate-12" size={24} />}
        </div>
        <div className="flex flex-col justify-between h-full ml-4">
          <div>
            <h3 className="font-heading font-semibold text-xl mb-2 text-secondary-800 transition-colors duration-300 group-hover:text-primary-500">{title}</h3>
            <p className="text-secondary-600 line-clamp-3">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;