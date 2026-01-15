// 民生福祉-东西部帮扶流向地图数据
export interface MinshengHelpItem {
  from: string; // 东部省份
  to: string;   // 帮扶城市（市/县）
  project: string;
}

export const MINSHENG_HELP_DATA: MinshengHelpItem[] = [
  { from: '北京', to: '内蒙古赤峰市巴林左旗', project: '京蒙协作肉牛产业示范园' },
  { from: '北京', to: '河北张家口市张北县', project: '坝上蔬菜产销冷链中心' },
  { from: '天津', to: '甘肃庆阳市环县', project: '津环肉羊产业园+‘津甘飞手’劳务品牌' },
  { from: '天津', to: '河北承德市围场县', project: '津承马铃薯脱毒种薯基地' },
  { from: '上海', to: '云南昭通市彝良县', project: '组团式医疗（瑞金医院对口彝良县人民医院）' },
  { from: '上海', to: '贵州遵义市赤水市', project: '沪遵竹产业循环经济园' },
  { from: '江苏', to: '陕西榆林市清涧县', project: '苏陕红枣产销对接中心' },
  { from: '江苏', to: '青海海东市互助县', project: '残疾人托养康复中心' },
  { from: '浙江', to: '四川宜宾市屏山县', project: '浙川纺织产业协作示范园' },
  { from: '福建', to: '宁夏银川市永宁县闽宁镇', project: '闽宁协作数字经济产业园' },
  { from: '山东', to: '甘肃定西市临洮县', project: '青岛临洮现代农业产业园' },
  { from: '山东', to: '重庆市开州区', project: '鲁渝共建柑橘深加工产业园' },
  { from: '广东', to: '广西河池市凤山县', project: '云海农科产业示范园（果蔬+农文旅）' },
  { from: '广东', to: '贵州毕节市赫章县', project: '‘南粤家政’赫章培训基地' },
  { from: '北京', to: '内蒙古兴安盟科尔沁右翼前旗', project: '‘乡村悦读空间’公益书屋' },
  { from: '天津', to: '甘肃武威市古浪县', project: '津古黄花滩移民区日光温室基地' },
  { from: '上海', to: '云南普洱市澜沧县', project: '“组团式”教育帮扶（上海师大附中对口澜沧一中）' },
  { from: '江苏', to: '陕西汉中市镇巴县', project: '苏陕茶叶（镇巴毛尖）标准化加工园' },
  { from: '浙江', to: '四川凉山州布拖县', project: '浙川蓝莓高山种植示范基地' },
  { from: '福建', to: '宁夏固原市西吉县', project: '闽西协作马铃薯种薯繁育中心' },
  { from: '山东', to: '甘肃临夏州广河县', project: '济南广河皮革产业园' },
  { from: '广东', to: '广西百色市田阳区', project: '粤桂共建芒果全产业链示范区' },
  { from: '广东', to: '贵州黔南州罗甸县', project: '粤港澳大湾区“菜篮子”罗甸基地' },
  { from: '北京', to: '内蒙古通辽市奈曼旗', project: '京蒙协作沙地衬膜水稻示范基地' },
  { from: '天津', to: '甘肃白银市会宁县', project: '津会津甘共建肉羊交易中心' },
  { from: '上海', to: '云南怒江州福贡县', project: '沪滇协作草果产业园' },
  { from: '江苏', to: '青海海南州共和县', project: '苏青清洁能源（光伏）运维培训基地' },
  { from: '浙江', to: '四川阿坝州汶川县', project: '浙川共建樱桃谷乡村振兴示范村' },
  { from: '福建', to: '宁夏中卫市海原县', project: '闽宁协作高端肉牛产业园' },
  { from: '山东', to: '重庆市黔江区', project: '鲁渝协作蚕桑生物科技产业园' },
];

export const MINSHENG_GEO_COORD_MAP: Record<string, [number, number]> = {
  // 东部省份（起点）
  "北京": [116.40, 39.90],
  "天津": [117.20, 39.13],
  "上海": [121.47, 31.23],
  "江苏": [118.76, 32.04],
  "浙江": [120.19, 30.26],
  "福建": [119.30, 26.08],
  "山东": [117.00, 36.65],
  "广东": [113.23, 23.16],

  // 帮扶市县（终点）
  "内蒙古赤峰市巴林左旗": [119.47, 43.93],
  "河北张家口市张北县": [114.73, 41.15],
  "甘肃庆阳市环县": [107.38, 36.57],
  "河北承德市围场县": [117.73, 41.95],
  "云南昭通市彝良县": [104.06, 27.62],
  "贵州遵义市赤水市": [105.78, 28.50],
  "陕西榆林市清涧县": [110.15, 37.11],
  "青海海东市互助县": [102.15, 36.84],
  "四川宜宾市屏山县": [104.06, 28.87],
  "宁夏银川市永宁县闽宁镇": [105.71, 38.30],
  "甘肃定西市临洮县": [103.89, 35.38],
  "重庆市开州区": [108.39, 31.22],
  "广西河池市凤山县": [107.05, 24.41],
  "贵州毕节市赫章县": [104.71, 27.13],
  "内蒙古兴安盟科尔沁右翼前旗": [119.97, 46.05],
  "甘肃武威市古浪县": [102.80, 37.45],
  "云南普洱市澜沧县": [100.05, 22.59],
  "陕西汉中市镇巴县": [107.91, 32.56],
  "四川凉山州布拖县": [102.88, 27.78],
  "宁夏固原市西吉县": [105.75, 35.90],
  "甘肃临夏州广河县": [103.54, 35.48],
  "广西百色市田阳区": [106.96, 23.72],
  "贵州黔南州罗甸县": [106.71, 25.42],
  "内蒙古通辽市奈曼旗": [120.68, 42.92],
  "甘肃白银市会宁县": [105.05, 35.73],
  "云南怒江州福贡县": [98.92, 26.95],
  "青海海南州共和县": [100.68, 36.20],
  "四川阿坝州汶川县": [103.57, 31.47],
  "宁夏中卫市海原县": [105.63, 36.56],
  "重庆市黔江区": [108.78, 29.52],
};
import { AppData } from './types';

// Data sourced from National Bureau of Statistics of China & World Bank
export const VISUALIZATION_DATA: AppData = {
  gdp: [
    { year: '1978', gdp: 0.37, growthRate: 11.7 },
    { year: '1979', gdp: 0.41, growthRate: 10.8 },
    { year: '1980', gdp: 0.46, growthRate: 12.2 },
    { year: '1981', gdp: 0.49, growthRate: 6.5 },
    { year: '1982', gdp: 0.54, growthRate: 10.2 },
    { year: '1983', gdp: 0.6, growthRate: 11.1 },
    { year: '1984', gdp: 0.73, growthRate: 21.7 },
    { year: '1985', gdp: 0.91, growthRate: 24.7 },
    { year: '1986', gdp: 1.04, growthRate: 14.3 },
    { year: '1987', gdp: 1.22, growthRate: 17.3 },
    { year: '1988', gdp: 1.52, growthRate: 24.6 },
    { year: '1989', gdp: 1.72, growthRate: 13.2 },
    { year: '1990', gdp: 1.89, growthRate: 9.9 },
    { year: '1991', gdp: 2.21, growthRate: 16.9 },
    { year: '1992', gdp: 2.73, growthRate: 23.5 },
    { year: '1993', gdp: 3.58, growthRate: 31.1 },
    { year: '1994', gdp: 4.89, growthRate: 36.6 },
    { year: '1995', gdp: 6.16, growthRate: 26 },
    { year: '1996', gdp: 7.22, growthRate: 17.2 },
    { year: '1997', gdp: 8.02, growthRate: 11.1 },
    { year: '1998', gdp: 8.59, growthRate: 7.1 },
    { year: '1999', gdp: 9.14, growthRate: 6.4 },
    { year: '2000', gdp: 10.13, growthRate: 10.8 },
    { year: '2001', gdp: 11.22, growthRate: 10.8 },
    { year: '2002', gdp: 12.33, growthRate: 9.9 },
    { year: '2003', gdp: 13.94, growthRate: 13.1 },
    { year: '2004', gdp: 16.42, growthRate: 17.8 },
    { year: '2005', gdp: 18.99, growthRate: 15.7 },
    { year: '2006', gdp: 22.26, growthRate: 17.2 },
    { year: '2007', gdp: 27.42, growthRate: 23.2 },
    { year: '2008', gdp: 32.43, growthRate: 18.3 },
    { year: '2009', gdp: 35.45, growthRate: 9.3 },
    { year: '2010', gdp: 41.93, growthRate: 18.3 },
    { year: '2011', gdp: 49.57, growthRate: 18.2 },
    { year: '2012', gdp: 54.75, growthRate: 10.4 },
    { year: '2013', gdp: 60.37, growthRate: 10.3 },
    { year: '2014', gdp: 65.58, growthRate: 8.6 },
    { year: '2015', gdp: 70.25, growthRate: 7.1 },
    { year: '2016', gdp: 76.12, growthRate: 8.4 },
    { year: '2017', gdp: 84.74, growthRate: 11.3 },
    { year: '2018', gdp: 93.6, growthRate: 10.5 },
    { year: '2019', gdp: 100.59, growthRate: 7.5 },
    { year: '2020', gdp: 103.49, growthRate: 2.9 },
    { year: '2021', gdp: 117.38, growthRate: 13.4 },
    { year: '2022', gdp: 123.4, growthRate: 5.1 },
    { year: '2023', gdp: 129.43, growthRate: 4.9 },
    { year: '2024', gdp: 134.91, growthRate: 4.2 },
  ],
  poverty: [
    { year: '2012', population: 98.99, urbanization: 53.1 },
    { year: '2013', population: 82.49, urbanization: 54.5 },
    { year: '2014', population: 70.17, urbanization: 55.8 },
    { year: '2015', population: 55.75, urbanization: 57.3 },
    { year: '2016', population: 43.35, urbanization: 58.8 },
    { year: '2017', population: 30.46, urbanization: 60.2 },
    { year: '2018', population: 16.60, urbanization: 61.5 },
    { year: '2019', population: 5.51, urbanization: 62.7 },
    { year: '2020', population: 0, urbanization: 63.9 },
  ],
  tech: [
    { year: '2012', expenditure: 102.98, patents: 205 },
    { year: '2014', expenditure: 130.16, patents: 236 },
    { year: '2016', expenditure: 156.77, patents: 346 },
    { year: '2018', expenditure: 196.78, patents: 432 },
    { year: '2020', expenditure: 243.93, patents: 519 },
    { year: '2022', expenditure: 307.83, patents: 536 },
    { year: '2024', expenditure: 363.26, patents: 583 },
  ],
  life: [
    { year: '2005', expectancy: 0.52 },
    { year: '2008', expectancy: 0.40 },
    { year: '2011', expectancy: 0.35 },
    { year: '2014', expectancy: 0.32 },
    { year: '2017', expectancy: 0.29 },
    { year: '2020', expectancy: 0.28 },
    { year: '2024', expectancy: 0.28 },
  ],
  // 健康保障双环形对比图数据
  healthExpenditure: {
    2009: [
      { name: '政府卫生支出', value: 27.5, amount: 4816.26, color: '#3b82f6' },
      { name: '社会卫生支出', value: 35.1, amount: 6154.49, color: '#10b981' },
      { name: '个人现金支出', value: 37.4, amount: 6571.16, color: '#f59e0b' }
    ],
    2024: [
      { name: '政府卫生支出', value: 24.9, amount: 22608.01, color: '#3b82f6' },
      { name: '社会卫生支出', value: 47.6, amount: 43280.01, color: '#10b981' },
      { name: '个人现金支出', value: 27.5, amount: 25007.53, color: '#f59e0b' }
    ]
  }
};

export const SECTIONS = {
  ECONOMY: {
    id: 'economy',
    title: '经济腾飞',
    subtitle: '从高速度增长向高质量发展迈进',
    desc: '改革开放以来，中国经济总量成倍增长，成为世界第二大经济体。图表展示了国内生产总值（GDP）的指数级增长轨迹，印证了“发展是硬道理”到“新发展理念”的转变。',
    desc2: '数据来源：中国国家统计局 (https://data.stats.gov.cn/)年度GDP数据',
  },
  POVERTY: {
    id: 'poverty',
    title: '民生福祉',
    // 轮播图数据（包含脱贫攻坚图和东西部帮扶流向地图）
    carousel: [
      {
        id: 1,
        title: '脱贫攻坚与城镇化率',
        subtitle: '人类历史上规模最大的脱贫攻坚战',
        desc: '坚持“以人民为中心”，中国在2020年实现了现行标准下农村贫困人口全部脱贫。图表展示了农村贫困人口的“清零”过程与城镇化率的稳步提升。',
        desc2: '数据来源于《人类减贫的中国实践》白皮书（http://www.scio.gov.cn/gxzt/dtzt/2021/rljpdzgsjbps/）、中国国家统计局 (https://data.stats.gov.cn/)年度人口数据',
        type: 'povertyChart'
      },
      {
        id: 2,
        title: '东西部帮扶项目流向地图',
        subtitle: '区域协调发展的生动实践',
        desc: '东西部扶贫协作是中国特色扶贫开发的重要组成部分，通过东部发达地区对西部贫困地区的结对帮扶，实现了资源要素的跨区域流动和优势互补。地图展示了东部省份与西部帮扶市县之间的项目合作网络。',
        desc2: '数据来源：中国政府网（https://www.gov.cn/）“东西部扶贫协作”相关政策文件及新闻报道',
        type: 'map'
      }
    ]
  },
  TECH: {
    id: 'tech',
    title: '创新驱动',
    // 轮播图数据（包含研发支出与专利申请量图表和创新驱动全链路桑基图）
    carousel: [
      {
        id: 1,
        title: '研发支出与专利申请量',
        subtitle: '科技自立自强支撑高质量发展',
        desc: '创新是引领发展的第一动力。R&D经费投入强度的持续加大与专利申请量的攀升，反映了中国从“要素驱动”向“创新驱动”的战略转型。',
        desc2: '数据来源：中国国家统计局 (https://data.stats.gov.cn/)年度科技数据',
        type: 'techChart'
      },
      {
        id: 2,
        title: '省域创新发展水平',
        subtitle: '研发投入、创新产出与经济发展关联分析',
        desc: '气泡图同时展示了15个代表性省份的研发投入强度（X轴）、高技术产业增加值占比（Y轴）和人均GDP（气泡大小），不同颜色代表不同区域（东部/中部/西部/东北）。通过气泡图可以直观分析创新投入与产出的关联关系，以及创新驱动下的经济发展水平差异。',
        desc2: '数据来源：国家统计局2024年统计公报、各省统计年鉴、科技部区域创新能力报告',
        type: 'bubbleChart'
      }
    ]
  },
  LIFE: {
    id: 'life',
    title: '健康中国',
    // 轮播图数据（包含个人卫生支出变化图和健康保障主题双环形对比图）
    carousel: [
      {
        id: 1,
        title: '个人卫生支出变化',
        subtitle: '人民健康是民族昌盛和国家富强的重要标志',
        desc: '个人现金卫生支出占比的变化反映了医疗卫生保障体系的完善程度。数据显示，我国个人现金卫生支出占卫生总费用的比例从2005年的52%下降到2024年的28%，居民医疗负担明显减轻。',
        desc2: '数据来源：中国国家统计局 (https://data.stats.gov.cn/)年度卫生健康数据',
        type: 'lifeChart'
      },
      {
        id: 2,
        title: '新医改15年：健康保障体系变革',
        subtitle: '2009年新医改政策影响深远',
        desc: '2009年3月，《中共中央国务院关于深化医药卫生体制改革的意见》颁布，开启了中国医改的新纪元。15年来，我国卫生总费用从1.75万亿增至9万亿，增长4倍多。核心变化：个人现金支出占比从37.4%降至27.5%，下降9.9个百分点，提前实现"到2030年降至25%左右"的健康中国规划目标；社会卫生支出（医保）占比从35.1%提升至47.6%，成为医疗费用第一大支付方，全民医保体系的支柱作用凸显；政府支出占比保持稳定，体现了财政投入的持续与精准。',
        desc2: '数据来源：中国国家统计局2009-2024年卫生总费用核算数据',
        type: 'healthRingChart'
      }
    ]
  }
};