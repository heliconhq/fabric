/**
 * Convert hex input to an object containing the corresponding values in the
 * RGBA format.
 *
 * This function is quite verbose. That's ok. It's easy to reason about.
 */

type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};

const hexToRGB = (hex: string) => {
  const value = hex.replace(/^#/, '');

  // #FFF
  if (value.length === 3) {
    return {
      r: parseInt(`${value[0]}${value[0]}`, 16),
      g: parseInt(`${value[1]}${value[1]}`, 16),
      b: parseInt(`${value[2]}${value[2]}`, 16),
      a: 1,
    };
  }

  // #FFFA
  if (value.length === 4) {
    return {
      r: parseInt(`${value[0]}${value[0]}`, 16),
      g: parseInt(`${value[1]}${value[1]}`, 16),
      b: parseInt(`${value[2]}${value[2]}`, 16),
      a: parseInt(`${value[3]}${value[3]}`, 16) / 255,
    };
  }

  // #FFFFFF
  if (value.length === 6) {
    return {
      r: parseInt(value.slice(0, 2), 16),
      g: parseInt(value.slice(2, 4), 16),
      b: parseInt(value.slice(4, 6), 16),
      a: 1,
    };
  }

  // #FFFFFFAA
  if (value.length === 8) {
    return {
      r: parseInt(value.slice(0, 2), 16),
      g: parseInt(value.slice(2, 4), 16),
      b: parseInt(value.slice(4, 6), 16),
      a: parseInt(value.slice(6, 8), 16) / 255,
    };
  }

  return null;
};

/**
 * Convert an RGB(A) object input to hex string representation.
 *
 */
function RGBToHex({ r, g, b, a = 1 }: { [Value: string]: number }) {
  const rhex = `0${r.toString(16)}`.slice(-2);
  const ghex = `0${g.toString(16)}`.slice(-2);
  const bhex = `0${b.toString(16)}`.slice(-2);
  const ahex = `0${Math.round(a * 255).toString(16)}`.slice(-2);

  return `#${rhex}${ghex}${bhex}${ahex}`;
}

/**
 * Convert an RGB(A) object input to an HSV(A) object.
 *
 */
const RGBToHSV = ({ r, g, b, a = 1 }: { [Value: string]: number }) => {
  const v = Math.max(r, g, b);
  const n = v - Math.min(r, g, b);
  let h: number = (g - b) / n;
  if (v === g) {
    h = 2 + (b - r) / n;
  }
  if (v === b) {
    h = 4 + (r - g) / n;
  }

  return {
    h: 60 * (h < 0 ? h + 6 : h),
    s: v && n / v,
    v: v / 255,
    a,
  };
};

const HSVToRGB = ({ h, s, v, a = 1 }) => {
  const f = (n: number, k = (n + h / 60) % 6) =>
    v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return {
    r: 255 * f(5),
    g: 255 * f(3),
    b: 255 * f(1),
    a,
  };
};

/**
 * Blend color 1 with color 2 by amount.
 *
 */
const blend = (start: RGBA, end: RGBA, amount: number, alpha: number) => ({
  r: Math.max(
    0,
    Math.min(255, Math.round(start.r + (end.r - start.r) * amount))
  ),
  g: Math.max(
    0,
    Math.min(255, Math.round(start.g + (end.g - start.g) * amount))
  ),
  b: Math.max(
    0,
    Math.min(255, Math.round(start.b + (end.b - start.b) * amount))
  ),
  a: typeof alpha !== 'undefined' ? alpha : Math.min(start.a, end.a),
});

/**
 * Alias to blend(), but for hex input and output.
 *
 */
const blendHex = (start: string, end: string, mod: number, alpha: number = 1) =>
  RGBToHex(
    blend(
      hexToRGB(start) || { r: 0, g: 0, b: 0, a: 0 },
      hexToRGB(end) || { r: 0, g: 0, b: 0, a: 0 },
      mod,
      alpha
    )
  );

const gradient = (start: string, end: string, steps: number) =>
  Array(steps)
    .fill(undefined)
    .map((_, i) => blendHex(start, end, (1 / steps) * i));

const shade = (v: number) => v;
const tint = (v: number) => v;

export {
  blend,
  blendHex,
  gradient,
  shade,
  tint,
  hexToRGB,
  RGBToHex,
  RGBToHSV,
  HSVToRGB,
};
