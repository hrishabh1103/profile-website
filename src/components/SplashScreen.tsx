import React from 'react';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 netflix-splash netflix-fade">
      <div className="netflix-logo-wrapper flex items-center">
        {/* First layer - Shadow */}
        <div className="absolute text-[120px] font-bold text-primary-600 opacity-30 blur-md select-none">
          HG
        </div>
        
        {/* Second layer - Main text */}
        <div className="relative">
          <div className="text-[120px] font-bold text-primary-600 netflix-logo-letter select-none">
            HG
          </div>
          {/* Animated bar */}
          <div className="netflix-logo-bar"></div>
        </div>
        
        {/* Third layer - Highlight */}
        <div className="absolute text-[120px] font-bold text-white opacity-10 blur-sm select-none">
          HG
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
