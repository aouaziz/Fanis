'use client';

function HeroGraphic() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

      {/* --- HERO GRAPHIC WRAPPER --- */}
      <div className="flex h-[400px] w-full max-w-[900px] sm:h-[500px] sm:max-w-[800px] md:h-[900px] md:w-[600px] lg:h-[1000px] lg:w-[2400px] xl:h-[1200px] xl:w-[2800px] relative">

        {/* RED BACKGROUND GLOW */}
        <div className="absolute -inset-24 bg-[radial-gradient(ellipse,rgba(220,38,38,0.2)_10%,rgba(220,38,38,0.08)_50%,transparent_60%)] blur-[60px] animate-hero-pulse" />

        {/* MAIN LOGO ELEMENTS */}
        <div className="logo-element relative flex h-full w-full items-center justify-center gap-2 opacity-30 animate-hero-float sm:gap-4 md:gap-0">
        
          {/* LEFT CHEVRON */}
          <svg
            className="chevron-left stroke-white stroke-[20] h-[120px] w-[80px] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-hero-chevron sm:h-[130px] sm:w-[100px] md:h-[150px] md:w-[120px] lg:h-[300px] lg:w-[300px]"
            viewBox="0 0 150 200"
            aria-hidden="true"
          >
            <path d="M140 15 L10 100 L140 185" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* EYE */}
          <div className="eye-container relative flex items-center justify-center">
            <svg
              className="eye-ring absolute -top-5 left-1/2 h-[120px] w-[80px] -translate-x-1/2 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-hero-ring sm:h-[130px] sm:w-[100px] md:h-[150px] md:w-[120px] lg:h-[300px] lg:w-[300px]"
              viewBox="0 0 380 430"
              aria-hidden="true"
            >
              <circle cx="300" cy="100" r="10" stroke="#ffffff" strokeWidth="19" fill="none" opacity="0.8" />
            </svg>

            <svg
              className="eye-ring absolute -top-5 left-1/2 h-[160px] w-[70px] -translate-x-1/2 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-hero-ring sm:h-[150px] sm:w-[100px] md:h-[180px] md:w-[100px] lg:h-[300px] lg:w-[300px]"
              viewBox="0 0 370 480"
              aria-hidden="true"
            >
              <circle cx="180" cy="200" r="10" stroke="#ffffff" strokeWidth="60" fill="none" opacity="0.9" />
            </svg>

            <div
              className="eye w-[80px] h-[80px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px]
            bg-[#dc2626] rounded-full 
            shadow-[0_0_100px_rgba(220,38,38,0.6),0_0_200px_rgba(220,38,38,0.4),inset_0_0_50px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* RIGHT CHEVRON */}
          <svg
            className="chevron-right h-[120px] w-[80px] stroke-white stroke-[20] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-hero-chevron sm:h-[130px] sm:w-[100px] md:h-[150px] md:w-[120px] lg:h-[300px] lg:w-[300px]"
            viewBox="0 0 150 200"
            aria-hidden="true"
          >
            <path d="M10 15 L140 100 L10 185" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

   
      </div>
  );
}

export default HeroGraphic;
