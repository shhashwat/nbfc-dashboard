import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardHeader from "./CardHeader";

const BREConfig = () => {
  return (
    <div className="flex flex-col space-y-4 p-5">
      <CardHeader title="BRE Configuration" />

      <Tabs defaultValue="bureau" className="w-[400px]">
        <TabsList className="flex items-center border-b border-gray-200">
          <TabsTrigger
            value="bureau"
            className="bre-tabs"
          >
            1. Bureau
          </TabsTrigger>
          <TabsTrigger
            value="bankStatement"
            className="bre-tabs"
          >
            2. Bank Statement
          </TabsTrigger>
          <TabsTrigger
            value="kyc"
            className="bre-tabs"
          >
            3. KYC
          </TabsTrigger>
          <TabsTrigger
            value="income"
            className="bre-tabs"
          >
            4. Income
          </TabsTrigger>
          <TabsTrigger
            value="occupation"
            className="bre-tabs"
          >
            5. Occupation
          </TabsTrigger>
          <TabsTrigger
            value="demographic"
            className="bre-tabs"
          >
            6. Demographic
          </TabsTrigger>
        </TabsList>
        <TabsContent value="bureau">
          <div>
            <h2>Bureau</h2>
            <p>This is the Bureau content.</p>
          </div>
        </TabsContent>

        <TabsContent value="bankStatement">
          <div>
            <h2>Bank Statement</h2>
            <p>This is the Bank Statement content.</p>
          </div>
        </TabsContent>

        <TabsContent value="kyc">
          <div>
            <h2>KYC</h2>
            <p>This is the KYC content.</p>
          </div>
        </TabsContent>

        <TabsContent value="income">
          <div>
            <h2>Income</h2>
            <p>This is the Income content.</p>
          </div>
        </TabsContent>

        <TabsContent value="occupation">
          <div>
            <h2>Occupation</h2>
            <p>This is the Occupation content.</p>
          </div>
        </TabsContent>

        <TabsContent value="demographic">
          <div>
            <h2>Demographic</h2>
            <p>This is the Demographic content.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BREConfig;
