import React from 'react';

interface HeroTitleProps {
  title: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  return (
    <h1 className="text-white mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-tight">
      {title.split(' ').map((word, i, arr) => 
        i === 1 ? (
          <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-skyblue to-skyblue-light animate-pulse-gradient">
            {word}{' '}
          </span>
        ) : (
          <span key={i}>{word}{i < arr.length - 1 ? ' ' : ''}</span>
        )
      )}
    </h1>
  );
};

export default HeroTitle; 