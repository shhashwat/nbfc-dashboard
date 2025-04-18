import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardHeader from "./CardHeader";
import BRETables from "./BRETables";
import { breConfigTabs, breConfigTabContent } from "@/lib/constants";
import { useTabStore } from "@/lib/store/useTabStore"; // Import Zustand store
import { CheckCircle } from "lucide-react"; // Icon for submitted tabs

const BREConfig = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract tab from hash (without the `#`)
  const currentHash = location.hash.replace("#", "") || "bureau";
  const [activeTab, setActiveTab] = useState(currentHash);

  // Get and update submittedTabs from Zustand store
  const { submittedTabs, markTabAsSubmitted } = useTabStore();

  // Sync active tab with hash
  useEffect(() => {
    const hash = location.hash.replace("#", "") || "bureau";
    setActiveTab(hash);
  }, [location.hash]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`#${tab}`); // update URL hash
  };

  const handleFormSubmit = (tab: string) => {
    markTabAsSubmitted(tab); // Mark the tab as submitted
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
              <div className="flex items-center space-x-2">
                {submittedTabs.includes(tab.value) && (
                  <CheckCircle className="text-green-500 text-sm" />
                )}
                <span>{tab.name}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {breConfigTabContent.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <BRETables
              title={tab.title}
              subtitle={tab.subtitle}
              navTo={tab.navTo}
              paramsArr={tab.paramsArr}
              onSubmit={() => handleFormSubmit(tab.value)} // Pass the submission callback
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default BREConfig;