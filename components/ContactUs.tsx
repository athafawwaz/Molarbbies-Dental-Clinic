import React from 'react';
import ParallaxDecoration from './ParallaxDecoration';

const ContactUs: React.FC = () => {
  return (
    <section id="contact-us" className="relative py-24 bg-[#F9F5F0] overflow-hidden border-t border-beige/20">
      <ParallaxDecoration speed={0.08} className="top-20 right-0 w-64 h-64 bg-mocca/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="font-lato text-mocca font-bold tracking-widest uppercase mb-4 text-sm">Get In Touch</h4>
          <h2 className="font-playfair text-4xl md:text-5xl text-coffee">Contact & Location</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Side: Contact Form (Email & Suggestions) */}
          <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-soft border border-beige/20 h-full flex flex-col justify-center" data-aos="fade-right">
            <h3 className="font-playfair text-2xl text-coffee mb-2">We Value Your Feedback</h3>
            <p className="font-lato text-coffee/60 mb-8 text-sm">Send us your suggestions or questions.</p>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Saran Anda telah terkirim!"); }}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-coffee uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <i className="fa-solid fa-envelope absolute left-0 top-3 text-mocca/50"></i>
                  <input 
                    type="email" 
                    className="w-full border-b border-beige py-2 pl-8 focus:outline-none focus:border-mocca transition-colors bg-transparent placeholder-coffee/30" 
                    placeholder="your@email.com" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-coffee uppercase tracking-wider">Suggestion / Message</label>
                <div className="relative">
                  <i className="fa-solid fa-comment absolute left-0 top-3 text-mocca/50"></i>
                  <textarea 
                    className="w-full border-b border-beige py-2 pl-8 focus:outline-none focus:border-mocca transition-colors bg-transparent resize-none placeholder-coffee/30" 
                    rows={4} 
                    placeholder="Tulis saran atau pesan Anda di sini..." 
                    required
                  ></textarea>
                </div>
              </div>

              <button className="px-8 py-3 bg-white border border-mocca text-mocca rounded-full font-bold hover:bg-mocca hover:text-white transition-all duration-300 shadow-sm hover:shadow-md self-start">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Location Map */}
          <div className="relative h-[400px] lg:h-auto min-h-[400px] rounded-[2rem] overflow-hidden shadow-soft group" data-aos="fade-left">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26456.1265695289!2d-118.4253331899179!3d34.01529606869762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc4e7d8383f3%3A0x627f128e461b2e2d!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.4) sepia(0.2)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover transition-all duration-700 group-hover:filter-none"
                title="Clinic Location"
              ></iframe>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-beige/30 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-mocca text-cream rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-map-pin"></i>
                  </div>
                  <div>
                    <p className="font-playfair font-bold text-coffee">Molarbbies Dental</p>
                    <p className="text-xs text-coffee/70 font-lato">Beverly Hills, CA</p>
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;