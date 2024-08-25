import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import Typography from "./ui/Typography";
import Link from "next/link";
import LeadForm from "./LeadForm";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { DialogHeader } from "./ui/dialog";

export const Service = ["photoshoot", "1 hour lesson", "30 min lesson", "Pony Rides"] as const;
export const enum ServiceEnum {
  "photoshoot" = "photoshoot",
  "1 hour lesson" = "1 hour lesson",
  "30 min lesson" = "30 min lesson",
  "Pony Rides" = "Pony Rides",
}
export interface ServiceCard {
  service: ServiceEnum;
  title: string;
  description: string;
  intails: string[];
  bookWhat: string;
  link: string;
  dialog: {
    title: string;
    description: string;
    button: string;
  };
}

interface Props {
  service: ServiceCard;
  primary?: boolean;
}
export default function ServiceCard({ service: ServiceProp, primary }: Props) {
  const { title, description, intails, bookWhat, link, service, dialog } = ServiceProp;
  return (
    <Card
      className={cn(
        // TODO: Fix height on LG
        "grid w-full grid-cols-1 content-between items-center md:h-[24rem] md:w-[50%] lg:h-[28rem] xl:h-fit",
        primary && "bg-primary text-primary-foreground"
      )}
    >
      {/* <!-- <img src={image} alt="Service Card Image" class="w-full" /> --> */}

      <CardHeader className="">
        <Typography variant={"h2"} className="text-center">
          {title}
        </Typography>
        <Typography variant={"p"} affects={"muted"} className="text-center">
          {description}
        </Typography>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-start gap-2">
        {intails.map((intail, index) => (
          <div className="flex items-start justify-start gap-3" key={index}>
            <Check width={26} height={26} className="w-6 h-6" />
            <Typography variant={"p"} className="" affects={"removePMargin"}>
              {intail}
            </Typography>
          </div>
        ))}
      </CardContent>
      <CardFooter className="w-full">
        <LeadForm primary={primary} service={service} buttonText={bookWhat} whatsappLink={link}>
          <DialogHeader>
            <DialogTitle>
              <Typography variant={"h2"}>{dialog.title}</Typography>
            </DialogTitle>
            <DialogDescription>
              <Typography variant={"p"}>{dialog.description}</Typography>
            </DialogDescription>
          </DialogHeader>
        </LeadForm>
      </CardFooter>
    </Card>
  );
}
