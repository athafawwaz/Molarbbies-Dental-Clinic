import React from 'react';
import { TestimonialItem } from '../types';
import ParallaxDecoration from './ParallaxDecoration';

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Elena R.",
    treatment: "Veneers & Whitening",
    quote: "I never used to smile in photos. The team at Lumina didn't just fix my teeth; they gave me a confidence I didn't know I had.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Marcus T.",
    treatment: "Invisalign",
    quote: "The atmosphere is so calming, I almost forgot I was at the dentist. The results of my Invisalign treatment were faster than expected.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sophia L.",
    treatment: "Dental Implants",
    quote: "Professionalism at its peak. The earth tones and gentle music made me feel completely at ease during my procedure.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-[#F2EDE6]">
       <ParallaxDecoration speed={0.12} className="top-10 left-1/4 w-32 h-32 bg-mocca/5 rounded-full blur-xl" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <div>
            <h4 className="font-lato text-mocca font-bold tracking-widest uppercase mb-4 text-sm">Stories</h4>
            <h2 className="font-playfair text-4xl md:text-5xl text-coffee">Smile Transformations</h2>
          </div>
          <div className="hidden md:block">
            <button className="text-mocca font-bold hover:text-coffee transition-colors flex items-center gap-2">
              View Gallery <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={item.id} 
              className="bg-cream p-8 rounded-[2rem] relative mt-8 md:mt-0"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Profile Image - pop out effect */}
              <div className="absolute -top-10 left-8 w-20 h-20 rounded-full border-4 border-cream overflow-hidden shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="mt-8">
                <div className="flex text-mocca mb-4 text-xs">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="font-playfair text-lg text-coffee italic mb-6">"{item.quote}"</p>
                <div className="border-t border-coffee/10 pt-4">
                  <h5 className="font-bold text-coffee">{item.name}</h5>
                  <span className="text-sm text-mocca font-medium">{item.treatment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;