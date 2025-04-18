import { useRef } from "react";

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
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

import CardHeader from "./CardHeader";
import { useNavigate } from "react-router-dom";

import { breConfigTableHeaders } from "@/lib/constants";


const rowSchema = z.object({
  parameter: z.string(),
  value: z.coerce.number().min(0, { message: "This field is required" }),
  weightage: z.coerce.number().min(0).max(100),
  mandatory: z.boolean(),
});

const formSchema = z.object({
  mappings: z.array(rowSchema),
});

const BRETables: React.FC<BRETablesProps> = ({
  title,
  subtitle,
  navTo,
  paramsArr,
  onSubmit, // Receive onSubmit callback
}) => {
  const headerRef = useRef<CardHeaderHandle>(null);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mappings: paramsArr.map((param) => ({
        parameter: param.name,
        value: undefined,
        weightage: undefined,
        mandatory: true || false,
      })),
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "mappings",
  });

  const onSubmitHandler = (data: z.infer<typeof formSchema>) => {
    const weightage = headerRef.current?.getValue();

    console.log("Weightage:", weightage);
    console.log(`BRE Config ${title} Form data submitted:`, data);

    // Mark the tab as submitted
    if (onSubmit) {
      onSubmit();
    }

    {
      title !== "Demographic" ? navigate(`#${navTo}`) : navigate("/");
    }
  };

  return (
    <div>
      <CardHeader
        ref={headerRef}
        title={title}
        subtitle={subtitle}
        pclassName="mt-4"
        weightage={true}
      />

      <div className="space-y-3 space-x-4 w-full mt-4 min-w-[66rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitHandler)}>
            <div className="bg-white shadow-sm rounded-lg p-4 ">
              <Table>
                <TableHeader>
                  <TableRow className="h-12">
                    {breConfigTableHeaders.map((header) => (
                      <TableHead key={header.key}>
                        <div className="flex items-center space-x-2">
                          {header.icon && <img src={header.icon} alt="" />}
                          <span>{header.name}</span>
                        </div>
                      </TableHead>
                    ))}
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
                      <TableCell className="w-[30%]">
                        <FormField
                          control={form.control}
                          name={`mappings.${index}.value`}
                          render={({ field }) => (
                            <Input
                              type="number"
                              placeholder={paramsArr[index].subtitle}
                              {...field}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell className="w-[30%]">
                        <FormField
                          control={form.control}
                          name={`mappings.${index}.weightage`}
                          render={({ field }) => (
                            <Input
                              type="number"
                              min={0}
                              max={100}
                              step={0.1}
                              placeholder={`${(Math.random() * 9 + 1).toFixed(1)}%`}
                              {...field}
                            />
                          )}
                        />
                      </TableCell>
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-end mt-4 mr-2">
              <Button
                type="submit"
                className="text-lg p-4 bg-blue-600 hover:bg-blue-700 text-white"
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

export default BRETables;