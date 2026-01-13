"use client";

import BelongingInput from "./inputs/belonging-input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field";
import { useState } from "react";
import { Belonging, belongings } from "@/lib/fields/belonging";
import { Vendor, vendors } from "@/lib/fields/vendor";
import { DevStatus, devStatuses } from "@/lib/fields/dev-status";
import BuildDateInput from "./inputs/build-date-input";
import AbbrSelect from "./inputs/abbr-select";
import { Input } from "@workspace/ui/components/input";
import { ReleaseStatus, releaseStatuses } from "@/lib/fields/release-status";
import { ReleaseUsage, releaseUsages } from "@/lib/fields/release-usage";
import {
  Buildstamp,
  Release,
  serializeBuildstamp,
  Version,
} from "@/lib/buildstamp";

export default function BuildstampGen() {
  const [belonging, setBelonging] = useState<Belonging | undefined>(undefined);
  const [vendor, setVendor] = useState<Vendor | undefined>(
    vendors.find((v) => v.id === "github")
  );
  const [devStatus, setDevStatus] = useState<DevStatus | undefined>(
    devStatuses.find((d) => d.id === "development")
  );
  const [serial, setSerial] = useState<number>(1);
  const [buildDate, setBuildDate] = useState<Date | undefined>(new Date());

  const [releaseStatus, setReleaseStatus] = useState<ReleaseStatus | undefined>(
    undefined
  );
  const [releaseUsage, setReleaseUsage] = useState<ReleaseUsage | undefined>(
    releaseUsages.find((r) => r.id === "publicrelease")
  );

  const [majorVersion, setMajorVersion] = useState<number>(1);
  const [minorVersion, setMinorVersion] = useState<number>(0);
  const [patchVersion, setPatchVersion] = useState<number>(0);

  const release: Release | undefined =
    releaseStatus && releaseUsage
      ? {
          status: releaseStatus,
          usage: releaseUsage,
        }
      : undefined;

  const version: Version = {
    major: majorVersion,
    minor: minorVersion,
    patch: patchVersion,
  };

  const buildstamp: Buildstamp | undefined =
    belonging && vendor && devStatus && buildDate && release
      ? {
          date: buildDate,
          serial,
          belonging,
          vendor,
          dev: devStatus,
          release,
          version,
        }
      : undefined;

  return (
    <div className="w-full max-w-md">
      {/* input */}
      <form>
        <FieldGroup>
          {/* project information */}
          <FieldLegend>Project Information</FieldLegend>
          <FieldSet>
            <div className="flex flex-row items-center justify-center gap-4">
              <Field>
                <FieldLabel>Belonging</FieldLabel>
                <BelongingInput
                  value={belonging?.id}
                  onValueChange={(value) =>
                    setBelonging(belongings.find((b) => b.id === value))
                  }
                />
              </Field>
              <Field>
                <FieldLabel>Vendor</FieldLabel>
                <AbbrSelect
                  placeholder="Select a vendor"
                  values={vendors}
                  value={vendor?.id}
                  onValueChange={(value) =>
                    setVendor(vendors.find((v) => v.id === value))
                  }
                />
              </Field>
            </div>
            <FieldDescription>
              The belonging and vendor to identify the project.
            </FieldDescription>
            <Field>
              <FieldLabel>Development Status and Project Serial</FieldLabel>
              <div className="flex flex-row items-center justify-center gap-4">
                <AbbrSelect
                  placeholder="Select a development status"
                  values={devStatuses}
                  value={devStatus?.id}
                  onValueChange={(value) =>
                    setDevStatus(devStatuses.find((d) => d.id === value))
                  }
                />
                <Input
                  className="w-20 font-mono"
                  type="number"
                  value={serial}
                  onChange={(e) => setSerial(Number(e.target.value))}
                />
              </div>
              <FieldDescription>
                The development status and project serial number. The serial
                number is incremented for each project under the same belonging.
              </FieldDescription>
            </Field>
          </FieldSet>

          {/* build date */}
          <FieldSet>
            <FieldLegend>Build Date</FieldLegend>
            <Field>
              <BuildDateInput date={buildDate} setDate={setBuildDate} />
              <FieldDescription>
                The date when the build was created, under local timezone.
              </FieldDescription>
            </Field>
          </FieldSet>

          {/* release and versioning */}
          <FieldSet>
            <FieldLegend>Release and Versioning</FieldLegend>
            <div className="flex flex-row items-center justify-center gap-4">
              <Field>
                <FieldLabel>Release Status</FieldLabel>
                <AbbrSelect
                  placeholder="Select a release status"
                  values={releaseStatuses}
                  value={releaseStatus?.id}
                  onValueChange={(value) =>
                    setReleaseStatus(
                      releaseStatuses.find((r) => r.id === value)
                    )
                  }
                />
              </Field>
              <Field>
                <FieldLabel>Release Usage</FieldLabel>
                <AbbrSelect
                  placeholder="Select a release usage"
                  values={releaseUsages}
                  value={releaseUsage?.id}
                  onValueChange={(value) =>
                    setReleaseUsage(releaseUsages.find((r) => r.id === value))
                  }
                />
              </Field>
            </div>
          </FieldSet>
          <FieldSet>
            <div className="flex flex-row items-center justify-center gap-4">
              <Field>
                <FieldLabel>Major Version</FieldLabel>
                <Input
                  className="font-mono"
                  type="number"
                  value={majorVersion}
                  onChange={(e) => setMajorVersion(Number(e.target.value))}
                />
              </Field>
              <Field>
                <FieldLabel>Minor Version</FieldLabel>
                <Input
                  className="font-mono"
                  type="number"
                  value={minorVersion}
                  onChange={(e) => setMinorVersion(Number(e.target.value))}
                />
              </Field>
              <Field>
                <FieldLabel>Patch Version</FieldLabel>
                <Input
                  className="font-mono"
                  type="number"
                  value={patchVersion}
                  onChange={(e) => setPatchVersion(Number(e.target.value))}
                />
              </Field>
            </div>
          </FieldSet>
          <FieldDescription>
            The release status and usage, along with semantic versioning. The
            major version appears after the release status, and the minor
            version appears after the release usage. The patch version will be
            coded into non-capital letters a-z.
          </FieldDescription>
        </FieldGroup>
      </form>

      {/* output */}
      <div className="flex flex-row items-center justify-center mt-8 font-mono font-medium text-2xl">
        {buildstamp && serializeBuildstamp(buildstamp)}
      </div>
    </div>
  );
}
