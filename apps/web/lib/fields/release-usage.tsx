import { Abbr } from "../abbr";
import { Display } from "../display";

export type ReleaseUsage = Abbr & {
  id: string;
  display: Display;
};

export const usages: ReleaseUsage[] = [
  {
    id: "debug",
    abbr: () => "D",
    display: {
      name: "Debug",
      description: "The build is intended for debugging purposes.",
    },
  },
  {
    id: "internaluse",
    abbr: () => "I",
    display: {
      name: "Internal Use",
      description: "The build is intended for internal use only.",
    },
  },
  {
    id: "testing",
    abbr: () => "T",
    display: {
      name: "Testing",
      description: "The build is intended for testing purposes.",
    },
  },
  {
    id: "publicrelease",
    abbr: () => "P",
    display: {
      name: "Public Release",
      description: "The build is intended for public release.",
    },
  },
];
