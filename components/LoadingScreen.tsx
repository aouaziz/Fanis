'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 600);
      }, 800);
    };

    document.body.classList.add('is-preloading');

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      document.body.classList.remove('is-preloading');
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.classList.remove('is-preloading');
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-700',
        fadeOut && 'pointer-events-none opacity-0'
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="relative z-10 animate-loading-pulse">
          <Image
            src="/favicon.png"
            alt="Fanis Network"
            width={120}
            height={120}
            priority
            className="h-[80px] w-[80px] object-contain drop-shadow-[0_4px_20px_rgba(220,38,38,0.2)] sm:h-[100px] sm:w-[100px] lg:h-[120px] lg:w-[120px]"
          />
        </div>
        <div className="absolute -inset-7 flex items-center justify-center">
          <div className="absolute h-[140px] w-[140px] rounded-full border-[2.5px] border-transparent border-r-[#dc2626] border-t-[#dc2626] animate-loading-spin sm:h-[160px] sm:w-[160px] lg:h-[180px] lg:w-[180px] lg:border-[3px]" />
          <div
            className="absolute h-[120px] w-[120px] rounded-full border-2 border-transparent border-r-[rgba(220,38,38,0.4)] border-t-[rgba(220,38,38,0.4)] animate-loading-spin sm:h-[140px] sm:w-[140px] sm:border-[2.5px] lg:h-[160px] lg:w-[160px] lg:border-[3px]"
            style={{ animationDelay: '-0.75s' }}
          />
        </div>
      </div>
    </div>
  );
}
