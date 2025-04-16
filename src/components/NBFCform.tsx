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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const fileSchema = z
  .instanceof(File, { message: "File is required" })
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: "Max file size is 5MB",
  })
  .refine((file) => file.type === "application/pdf", {
    message: "Only PDF files are accepted",
  });

const formSchema = z.object({
  nbfcName: z.string().min(4, { message: "NBFC Name is required" }),

  regNum: z.coerce
    .number()
    .min(1, { message: "Registration Number is required" }),

  rbiLicenseType: z.enum(
    [
      "Investment and Credit Company",
      "Account Aggregator",
      "Core Investment Company",
      "Infrastructure Finance Company",
      "Micro Finance Institution",
      "Factor",
      "Housing Finance Company",
      "Peer to Peer Lending Platform",
      "Non-Operative Financial Holding Company",
      "Commodity and Derivatives Exchange",
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

  return (
    <div className="flex flex-col space-y-4 p-5">
      <span>
        <h2 className="font-bold text-lg">NBFC Profile Details</h2>
        <p className="text-sm text-muted-foreground">
          Tell us about your NBFC to begin your onboarding journey.
        </p>
      </span>
      <Form {...form}>
        <form id="nbfc-form" className="space-y-4">
          <div className="bg-white shadow-sm rounded-lg p-5 space-y-3 space-x-4">
            <h1 className="text-lg font-bold">1. NBFC Establishment Details</h1>
            <hr />
            <span className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-4 md:space-y-0">
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
                        <SelectItem value="Investment and Credit Company">
                          Investment and Credit Company (ICC)
                        </SelectItem>
                        <SelectItem value="Account Aggregator">
                          Account Aggregator
                        </SelectItem>
                        <SelectItem value="Core Investment Company">
                          Core Investment Company (CIC)
                        </SelectItem>
                        <SelectItem value="Infrastructure Finance Company">
                          Infrastructure Finance Company (IFC)
                        </SelectItem>
                        <SelectItem value="Micro Finance Institution">
                          Micro Finance Institution (MFI)
                        </SelectItem>
                        <SelectItem value="Factor">Factor</SelectItem>
                        <SelectItem value="Housing Finance Company">
                          Housing Finance Company
                        </SelectItem>
                        <SelectItem value="Peer to Peer Lending Platform">
                          Peer to Peer Lending Platform (P2P)
                        </SelectItem>
                        <SelectItem value="Non-Operative Financial Holding Company">
                          Non-Operative Financial Holding Company (NOFHC)
                        </SelectItem>
                        <SelectItem value="Commodity and Derivatives Exchange">
                          Commodity and Derivatives Exchange
                        </SelectItem>
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
          <div className="bg-white shadow-sm rounded-lg p-5 space-y-3 space-x-4">
            <h1 className="text-lg font-bold">2. NBFC Contact Details</h1>
            <hr />
            <span className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-4 md:space-y-0">
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
          <div className="bg-white shadow-sm rounded-lg p-5 space-y-3 space-x-4">
            <h1 className="text-lg font-bold">3. Upload Required Documents</h1>
            <hr />
            <span className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-4 md:space-y-0">

            </span>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default NBFCform;
