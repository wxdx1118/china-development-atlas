import React from 'react';
import { ResponsiveContainer, Sankey, Tooltip } from 'recharts';
import { CustomTooltip } from './CustomTooltip';

interface SankeyChartProps {
  width?: number;
  height?: number;
}

// 创新驱动全链路桑基图数据
const sankeyData = {
  // 使用数组索引作为source和target
  nodes: [
    // 创新投入
    { name: '全社会研发经费' },
    { name: '基础研究经费' },
    
    // 创新主体
    { name: '企业' },
    { name: '高校' },
    { name: '科研院所' },
    
    // 创新产出
    { name: '国内有效发明专利' },
    { name: '高技术制造业' },
    { name: '高价值专利' },
    
    // 创新效益
    { name: '数字经济核心产业' },
    { name: '居民人均可支配收入' }
  ],
  links: [
    // 投入到主体
    { source: 0, target: 2, value: 771 },
    { source: 0, target: 3, value: 98 },
    { source: 0, target: 4, value: 131 },
    { source: 1, target: 3, value: 55 },
    { source: 1, target: 4, value: 45 },
    
    // 主体到产出
    { source: 2, target: 5, value: 450 },
    { source: 2, target: 6, value: 321 },
    { source: 3, target: 5, value: 25 },
    { source: 3, target: 7, value: 10 },
    { source: 4, target: 5, value: 5 },
    { source: 4, target: 7, value: 15 },
    
    // 产出发效益
    { source: 5, target: 8, value: 400 },
    { source: 6, target: 8, value: 300 },
    { source: 7, target: 8, value: 20 },
    { source: 8, target: 9, value: 720 }
  ]
};

// 自定义工具提示内容
const SankeyTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-slate-800/90 p-3 rounded-lg border border-slate-700 text-white">
        <p className="font-bold">{data.name}</p>
        {data.type === 'node' && (
          <p className="text-sm text-slate-300">{data.node.name}</p>
        )}
        {data.type === 'link' && (
          <>
            <p className="text-sm text-slate-300">
              {sankeyData.nodes[data.sourceIndex].name} → {sankeyData.nodes[data.targetIndex].name}
            </p>
            <p className="text-sm text-green-400">流量: {data.value}</p>
          </>
        )}
      </div>
    );
  }
  return null;
};

export const SankeyChart: React.FC<SankeyChartProps> = ({ width = 900, height = 400 }) => {
  // 点击事件处理函数
  const handleClick = (item: any, type: string, event: any) => {
    console.log(`${type} clicked:`, item);
    // 可以添加点击后的交互逻辑，比如打开详情页面等
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Sankey
        data={sankeyData}
        margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        nodeWidth={20}
        nodePadding={10}
        node={{ 
          fill: '#8884d8', 
          stroke: '#0f172a', 
          strokeWidth: 1,
          cursor: 'pointer',
          fillOpacity: 0.8,
          onMouseEnter: (event: any) => event.target.style.fillOpacity = 1,
          onMouseLeave: (event: any) => event.target.style.fillOpacity = 0.8
        }}
        link={{ 
          stroke: '#82ca9d', 
          strokeOpacity: 0.6,
          strokeWidth: 2,
          onMouseEnter: (event: any) => event.target.style.strokeOpacity = 1,
          onMouseLeave: (event: any) => event.target.style.strokeOpacity = 0.6
        }}
        onClick={handleClick}
      >
        <Tooltip content={<SankeyTooltip />} />
      </Sankey>
    </ResponsiveContainer>
  );
};
