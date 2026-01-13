import { Belonging } from "@/lib/fields/belonging";
import { DevStatus } from "@/lib/fields/dev-status";
import { ReleaseStatus } from "@/lib/fields/release-status";
import { ReleaseUsage } from "@/lib/fields/release-usage";
import { Vendor } from "@/lib/fields/vendor";
import AbbrDisplay from "./abbr-display";
import { getBuildDateAbbr, getPatchAbbr } from "@/lib/fields/misc";
import { cn } from "@/lib/cn";
import { Connect } from "./connect/connect";
import { useHover } from "@mantine/hooks";
import { useEffect } from "react";

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
  const { hovered: isBelongingHovered, ref: belongingRef } = useHover();
  const { hovered: isVendorHovered, ref: vendorRef } = useHover();
  const { hovered: isDevStatusHovered, ref: devStatusRef } = useHover();
  const { hovered: isSerialHovered, ref: serialRef } = useHover();
  const { hovered: isBuildDateHovered, ref: buildDateRef } = useHover();
  const { hovered: isReleaseStatusHovered, ref: releaseStatusRef } = useHover();
  const { hovered: isMajorVersionHovered, ref: majorVersionRef } = useHover();
  const { hovered: isReleaseUsageHovered, ref: releaseUsageRef } = useHover();
  const { hovered: isMinorVersionHovered, ref: minorVersionRef } = useHover();
  const { hovered: isPatchVersionHovered, ref: patchVersionRef } = useHover();

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
        connectWith={[
          {
            id: "input-belonging",
            color: "var(--color-belonging)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isBelongingHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={belongingRef}
          className="hover:text-(--color-belonging)"
          abbr={belonging?.abbr()}
          placeholderLength={2}
        />
      </Connect>
      <Connect
        id="buildstamp-vendor"
        connectWith={[
          {
            id: "input-vendor",
            color: "var(--color-vendor)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isVendorHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={vendorRef}
          className="hover:text-(--color-vendor)"
          abbr={vendor?.abbr()}
          placeholderLength={2}
        />
      </Connect>
      <Connect
        id="buildstamp-dev-status"
        connectWith={[
          {
            id: "input-dev-status",
            color: "var(--color-dev-status)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isDevStatusHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={devStatusRef}
          className="hover:text-(--color-dev-status)"
          abbr={devStatus?.abbr()}
          placeholderLength={1}
        />
      </Connect>
      <Connect
        id="buildstamp-serial"
        connectWith={[
          {
            id: "input-serial",
            color: "var(--color-build-date)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isSerialHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={serialRef}
          // hover color should be just text color
          abbr={serial.toString()}
          placeholderLength={1}
        />
      </Connect>
      <Connect
        id="buildstamp-build-date"
        connectWith={[
          {
            id: "input-build-date",
            color: "var(--color-build-date)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isBuildDateHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={buildDateRef}
          // hover color should be just text color
          abbr={buildDate ? getBuildDateAbbr(buildDate) : undefined}
          placeholderLength={4}
        />
      </Connect>
      <Connect
        id="buildstamp-release-status"
        connectWith={[
          {
            id: "input-release-status",
            color: "var(--color-release-status)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isReleaseStatusHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={releaseStatusRef}
          className="hover:text-(--color-release-status)"
          abbr={releaseStatus?.abbr()}
          placeholderLength={1}
        />
      </Connect>
      <Connect
        id="buildstamp-major-version"
        connectWith={[
          {
            id: "input-major-version",
            color: "var(--color-release-status)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isMajorVersionHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={majorVersionRef}
          className="hover:text-(--color-release-status)"
          abbr={majorVersion.toString()}
          placeholderLength={1}
        />
      </Connect>
      <Connect
        id="buildstamp-release-usage"
        connectWith={[
          {
            id: "input-release-usage",
            color: "var(--color-release-usage)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isReleaseUsageHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={releaseUsageRef}
          className="hover:text-(--color-release-usage)"
          abbr={releaseUsage?.abbr()}
          placeholderLength={1}
        />
      </Connect>
      <Connect
        id="buildstamp-minor-version"
        connectWith={[
          {
            id: "input-minor-version",
            color: "var(--color-release-usage)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isMinorVersionHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={minorVersionRef}
          className="hover:text-(--color-release-usage)"
          abbr={minorVersion.toString()}
          placeholderLength={1}
        />
      </Connect>
      <Connect
        id="buildstamp-patch-version"
        connectWith={[
          {
            id: "input-patch-version",
            color: "var(--color-patch)",
            fromAnchor: "top",
            toAnchor: "bottom",
            visible: isPatchVersionHovered,
          },
        ]}
      >
        <AbbrDisplay
          ref={patchVersionRef}
          className="hover:text-(--color-patch)"
          abbr={getPatchAbbr(patchVersion)}
          placeholderLength={2}
        />
      </Connect>
    </div>
  );
}
