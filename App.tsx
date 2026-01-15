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
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Play, Pause, ChevronDown } from 'lucide-react';

import { VISUALIZATION_DATA, SECTIONS } from './constants';
import { Nav } from './components/Nav';
import { ChartWrapper } from './components/ChartWrapper';
import { CustomTooltip } from './components/CustomTooltip';
import { MinshengMap } from './components/MinshengMap';
import { BubbleChart } from './components/BubbleChart';
import { GaokaoBarRace } from './components/GaokaoBarRace';

const App: React.FC = () => {
  // Animation state for the intro
  const [showIntro, setShowIntro] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(100);
  // GaokaoBarRace
  const [gaokaoPaused, setGaokaoPaused] = useState(false);
  const [gaokaoIndex, setGaokaoIndex] = useState(0);
  const [gaokaoLength, setGaokaoLength] = useState(0);
  // Carousel state for west-east cooperation
  const [currentSlide, setCurrentSlide] = useState(0);
  // Carousel state for tech section
  const [currentTechSlide, setCurrentTechSlide] = useState(0);
  // Carousel state for life section
  const [currentLifeSlide, setCurrentLifeSlide] = useState(0);

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
            <p className="text-slate-500 text-sm italic">
                {SECTIONS.ECONOMY.desc2}
            </p>
            <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
                <span className="block text-xs text-slate-500 mb-1">2024 GDP总量</span>
                <span className="text-3xl font-mono text-white font-bold">134.91</span>
                <span className="text-sm text-slate-400 ml-2">万亿元</span>
            </div>
        </div>
        
        <div className="md:w-2/3 w-full">
            <ChartWrapper title="GDP增长趋势(1978-2024)">
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
                            name="增长率(%)" 
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
      <section id={SECTIONS.POVERTY.id} className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
        {/* 文字内容区域 */}
        <div className="md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-8 border-yellow-500 pl-4">{SECTIONS.POVERTY.title}</h2>
            <h3 className="text-xl text-red-400 font-serif">{SECTIONS.POVERTY.carousel[currentSlide].subtitle}</h3>
            <p className="text-slate-400 leading-relaxed text-justify">
                {SECTIONS.POVERTY.carousel[currentSlide].desc}
            </p>
            <p className="text-slate-500 text-sm italic">
                {SECTIONS.POVERTY.carousel[currentSlide].desc2}
            </p>
            
            {/* 轮播指示器 */}
            <div className="flex gap-2 justify-center">
                {SECTIONS.POVERTY.carousel.map((item, index) => (
                    <button
                        key={item.id}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-yellow-500 w-8' : 'bg-slate-500 hover:bg-slate-400'}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`View slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>

        {/* 轮播图区域 */}
        <div className="md:w-2/3 w-full relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700">
            {/* 轮播内容 */}
            <div className="h-[500px]">
                {SECTIONS.POVERTY.carousel.map((item, index) => (
                    <div 
                        key={item.id} 
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        style={{
                            pointerEvents: index === currentSlide ? 'auto' : 'none',
                            zIndex: index === currentSlide ? 10 : 1
                        }}
                    >
                        {/* 脱贫攻坚图 */}
                        {item.type === 'povertyChart' && (
                            <div className="glass-panel p-6 rounded-xl shadow-lg w-full h-full flex flex-col transition-all duration-300 hover:shadow-red-900/20">
                                <h3 className="text-xl font-bold mb-6 text-yellow-500 border-l-4 border-red-600 pl-3">
                                    {item.title}
                                </h3>
                                <div className="w-full h-[420px]">
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
                                                name="农村贫困人口" 
                                                unit="百万"
                                                barSize={30} 
                                                fill={chartColor.secondary}
                                                radius={[4, 4, 0, 0]}
                                                animationDuration={1500}
                                            />
                                            <Line 
                                                yAxisId="right" 
                                                type="monotone" 
                                                dataKey="urbanization" 
                                                name="城镇化率" 
                                                unit="%"
                                                stroke={chartColor.tertiary} 
                                                strokeWidth={3}
                                                dot={{r: 4, fill: chartColor.tertiary, strokeWidth: 2, stroke: '#fff'}}
                                                animationDuration={2000}
                                            />
                                        </ComposedChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        )}
                        
                        {/* 东西部帮扶流向地图 */}
                        {item.type === 'map' && (
                            <div className="glass-panel p-6 rounded-xl shadow-lg w-full h-full flex flex-col transition-all duration-300 hover:shadow-red-900/20">
                                <h3 className="text-xl font-bold mb-6 text-yellow-500 border-l-4 border-red-600 pl-3">
                                    {item.title}
                                </h3>
                                <div className="w-full h-[420px]">
                                    <MinshengMap />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            {/* 左右切换按钮 */}
            <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full border border-slate-600 transition-all"
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? SECTIONS.POVERTY.carousel.length - 1 : prev - 1))}
                aria-label="Previous slide"
                style={{ zIndex: 20 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                </svg>
            </button>
            <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full border border-slate-600 transition-all"
                onClick={() => setCurrentSlide((prev) => (prev === SECTIONS.POVERTY.carousel.length - 1 ? 0 : prev + 1))}
                aria-label="Next slide"
                style={{ zIndex: 20 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                </svg>
            </button>
        </div>
      </section>

      {/* 3. Tech Section */}
      <section id={SECTIONS.TECH.id} className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-8 border-blue-600 pl-4">{SECTIONS.TECH.title}</h2>
            <h3 className="text-xl text-blue-400 font-serif">{SECTIONS.TECH.carousel[currentTechSlide].subtitle}</h3>
            <p className="text-slate-400 leading-relaxed text-justify">
                {SECTIONS.TECH.carousel[currentTechSlide].desc}
            </p>
            <p className="text-slate-500 text-sm italic">
                {SECTIONS.TECH.carousel[currentTechSlide].desc2}
            </p>
            
            {/* 轮播指示器 */}
            <div className="flex gap-2 justify-center">
                {SECTIONS.TECH.carousel.map((item, index) => (
                    <button
                        key={item.id}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTechSlide ? 'bg-blue-500 w-8' : 'bg-slate-500 hover:bg-slate-400'}`}
                        onClick={() => setCurrentTechSlide(index)}
                        aria-label={`查看幻灯片 ${index + 1}`}
                    />
                ))}
            </div>
        </div>

        {/* 轮播图区域 */}
        <div className="md:w-2/3 w-full relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700">
            {/* 轮播内容 */}
            <div className="h-[500px]">
                {SECTIONS.TECH.carousel.map((item, index) => (
                    <div 
                        key={item.id} 
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentTechSlide ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        style={{
                            pointerEvents: index === currentTechSlide ? 'auto' : 'none',
                            zIndex: index === currentTechSlide ? 10 : 1
                        }}
                    >
                        {/* 研发支出与专利申请量图表 */}
                        {item.type === 'techChart' && (
                            <div className="glass-panel p-6 rounded-xl shadow-lg w-full h-full flex flex-col transition-all duration-300 hover:shadow-blue-900/20">
                                <h3 className="text-xl font-bold mb-6 text-blue-500 border-l-4 border-blue-600 pl-3">
                                    {item.title}
                                </h3>
                                <div className="flex-1 w-full min-h-0">
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
                                                name="研究与试验发展经费支出 (百亿/元)" 
                                                unit="百亿元"
                                                stroke="#8884d8" 
                                                fill="#8884d8" 
                                                fillOpacity={0.3}
                                            />
                                            <Bar 
                                                yAxisId="right"
                                                dataKey="patents" 
                                                name="专利申请数 (万/项)" 
                                                unit="万"
                                                barSize={20} 
                                                fill="#82ca9d" 
                                                radius={[4, 4, 0, 0]}
                                            />
                                        </ComposedChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        )}
                        
                        {/* 创新驱动全链路桑基图 */}
                        {item.type === 'bubbleChart' && (
                            <div className="glass-panel p-6 rounded-xl shadow-lg w-full h-full flex flex-col transition-all duration-300 hover:shadow-blue-900/20">
                                <h3 className="text-xl font-bold mb-6 text-blue-500 border-l-4 border-blue-600 pl-3">
                                    {item.title}
                                </h3>
                                <div className="flex-1 w-full min-h-0 flex items-center justify-center">
                      <BubbleChart />
                    </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            {/* 左右切换按钮 */}
            <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full border border-slate-600 transition-all"
                onClick={() => setCurrentTechSlide((prev) => (prev === 0 ? SECTIONS.TECH.carousel.length - 1 : prev - 1))}
                aria-label="上一张幻灯片"
                style={{ zIndex: 20 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                </svg>
            </button>
            <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full border border-slate-600 transition-all"
                onClick={() => setCurrentTechSlide((prev) => (prev === SECTIONS.TECH.carousel.length - 1 ? 0 : prev + 1))}
                aria-label="下一张幻灯片"
                style={{ zIndex: 20 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                </svg>
            </button>
        </div>
      </section>

       {/* 4. Life Expectancy Section */}
       <section id={SECTIONS.LIFE.id} className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center">
        <div className="md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-8 border-green-600 pl-4">{SECTIONS.LIFE.title}</h2>
            <h3 className="text-xl text-green-400 font-serif">{SECTIONS.LIFE.carousel[currentLifeSlide].subtitle}</h3>
            <p className="text-slate-400 leading-relaxed text-justify">
                {SECTIONS.LIFE.carousel[currentLifeSlide].desc}
            </p>
            <p className="text-slate-500 text-sm italic">
                {SECTIONS.LIFE.carousel[currentLifeSlide].desc2}
            </p>
            
            {/* 轮播指示器 */}
            <div className="flex gap-2 justify-center">
                {SECTIONS.LIFE.carousel.map((item, index) => (
                    <button
                        key={item.id}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentLifeSlide ? 'bg-green-500 w-8' : 'bg-slate-500 hover:bg-slate-400'}`}
                        onClick={() => setCurrentLifeSlide(index)}
                        aria-label={`查看第 ${index + 1} 张幻灯片`}
                    />
                ))}
            </div>
        </div>

        {/* 轮播图区域 */}
        <div className="md:w-2/3 w-full relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700">
            {/* 轮播内容 */}
            <div className="h-[500px]">
                {SECTIONS.LIFE.carousel.map((item, index) => (
                    <div 
                        key={item.id} 
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentLifeSlide ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        style={{ pointerEvents: index === currentLifeSlide ? 'auto' : 'none', zIndex: index === currentLifeSlide ? 10 : 1 }}
                    >
                        {/* 个人现金卫生支出占比变化图 */}
                        {item.type === 'lifeChart' && (
                            <div className="glass-panel p-6 rounded-xl shadow-lg w-full h-full flex flex-col transition-all duration-300 hover:shadow-green-900/20">
                                <h3 className="text-xl font-bold mb-6 text-green-500 border-l-4 border-green-600 pl-3">{item.title}</h3>
                                <div className="flex-1 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={VISUALIZATION_DATA.life} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                                            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                                            <XAxis dataKey="year" stroke="#94a3b8" />
                                            <YAxis domain={[0.2, 0.6]} tickFormatter={(value) => (value * 100) + '%'} stroke="#94a3b8" />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Legend />
                                            <Line 
                                                type="monotone" 
                                                dataKey="expectancy" 
                                                name="个人现金卫生支出占比" 
                                                unit="%"
                                                stroke="#10b981" 
                                                strokeWidth={4} 
                                                dot={{r: 6, fill: "#10b981", stroke: "#0f172a", strokeWidth: 2}}
                                                activeDot={{r: 8}}
                                                animationDuration={3000}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        )}
                        
                        {/* 健康保障主题双环形对比图 */}
                        {item.type === 'healthRingChart' && (
                            <div className="glass-panel p-6 rounded-xl shadow-lg w-full h-full flex flex-col transition-all duration-300 hover:shadow-green-900/20">
                                <h3 className="text-xl font-bold mb-6 text-green-500 border-l-4 border-green-600 pl-3">{item.title}</h3>
                                <div className="flex-1 w-full flex flex-col items-center justify-center">
                                    {/* 双环形图容器 */}
                                    <div className="w-[400px] h-[400px] relative">
                                        {/* 图注：绝对布局在左上角，纵向排列 */}
                                        <div className="absolute top-0 left-[-120px] p-4 rounded-lg z-10">
                                            {VISUALIZATION_DATA.healthExpenditure[2024].map((entry, index) => (
                                                <div key={`legend-${index}`} className="flex items-center mb-2">
                                                    <div 
                                                        className="w-3 h-3 rounded-full mr-2" 
                                                        style={{ backgroundColor: entry.color }}
                                                    />
                                                    <span className="text-sm text-white">{entry.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                {/* 2009年环形图（内层） */}
                                                <Pie
                                                    data={VISUALIZATION_DATA.healthExpenditure[2009]}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    outerRadius={130}
                                                    innerRadius={65}
                                                    dataKey="value"
                                                    nameKey="name"
                                                    type="2009"
                                                    label={false}
                                                >
                                                    {VISUALIZATION_DATA.healthExpenditure[2009].map((entry, index) => (
                                                        <Cell key={`cell-2009-${index}`} fill={entry.color} stroke="#ffffff99" strokeWidth={2} />
                                                    ))}
                                                </Pie>
                                                {/* 中间分隔边框 */}
                                                <Pie
                                                    data={[{ name: 'border', value: 100 }]}
                                                    cx="50%"
                                                    cy="50%"
                                                    outerRadius={130}
                                                    innerRadius={130}
                                                    dataKey="value"
                                                >
                                                    <Cell fill="none" stroke="#ffffff99" strokeWidth={2} />
                                                </Pie>
                                                {/* 2024年环形图（外层） */}
                                                <Pie
                                                    data={VISUALIZATION_DATA.healthExpenditure[2024]}
                                                    cx="50%"
                                                    cy="50%"
                                                    labelLine={false}
                                                    outerRadius={160}
                                                    innerRadius={115}
                                                    dataKey="value"
                                                    nameKey="name"
                                                    type="2024"
                                                    label={false}
                                                >
                                                    {VISUALIZATION_DATA.healthExpenditure[2024].map((entry, index) => (
                                                        <Cell key={`cell-2024-${index}`} fill={entry.color} stroke="#ffffff99" strokeWidth={2} />
                                                    ))}
                                                </Pie>
                                                {/* 为两个环形图分别添加Tooltip */}
                                                <Tooltip
                                                    content={({ active, payload }) => {
                                                        if (active && payload && payload.length) {
                                                            // 通过payload的index判断是内层还是外层环形
                                                            const isInner = payload[0].value === VISUALIZATION_DATA.healthExpenditure[2009].find(item => item.name === payload[0].name)?.value;
                                                            const year = isInner ? '2009年' : '2024年';
                                                            return (
                                                                <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 shadow-lg">
                                                                    <p className="text-white font-medium">{year} {payload[0].name}</p>
                                                                    <p className="text-green-400">{payload[0].value}%</p>
                                                                </div>
                                                            );
                                                        }
                                                        return null;
                                                    }}
                                                />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                

                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            {/* 左右切换按钮 */}
            <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full border border-slate-600 transition-all"
                onClick={() => setCurrentLifeSlide((prev) => (prev === 0 ? SECTIONS.LIFE.carousel.length - 1 : prev - 1))}
                aria-label="上一张"
                style={{ zIndex: 20 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                </svg>
            </button>
            <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full border border-slate-600 transition-all"
                onClick={() => setCurrentLifeSlide((prev) => (prev === SECTIONS.LIFE.carousel.length - 1 ? 0 : prev + 1))}
                aria-label="下一张"
                style={{ zIndex: 20 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                </svg>
            </button>
        </div>
      </section>

      {/* 5. Education Section */}
      <section id={SECTIONS.EDU.id} className="min-h-screen py-24 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3 space-y-6">
            <h2 className="text-3xl font-bold text-white border-l-8 border-orange-500 pl-4">{SECTIONS.EDU.title}</h2>
            <h3 className="text-xl text-orange-400 font-serif">{SECTIONS.EDU.subtitle}</h3>
              <p className="text-slate-400 leading-relaxed text-justify">
                近十年各省高考报名规模的变化，是“以人民为中心”伟大实践的缩影。广东等人口流入大省，因<span className="text-orange-400">异地高考政策</span>惠及超百万随迁子女，报名人数持续增长；<span className="text-orange-400">职教高考</span>（占高职招生超60%）为学子开辟多元路径。国家通过各类<span className="text-orange-400">专项计划</span>和 <span className="text-orange-400">“县中振兴”政策</span> ，定向增加农村和贫困地区招生名额，提升中西部教育质量，保障<span className="text-orange-400">教育机会公平</span>。
              </p>
              <p className="text-slate-500 text-sm italic">
                {SECTIONS.EDU.desc2}
            </p >
            <div className="mt-2 flex gap-3">
              <button
                onClick={() =>
                  setGaokaoIndex(i =>
                    gaokaoLength ? (i - 1 + gaokaoLength) % gaokaoLength : Math.max(0, i - 1)
                  )
                }
                className="px-3 py-1 rounded-md border text-sm transition-colors bg-slate-800 text-slate-200 border-slate-700"
              >
                上一年
              </button>
              <button
                onClick={() => setGaokaoPaused(p => !p)}
                className={`px-3 py-1 rounded-md border text-sm transition-colors ${
                  !gaokaoPaused ? 'bg-red-600 text-white border-red-700' : 'bg-slate-700 text-white border-slate-600'
                }`}
              >
                {!gaokaoPaused ? '暂停' : '启动'}
              </button>
              <button
                onClick={() =>
                  setGaokaoIndex(i =>
                    gaokaoLength ? (i + 1) % gaokaoLength : i + 1
                  )
                }
                className="px-3 py-1 rounded-md border text-sm transition-colors bg-slate-800 text-slate-200 border-slate-700"
              >
                下一年
              </button>
            </div>
        </div>
        <div className="md:w-2/3 w-full">
            <ChartWrapper title="近十年(2015-2025)各省高考实际参考人数统计" heightClass="h-[800px]">
              <GaokaoBarRace
                paused={gaokaoPaused}
                index={gaokaoIndex}
                onIndexChange={setGaokaoIndex}
                onSeriesLengthChange={setGaokaoLength}
              />
            </ChartWrapper>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center font-bold text-lightgrey border-t border-slate-800 bg-slate-950">
        <p className="text-2xl">作者：麻馨月 黄佳佳 赵珍</p>

      </footer>
    </div>
  );
};

export default App;