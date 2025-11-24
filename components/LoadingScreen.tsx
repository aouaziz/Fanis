'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 600);
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
    <>
      <div
        className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}
        aria-hidden="true"
      >
        <div className="loading-content">
          <div className="logo-wrapper">
            <Image
              src="/favicon.png"
              alt="Fanis Network"
              width={120}
              height={120}
              priority
              className="loading-logo"
            />
          </div>
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring spinner-ring-delayed"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.6s ease, visibility 0.6s ease;
        }

        .loading-screen.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .loading-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-wrapper {
          position: relative;
          z-index: 2;
          animation: pulse 2s ease-in-out infinite;
        }

        .loading-logo {
          width: 120px;
          height: 120px;
          object-fit: contain;
          filter: drop-shadow(0 4px 20px rgba(220, 38, 38, 0.2));
        }

        .loading-spinner {
          position: absolute;
          inset: -30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spinner-ring {
          position: absolute;
          width: 180px;
          height: 180px;
          border: 3px solid transparent;
          border-top-color: #dc2626;
          border-right-color: #dc2626;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }

        .spinner-ring-delayed {
          width: 160px;
          height: 160px;
          border-top-color: rgba(220, 38, 38, 0.4);
          border-right-color: rgba(220, 38, 38, 0.4);
          animation-delay: -0.75s;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 4px 20px rgba(220, 38, 38, 0.2));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 6px 30px rgba(220, 38, 38, 0.4));
          }
        }

        @media (max-width: 768px) {
          .loading-logo {
            width: 100px;
            height: 100px;
          }

          .spinner-ring {
            width: 160px;
            height: 160px;
            border-width: 2.5px;
          }

          .spinner-ring-delayed {
            width: 140px;
            height: 140px;
          }
        }

        @media (max-width: 480px) {
          .loading-logo {
            width: 80px;
            height: 80px;
          }

          .spinner-ring {
            width: 140px;
            height: 140px;
            border-width: 2px;
          }

          .spinner-ring-delayed {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </>
  );
}
