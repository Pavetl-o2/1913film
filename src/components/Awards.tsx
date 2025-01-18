import React from 'react';

export function Awards() {
  return (
    <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="award-badge w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group hover:bg-white/20 transition-all duration-300">
          <div className="w-12 h-12 border-2 border-white/80 rounded-full flex items-center justify-center">
            <div className="text-white text-xs text-center leading-tight">
              FESTIVAL<br/>DE CINE<br/>2035
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}