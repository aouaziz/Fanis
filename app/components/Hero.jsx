'use client';
import React from "react";
import { PenTool, Megaphone, BarChart3, ArrowRight, Star, Zap, Target, TrendingUp, Award, Users } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <TrendingUp size={20} /> },
    { number: "98%", label: "Client Satisfaction", icon: <Award size={20} /> },
    { number: "5+", label: "Years Experience", icon: <Star size={20} /> },
    { number: "50+", label: "Happy Clients", icon: <Users size={20} /> }
  ];

  const services = [
    {
      icon: <PenTool size={18} />,
      title: "Creative Design",
      description: "Brand identity & visual storytelling"
    },
    {
      icon: <Megaphone size={18} />,
      title: "Digital Marketing",
      description: "Data-driven growth strategies"
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Brand Strategy",
      description: "Strategic positioning & market analysis"
    }
  ];

  return (
    <section className="relative bg-black z-10 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Vibrant Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* More Vibrant Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-50" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(196, 30, 58, 0.4) 1px, transparent 1px),
              linear-gradient(to right, rgba(196, 30, 58, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
        
        {/* Secondary Grid Layer for Depth */}
        <div 
          className="absolute inset-0 opacity-25" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
              linear-gradient(to right, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridMove 30s linear infinite reverse',
          }}
        />
        
        {/* More Vibrant Floating Geometric Shapes */}
        <div className="absolute top-16 left-8 w-40 h-40 bg-gradient-to-br from-red-500/40 to-orange-500/35 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-500/35 to-red-500/40 rounded-full blur-xl animate-bounce slow-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-gradient-to-br from-teal-500/25 to-red-500/35 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-amber-500/40 to-red-500/30 rounded-full blur-xl animate-ping slow-ping"></div>
        <div className="absolute bottom-1/4 right-12 w-24 h-24 bg-gradient-to-br from-cyan-500/30 to-purple-500/25 rounded-full blur-lg animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-pink-500/25 to-red-500/30 rounded-full blur-2xl animate-bounce slow-bounce delay-1500"></div>
        
        {/* More Intense Radial Gradients */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse 1200px 800px at 30% 20%, rgba(196, 30, 58, 0.25) 0%, transparent 60%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse 1000px 700px at 80% 80%, rgba(249, 115, 22, 0.2) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-full h-full"
          style={{
            background: 'radial-gradient(ellipse 800px 600px at 50% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 60%)'
          }}
        />
        
        {/* Dynamic Light Streaks */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-red-500/40 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-orange-500/30 via-transparent to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-purple-500/25 via-transparent to-transparent animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-20 container mx-auto px-6 py-16 sm:py-24 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Enhanced Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 px-4 py-2 text-sm text-red-300 mb-6 animate-pulse hover:scale-105 transition-transform duration-300">
              <Star size={16} className="text-red-400 animate-spin slow-spin" />
              <span>Award-Winning Creative Agency</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              <span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-orange-500 animate-gradient-x"
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Creative Agency
              </span>
              <span className="block mt-2">for Complete</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Brand Transformation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              We are a full-service agency transforming brands through 
              <span className="text-red-400 font-medium"> innovative strategy</span>, 
              cutting-edge design, and data-driven marketing solutions.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-red-500/40 hover:from-red-500 hover:to-red-600"
              >
                <span>Explore Our Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href="#case-studies"
                className="group inline-flex items-center gap-3 rounded-xl border-2 border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition-all duration-300 hover:border-red-500 hover:text-white hover:bg-red-500/10 hover:shadow-lg hover:shadow-red-500/20"
              >
                <span>View Case Studies</span>
                <Target size={20} className="group-hover:rotate-90 transition-transform duration-500" />
              </a>
            </div>
            
            {/* Enhanced Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="group p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/5 hover:scale-105"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 group-hover:border-red-500/40 transition-all duration-300">
                      <div className="text-red-400 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm group-hover:text-red-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced 3D Visualization with Your Original Spline */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[450px] sm:h-[550px] w-full max-w-lg mx-auto">
              {/* Enhanced Glowing Backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/25 to-orange-600/20 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-purple-600/15 to-red-600/15 rounded-3xl blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute inset-8 bg-gradient-to-bl from-teal-600/10 to-red-600/10 rounded-3xl blur-xl animate-pulse delay-2000"></div>
              
              {/* Main 3D Container */}
              <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border-2 border-gray-700/50 bg-gradient-to-br from-gray-900/30 to-black/50 backdrop-blur-sm hover:border-red-500/30 transition-all duration-500">
                {/* Your Original Spline 3D Element */}
                <iframe
                  src="https://my.spline.design/binarymaterialcopy-uzQoq9YUCPK8Sqz8n9uP5qMO/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  className="bg-transparent"
                  loading="lazy"
                />
                
                {/* Overlay for additional effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating Action Button */}
              <div className="absolute -bottom-4 -right-4 flex gap-3">
                <button className="group p-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-110">
                  <Zap size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div>
              
              {/* Interactive Indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-red-500/30">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-red-300 font-medium">Interactive</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-800/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="group text-center p-6 rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300">
                    <div className="text-red-400">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .slow-bounce {
          animation: bounce 3s infinite;
        }
        
        .slow-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .slow-spin {
          animation: spin 4s linear infinite;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;