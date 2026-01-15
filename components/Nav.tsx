import React from 'react';
import { SECTIONS } from '../constants';

export const Nav: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 h-16 flex items-center justify-between px-6 shadow-lg">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-yellow-400 font-bold text-xs">
          CN
        </div>
        <span className="font-bold text-lg hidden sm:block text-slate-100">中国发展轨迹</span>
      </div>
      
      <div className="flex gap-4 sm:gap-8">
        {Object.values(SECTIONS).map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="text-sm text-slate-400 hover:text-yellow-500 transition-colors font-medium"
          >
            {section.title.split(' ')[0]}
          </button>
        ))}
      </div>
    </nav>
  );
};