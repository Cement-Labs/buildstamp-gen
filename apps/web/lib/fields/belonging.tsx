import { Abbr } from "../abbr";
import { Display } from "../display";

export type Belonging = Abbr & {
  type: "org" | "personal";
  id: string;
  display: Display;
};

export type OrgBelonging = Belonging & {
  type: "org";
};

export type PersonalBelonging = Belonging & {
  type: "personal";
};

export const orgBelongings: Belonging[] = [
  // org
  {
    type: "org",
    id: "cement-labs",
    abbr: () => "CL",
    display: {
      name: "Cement Labs",
    },
  },
  {
    type: "org",
    id: "sylera",
    abbr: () => "Sy",
    display: {
      name: "Sylera",
    },
  },
  // personal
  {
    type: "personal",
    id: "xinshao",
    abbr: () => "XS",
    display: {
      name: "芯梢",
    },
  },
  {
    type: "personal",
    id: "krlite",
    abbr: () => "Kr",
    display: {
      name: "KrLite",
    },
  },
];
