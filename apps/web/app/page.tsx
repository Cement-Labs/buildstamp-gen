import BuildstampGen from "@/components/buildstamp-gen/generator";
import { Button } from "@workspace/ui/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh w-svw mx-auto p-10">
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
    </div>
  );
}
