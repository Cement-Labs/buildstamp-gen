import { Abbr } from "../abbr";
import { Display } from "../display";

export type Vendor = Abbr & {
  id: string;
  url?: string;
  display: Display;
};

export const vendors: Vendor[] = [
  {
    id: "github",
    abbr: () => "G",
    url: "https://github.com",
    display: {
      name: "GitHub",
    },
  },
  {
    id: "appstore",
    abbr: () => "A",
    url: "https://www.apple.com/app-store/",
    display: {
      name: "App Store",
    },
  },
];
