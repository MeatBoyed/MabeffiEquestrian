import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import Typography from "./ui/Typography";
import LeadForm from "./LeadForm";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { DialogHeader } from "./ui/dialog";
import { ShowMore } from "./ReadMoreText";

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
        "grid w-full grid-cols-1 content-between items-center ",
        primary && "bg-primary text-primary-foreground"
      )}
    >
      {/* <!-- <img src={image} alt="Service Card Image" class="w-full" /> --> */}

      <CardHeader className="">
        <Typography variant={"h2"} className="text-center">
          {title}
        </Typography>
        <Typography
          variant={"p"}
          affects={"muted"}
          className={cn("text-center text-[#4D4D4D]", primary && "text-primary-foreground")}
        >
          {description}
        </Typography>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-start gap-2">
        {intails.map((intail, index) => {
          if (primary && index > 4) return undefined;
          return (
            <div className="flex items-start justify-start gap-3" key={index}>
              <Check size={26} />
              <Typography variant={"p"} className="m-0 p-0" affects={"removePMargin"}>
                {intail}
              </Typography>
            </div>
          );
        })}
        {primary && (
          <ShowMore>
            {intails.slice(0, 4).map((intail, index) => (
              <div className="flex items-start justify-start gap-3" key={index}>
                <Check size={26} />
                <Typography variant={"p"} className="m-0 p-0" affects={"removePMargin"}>
                  {intail}
                </Typography>
              </div>
            ))}
          </ShowMore>
        )}
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
