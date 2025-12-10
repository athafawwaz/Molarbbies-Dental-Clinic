import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
        offset: 100,
      });
    }
  }, []);

  return (
    <div className="font-lato text-coffee bg-cream antialiased selection:bg-mocca selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Testimonials />
      <Appointment />
      <ContactUs />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default App;