import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormField,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
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

import { useNavigate } from "react-router-dom";

import { DisbursementFileTags, DisbursementFileInferTableHeaders } from "@/lib/constants/index"; 



const allowedValues = DisbursementFileTags.map((tag) => tag.value) as [
  string,
  ...string[]
];

const rowSchema = z.object({
  platformField: z.string(),
  column: z.enum(allowedValues, { message: "Select a column" }),
  required: z.boolean(),
});

const formSchema = z.object({
  mappings: z.array(rowSchema),
});

const DisbursementFileInfer = () => {

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mappings: [
        {
          platformField: "Customer Name",
          column: "customerName",
          required: true,
        },
        {
          platformField: "Loan Account Number",
          column: "loanId",
          required: true,
        },
        {
          platformField: "Sanctioned Amount",
          column: "sanctionedAmount",
          required: true,
        },
        {
          platformField: "Disbursed Amount",
          column: "disbursedAmount",
          required: true,
        },
        {
          platformField: "Disbursement Date",
          column: "disbursementDate",
          required: true,
        },
        {
          platformField: "Tenure (in months)",
          column: "tenure",
          required: true,
        },
        {
          platformField: "Interest Rate (%)",
          column: "interestRate",
          required: true,
        },
      ],
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "mappings",
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form data submitted:", data);

    navigate("/nbfc/6");
  }

  return (
    <div className="flex flex-col space-y-4 p-5">
      <CardHeader
        title="Disbursement File Upload"
        subtitle="Upload your disbursement files here."
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="bg-white shadow-sm rounded-lg p-4 space-y-3 space-x-4">
            <div className="flex items-center justify-between -mt-3">
              <CardHeadline
                title="Upload Disbursement File"
                hr="no"
                className="text-sm mt-3 ml-2"
              />

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
              <TableHeader>
                <TableRow>
                  {DisbursementFileInferTableHeaders.map((tab) => (
                    <TableHead key={tab.key}>{tab.name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {fields.map((field, index) => (
                  <TableRow key={field.id}>
                    <TableCell>{field.platformField}</TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`mappings.${index}.column`}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="w-[220px]">
                              <SelectValue placeholder="Select tag" />
                            </SelectTrigger>
                            <SelectContent>
                              {DisbursementFileTags.map((tag) => (
                                <SelectItem key={tag.value} value={tag.value}>
                                  {tag.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </TableCell>
                    <TableCell>
                      <FormField
                        control={form.control}
                        name={`mappings.${index}.required`}
                        render={({ field }) => (
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end mt-4 mr-7">
            <Button
              type="submit"
              className="text-lg p-5 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DisbursementFileInfer;
