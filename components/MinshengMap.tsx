import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { MINSHENG_HELP_DATA, MINSHENG_GEO_COORD_MAP } from '../constants';

const getLinesData = () => {
  const linesData = [];
  MINSHENG_HELP_DATA.forEach(item => {
    const startCoord = MINSHENG_GEO_COORD_MAP[item.from];
    const endCoord = MINSHENG_GEO_COORD_MAP[item.to];
    if (startCoord && endCoord) {
      linesData.push({
        name: `${item.from}→${item.to}`,
        value: item.project,
        coords: [startCoord, endCoord],
      });
    }
  });
  return linesData;
};

const getScatterData = (type: 'from' | 'to') => {
  const points = [];
  const names = new Set(MINSHENG_HELP_DATA.map(item => item[type]));
  names.forEach(name => {
    const coord = MINSHENG_GEO_COORD_MAP[name];
    if (coord) {
      points.push({
        name,
        value: [...coord, type === 'from' ? 15 : 10],
        itemStyle: { color: type === 'from' ? '#e53935' : '#1e88e5' },
      });
    }
  });
  return points;
};

export const MinshengMap: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<any>(null);
  // 只在首次渲染时加载地图
  useEffect(() => {
    let isMounted = true;
    fetch(import.meta.env.BASE_URL + 'china.json')
      .then(res => res.json())
      .then(geoJson => {
        if (!isMounted) return;
        echarts.registerMap('china', geoJson);
        if (!chartRef.current) return;
        chartInstance.current = echarts.init(chartRef.current);
        const option = {
      title: {
        text: '东西部帮扶项目流向地图',
        left: 'center',
        textStyle: { fontSize: 22, fontWeight: 'bold', color: '#2d3748' },
        subtext: '鼠标悬浮/点击流向线查看帮扶项目',
        subtextStyle: { fontSize: 14, color: '#718096' },
      },
      tooltip: {
        trigger: 'item',
        padding: 12,
        textStyle: { fontSize: 14 },
        formatter: function(params: any) {
          if (params.seriesType === 'lines') {
            return `<div><p style="margin:4px 0;"><b>帮扶流向：</b>${params.name}</p><p style="margin:4px 0;"><b>帮扶项目：</b>${params.value}</p></div>`;
          } else if (params.seriesType === 'scatter') {
            return `<b>${params.name}</b>`;
          }
          return params.name;
        },
      },
      geo: {
        map: 'china',
        roam: true,
        zoom: 1.2,
        label: { show: true, fontSize: 12, color: '#2d3748' },
        itemStyle: { areaColor: '#e8f4f8', borderColor: '#4299e1', borderWidth: 2 },
        emphasis: { itemStyle: { areaColor: '#bbdefb' }, label: { color: '#1a202c' } },
      },
      series: [
        {
          type: 'lines',
          zlevel: 2,
          effect: { show: true, period: 8, trailLength: 0.6, color: '#e53935', symbolSize: 5 },
          lineStyle: {
            width: 2,
            opacity: 0.7,
            curveness: 0.2,
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 0,
              colorStops: [
                { offset: 0, color: '#e53935' },
                { offset: 1, color: '#1e88e5' },
              ],
            },
          },
          data: getLinesData(),
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 3,
          name: '东部省份',
          data: getScatterData('from'),
          symbolSize: (val: number[]) => val[2],
          emphasis: { symbolSize: (val: number[]) => val[2] + 5 },
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 3,
          name: '帮扶市县',
          data: getScatterData('to'),
          symbolSize: (val: number[]) => val[2],
          emphasis: { symbolSize: (val: number[]) => val[2] + 5 },
        },
      ],
      legend: {
        show: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '10px',
        data: [
          { name: '东部省份', icon: 'circle', textStyle: { color: '#e53935' } },
          { name: '帮扶市县', icon: 'circle', textStyle: { color: '#1e88e5' } },
        ],
      },
        };
        chartInstance.current.setOption(option);
        window.addEventListener('resize', chartInstance.current.resize);
      });
    return () => {
      isMounted = false;
      if (chartInstance.current) {
        chartInstance.current.dispose();
        window.removeEventListener('resize', chartInstance.current.resize);
      }
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '600px', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }} />;
};
