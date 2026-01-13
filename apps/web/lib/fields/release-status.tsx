import { Abbr } from "../abbr";
import { Display } from "../display";

export type ReleaseStatus = Abbr & {
  id: string;
  display: Display;
};

export const releaseStatuses: ReleaseStatus[] = [
  {
    id: "alpha",
    abbr: () => "A",
    display: {
      name: "Alpha",
      description:
        "The release is in the alpha stage, indicating early testing and development.",
    },
  },
  {
    id: "beta",
    abbr: () => "B",
    display: {
      name: "Beta",
      description:
        "The release is in the beta stage, indicating it is feature-complete but may still have bugs.",
    },
  },
  {
    id: "releasecandidate",
    abbr: () => "RC",
    display: {
      name: "Release Candidate",
      description:
        "The release is a release candidate, indicating it is potentially the final product unless significant bugs emerge.",
    },
  },
  {
    id: "stable",
    abbr: () => "Stable",
    display: {
      name: "Stable Release",
      description: "The release is stable and ready for general use.",
    },
  },
];
