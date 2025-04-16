import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import CardHeader from "./CardHeader";
import CardHeadline from "./CardHeadline";

import { ChevronDown } from "lucide-react";
import Tags from "./Tags";
import { Link } from "react-router-dom";

const DisbursementFileInfer = () => {
  return (
    <div className="flex flex-col space-y-4 p-5">
      <CardHeader
        title="Disbursement File Upload"
        subtitle="Upload your disbursement files here."
      />
      <div className="bg-white shadow-sm rounded-lg p-4 space-y-3 space-x-4">
        <div className="flex items-center justify-between -mt-3">
          <CardHeadline title="Upload Disbursement File" hr="no" className="text-sm mt-3 ml-2"/>

          <Button
            type="button"
            variant="outline"
            className="scale-90 rounded-sm bg-white text-blue-600 border-blue-500 hover:bg-blue-50"
          >
            Export Sample File
            <ChevronDown />
          </Button>
        </div>

        <hr />

        <Table>
          <TableCaption>
            <Link to="/nbfc/6" className="text-blue-600 hover:text-blue-800">
              Next
            </Link>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Platform Field</TableHead>
              <TableHead>Expected Column Name (from NBFC file)</TableHead>
              <TableHead>Required</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>
                <Tags tag="Customer_Name" />
                <Tags tag="Borrower_Name" />
              </TableCell>
              <TableCell>
                <Switch />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Loan Account Number</TableCell>
              <TableCell>
                <Tags tag="Loan_ID" />
                <Tags tag="Loan_Account_Number" />
              </TableCell>
              <TableCell>
                <Switch />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sanctioned Amount</TableCell>
              <TableCell>
                <Tags tag="Sanctioned_Amount" />
              </TableCell>
              <TableCell>
                <Switch />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Disbursed Amount</TableCell>
              <TableCell>
                <Tags />
              </TableCell>
              <TableCell>
                <Switch />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Disbursement Date</TableCell>
              <TableCell>
                <Tags />
              </TableCell>
              <TableCell>
                <Switch />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tenure (in months)</TableCell>
              <TableCell>
                <Tags />
              </TableCell>
              <TableCell>
                <Switch />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Interest Rate (%)</TableCell>
              <TableCell>
                <Tags />
              </TableCell>
              <TableCell>
                <Switch />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DisbursementFileInfer;
