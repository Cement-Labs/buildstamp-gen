import { Belonging } from "@/lib/fields/belonging";
import { DevStatus } from "@/lib/fields/dev-status";
import { ReleaseStatus } from "@/lib/fields/release-status";
import { ReleaseUsage } from "@/lib/fields/release-usage";
import { Vendor } from "@/lib/fields/vendor";
import AbbrDisplay from "./abbr-display";
import { getBuildDateAbbr, getPatchAbbr } from "@/lib/fields/misc";
import { cn } from "@/lib/cn";
import { Connect } from "./connect/connect";

export default function BuildstampDisplay({
  belonging,
  vendor,
  devStatus,
  serial,
  buildDate,
  releaseStatus,
  releaseUsage,
  majorVersion,
  minorVersion,
  patchVersion,
  ...props
}: {
  belonging?: Belonging;
  vendor?: Vendor;
  devStatus?: DevStatus;
  serial: number;
  buildDate?: Date;
  releaseStatus?: ReleaseStatus;
  releaseUsage?: ReleaseUsage;
  majorVersion: number;
  minorVersion: number;
  patchVersion: number;
} & React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        props.className,
        "flex flex-row items-center justify-center whitespace-nowrap font-mono"
      )}
    >
      <Connect
        id="buildstamp-belonging"
        connectWith={[{ id: "input-belonging" }]}
      >
        <AbbrDisplay
          className="hover:text-(--color-belonging)"
          abbr={belonging?.abbr()}
          placeholderLength={2}
        />
      </Connect>
      <Connect id="buildstamp-vendor">
        <AbbrDisplay
          className="hover:text-(--color-vendor)"
          abbr={vendor?.abbr()}
          placeholderLength={2}
        />
      </Connect>
      <Connect id="buildstamp-dev-status">
        <AbbrDisplay
          className="hover:text-(--color-dev-status)"
          abbr={devStatus?.abbr()}
          placeholderLength={1}
        />
      </Connect>
      <Connect id="buildstamp-serial">
        <AbbrDisplay abbr={serial.toString()} placeholderLength={1} />
      </Connect>
      <Connect id="buildstamp-build-date">
        <AbbrDisplay
          abbr={buildDate ? getBuildDateAbbr(buildDate) : undefined}
          placeholderLength={4}
        />
      </Connect>
      <Connect id="buildstamp-release-status">
        <AbbrDisplay
          className="hover:text-(--color-release-status)"
          abbr={releaseStatus?.abbr()}
          placeholderLength={1}
        />
      </Connect>
      <Connect id="buildstamp-major-version">
        <AbbrDisplay
          className="hover:text-(--color-release-status)"
          abbr={majorVersion.toString()}
          placeholderLength={1}
        />
      </Connect>
      <Connect id="buildstamp-release-usage">
        <AbbrDisplay
          className="hover:text-(--color-release-usage)"
          abbr={releaseUsage?.abbr()}
          placeholderLength={1}
        />
      </Connect>
      <Connect id="buildstamp-minor-version">
        <AbbrDisplay
          className="hover:text-(--color-release-usage)"
          abbr={minorVersion.toString()}
          placeholderLength={1}
        />
      </Connect>
      <Connect id="buildstamp-patch-version">
        <AbbrDisplay
          className="hover:text-(--color-patch)"
          abbr={getPatchAbbr(patchVersion)}
          placeholderLength={2}
        />
      </Connect>
    </div>
  );
}
