import React from 'react';
import ParallaxDecoration from './ParallaxDecoration';

const DOCTORS = [
  {
    id: 1,
    name: "Drg. Najiyah Shafa Alya, Sp.Ort",
    specialty: "Spesialis Ortodonti",
    image: "/assets/doctors/IMG_20251209171856563.PNG"
  },
  {
    id: 2,
    name: "Drg. Rani Aprilia Dilaga, Sp.B.M.M",
    specialty: "Spesialis Bedah Mulut dan Maksilofasial",
    image: "/assets/doctors/IMG_2217.JPG"
  },
  {
    id: 3,
    name: "Drg. Feny Nursyahrani, Sp.KGA",
    specialty: "Spesialis Kedokteran Gigi Anak",
    image: "/assets/doctors/IMG_2218.JPG"
  },
  {
    id: 4,
    name: "Drg. Raisah Adina Shiva, Sp.PM",
    specialty: "Spesialis Penyakit Mulut",
    image: "/assets/doctors/IMG_2221.JPG"
  },
  {
    id: 5,
    name: "Drg. Panji Muhammad, Sp.R.KG",
    specialty: "Spesialis Radiologi Kedokteran Gigi",
    image: "/assets/doctors/IMG_2219.JPG"
  }
];

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="relative py-24 bg-white overflow-hidden">
      {/* Parallax Background Elements */}
      <ParallaxDecoration speed={0.06} className="top-20 left-0 w-64 h-64 bg-beige/20 rounded-full blur-3xl opacity-60" />
      <ParallaxDecoration speed={-0.08} className="bottom-10 right-10 w-48 h-48 bg-mocca/10 rounded-full blur-2xl" shape="circle" />
      <ParallaxDecoration speed={0.1} className="top-1/2 left-1/4 w-24 h-24 text-sage/20 opacity-40" shape="leaf" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="font-lato text-mocca font-bold tracking-widest uppercase mb-4 text-sm">The Team</h4>
          <h2 className="font-playfair text-4xl md:text-5xl text-coffee">Meet Our Specialists</h2>
          <p className="mt-6 text-coffee/70 max-w-2xl mx-auto font-lato text-lg leading-relaxed">
            Our clinic is home to industry-leading specialists dedicated to artistry and precision in every procedure.
          </p>
        </div>

        {/* Layout: Flex wrap with justify-center to handle 5 items nicely (3 top, 2 bottom on desktop) */}
        <div className="flex flex-wrap justify-center gap-10">
          {DOCTORS.map((doctor, index) => (
            <div
              key={doctor.id}
              className="group w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(30%-1.7rem)] flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Card - Arch Shape */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[120px] rounded-b-[20px] mb-6 shadow-soft group-hover:shadow-xl transition-all duration-500">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback jika gambar lokal tidak ditemukan
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop";
                  }}
                />

                {/* Social icons appearing on hover (optional luxury touch) */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full text-mocca hover:bg-mocca hover:text-white transition-colors flex items-center justify-center shadow-lg">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full text-mocca hover:bg-mocca hover:text-white transition-colors flex items-center justify-center shadow-lg">
                    <i className="fa-solid fa-envelope"></i>
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-center">
                <h3 className="font-playfair text-2xl text-coffee font-medium mb-1 group-hover:text-mocca transition-colors duration-300">
                  {doctor.name}
                </h3>
                <p className="font-lato text-sm text-coffee/60 uppercase tracking-widest font-bold">
                  {doctor.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;