import React from "react";
// Importing icons for the hero section features
import { PenTool, Megaphone, BarChart3, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-black z-10 overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(to right, #444 1px, transparent 1px)',
          backgroundSize: '3rem 3rem',
        }}
      ></div>
      
      {/* Radial gradient for a centered glow effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient(ellipse_at_center, rgba(12,15,22,0.5)_0%, #000_70%) z-10"></div>
      
      <div className="relative z-20 container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                Creative Agency
              </span>
              <span className="block mt-1">for Complete Brand Transformation.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
              We are a full-service agency transforming brands through strategy, 
              innovative design, and data-driven marketing.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-red-700 px-6 py-3 text-lg font-medium text-white shadow-lg shadow-red-500/20 transition-transform hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span>Explore Our Work</span>
                <ArrowRight size={20} />
              </a>
            </div>
            
            {/* Key Services Section with Icons */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 sm:gap-8 text-gray-400">
                <div className="flex items-center gap-2 text-sm">
                    <PenTool size={16} className="text-red-500" />
                    <span>Creative Design</span>
                </div>
                 <div className="flex items-center gap-2 text-sm">
                    <Megaphone size={16} className="text-red-500" />
                    <span>Digital Marketing</span>
                </div>
                 <div className="flex items-center gap-2 text-sm">
                    <BarChart3 size={16} className="text-red-500" />
                    <span>Brand Strategy</span>
                </div>
            </div>
          </div>

          {/* 3D Visualization */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] sm:h-[500px] w-full mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-red-700/15 to-gray-900/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 h-full w-full overflow-hidden rounded-xl border border-gray-800">
                <iframe
                  src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className="bg-black/50"
                ></iframe>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;