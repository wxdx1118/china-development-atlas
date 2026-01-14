import React from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

export const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-600 p-3 rounded shadow-xl text-slate-100">
        <p className="font-bold mb-2 text-yellow-500 text-sm">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: <span className="font-mono font-bold text-white">{entry.value}</span> {entry.unit}
          </p>
        ))}
      </div>
    );
  }
  return null;
};