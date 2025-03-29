import React from 'react';
import SearchFilterBar from '../../components/SearchFilterBar';
import heroBg from '../../assets/stayfinder-hero-bg-img.jpg';

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen sm:h-[80vh] md:h-[85vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 md:px-12 max-w-4xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md leading-snug sm:leading-tight mb-4">
          Welcome to StayFinder Nigeria,
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white drop-shadow">
          where we make hotel, lodge, and apartment search easy.
        </h3>

        <div className="mt-6 w-full">
          <SearchFilterBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
