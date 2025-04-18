import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import { Form, FormField } from "@/components/ui/form";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

import CardHeader from "./CardHeader";

import { loanProductConfigTableHeaders } from "@/lib/constants";


const rowSchema = z.object({
  parameter: z.string(),
  value: z.union([
    z.string(),
    z.coerce.number().min(0, { message: "This field is required" }),
  ]),
  mandatory: z.boolean(),
});

const formSchema = z.object({
  mappings: z.array(rowSchema),
});

const LoanProductTables: React.FC<LoanProductTablesProps> = ({
  title,
  subtitle,
  navTo,
  paramsArr,
  onSubmit, // Receive onSubmit callback
}) => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mappings: paramsArr.map((param) => ({
        parameter: param.name,
        value: param.dropdown ? "" : undefined,
        mandatory: true || false,
      })),
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "mappings",
  });

  const onFormSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(`Loan Product ${title} Form data submitted:`, data);

    // Call the onSubmit callback passed from LoanProductConfig to mark the tab as submitted
    if (onSubmit) {
      onSubmit();
    }

    // Navigate to next tab or page
    title !== "Collateral & Risk Controls"
      ? navigate(`#${navTo}`)
      : navigate("/nbfc/bre-config");
  };

  return (
    <div>
      <CardHeader title={title} subtitle={subtitle} pclassName="mt-4" />

      <div className="space-y-3 space-x-4 w-full mt-4 min-w-[67rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)}>
            <div className="bg-white shadow-sm p-3 rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow className="h-12">
                    {loanProductConfigTableHeaders.map((header) => {
                      if (
                        title === "Product Info" &&
                        header.key === "mandatory"
                      )
                        return null;

                      return (
                        <TableHead key={header.key}>
                          <div className="flex items-center space-x-2">
                            {header.icon && (
                              <img src={header.icon} alt="header icon" />
                            )}
                            <span>{header.name}</span>
                          </div>
                        </TableHead>
                      );
                    })}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fields.map((field, index) => (
                    <TableRow key={field.id} className="h-12">
                      <TableCell className="w-[30%] flex flex-col">
                        {paramsArr[index].name}
                        <p className="text-xs text-gray-500">
                          {paramsArr[index].subtitle}
                        </p>
                      </TableCell>
                      <TableCell className="w-[50%]">
                        <FormField
                          control={form.control}
                          name={`mappings.${index}.value`}
                          render={({ field }) =>
                            paramsArr[index].dropdown ? (
                              <Select
                                value={String(field.value)}
                                onValueChange={field.onChange}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue
                                    placeholder={`Select ${paramsArr[index].name}`}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  {paramsArr[index].dropdown.map(
                                    (option: any) => (
                                      <SelectItem
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </SelectItem>
                                    )
                                  )}
                                </SelectContent>
                              </Select>
                            ) : (
                              <Input type="number" placeholder="0" {...field} />
                            )
                          }
                        />
                      </TableCell>

                      {title !== "Product Info" && (
                        <TableCell className="flex justify-center items-center">
                          <FormField
                            control={form.control}
                            name={`mappings.${index}.mandatory`}
                            render={({ field }) => (
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            )}
                          />
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                className="text-lg p-4 bg-blue-600 hover:bg-blue-700 text-white mr-5"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoanProductTables;