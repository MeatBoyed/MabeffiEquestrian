import Typography from "@/components/ui/Typography";
import { CalendarDays, MapPin, Users } from "lucide-react";
import ReadMoreText from "./ReadMoreText";
import { Button } from "./ui/button";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

export interface EventType {
  title: string;
  location: string;
  date: string;
  maxMemebers?: number;
  enrollLink: string;
  bodyText: {
    first: string;
    second: string;
    part1: string;
    part2: string;
    part3?: string;
  };
  image: string;
}

interface Props {
  Event: EventType;
}

export default function Event({ Event }: Props) {
  const { title, location, date, maxMemebers, enrollLink, bodyText, image } = Event;

  return (
    <div className="grid w-full grid-cols-1 gap-5 justify-center md:items-start md:gap-10 lg:grid-cols-2 lg:gap-10">
      <Image src={image} alt="Image" width={400} height={500} className="w-full" />

      <div className="flex w-full flex-col items-start justify-center gap-6">
        <Typography variant={"h2"} className="">
          {title}
        </Typography>

        {/* <!-- Badges --> */}
        <div className="flex w-full flex-wrap items-center justify-start gap-3 ">
          <Badge variant={"secondary"} className="flex items-center justify-center gap-2">
            <Typography variant={"p"} affects={"small"}>
              {date}
            </Typography>
            <CalendarDays size={20} />
          </Badge>

          {maxMemebers && (
            <Badge variant={"secondary"} className="flex items-center justify-center gap-2">
              <Typography variant={"p"} affects={"small"}>
                {maxMemebers}
              </Typography>
              <Users size={20} />
            </Badge>
          )}
          <Badge variant={"secondary"} className="flex items-center justify-center gap-2">
            <Typography variant={"p"} affects={"small"}>
              {location}
            </Typography>
            <MapPin size={20} />
          </Badge>
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <Typography variant={"p"} className="">
            {bodyText.first}
            <br />
            {bodyText.second}
          </Typography>
          <ReadMoreText part1={bodyText.part1} part2={bodyText.part2} part3={bodyText.part3} />
        </div>

        <div className="flex w-full items-center justify-center gap-3">
          <Button className="w-full">
            <span>
              <Link href={enrollLink}>Enroll Now</Link>
            </span>
          </Button>
          <Button variant={"outline"}>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
