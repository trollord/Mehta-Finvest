import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { resourceTopics } from '../constants/data';
import * as LucideIcons from 'lucide-react';
import { BookOpen } from 'lucide-react';

const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="Financial Literacy"
          subtitle="We believe informed investors make better investors"
          center
        />

        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-secondary-600 mb-6">
            Stay tuned for our blogs, webinars, and tools designed to help you make better financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resourceTopics.map((topic, index) => {
            const Icon = (LucideIcons as any)[topic.icon];
            
            return (
              <div 
                key={topic.title}
                className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-primary-100 hover:shadow-md transition-all duration-300 flex items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-2 bg-primary-50 rounded-full mr-4 flex-shrink-0">
                  {Icon && <Icon size={24} className="text-primary-500" />}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1 text-secondary-800">{topic.title}</h3>
                  <p className="text-secondary-600">{topic.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-secondary-50 rounded-lg p-8 mt-12 max-w-3xl mx-auto border border-secondary-100 flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-secondary-100 rounded-full flex-shrink-0">
            <BookOpen size={32} className="text-secondary-600" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-xl mb-2 text-secondary-800">Resource Library Coming Soon</h3>
            <p className="text-secondary-600">
              We're working on building a comprehensive library of financial education resources. 
              Join our mailing list to be notified when new content is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;