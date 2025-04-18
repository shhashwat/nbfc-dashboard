import { useRef } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useNavigate } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardHeader from "./CardHeader";
import CardHeadline from "./CardHeadline";

import { rbiLisenceTypes } from "@/lib/constants";

const fileSchema = z
  .instanceof(File, { message: "File is required" })
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "Max file size is 5MB",
  })
  .refine((file) => file.type === "application/pdf", {
    message: "Only PDF files are accepted",
  })
  .optional();

const formSchema = z.object({
  nbfcName: z.string().min(4, { message: "NBFC Name is required" }),

  regNum: z.coerce
    .number()
    .min(1, { message: "Registration Number is required" }),

  rbiLicenseType: z.enum(
    [
      "Investment and Credit Company",
      "Infrastructure Finance Company",
      "Infrastructure Debt Fund",
      "Micro Finance Institution",
      "Core Investment Company",
      "Asset Finance Company",
      "Housing Finance Company",
      "Peer to Peer Lending Platform",
      "Account Aggregator",
      "Factor",
      "Mortgage Guarantee Company",
      "Non-Operative Financial Holding Company",
    ],
    { message: "RBI License Type is required" }
  ),

  dateOfIncorporation: z.coerce.date({
    required_error: "Date of Incorporation is required",
    invalid_type_error: "Invalid date format",
  }),

  bussinessLimit: z.coerce
    .number()
    .min(2, { message: "Business Limit is required" }),

  regAddress: z.string().min(4, {
    message: "Registration Address is required",
  }),

  contactPerson: z.string().min(4, {
    message: "Contact Person is required",
  }),

  email: z.string().email({
    message: "Invalid email address",
  }),

  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone Number must be exactly 10 digits" }),

  website: z
    .string()
    .url({ message: "Invalid URL format" })
    .optional()
    .or(z.literal("")),

  rbiRegCertificate: fileSchema,
  boardRes: fileSchema,
  gstCertificate: fileSchema,
  panAndTanDocs: fileSchema,
  cancelledCheque: fileSchema,
  companyLogo: fileSchema,
});

const NBFCform = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nbfcName: "",
      regNum: undefined,
      rbiLicenseType: "Investment and Credit Company",
      dateOfIncorporation: undefined,
      bussinessLimit: undefined,
      regAddress: "",
      contactPerson: "",
      email: "",
      phoneNumber: "",
      website: "",

      rbiRegCertificate: undefined,
      boardRes: undefined,
      gstCertificate: undefined,
      panAndTanDocs: undefined,
      cancelledCheque: undefined,
      companyLogo: undefined,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log("Form submitted with data:", data);
    // Add your processing logic here (e.g., API calls to save data).
    navigate("/nbfc/product-config");
  };

  return (
    <div className="flex flex-col space-y-4 p-5">
      <CardHeader
        title="NBFC Profile Details"
        subtitle="Tell us about your NBFC to begin your onboarding journey."
      />

      <Form {...form}>
        <form
          id="nbfc-form"
          className="space-y-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* NBFC Establishment Details */}
          <div className="bg-white shadow-sm rounded-lg p-5 space-y-3 space-x-4">
            <CardHeadline title="1. NBFC Establishment Details" />
            <span className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-1">
              <FormField
                control={form.control}
                name="nbfcName"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>NBFC Name</FormLabel>
                    <FormControl>
                      <Input placeholder="NBFC Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="regNum"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Registration Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Registration Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rbiLicenseType"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>RBI License Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select RBI License Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {rbiLisenceTypes.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfIncorporation"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Date of Incorporation</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder="Date of Incorporation"
                        value={
                          field.value
                            ? field.value.toISOString().split("T")[0]
                            : ""
                        }
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bussinessLimit"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Business Limit</FormLabel>
                    <FormControl>
                      <Input placeholder="Business Limit" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </span>
          </div>

          {/* NBFC Contact Details */}
          <div className="bg-white shadow-sm rounded-lg p-5 space-y-3 space-x-4">
            <CardHeadline title="2. NBFC Contact Details" />
            <span className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-1">
              <FormField
                control={form.control}
                name="regAddress"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Registration Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Registration Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Contact Person</FormLabel>
                    <FormControl>
                      <Input placeholder="Contact Person" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Website (Optional) </FormLabel>
                    <FormControl>
                      <Input placeholder="Website" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </span>
          </div>

          {/* NBFC Document Upload */}
          <div className="bg-white shadow-sm rounded-lg p-5 space-y-3 space-x-4">
            <CardHeadline title="3. Upload Required Documents" />
            <span className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-1">
              <FormField
                control={form.control}
                name="rbiRegCertificate"
                render={({ field }) => {
                  const fileRef = useRef<HTMLInputElement | null>(null);

                  return (
                    <FormItem>
                      <FormLabel>RBI Registration Certificate</FormLabel>

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
                        {/* Sample Button (non-functional) */}
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-sm bg-white text-blue-600 border-blue-500 hover:bg-blue-50"
                        >
                          Sample
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
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                            />
                          </svg>
                        </Button>

                        {/* Upload Button */}
                        <Button
                          type="button"
                          className="rounded-sm bg-blue-500 hover:bg-blue-600 text-white"
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

              <FormField
                control={form.control}
                name="boardRes"
                render={({ field }) => {
                  const fileRef = useRef<HTMLInputElement | null>(null);

                  return (
                    <FormItem>
                      <FormLabel>Board Resolution (for partnership)</FormLabel>

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
                        {/* Sample Button (non-functional) */}
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-sm bg-white text-blue-600 border-blue-500 hover:bg-blue-50"
                        >
                          Sample
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
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                            />
                          </svg>
                        </Button>

                        {/* Upload Button */}
                        <Button
                          type="button"
                          className="rounded-sm bg-blue-500 hover:bg-blue-600 text-white"
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

              <FormField
                control={form.control}
                name="gstCertificate"
                render={({ field }) => {
                  const fileRef = useRef<HTMLInputElement | null>(null);

                  return (
                    <FormItem>
                      <FormLabel>GST Certificate</FormLabel>

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
                        {/* Sample Button (non-functional) */}
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-sm bg-white text-blue-600 border-blue-500 hover:bg-blue-50"
                        >
                          Sample
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
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                            />
                          </svg>
                        </Button>

                        {/* Upload Button */}
                        <Button
                          type="button"
                          className="rounded-sm bg-blue-500 hover:bg-blue-600 text-white"
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

              <FormField
                control={form.control}
                name="panAndTanDocs"
                render={({ field }) => {
                  const fileRef = useRef<HTMLInputElement | null>(null);

                  return (
                    <FormItem>
                      <FormLabel>PAN & TAN Documents</FormLabel>

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
                        {/* Sample Button (non-functional) */}
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-sm bg-white text-blue-600 border-blue-500 hover:bg-blue-50"
                        >
                          Sample
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
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                            />
                          </svg>
                        </Button>

                        {/* Upload Button */}
                        <Button
                          type="button"
                          className="rounded-sm bg-blue-500 hover:bg-blue-600 text-white"
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

              <FormField
                control={form.control}
                name="cancelledCheque"
                render={({ field }) => {
                  const fileRef = useRef<HTMLInputElement | null>(null);

                  return (
                    <FormItem>
                      <FormLabel>Cancelled Cheque</FormLabel>

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
                        {/* Sample Button (non-functional) */}
                        <Button
                          type="button"
                          variant="outline"
                          className="rounded-sm bg-white text-blue-600 border-blue-500 hover:bg-blue-50"
                        >
                          Sample
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
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                            />
                          </svg>
                        </Button>

                        {/* Upload Button */}
                        <Button
                          type="button"
                          className="rounded-sm bg-blue-500 hover:bg-blue-600 text-white"
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

              <FormField
                control={form.control}
                name="companyLogo"
                render={({ field }) => {
                  const fileRef = useRef<HTMLInputElement | null>(null);

                  return (
                    <FormItem>
                      <FormLabel>Company Logo (for platform use)</FormLabel>

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
                        {/* Sample Button (non-functional) */}
                        {/* <Button
                          type="button"
                          variant="outline"
                          className="rounded-sm bg-white text-blue-600 border-blue-500 hover:bg-blue-50"
                        >
                          Sample
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
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                            />
                          </svg>
                        </Button> */}

                        {/* Upload Button */}
                        <Button
                          type="button"
                          className="rounded-sm bg-blue-500 hover:bg-blue-600 text-white"
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
            </span>
          </div>

          <span className="flex justify-end">
            <Button
              className="p-5 text-lg rounded-sm bg-blue-500 hover:bg-blue-600 text-white flex"
              type="submit"
            >
              Submit
            </Button>
          </span>
        </form>
      </Form>
    </div>
  );
};

export default NBFCform;
