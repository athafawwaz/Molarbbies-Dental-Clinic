import React, { useState } from 'react';
import ParallaxDecoration from './ParallaxDecoration';

const Appointment: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section id="appointment" className="relative py-24 bg-cream overflow-hidden">
      <ParallaxDecoration speed={-0.1} className="bottom-0 right-0 w-full h-1/2 bg-beige/10 -skew-y-6 transform origin-bottom-right" shape="abstract" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row" data-aos="zoom-in">
          
          {/* Left Side Info (Dark) */}
          <div className="md:w-5/12 bg-coffee text-cream p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-playfair text-3xl mb-6">Begin Your Journey</h3>
              <p className="text-cream/70 font-lato text-sm leading-relaxed mb-8">
                Ready to transform your smile? Schedule a consultation with our specialists today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot text-beige"></i>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Visit Us</p>
                    <p className="text-xs text-cream/60">123 Serenity Lane, Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-phone text-beige"></i>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Call Us</p>
                    <p className="text-xs text-cream/60">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-envelope text-beige"></i>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Email</p>
                    <p className="text-xs text-cream/60">hello@luminaesthetics.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decor circle */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-mocca/30 rounded-full blur-2xl"></div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-7/12 p-10 bg-white">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-coffee uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full border-b border-beige py-2 focus:outline-none focus:border-mocca transition-colors bg-transparent" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-coffee uppercase tracking-wider">Phone</label>
                  <input type="tel" className="w-full border-b border-beige py-2 focus:outline-none focus:border-mocca transition-colors bg-transparent" placeholder="(555) 000-0000" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-coffee uppercase tracking-wider">Email</label>
                <input type="email" className="w-full border-b border-beige py-2 focus:outline-none focus:border-mocca transition-colors bg-transparent" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-coffee uppercase tracking-wider">Service Interest</label>
                <select className="w-full border-b border-beige py-2 focus:outline-none focus:border-mocca transition-colors bg-transparent text-coffee/70">
                  <option>General Consultation</option>
                  <option>Scaling & Polishing</option>
                  <option>Whitening</option>
                  <option>Invisalign</option>
                  <option>Implants</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-coffee uppercase tracking-wider">Message</label>
                <textarea className="w-full border-b border-beige py-2 focus:outline-none focus:border-mocca transition-colors bg-transparent resize-none" rows={3} placeholder="Tell us about your needs..."></textarea>
              </div>

              <button type="submit" className="w-full bg-mocca text-cream py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-coffee transition-colors shadow-lg mt-4">
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-coffee/60 backdrop-blur-sm transition-opacity" onClick={() => setShowModal(false)}></div>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 max-w-md w-full relative z-10 shadow-2xl animate-[fadeIn_0.3s_ease-out] text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <i className="fa-solid fa-check text-2xl"></i>
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl text-coffee mb-4">Terima Kasih!</h3>
            <p className="font-lato text-coffee/70 mb-8 leading-relaxed">
              Terima kasih telah membuat janji temu. Tim kami akan segera menghubungi Anda untuk konfirmasi jadwal.
            </p>
            <button 
              onClick={() => setShowModal(false)}
              className="bg-mocca text-cream px-8 py-3 rounded-full font-bold hover:bg-coffee transition-colors w-full"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Appointment;