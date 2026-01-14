import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  LineChart,
  Legend,
} from 'recharts';
import { Play, Pause, ChevronDown } from 'lucide-react';

import { VISUALIZATION_DATA, SECTIONS } from './constants';
import { Nav } from './components/Nav';
import { ChartWrapper } from './components/ChartWrapper';
import { CustomTooltip } from './components/CustomTooltip';
import { MinshengMap } from './components/MinshengMap';

const App: React.FC = () => {
  // Animation state for the intro
  const [showIntro, setShowIntro] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(100);

  useEffect(() => {
    setShowIntro(true);
    // Simple mock animation effect for charts on load
    let start = 0;
    const interval = setInterval(() => {
        start += 5;
        if (start >= 100) {
            start = 100;
            clearInterval(interval);
        }
        setAnimationProgress(start);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const chartColor = {
    primary: "#ef4444", // red-500
    secondary: "#f59e0b", // amber-500
    tertiary: "#3b82f6", // blue-500
    grid: "#334155" // slate-700
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-red-900 selection:text-white pb-20">
      <Nav />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 via-slate-950 to-slate-950"></div>
        
        <div className={`z-10 transition-all duration-1000 transform ${showIntro ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-4 inline-block px-4 py-1 border border-yellow-600/50 rounded-full bg-yellow-900/20 text-yellow-500 text-xs font-semibold tracking-widest uppercase">
            Data Visualization Project
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-red-400 drop-shadow-sm">
            中国发展轨迹
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            改革开放以来经济与社会成就交互图谱
          </h2>
          <p className="mt-8 text-slate-500 max-w-prose mx-auto">
            以数据为笔，勾勒大国崛起之路。交互式展示GDP腾飞、脱贫攻坚奇迹及科技创新突破，印证“以人民为中心”的新发展理念。
          </p>
        </div>

        <div className="absolute bottom-10 animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-500" />
        </div>
      </section>

      {/* 1. Economy Section */}
      <section id={SECTIONS.ECONOMY.id} className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-8 border-red-600 pl-4">{SECTIONS.ECONOMY.title}</h2>
            <h3 className="text-xl text-yellow-500 font-serif">{SECTIONS.ECONOMY.subtitle}</h3>
            <p className="text-slate-400 leading-relaxed text-justify">
                {SECTIONS.ECONOMY.desc}
            </p>
            <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
                <span className="block text-xs text-slate-500 mb-1">2023 GDP总量</span>
                <span className="text-3xl font-mono text-white font-bold">126.06</span>
                <span className="text-sm text-slate-400 ml-2">万亿元 (Trillion RMB)</span>
            </div>
        </div>
        
        <div className="md:w-2/3 w-full">
            <ChartWrapper title="GDP Growth Trend (1978-2023)">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={VISUALIZATION_DATA.gdp} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={chartColor.primary} stopOpacity={0.8}/>
                                <stop offset="95%" stopColor={chartColor.primary} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={chartColor.grid} vertical={false} />
                        <XAxis dataKey="year" stroke="#94a3b8" tick={{fontSize: 12}} />
                        <YAxis stroke="#94a3b8" tick={{fontSize: 12}} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Area 
                            type="monotone" 
                            dataKey="gdp" 
                            name="GDP (万亿元)" 
                            unit="tn"
                            stroke={chartColor.primary} 
                            fillOpacity={1} 
                            fill="url(#colorGdp)" 
                            animationDuration={2000}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="growthRate" 
                            name="Growth Rate (%)" 
                            unit="%"
                            stroke={chartColor.secondary} 
                            strokeWidth={2}
                            dot={{fill: chartColor.secondary}}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </div>
      </section>

      {/* 2. Poverty Section */}
      <section id={SECTIONS.POVERTY.id} className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center bg-gradient-to-br from-slate-900 via-slate-900 to-red-950/30 rounded-3xl">
        <div className="md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-8 border-yellow-500 pl-4">{SECTIONS.POVERTY.title}</h2>
            <h3 className="text-xl text-red-400 font-serif">{SECTIONS.POVERTY.subtitle}</h3>
            <p className="text-slate-400 leading-relaxed text-justify">
                {SECTIONS.POVERTY.desc}
            </p>
             <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-center">
                    <span className="block text-xs text-red-300 mb-1">2020贫困人口</span>
                    <span className="text-2xl font-mono text-white font-bold">0</span>
                 </div>
                 <div className="p-4 bg-blue-900/20 border border-blue-900/50 rounded-lg text-center">
                    <span className="block text-xs text-blue-300 mb-1">2020城镇化率</span>
                    <span className="text-2xl font-mono text-white font-bold">63.9%</span>
                 </div>
             </div>
        </div>

        <div className="md:w-2/3 w-full flex flex-col gap-8">
            <ChartWrapper title="Poverty Reduction & Urbanization (2012-2020)">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={VISUALIZATION_DATA.poverty} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="year" stroke="#94a3b8" />
                        <YAxis yAxisId="left" stroke={chartColor.secondary} label={{ value: '贫困人口 (百万人)', angle: -90, position: 'insideLeft', fill: chartColor.secondary, style: {textAnchor: 'middle'} }} />
                        <YAxis yAxisId="right" orientation="right" stroke={chartColor.tertiary} unit="%" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar 
                            yAxisId="left" 
                            dataKey="population" 
                            name="Rural Poverty Population" 
                            unit="m"
                            barSize={30} 
                            fill={chartColor.secondary}
                            radius={[4, 4, 0, 0]}
                            animationDuration={1500}
                        />
                        <Line 
                            yAxisId="right" 
                            type="monotone" 
                            dataKey="urbanization" 
                            name="Urbanization Rate" 
                            unit="%"
                            stroke={chartColor.tertiary} 
                            strokeWidth={3}
                            dot={{r: 4, fill: chartColor.tertiary, strokeWidth: 2, stroke: '#fff'}}
                            animationDuration={2000}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </ChartWrapper>
            <ChartWrapper title="东西部帮扶项目流向地图">
              <div style={{ width: '100%', height: 600 }}>
                <MinshengMap />
              </div>
            </ChartWrapper>
        </div>
      </section>

      {/* 3. Tech Section */}
      <section id={SECTIONS.TECH.id} className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-8 border-blue-600 pl-4">{SECTIONS.TECH.title}</h2>
            <h3 className="text-xl text-blue-400 font-serif">{SECTIONS.TECH.subtitle}</h3>
            <p className="text-slate-400 leading-relaxed text-justify">
                {SECTIONS.TECH.desc}
            </p>
        </div>

        <div className="md:w-2/3 w-full">
            <ChartWrapper title="R&D Expenditure & Patents (2010-2022)">
                 <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={VISUALIZATION_DATA.tech} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid stroke="#334155" vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="year" stroke="#94a3b8" />
                        <YAxis yAxisId="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Area 
                            yAxisId="left"
                            type="monotone" 
                            dataKey="expenditure" 
                            name="R&D Expenditure (Billion RMB)" 
                            unit="bn"
                            stroke="#8884d8" 
                            fill="#8884d8" 
                            fillOpacity={0.3}
                        />
                        <Bar 
                            yAxisId="right"
                            dataKey="patents" 
                            name="Patent Applications (Thousands)" 
                            unit="k"
                            barSize={20} 
                            fill="#82ca9d" 
                            radius={[4, 4, 0, 0]}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </div>
      </section>

       {/* 4. Life Expectancy Section */}
       <section id={SECTIONS.LIFE.id} className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
        <div className="md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-8 border-green-600 pl-4">{SECTIONS.LIFE.title}</h2>
            <h3 className="text-xl text-green-400 font-serif">{SECTIONS.LIFE.subtitle}</h3>
            <p className="text-slate-400 leading-relaxed text-justify">
                {SECTIONS.LIFE.desc}
            </p>
        </div>

        <div className="md:w-2/3 w-full">
            <ChartWrapper title="Average Life Expectancy (Years)">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={VISUALIZATION_DATA.life} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                        <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                        <XAxis dataKey="year" stroke="#94a3b8" />
                        <YAxis domain={[60, 85]} stroke="#94a3b8" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line 
                            type="monotone" 
                            dataKey="expectancy" 
                            name="Life Expectancy" 
                            unit="yrs"
                            stroke="#10b981" 
                            strokeWidth={4} 
                            dot={{r: 6, fill: "#10b981", stroke: "#0f172a", strokeWidth: 2}}
                            activeDot={{r: 8}}
                            animationDuration={3000}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-600 border-t border-slate-800 bg-slate-950">
        <p className="text-sm">Data Sources: National Bureau of Statistics of China, The World Bank.</p>
        <p className="text-xs mt-2 opacity-50">© 2024 China Development Atlas Project</p>
      </footer>
    </div>
  );
};

export default App;