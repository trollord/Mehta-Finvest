import React from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`font-heading font-bold text-3xl md:text-4xl mb-4 ${light ? 'text-white' : 'text-secondary-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-white/90' : 'text-secondary-600'} max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-16 bg-primary-500 mt-4 rounded-full ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;