import ReadMoreText from "@/components/ReadMoreText";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/Typography";
import { Cake, Medal } from "lucide-react";
import { FaHorseHead } from "react-icons/fa";
import Link from "next/link";
import SlideShow from "@/components/SlideShow";
import { SiteImagesRepo } from "@/lib/siteConfig";
import en from "@/lib/en";

export default function HorseProfile() {
  return (
    <section id="Horse" className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-10 lg:gap-20">
      {/* <!-- Right Content --> */}
      <div className="flex w-full flex-col items-start justify-center gap-6">
        <Typography variant={"h1"} className="">
          Meet
          <br />
          {en.Donny.title}
        </Typography>

        {/* <!-- Badges --> */}
        <div className="flex w-full items-center justify-start gap-2 flex-wrap">
          <Badge variant={"outline"} className="flex items-center justify-center gap-2 px-3 py-2">
            <Typography variant={"p"} affects={"small"}>
              {en.Donny.details.breed}
            </Typography>
            <FaHorseHead style={{ width: "20px", height: "20px" }} />
          </Badge>
          <Badge variant={"outline"} className="flex items-center justify-center gap-2 px-3 py-2">
            <Typography variant={"p"} affects={"small"}>
              {en.Donny.details.age}
            </Typography>
            <Cake />
          </Badge>
          <Badge variant={"outline"} className="flex items-center justify-center gap-2 px-3 py-2">
            <Typography variant={"p"} affects={"small"}>
              {en.Donny.details.achievements}
            </Typography>
            <Medal />
          </Badge>
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <Typography variant={"p"} className="">
            {en.Donny.description.part1}
          </Typography>
          <Typography variant={"p"} affects={"removePMargin"} className="hidden xl:block">
            {en.Donny.description.part2}
          </Typography>
          <div className="xl:hidden">
            <ReadMoreText part1={en.Donny.description.part1} />
          </div>
        </div>

        <Button>
          <Link href={en.Donny.button.path}>{en.Donny.button.text}</Link>
        </Button>
      </div>

      {/* <!-- Left Carousel --> */}
      <SlideShow images={SiteImagesRepo.DonnyImages} />
    </section>
  );
}
