import { Belonging } from "./fields/belonging";
import { DevStatus } from "./fields/dev-status";
import { getBuildDateAbbr, getPatchAbbr } from "./fields/misc";
import { ReleaseStatus } from "./fields/release-status";
import { ReleaseUsage } from "./fields/release-usage";
import { Vendor } from "./fields/vendor";

export type Release = {
  status: ReleaseStatus;
  usage: ReleaseUsage;
};

export type Version = {
  major: number;
  minor: number;
  patch: number;
};

export type Buildstamp = {
  date: Date;
  serial: number;

  belonging: Belonging;
  vendor: Vendor;
  dev: DevStatus;

  release: Release;
  version: Version;
};

export function serializeBuildstamp(buildstamp: Buildstamp): string {
  const { date, serial, belonging, vendor, dev, release, version } = buildstamp;

  const buildDateAbbr = getBuildDateAbbr(date);
  const patchAbbr = getPatchAbbr(version.patch);

  const projectInfo = `${belonging.abbr()}${vendor.abbr()}${dev.abbr()}`;
  const serialAndDate = `${serial}${buildDateAbbr}`;
  const releaseAndVersion = `${release.status.abbr()}${version.major}${release.usage.abbr()}${version.minor}${patchAbbr}`;

  return `${projectInfo}${serialAndDate}${releaseAndVersion}`;
}
