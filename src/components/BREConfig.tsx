import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CardHeader from "./CardHeader";

import BRETables from "./BRETables";

import { ChevronLeft } from "lucide-react";

import {
  breConfigTabs,
  breConfigBureauParams,
  breConfigBankStatementParams,
  breConfigKycParams,
  breConfigIncomeParams,
  breConfigOccupationParams,
  breConfigDemographicParams,
  breConfigTabContent,
} from "@/lib/constants";

const BREConfig = () => {
const location = useLocation();
const navigate = useNavigate();

// Extract tab from hash (without the `#`)
const currentHash = location.hash.replace("#", "") || "bureau";
const [activeTab, setActiveTab] = useState(currentHash);

// Sync active tab with hash
useEffect(() => {
  const hash = location.hash.replace("#", "") || "bureau";
  setActiveTab(hash);
}, [location.hash]);

const handleTabChange = (tab: string) => {
  setActiveTab(tab);
  navigate(`#${tab}`); // update URL hash
};

  return (
    <div className="flex flex-col space-y-4 p-5">
      <CardHeader title="BRE Configuration" />

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-[400px]"
      >
        <TabsList className="">
          {breConfigTabs.map((tab) => (
            <TabsTrigger className="bre-tabs" value={tab.value} key={tab.value}>
              {tab.name}
            </TabsTrigger>
          ))}

          <Button
            className="ml-60 text-[#1678F5] hover:text-[#016FF4] hover:bg-blend-soft-light underline"
            variant="ghost"
          >
            <i>
              <ChevronLeft />
            </i>
            Exit
          </Button>
        </TabsList>
        {breConfigTabContent.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <BRETables
              title={tab.title}
              subtitle={tab.subtitle}
              navTo={tab.navTo}
              paramsArr={tab.paramsArr}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default BREConfig;
