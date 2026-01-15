import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Cell,
} from 'recharts';
import { CustomTooltip } from './CustomTooltip';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

type ProvinceEntry = { name: string; value: number };
type YearData = { year: string; entities: ProvinceEntry[] };

const interpolateHsl = (start: string, end: string, steps = 30) => {
  const parseHex = (hex: string) => {
    const h = hex.replace('#', '');
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };
  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h, s, l };
  };
  const hslToHex = (h: number, s: number, l: number) => {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    let r: number, g: number, b: number;
    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = (x: number) => {
      const v = Math.round(x * 255);
      return v.toString(16).padStart(2, '0');
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };
  const sRgb = parseHex(start);
  const eRgb = parseHex(end);
  const sHsl = rgbToHsl(sRgb.r, sRgb.g, sRgb.b);
  const eHsl = rgbToHsl(eRgb.r, eRgb.g, eRgb.b);
  const colors: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const h = sHsl.h + (eHsl.h - sHsl.h) * t;
    const s = sHsl.s + (eHsl.s - sHsl.s) * t;
    const l = sHsl.l + (eHsl.l - sHsl.l) * t;
    colors.push(hslToHex(h, s, l));
  }
  return colors;
};

const COLORS = interpolateHsl('#EA1F2D', '#FEFE9A', 30);

const generateMonochrome = (baseHex: string, steps = 30, lStart = 0.35, lEnd = 0.8) => {
  const parseHex = (hex: string) => {
    const h = hex.replace('#', '');
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };
  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h, s, l };
  };
  const hslToHex = (h: number, s: number, l: number) => {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    let r: number, g: number, b: number;
    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = (x: number) => {
      const v = Math.round(x * 255);
      return v.toString(16).padStart(2, '0');
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };
  const { r, g, b } = parseHex(baseHex);
  const base = rgbToHsl(r, g, b);
  const colors: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const l = lStart + (lEnd - lStart) * t;
    colors.push(hslToHex(base.h, base.s, l));
  }
  return colors;
};

const MONO_COLORS = generateMonochrome('#EA1F2D', 30, 0.35, 0.8);

// HCL interpolation to match d3.interpolateHcl
const hexToRgb = (hex: string) => {
  const h = hex.replace('#', '');
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};
const rgbToXyz = (r: number, g: number, b: number) => {
  const srgb = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  const [R, G, B] = srgb;
  const x = R * 0.4124564 + G * 0.3575761 + B * 0.1804375;
  const y = R * 0.2126729 + G * 0.7151522 + B * 0.0721750;
  const z = R * 0.0193339 + G * 0.1191920 + B * 0.9503041;
  return { x: x * 100, y: y * 100, z: z * 100 };
};
const xyzToLab = (x: number, y: number, z: number) => {
  const refX = 95.047, refY = 100.0, refZ = 108.883;
  let X = x / refX, Y = y / refY, Z = z / refZ;
  const f = (t: number) => (t > 0.008856 ? Math.pow(t, 1 / 3) : (7.787 * t) + (16 / 116));
  X = f(X); Y = f(Y); Z = f(Z);
  const L = (116 * Y) - 16;
  const a = 500 * (X - Y);
  const b = 200 * (Y - Z);
  return { L, a, b };
};
const labToLch = (L: number, a: number, b: number) => {
  const C = Math.sqrt(a * a + b * b);
  let H = Math.atan2(b, a) * (180 / Math.PI);
  if (H < 0) H += 360;
  return { L, C, H };
};
const lchToLab = (L: number, C: number, H: number) => {
  const rad = (H * Math.PI) / 180;
  const a = Math.cos(rad) * C;
  const b = Math.sin(rad) * C;
  return { L, a, b };
};
const labToXyz = (L: number, a: number, b: number) => {
  const refX = 95.047, refY = 100.0, refZ = 108.883;
  let Y = (L + 16) / 116;
  let X = a / 500 + Y;
  let Z = Y - b / 200;
  const finv = (t: number) => {
    const t3 = t * t * t;
    return t3 > 0.008856 ? t3 : (t - 16 / 116) / 7.787;
  };
  X = finv(X); Y = finv(Y); Z = finv(Z);
  return { x: X * refX, y: Y * refY, z: Z * refZ };
};
const xyzToRgb = (x: number, y: number, z: number) => {
  x /= 100; y /= 100; z /= 100;
  let R = x * 3.2404542 + y * -1.5371385 + z * -0.4985314;
  let G = x * -0.9692660 + y * 1.8760108 + z * 0.0415560;
  let B = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;
  const inv = (v: number) => v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055;
  R = inv(R); G = inv(G); B = inv(B);
  const clamp = (v: number) => Math.min(255, Math.max(0, Math.round(v * 255)));
  return { r: clamp(R), g: clamp(G), b: clamp(B) };
};
const rgbToHex = (r: number, g: number, b: number) => {
  const toHex = (v: number) => v.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
const interpolateHcl = (startHex: string, endHex: string, steps = 30) => {
  const s = hexToRgb(startHex);
  const e = hexToRgb(endHex);
  const sLab = xyzToLab(...Object.values(rgbToXyz(s.r, s.g, s.b)));
  const eLab = xyzToLab(...Object.values(rgbToXyz(e.r, e.g, e.b)));
  const sLch = labToLch(sLab.L, sLab.a, sLab.b);
  const eLch = labToLch(eLab.L, eLab.a, eLab.b);
  let dH = eLch.H - sLch.H;
  if (dH > 180) dH -= 360;
  if (dH < -180) dH += 360;
  const colors: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const L = sLch.L + (eLch.L - sLch.L) * t;
    const C = sLch.C + (eLch.C - sLch.C) * t;
    const H = sLch.H + dH * t;
    const lab = lchToLab(L, C, H);
    const rgb = xyzToRgb(...Object.values(labToXyz(lab.L, lab.a, lab.b)));
    colors.push(rgbToHex(rgb.r, rgb.g, rgb.b));
  }
  return colors;
};
const BASE_COLORS = interpolateHcl('#EA1F2D', '#FEFE9A', 30);

interface GaokaoBarRaceProps {
  paused?: boolean;
  index?: number;
  onIndexChange?: (next: number) => void;
  onSeriesLengthChange?: (len: number) => void;
}

export const GaokaoBarRace: React.FC<GaokaoBarRaceProps> = ({ paused = false, index: controlledIndex, onIndexChange, onSeriesLengthChange }) => {
  const [series, setSeries] = useState<YearData[]>([]);
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState<ProvinceEntry[]>([]);
  const [isPaused, setIsPaused] = useState<boolean>(paused);
  const timerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const colorMapRef = useRef<Map<string, string>>(new Map());
  const prevYRef = useRef<Map<string, number>>(new Map());
  const [colors, setColors] = useState<string[]>(BASE_COLORS);
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const loadCsv = async () => {
      const res = await fetch(import.meta.env.BASE_URL + 'GaokaoEntrants.csv');
      const text = await res.text();
      const lines = text.trim().split(/\r?\n/);
      const headers = lines[0].split(',').map(h => h.trim());
      const provinces = headers.slice(1);
      const years: YearData[] = [];
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',').map(c => c.trim());
        const year = cols[0];
        const entities: ProvinceEntry[] = provinces.map((p, j) => {
          const val = parseFloat(cols[j + 1] ?? '0');
          return { name: p, value: isNaN(val) ? 0 : val };
        });
        entities.sort((a, b) => b.value - a.value);
        years.push({ year, entities });
      }
      setSeries(years);
      setIndex(0);
      setDisplay(years[0]?.entities ?? []);
      if (onSeriesLengthChange) {
        onSeriesLengthChange(years.length);
      }
      const map = new Map<string, string>();
      for (let i = 0; i < provinces.length; i++) {
        const name = provinces[i];
        const color = BASE_COLORS[i % BASE_COLORS.length] as string;
        map.set(name, color);
      }
      colorMapRef.current = map;
      setColors(interpolateHcl('#EA1F2D', '#FEFE9A', Math.max(30, provinces.length)));
    };
    loadCsv();
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    setIsPaused(paused);
  }, [paused]);

  useEffect(() => {
    indexRef.current = controlledIndex ?? index;
  }, [controlledIndex, index]);

  useEffect(() => {
    if (!series.length) return;
    if (isPaused) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    if (timerRef.current == null) {
      timerRef.current = window.setInterval(() => {
        const next = (indexRef.current + 1) % series.length;
        if (onIndexChange) {
          onIndexChange(next);
        } else {
          setIndex(next);
        }
      }, 2000);
    }
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [series, isPaused, onIndexChange]);

  useEffect(() => {
    if (!series.length) return;
    const current = controlledIndex ?? index;
    const prevIndex = (current - 1 + series.length) % series.length;
    const prevMap = new Map<string, number>();
    const nextMap = new Map<string, number>();
    series[prevIndex].entities.forEach(e => prevMap.set(e.name, e.value));
    series[current].entities.forEach(e => nextMap.set(e.name, e.value));
    const names = series[current].entities.map(e => e.name);
    const duration = 1200;
    const start = performance.now();
    const s = 1.70158;
    const easeBackInOut = (t: number) => {
      const c1 = s * 1.525;
      return t < 0.5
        ? (Math.pow(2 * t, 2) * ((c1 + 1) * 2 * t - c1)) / 2
        : (Math.pow(2 * t - 2, 2) * ((c1 + 1) * (t * 2 - 2) + c1) + 2) / 2;
    };
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeBackInOut(t);
      const frame: ProvinceEntry[] = names.map(name => {
        const a = prevMap.get(name) ?? 0;
        const b = nextMap.get(name) ?? 0;
        const value = Number((a + (b - a) * eased).toFixed(2));
        return { name, value };
      }).sort((x, y) => y.value - x.value);
      setDisplay(frame);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [series, controlledIndex, index, colors]);

  const data = useMemo(() => {
    if (!series.length) return [];
    const current = controlledIndex ?? index;
    return display.length ? display : series[current].entities;
  }, [series, display, controlledIndex, index]);

  const yearLabel = series.length ? series[(controlledIndex ?? index)].year : '';
  const goPrev = () => {
    if (!series.length) return;
    const current = controlledIndex ?? index;
    const next = (current - 1 + series.length) % series.length;
    if (onIndexChange) onIndexChange(next); else setIndex(next);
  };
  const goNext = () => {
    if (!series.length) return;
    const current = controlledIndex ?? index;
    const next = (current + 1) % series.length;
    if (onIndexChange) onIndexChange(next); else setIndex(next);
  };
  const togglePlay = () => {
    setIsPaused(p => !p);
  };

  const MovingBar = (props: any) => {
    const { x, y, width, height, payload, value } = props;
    const name = payload?.name as string;
    const fill = colorMapRef.current.get(name) || BASE_COLORS[0];
    const prevY = prevYRef.current.get(name);
    const style = {
      transform: `translate(${x}px, ${y}px)`,
      transition: 'transform 1000ms cubic-bezier(.68,-0.55,.27,1.55)',
    } as React.CSSProperties;
    if (prevY === undefined) {
      style.transition = 'none';
    }
    prevYRef.current.set(name, y);
    return (
      <g key={name} style={style}>
        <rect x={0} y={0} width={width} height={height} rx={4} ry={4} fill={fill} />
        <text
          x={-12}
          y={height / 2}
          fill="#d4d4d7ff"
          fontSize={13}
          dominantBaseline="middle"
          textAnchor="end"
        >
          {name}
        </text>
        <text
          x={width + 10}
          y={height / 2}
          fill="#d4d4d7ff"
          fontSize={14}
          fontWeight={600}
          dominantBaseline="middle"
        >
          {`${Number(value).toFixed(2)}万`}
        </text>
      </g>
    );
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute bottom-12 right-8 text-7xl font-bold text-slate-500/70 select-none pointer-events-none">
        {yearLabel}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: 60, bottom: 0, left: 60 }}
        >
          <CartesianGrid stroke="#334155" vertical={false} strokeDasharray="3 3" />
          <XAxis 
            type="number" 
            domain={[0, 'dataMax']} 
            stroke="#94a3b8" 
            tick={false} 
            axisLine={false}
            tickLine={false} 
        />
          <YAxis
            type="category"
            dataKey="name"
            stroke="#94a3b8"
            tick={false}
            width={0}
            tickLine={false}
            axisLine={false}
            interval={0}
            allowDuplicatedCategory={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            name="实际参考人数"
            unit="万"
            barSize={22}
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
            barCategoryGap="0%"
            shape={MovingBar}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

