import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ChevronUpSquare, CircleX } from "lucide-react";
import { Link } from "react-router-dom";

export function PoolBuyoutConfirmation() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="flex justify-between min-w-[11rem] items-center bg-[#0089CF] hover:bg-[#0089CF]/75">
          <p>Disbursed Total POS Amount</p>
          <ChevronUpSquare />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="scale-105">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <span className="flex justify-between items-center">
              <h4 className="font-bold">Confirm Pool Buyout Payment</h4>
              <AlertDialogCancel className="border-none shadow-none scale-120 hover:bg-white">
                <CircleX />
              </AlertDialogCancel>
            </span>
          </AlertDialogTitle>
          <AlertDialogDescription className="max-w-7/8">
            You are about to initiate payment for the following Pool Buyout
            batch. Please review the details carefully before confirming.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <section className="grid grid-cols-2 gap-y-2 bg-[#C3EEFF] min-h-[40px] w-full rounded-2xl p-4 text-xs">
          <p className="text-[#1D2D3E]">Batch ID</p>
          <p className="font-bold">PB-0425-2025-001</p>

          <p className="text-[#1D2D3E]">Pool Name</p>
          <p className="font-bold">Auto Finance Pool - Apr 2025</p>

          <p className="text-[#1D2D3E]">Total Amount</p>
          <p className="font-bold">₹ 12,50,00,000</p>

          <p className="text-[#1D2D3E]">Number of Loans</p>
          <p className="font-bold">250</p>

          <p className="text-[#1D2D3E]">Payout Account</p>
          <p className="font-bold">HDFC Bank Ltd - A/C 1234 XXXX 9876</p>

          <p className="text-[#1D2D3E]">Scheduled Date</p>
          <p className="font-bold">April 25, 2025</p>

          <p className="text-[#1D2D3E]">Initiated By</p>
          <p className="font-bold">Rahul Sharma (Operations)</p>
        </section>
        <section className="min-h-[40px] w-full flex items-center justify-around">
          <img
            src="/images/icons/alert-fill.svg"
            alt="alert"
            className="scale-130"
          />
          <p className="text-sm text-[#B91C1C] max-w-[25rem]">
            Once confirmed, the payment instruction will be sent to the bank and
            cannot be reversed.
          </p>
        </section>

        <AlertDialogFooter className="gap-18">
          <AlertDialogCancel className="text-[#0089CF] border-[#0089CF]">
            Cancel
          </AlertDialogCancel>
          <Link to={'/upload-pool-file/file-infer'}>
            <AlertDialogAction className="bg-[#0089CF] hover:bg-[#0089CF]/75">
                Confirm & Send
            </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
