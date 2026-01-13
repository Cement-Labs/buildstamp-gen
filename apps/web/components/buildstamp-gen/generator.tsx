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
import { Fragment, useRef, useState } from "react";
import { Belonging, belongings } from "@/lib/fields/belonging";
import { Vendor, vendors } from "@/lib/fields/vendor";
import { DevStatus, devStatuses } from "@/lib/fields/dev-status";
import BuildDateInput from "./inputs/build-date-input";
import AbbrSelect from "./inputs/abbr-select";
import { Input } from "@workspace/ui/components/input";
import { ReleaseStatus, releaseStatuses } from "@/lib/fields/release-status";
import { ReleaseUsage, releaseUsages } from "@/lib/fields/release-usage";
import BuildstampDisplay from "../buildstamp-display";
import { Connect } from "../connect/connect";

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

  return (
    <div className="w-full max-w-md">
      {/* input */}
      <form>
        <FieldGroup>
          <FieldSet>
            {/* project information */}
            <FieldLegend>Project Information</FieldLegend>
            <div className="flex flex-row items-center justify-center gap-4">
              <Field>
                <FieldLabel>Belonging</FieldLabel>
                <Connect id="input-belonging">
                  <BelongingInput
                    value={belonging?.id}
                    onValueChange={(value) =>
                      setBelonging(belongings.find((b) => b.id === value))
                    }
                  />
                </Connect>
              </Field>
              <Field>
                <FieldLabel>Vendor</FieldLabel>
                <Connect id="input-vendor">
                  <AbbrSelect
                    placeholder="Select a vendor"
                    values={vendors}
                    value={vendor?.id}
                    onValueChange={(value) =>
                      setVendor(vendors.find((v) => v.id === value))
                    }
                  />
                </Connect>
              </Field>
            </div>
            <FieldDescription>
              The belonging and vendor to identify the project.
            </FieldDescription>
            <Field>
              <FieldLabel>Development Status and Project Serial</FieldLabel>
              <div className="flex flex-row items-center justify-center gap-4">
                <Connect id="input-dev-status">
                  <AbbrSelect
                    placeholder="Select a development status"
                    values={devStatuses}
                    value={devStatus?.id}
                    onValueChange={(value) =>
                      setDevStatus(devStatuses.find((d) => d.id === value))
                    }
                  />
                </Connect>
                <Connect id="input-serial">
                  <Input
                    className="w-20 font-mono"
                    type="number"
                    value={serial}
                    onChange={(e) => setSerial(Number(e.target.value))}
                  />
                </Connect>
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
              <Connect id="input-build-date">
                <BuildDateInput date={buildDate} setDate={setBuildDate} />
              </Connect>
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
                <Connect id="input-release-status">
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
                </Connect>
              </Field>
              <Field>
                <FieldLabel>Release Usage</FieldLabel>
                <Connect id="input-release-usage">
                  <AbbrSelect
                    placeholder="Select a release usage"
                    values={releaseUsages}
                    value={releaseUsage?.id}
                    onValueChange={(value) =>
                      setReleaseUsage(releaseUsages.find((r) => r.id === value))
                    }
                  />
                </Connect>
              </Field>
            </div>
          </FieldSet>
          <FieldSet>
            <div className="flex flex-row items-center justify-center gap-4">
              <Field>
                <FieldLabel>Major Version</FieldLabel>
                <Connect id="input-major-version">
                  <Input
                    className="font-mono"
                    type="number"
                    value={majorVersion}
                    onChange={(e) => setMajorVersion(Number(e.target.value))}
                  />
                </Connect>
              </Field>
              <Field>
                <FieldLabel>Minor Version</FieldLabel>
                <Connect id="input-minor-version">
                  <Input
                    className="font-mono"
                    type="number"
                    value={minorVersion}
                    onChange={(e) => setMinorVersion(Number(e.target.value))}
                  />
                </Connect>
              </Field>
              <Field>
                <FieldLabel>Patch Version</FieldLabel>
                <Connect id="input-patch-version">
                  <Input
                    className="font-mono"
                    type="number"
                    value={patchVersion}
                    onChange={(e) => setPatchVersion(Number(e.target.value))}
                  />
                </Connect>
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
      <BuildstampDisplay
        className="w-full my-10 font-medium text-4xl"
        belonging={belonging}
        vendor={vendor}
        devStatus={devStatus}
        serial={serial}
        buildDate={buildDate}
        releaseStatus={releaseStatus}
        releaseUsage={releaseUsage}
        majorVersion={majorVersion}
        minorVersion={minorVersion}
        patchVersion={patchVersion}
      />
    </div>
  );
}
