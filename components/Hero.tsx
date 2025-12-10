import React from 'react';
import { useParallax } from '../hooks/useParallax';

const Hero: React.FC = () => {
  const scrollY = useParallax();

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop")',
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-cream/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cream/10 via-transparent to-cream"></div>
      </div>

      {/* Content - floats faster than background to create depth */}
      <div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="mb-4 inline-block">
            <span className="bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] text-mocca uppercase border border-mocca/20">
              Molarbbies Dental Clinic
            </span>
        </div>
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium text-coffee mb-6 leading-tight">
          Redefining <br />
          <span className="italic text-mocca">Your Smile</span>
        </h1>
        <p className="font-lato text-lg md:text-xl text-coffee/80 max-w-2xl mx-auto mb-10 font-light">
          Experience dental care reimagined. Where advanced technology meets 
          tranquility, tailored exclusively for your comfort and confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#appointment" 
            className="bg-mocca text-cream px-8 py-4 rounded-full font-bold tracking-wide hover:bg-coffee transition-all duration-300 shadow-soft hover:scale-105"
          >
            Book Consultation
          </a>
          <a 
            href="#services" 
            className="bg-white/50 backdrop-blur-sm border border-mocca text-mocca px-8 py-4 rounded-full font-bold tracking-wide hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Abstract floating elements */}
      <div 
        className="absolute bottom-20 right-10 md:right-32 w-24 h-24 md:w-40 md:h-40 rounded-full bg-beige/20 blur-2xl"
        style={{ transform: `translateY(${scrollY * -0.6}px)` }}
      />
      <div 
        className="absolute top-32 left-10 md:left-20 w-32 h-32 rounded-full bg-mocca/10 blur-3xl"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      />
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-coffee/50">
        <i className="fa-solid fa-chevron-down text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;