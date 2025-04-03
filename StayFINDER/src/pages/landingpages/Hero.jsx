import React from 'react';
import SearchFilterBar from '../../components/SearchFilterBar';
import heroBg from '../../assets/stayfinder-hero-bg-img.jpg';

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 md:px-16 lg:px-20 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md leading-snug sm:leading-tight mb-4">
          Welcome to <span className="text-[#5B8EFF]">StayFinder Nigeria</span>
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white drop-shadow-md">
          Making hotel, lodge, and apartment search <span className="text-[#FACC15]">easy</span>.
        </h3>

        <div className="mt-8 w-full max-w-2xl">
          <SearchFilterBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
