import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 w-full overflow-hidden">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/90 to-charcoal-dark/70 z-10"></div>
      
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543078468-d0ad660d6148?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Aviation background"
          className="w-full h-full object-cover md:object-center object-top transform scale-[1.02] transition-transform duration-[30000ms] ease-linear hover:scale-[1.08] animate-subtle-float"
          style={{ filter: 'brightness(0.9)' }}
        />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-skyblue/10 to-transparent opacity-40 animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default HeroBackground; 