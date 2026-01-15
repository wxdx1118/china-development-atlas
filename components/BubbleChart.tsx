import React from 'react';
import { ResponsiveContainer, ComposedChart, ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell } from 'recharts';

interface BubbleChartProps {
  width?: number;
  height?: number;
}

// 气泡图数据 - 基于创新.xlsx文件结构
const bubbleData = [
  { "省份": '北京', "地方财政科技支出占比": 5.2, "规模以上工业企业R&D经费": 580, "人均GDP": 19.8, "区域分类": '东部', "颜色": '#3b82f6' },
  { "省份": '上海', "地方财政科技支出占比": 4.1, "规模以上工业企业R&D经费": 720, "人均GDP": 18.7, "区域分类": '东部', "颜色": '#3b82f6' },
  { "省份": '广东', "地方财政科技支出占比": 3.8, "规模以上工业企业R&D经费": 1860, "人均GDP": 11.2, "区域分类": '东部', "颜色": '#3b82f6' },
  { "省份": '江苏', "地方财政科技支出占比": 3.5, "规模以上工业企业R&D经费": 1580, "人均GDP": 14.3, "区域分类": '东部', "颜色": '#3b82f6' },
  { "省份": '浙江', "地方财政科技支出占比": 3.2, "规模以上工业企业R&D经费": 1120, "人均GDP": 12.9, "区域分类": '东部', "颜色": '#3b82f6' },
  { "省份": '安徽', "地方财政科技支出占比": 2.9, "规模以上工业企业R&D经费": 620, "人均GDP": 8.6, "区域分类": '中部', "颜色": '#10b981' },
  { "省份": '湖北', "地方财政科技支出占比": 2.7, "规模以上工业企业R&D经费": 580, "人均GDP": 9.1, "区域分类": '中部', "颜色": '#10b981' },
  { "省份": '湖南', "地方财政科技支出占比": 2.5, "规模以上工业企业R&D经费": 490, "人均GDP": 8.3, "区域分类": '中部', "颜色": '#10b981' },
  { "省份": '四川', "地方财政科技支出占比": 2.3, "规模以上工业企业R&D经费": 610, "人均GDP": 7.8, "区域分类": '西部', "颜色": '#f59e0b' },
  { "省份": '陕西', "地方财政科技支出占比": 2.8, "规模以上工业企业R&D经费": 320, "人均GDP": 8.0, "区域分类": '西部', "颜色": '#f59e0b' },
  { "省份": '重庆', "地方财政科技支出占比": 2.4, "规模以上工业企业R&D经费": 390, "人均GDP": 9.5, "区域分类": '西部', "颜色": '#f59e0b' },
  { "省份": '辽宁', "地方财政科技支出占比": 2.1, "规模以上工业企业R&D经费": 280, "人均GDP": 7.6, "区域分类": '东北', "颜色": '#ef4444' },
  { "省份": '吉林', "地方财政科技支出占比": 1.8, "规模以上工业企业R&D经费": 150, "人均GDP": 6.9, "区域分类": '东北', "颜色": '#ef4444' },
  { "省份": '山东', "地方财政科技支出占比": 2.6, "规模以上工业企业R&D经费": 980, "人均GDP": 9.9, "区域分类": '东部', "颜色": '#3b82f6' },
  { "省份": '河南', "地方财政科技支出占比": 2.2, "规模以上工业企业R&D经费": 560, "人均GDP": 7.2, "区域分类": '中部', "颜色": '#10b981' },
];

// 自定义工具提示
const CustomBubbleTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-800/90 p-4 rounded-lg border border-slate-700 text-white">
        <p className="font-bold text-lg">{data["省份"]}</p>
        <p className="text-sm text-slate-300 mt-1">区域：{data["区域分类"]}</p>
        <p className="text-sm text-blue-300 mt-1">地方财政科技支出占比：{data["地方财政科技支出占比"]}%</p>
        <p className="text-sm text-green-300 mt-1">规模以上工业企业R&D经费：{data["规模以上工业企业R&D经费"]}亿元</p>
        <p className="text-sm text-yellow-300 mt-1">人均GDP：{data["人均GDP"]}万元</p>
      </div>
    );
  }
  return null;
};

export const BubbleChart: React.FC<BubbleChartProps> = ({ width = 900, height = 450 }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        margin={{ top: 20, right: 30, bottom: 40, left: 80 }}
      >
        <XAxis
          dataKey="地方财政科技支出占比"
          name="地方财政科技支出占比"
          label={{ value: '地方财政科学技术支出占总支出比例（%）', position: 'insideBottomRight', offset: -20, fill: '#cbd5e1' }}
          stroke="#94a3b8"
          tick={{ fill: '#cbd5e1' }}
        />
        <YAxis
          dataKey="规模以上工业企业R&D经费"
          name="规模以上工业企业R&D经费"
          label={{ 
            value: '规模以上工业企业R&D经费(亿元)', 
            angle: -90, 
            position: 'outsideLeft', 
            dx: -40, // 控制水平方向偏移，增加空间以显示完整标签
            dy: 0,  // 控制垂直方向偏移
            fill: '#cbd5e1' 
          }}
          stroke="#94a3b8"
          tick={{ fill: '#cbd5e1' }}
        />
        <ZAxis
          dataKey="人均GDP"
          range={[300, 1000]}
        />
        <Tooltip content={<CustomBubbleTooltip />} />
        <Scatter name="创新驱动气泡图" data={bubbleData}>
          {bubbleData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry["颜色"]} stroke="#0f172a" strokeWidth={1} />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
};