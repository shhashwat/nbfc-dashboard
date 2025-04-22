import DateDisplay from "../DateDisplay";
import { Badge } from "@/components/ui/badge";
import ButtonRound from "@/components/ButtonRound";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { SkeletonTable } from "../ui/skeleton-table";
import { Button } from "../ui/button";
import { ChevronUpSquare } from "lucide-react";
const DisbursementFileRundown = () => {
    // const [loading, setLoading] = useState(true);
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const targetValue = 100; // set this to your desired value

    useEffect(() => {
      let current1 = 0;
      const interval1 = setInterval(() => {
        current1 += 1;
        setProgress1(current1);
        if (current1 >= targetValue) {
          clearInterval(interval1);

          // Start progress2 once progress1 is done
          let current2 = 0;
          const interval2 = setInterval(() => {
            current2 += 1;
            setProgress2(current2);
            if (current2 >= targetValue) clearInterval(interval2);
          }, 50); // Adjust speed for progress2 here too
        }
      }, 50); // Speed of progress1

      return () => clearInterval(interval1); // Cleanup on unmount
    }, [targetValue]);

    
  return (
    <div className="flex flex-col space-y-4 p-5">
      <div className="flex flex-col bg-white shadow-sm rounded-lg p-5 space-y-3 space-x-4">
        <div className="flex items-center justify-between">
          {/** DISBURSEMENT FILE NAME */}
          <span className="flex space-x-2 text-sm text-[#62748E]">
            <p className="font-bold">Pool Batch ID:</p>
            <p>POL987868787</p>
            <Badge variant={"outline"} className="text-xs font-semibold">
              In Progress
            </Badge>
          </span>

          {/** DISBURSEMENT FILE DATE AND USER*/}
          <span className="flex items-center justify-center space-x-4">
            <span className="flex space-x-2 text-sm text-[#62748E]">
              <img
                src="/images/icons/calendar_disbursement.svg"
                alt="calender"
              />
              <DateDisplay date={new Date().toISOString()} />
            </span>
            <span className="flex space-x-2 text-sm text-[#62748E]">
              <img src="/images/icons/user_disbursement.svg" alt="User" />
              <p>User, U53R1D</p>
            </span>
          </span>
        </div>
        <div>
          {/* FILE UPLOAD ROW */}
          <span className="flex justify-between space-x-2 p-5 ml-5 mr-5">
            <span className="flex flex-col items-center space-y-1">
              <ButtonRound
                src="folder_open_disbursement"
                alt="folder open"
                id="folder_open"
                progress={100}
              />
              <Label htmlFor="folder_open"> File Uploaded </Label>
              <Label htmlFor="folder_open" className="text-[#62748E]">
                {" "}
                22 Nov, 2024 9:15{" "}
              </Label>
            </span>
            <Progress
              value={progress1}
              className="w-[14rem] mt-5 -ml-58 -mr-55"
            />
            <span className="flex flex-col items-center space-y-1">
              <ButtonRound
                src="file_processed_disbursement"
                alt="file processed"
                id="file_processed"
                progress={progress1}
              />
              <Label htmlFor="file_processed"> File Processed </Label>
              <Label htmlFor="file_processed" className="text-[#62748E]">
                {" "}
                22 Nov, 2024 9:15{" "}
              </Label>
            </span>
            <Progress
              value={progress2}
              className="w-[14rem] mt-5 -ml-58 -mr-50"
            />
            <span className="flex flex-col items-center space-y-1">
              <ButtonRound
                src="NBFC_BRE_disbursement"
                alt="nbfc bre disbursement"
                id="nbfc_bre_disbursement"
                progress={progress2}
              />
              <Label htmlFor="nbfc_bre_disbursement"> NBFC BRE </Label>
            </span>
            <Progress value={0} className="w-[14rem] mt-5 -ml-50 -mr-50" />
            <span className="flex flex-col items-center space-y-1">
              <ButtonRound
                src="disburse_disbursement"
                alt="disburse_disbursement"
                id="disburse_disbursement"
              />
              <Label htmlFor="disburse_disbursement"> Disburse </Label>
            </span>
          </span>
          {/** DISBURSEMENT FILE RUNDOWN */}
          <div className="text-[#62748E] flex justify-between bg-[#C3EEFF] min-h-[40px] min-w-full rounded-2xl p-3">
            <span className="flex justify-between">
              <p className="font-bold">Total App: </p>
              <p>4088</p>
            </span>
            <span className="flex justify-between">
              <p className="font-bold">Approved App: </p>
              <p>3408</p>
            </span>
            <span className="flex justify-between">
              <p className="font-bold">Approved Loan Amount: </p>
              <p>₹ 20,00,000</p>
            </span>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex space-x-8 justify-end mr-5">
        <Button
          variant={"outline"}
          className="flex justify-between min-w-[11rem] items-center text-[#0089CF] border-[#0089CF]"
        >
          <p>Run NBFC BRE</p>
          <img
            src="/images/icons/NBFC_BRE_disbursement.svg"
            alt="NBFC_BRE_disbursement"
          />
        </Button>
        <Button className="flex justify-between min-w-[11rem] items-center bg-[#0089CF] hover:bg-[#0089CF]/75">
          <p>Disbursed Total POS Amount</p>
          <ChevronUpSquare />
        </Button>
      </div>

      {/* TABLE SKELETONS */}
      <div className="flex flex-col bg-white shadow-sm rounded-lg p-5 space-y-3 space-x-4">
        <SkeletonTable rows={5} columns={4} />
      </div>
    </div>
  );
}

export default DisbursementFileRundown
