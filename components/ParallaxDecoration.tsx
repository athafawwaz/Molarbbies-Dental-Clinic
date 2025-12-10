import React, { useRef, useEffect, useState } from 'react';

interface ParallaxDecorationProps {
  speed: number;
  className?: string;
  shape?: 'circle' | 'leaf' | 'abstract';
  color?: string;
}

const ParallaxDecoration: React.FC<ParallaxDecorationProps> = ({ 
  speed, 
  className = "", 
  shape = 'circle',
  color = 'bg-beige/20'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate position relative to viewport
      const elementTop = rect.top + scrollY;
      
      // Only animate if somewhat visible or close to viewport to save resources
      if (scrollY + windowHeight > elementTop - 500 && scrollY < elementTop + 1000) {
        setOffset((scrollY - elementTop) * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const renderShape = () => {
    if (shape === 'leaf') {
      return (
        <svg viewBox="0 0 24 24" className={`w-full h-full fill-current ${color.replace('bg-', 'text-')}`} xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0002 21.0002C12.0002 21.0002 5.00024 13.0002 5.00024 8.00024C5.00024 4.13425 8.13425 1.00024 12.0002 1.00024C15.8662 1.00024 19.0002 4.13425 19.0002 8.00024C19.0002 13.0002 12.0002 21.0002 12.0002 21.0002Z" />
        </svg>
      );
    }
    return <div className={`w-full h-full rounded-full ${color}`} />;
  };

  return (
    <div 
      ref={ref}
      className={`absolute pointer-events-none -z-10 will-change-transform ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {renderShape()}
    </div>
  );
};

export default ParallaxDecoration;