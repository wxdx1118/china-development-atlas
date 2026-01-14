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
    { year: '1978', gdp: 0.36, growthRate: 11.7 },
    { year: '1985', gdp: 0.91, growthRate: 13.5 },
    { year: '1990', gdp: 1.89, growthRate: 3.9 },
    { year: '1995', gdp: 6.13, growthRate: 10.9 },
    { year: '2000', gdp: 10.03, growthRate: 8.5 },
    { year: '2005', gdp: 18.73, growthRate: 11.4 },
    { year: '2010', gdp: 41.21, growthRate: 10.6 },
    { year: '2015', gdp: 68.89, growthRate: 7.0 },
    { year: '2020', gdp: 101.36, growthRate: 2.2 },
    { year: '2023', gdp: 126.06, growthRate: 5.2 },
  ],
  poverty: [
    { year: '2012', population: 98.99, urbanization: 52.6 },
    { year: '2013', population: 82.49, urbanization: 53.7 },
    { year: '2014', population: 70.17, urbanization: 54.8 },
    { year: '2015', population: 55.75, urbanization: 56.1 },
    { year: '2016', population: 43.35, urbanization: 57.3 },
    { year: '2017', population: 30.46, urbanization: 58.5 },
    { year: '2018', population: 16.60, urbanization: 59.6 },
    { year: '2019', population: 5.51, urbanization: 60.6 },
    { year: '2020', population: 0, urbanization: 63.9 },
  ],
  tech: [
    { year: '2010', expenditure: 706, patents: 391 },
    { year: '2012', expenditure: 1029, patents: 652 },
    { year: '2014', expenditure: 1301, patents: 928 },
    { year: '2016', expenditure: 1567, patents: 1338 },
    { year: '2018', expenditure: 1967, patents: 1542 },
    { year: '2020', expenditure: 2439, patents: 1497 },
    { year: '2022', expenditure: 3078, patents: 1619 },
  ],
  life: [
    { year: '1981', expectancy: 67.8 },
    { year: '1990', expectancy: 68.6 },
    { year: '2000', expectancy: 71.4 },
    { year: '2010', expectancy: 74.8 },
    { year: '2015', expectancy: 76.3 },
    { year: '2019', expectancy: 77.3 },
    { year: '2021', expectancy: 78.2 },
    { year: '2023', expectancy: 78.6 },
  ]
};

export const SECTIONS = {
  ECONOMY: {
    id: 'economy',
    title: '经济腾飞 (Economic Velocity)',
    subtitle: '从高速度增长向高质量发展迈进',
    desc: '改革开放以来，中国经济总量成倍增长，成为世界第二大经济体。图表展示了国内生产总值（GDP）的指数级增长轨迹，印证了“发展是硬道理”到“新发展理念”的转变。',
  },
  POVERTY: {
    id: 'poverty',
    title: '民生福祉 (People First)',
    subtitle: '人类历史上规模最大的脱贫攻坚战',
    desc: '坚持“以人民为中心”，中国在2020年实现了现行标准下农村贫困人口全部脱贫。图表展示了农村贫困人口的“清零”过程与城镇化率的稳步提升。',
  },
  TECH: {
    id: 'tech',
    title: '创新驱动 (Innovation)',
    subtitle: '科技自立自强支撑高质量发展',
    desc: '创新是引领发展的第一动力。R&D经费投入强度的持续加大与专利申请量的攀升，反映了中国从“要素驱动”向“创新驱动”的战略转型。',
  },
  LIFE: {
    id: 'life',
    title: '健康中国 (Social Health)',
    subtitle: '人民健康是民族昌盛和国家富强的重要标志',
    desc: '随着医疗卫生体系的完善，人均预期寿命显著提高，这是社会发展最直观的温度计。',
  }
};