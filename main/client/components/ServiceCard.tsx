import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import Typography from "./ui/Typography";
import Link from "next/link";

interface ServiceCard {
  title: string;
  description: string;
  intails: string[];
  bookWhat: string;
  link: string;
}

interface Props {
  service: ServiceCard;
  primary?: boolean;
}
export default function ServiceCard({ service, primary }: Props) {
  const { title, description, intails, bookWhat, link } = service;
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
        <Button className={cn("w-full", primary && "bg-card text-card-foreground")}>
          <Link href={link}>Book A {bookWhat}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
