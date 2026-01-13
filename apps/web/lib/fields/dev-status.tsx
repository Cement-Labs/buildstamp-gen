import { Abbr } from "../abbr";
import { Display } from "../display";

export type DevStatus = Abbr & {
  id: string;
  display: Display;
};

export const devStatuses: DevStatus[] = [
  {
    id: "development",
    abbr: () => "D",
    display: {
      name: "Development",
      description: "The project is currently under active development.",
    },
  },
  {
    id: "maintenance",
    abbr: () => "M",
    display: {
      name: "Maintenance",
      description: "The project is in maintenance mode with minimal updates.",
    },
  },
  {
    id: "securitymaintenance",
    abbr: () => "S",
    display: {
      name: "Security Maintenance",
      description:
        "The project receives only security updates and critical fixes.",
    },
  },
  {
    id: "deprecated",
    abbr: () => "P",
    display: {
      name: "Deprecated",
      description: "The project is deprecated and no longer maintained.",
    },
  },
  {
    id: "archived",
    abbr: () => "A",
    display: {
      name: "Archived",
      description: "The project is archived and read-only.",
    },
  },
];
