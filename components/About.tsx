import React from 'react';
import ParallaxDecoration from './ParallaxDecoration';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-cream">
      {/* Global Parallax Elements */}
      <ParallaxDecoration speed={0.1} className="top-20 right-0 w-64 h-64 blur-3xl opacity-50" color="bg-mocca/20" />
      <ParallaxDecoration speed={-0.15} className="bottom-0 left-10 w-48 h-48 opacity-30" shape="leaf" color="text-sage" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group" data-aos="fade-right">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="Clinic Interior" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Decorative Offset Border */}
            <div className="absolute top-8 left-8 w-full h-full border-2 border-beige rounded-[2rem] -z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs z-20 hidden md:block" data-aos="fade-up" data-aos-delay="200">
              <p className="font-playfair text-4xl text-mocca mb-2">15+</p>
              <p className="font-lato text-sm text-coffee/70 uppercase tracking-wider">Years of Excellence in Esthetic Dentistry</p>
            </div>
          </div>

          {/* Text Side */}
          <div data-aos="fade-left">
            <h4 className="font-lato text-mocca font-bold tracking-widest uppercase mb-4 text-sm">Our Philosophy</h4>
            <h2 className="font-playfair text-4xl md:text-5xl text-coffee mb-8 leading-tight">
              A Sanctuary for <br />
              <span className="italic relative">
                Your Smile
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-beige/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="font-lato text-coffee/80 text-lg leading-relaxed mb-6">
              At Molarbbies, we believe dentistry should be a restorative experience for both the smile and the spirit. 
              Our clinic is designed with warm earth tones and soft lighting to create an atmosphere of calm.
            </p>
            <p className="font-lato text-coffee/80 text-lg leading-relaxed mb-8">
              We combine artisan craftsmanship with state-of-the-art technology to deliver results that are naturally beautiful.
              Your comfort is our highest priority, ensuring every visit feels less like an appointment and more like a retreat.
            </p>
            
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-leaf text-2xl text-mocca"></i>
                <span className="font-playfair font-bold text-coffee">Eco-Friendly</span>
              </div>
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-heart text-2xl text-mocca"></i>
                <span className="font-playfair font-bold text-coffee">Patient First</span>
              </div>
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-gem text-2xl text-mocca"></i>
                <span className="font-playfair font-bold text-coffee">Precision</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;