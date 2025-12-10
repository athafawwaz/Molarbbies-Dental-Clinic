import React from 'react';
import { ServiceItem } from '../types';
import ParallaxDecoration from './ParallaxDecoration';

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Esthetic Scaling',
    description: 'Gentle, ultrasonic cleaning to restore the natural brightness of your teeth while maintaining gum health.',
    icon: 'fa-wand-magic-sparkles',
  },
  {
    id: 2,
    title: 'Invisalign & Braces',
    description: 'Discreet alignment solutions customized to perfect your smile profile without interrupting your lifestyle.',
    icon: 'fa-teeth-open',
  },
  {
    id: 3,
    title: 'Laser Whitening',
    description: 'Advanced whitening technology that lifts years of stains in a single hour, safe for sensitive teeth.',
    icon: 'fa-sun',
  },
  {
    id: 4,
    title: 'Porcelain Veneers',
    description: 'Ultra-thin, custom-crafted shells designed to transform the shape, shade, and overall aesthetic of your smile.',
    icon: 'fa-gem',
  },
  {
    id: 5,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth, restoring full function and structural integrity.',
    icon: 'fa-screw',
  },
  {
    id: 6,
    title: 'Complete Makeover',
    description: 'A comprehensive, multi-disciplinary approach to completely redesign and revitalize your smile.',
    icon: 'fa-face-smile-beam',
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 bg-cream overflow-hidden">
      {/* Parallax Background Decorations */}
      <ParallaxDecoration speed={0.05} className="top-1/4 left-0 w-96 h-96 bg-beige/10 rounded-full blur-3xl" />
      <ParallaxDecoration speed={-0.1} className="bottom-20 right-10 w-24 h-24 text-mocca/10" shape="leaf" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="font-lato text-mocca font-bold tracking-widest uppercase mb-4 text-sm">Expertise</h4>
          <h2 className="font-playfair text-4xl md:text-5xl text-coffee">Curated Treatments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white p-10 rounded-[2rem] shadow-soft hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 border border-transparent hover:border-beige/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-8 group-hover:bg-mocca transition-colors duration-500">
                <i className={`fa-solid ${service.icon} text-2xl text-mocca group-hover:text-cream transition-colors duration-500`}></i>
              </div>
              <h3 className="font-playfair text-2xl text-coffee mb-4 group-hover:text-mocca transition-colors">{service.title}</h3>
              <p className="font-lato text-coffee/70 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 pt-6 border-t border-cream flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-sm font-bold text-mocca uppercase tracking-wider">Learn More</span>
                <i className="fa-solid fa-arrow-right text-mocca transform translate-x-[-10px] group-hover:translate-x-0 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;