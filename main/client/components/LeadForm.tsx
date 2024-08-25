"use client";
import { PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { PhoneInput } from "./ui/phone-input";
import { postLead } from "@/lib/LeadService";
import { Service, ServiceEnum } from "./ServiceCard";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "lucide-react";
import WhatsAppButton from "./ui/WhatsAppButton";

export const LeadFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  date: z.date().optional(),
  service: z.enum(Service),
});

export default function LeadForm({
  service,
  primary,
  whatsappLink,
  buttonText,
  children,
}: { service: ServiceEnum; whatsappLink: string, primary?: boolean, buttonText: string } & PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof LeadFormSchema>>({
    resolver: zodResolver(LeadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      service: service,
    },
  });

  async function onSubmit(values: z.infer<typeof LeadFormSchema>) {
    console.log(values);
    toast.promise(postLead(values), {
      loading: "Submitting your request...",
      success: () => {
        setOpen(false);
        return "Successfully submitted your request.";
      },
      error: "Failed submit your request. Please try again.",
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={cn("w-full", primary && "bg-card text-card-foreground")}>
          <Link href={whatsappLink}>Book A {buttonText}</Link>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {children}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="text-left">Phone Number</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput placeholder="Enter a phone number" defaultCountry="NA" {...field} />
                  </FormControl>
                  <FormDescription className="text-left">Enter a phone number</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!primary && (
<>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Select a date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Select a date for your lesson/photo shoot.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
</>
            )}
            <div className="flex flex-col space-y-2 mt-5">
              <WhatsAppButton link={whatsappLink} text="Join on WhatsApp" />
              <Button type="submit" className="w-full">
                Join now
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
