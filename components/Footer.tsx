import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee text-cream py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-cream/10 pb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <i className="fa-solid fa-tooth text-mocca text-2xl"></i>
              <span className="font-playfair text-2xl font-bold tracking-wide">
                Molarbbies
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              Elevating dental care through esthetics, comfort, and precision technology.
            </p>
          </div>

          <div>
            <h5 className="font-playfair text-lg mb-6 text-beige">Quick Links</h5>
            <ul className="space-y-4 text-sm text-cream/70">
              <li><a href="#about" className="hover:text-mocca transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-mocca transition-colors">Treatments</a></li>
              <li><a href="#testimonials" className="hover:text-mocca transition-colors">Patient Stories</a></li>
              <li><a href="#appointment" className="hover:text-mocca transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-playfair text-lg mb-6 text-beige">Hours</h5>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>10:00 - 15:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-playfair text-lg mb-6 text-beige">Connect</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-mocca hover:border-mocca transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-mocca hover:border-mocca transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-mocca hover:border-mocca transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} Molarbbies Dental Esthetics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Footer Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    </footer>
  );
};

export default Footer;