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