import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import CardHeader from "./CardHeader";
import CardHeadline from "./CardHeadline";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  file: z
    .instanceof(File, { message: "File is required" })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Max file size is 5MB",
    })
    .refine((file) => file.type === "application/pdf", {
      message: "Only PDF files are accepted",
    })
    .optional(),
});

const DisbursementFileUpload = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: undefined,
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log("Form submitted with data:", data);
    navigate("/nbfc/5");
  };

  return (
    <div className="flex flex-col space-y-4 p-5">
      <CardHeader
        title="Disbursement File Upload"
        subtitle="Upload your disbursement files here."
      />

      <div className="bg-white shadow-sm rounded-lg p-5 space-y-3 space-x-4">
        <div className="flex items-center justify-between">
          <CardHeadline title="Upload Disbursement File" hr="no" />

          <Button
            type="button"
            variant="outline"
            className="rounded-sm bg-white text-blue-600 border-blue-500 hover:bg-blue-50"
          >
            Export Sample File
            <ChevronDown />
          </Button>
        </div>

        <hr />

        {/* Wrap all form components within the Form provider */}
        <Form {...form}>
          <form
            id="nbfc-form"
            className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <span className="flex flex-col items-center justify-center p-10">
              <img
                src="/images/icons/file_open.svg" // adjust filename as needed
                alt="Upload Disbursement File"
                className="w-14"
              />

              <h3 className="font-semibold text-muted-foreground">
                Key Platform Fields & Expected Mapping Columns
              </h3>

              <p className="text-xs text-muted-foreground text-center mt-2 mb-4 max-w-[85dvh]">
                Download the sample format, upload your disbursement file, and
                map your columns to our required fields.
              </p>

              <FormField
                control={form.control}
                name="file"
                render={({ field }) => {
                  const fileRef = useRef<HTMLInputElement | null>(null);

                  return (
                    <FormItem>
                      {/* Hidden File Input */}
                      <input
                        type="file"
                        accept="application/pdf"
                        ref={(e) => {
                          fileRef.current = e;
                          field.ref(e);
                        }}
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                        className="hidden"
                      />

                      {/* Buttons Row */}
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          className="rounded-sm bg-blue-500 hover:bg-blue-600 text-white flex justify-between min-w-[130px]"
                          onClick={() => fileRef.current?.click()}
                        >
                          {field.value?.name || "Upload"}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
                            />
                          </svg>
                        </Button>
                      </div>

                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <div className="flex justify-center items-center space-x-2 mt-4">
                <img
                  src="/images/icons/learn_more.svg"
                  alt="learn more"
                  id="learn_more"
                />
                <Label
                  htmlFor="learn_more"
                  className="text-sm text-muted-foreground"
                >
                  Learn more about this platform
                </Label>
              </div>
            </span>
            <span className="flex justify-center items-center space-x-2 -mt-8">
                <Button
                    className="rounded-sm bg-blue-500 hover:bg-blue-600 text-white"
                    type="submit"
                >
                    Next
                </Button>
            </span>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DisbursementFileUpload;
