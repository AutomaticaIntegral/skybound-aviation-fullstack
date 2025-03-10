import React from 'react';

interface FeatureImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FeatureImage = ({ 
  src,
  alt,
  className = '' 
}: FeatureImageProps) => {
  const baseClasses = "w-full h-auto";
  const combinedClasses = `${baseClasses} ${className}`;
  
  return (
    <div className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
      <img 
        src={src} 
        alt={alt} 
        className={combinedClasses}
      />
    </div>
  );
};

export default FeatureImage; 