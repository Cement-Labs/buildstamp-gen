export type Color = {
  light: string;
  dark: string;
};

export const belongingColor: Color = {
  light: "oklch(67.3% 0.182 276.935)", // indigo-400
  dark: "oklch(39.8% 0.195 277.366)", // indigo-800
};
export const vendorColor: Color = {
  light: "oklch(74% 0.238 322.16)", // fuchsia-400
  dark: "oklch(45.2% 0.211 324.591)", // fuchsia-800
};
export const devStatusColor: Color = {
  light: "oklch(87.9% 0.169 91.605)", // amber-300
  dark: "oklch(66.6% 0.179 58.318)", // amber-600
};
export const releaseStatusColor: Color = {
  light: "oklch(77.7% 0.152 181.912)", // teal-400
  dark: "oklch(43.7% 0.078 188.216)", // teal-800
};
export const releaseUsageColor: Color = {
  light: "oklch(87.1% 0.15 154.449)", // green-300
  dark: "oklch(52.7% 0.154 150.069)", // green-700
};
export const patchColor: Color = {
  light: "oklch(83.7% 0.128 66.29)", // orange-300
  dark: "oklch(55.3% 0.195 38.402)", // orange-700
};
export const buildDateColor: Color = {
  light: "oklch(87% 0 0)", // neutral-300
  dark: "oklch(37.1% 0 0)", // neutral-700
};
