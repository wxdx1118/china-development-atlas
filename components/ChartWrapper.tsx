import React from 'react';

interface ChartWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const ChartWrapper: React.FC<ChartWrapperProps> = ({ title, children, heightClass = "h-[500px]" }) => {
  return (
    <div className={`glass-panel p-6 rounded-xl shadow-2xl w-full ${heightClass} flex flex-col transition-all duration-300 hover:shadow-red-900/20`}>
      <h3 className="text-xl font-bold mb-6 text-yellow-500 border-l-4 border-red-600 pl-3">
        {title}
      </h3>
      <div className="flex-1 w-full min-h-0">
        {children}
      </div>
    </div>
  );
};