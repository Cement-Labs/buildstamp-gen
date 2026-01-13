"use client";

import BuildstampGen from "@/components/buildstamp-gen/generator";
import { Connections } from "@/components/connect/connections";
import {
  belongingColor,
  buildDateColor,
  devStatusColor,
  patchColor,
  releaseStatusColor,
  releaseUsageColor,
  vendorColor,
} from "@/lib/colors";
import { useMediaQuery } from "@mantine/hooks";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";

export default function Page() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <div
      className="flex flex-col items-center justify-center min-h-svh w-svw mx-auto p-10"
      style={
        {
          "--color-belonging": isDark
            ? belongingColor.dark
            : belongingColor.light,
          "--color-vendor": isDark ? vendorColor.dark : vendorColor.light,
          "--color-dev-status": isDark
            ? devStatusColor.dark
            : devStatusColor.light,
          "--color-release-status": isDark
            ? releaseStatusColor.dark
            : releaseStatusColor.light,
          "--color-release-usage": isDark
            ? releaseUsageColor.dark
            : releaseUsageColor.light,
          "--color-patch": isDark ? patchColor.dark : patchColor.light,
          "--color-build-date": isDark
            ? buildDateColor.dark
            : buildDateColor.light,
        } as React.CSSProperties
      }
    >
      <Tabs
        defaultValue="gen"
        className="w-full h-full flex flex-col flex-grow items-center justify-center"
      >
        <TabsList>
          <TabsTrigger value="gen">Generate</TabsTrigger>
          <TabsTrigger value="parse">Parse</TabsTrigger>
        </TabsList>
        <TabsContent
          value="gen"
          className="w-full h-full flex flex-col flex-grow items-center justify-center"
        >
          <BuildstampGen />
        </TabsContent>
        <TabsContent value="parse"></TabsContent>
      </Tabs>
      <Connections className="w-full h-full" />
    </div>
  );
}
