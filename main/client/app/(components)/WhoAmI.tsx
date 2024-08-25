import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/Typography";
import ReadMoreText from "@/components/ReadMoreText";
import Link from "next/link";
import { siteConfig, SiteImagesRepo } from "@/lib/siteConfig";
import en from "@/lib/en";
import SlideShow from "@/components/SlideShow";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function WhoAmI() {
  return (
    <section
      id="AboutMe"
      // className="grid grid-cols-1 gap-10 md:grid-cols-2 md:content-between md:items-start md:gap-10 lg:gap-20"
      className="grid grid-cols-1 md:grid-cols-2 md:mt-5 gap-10 md:content-between items-start "
    >
      {/* <!-- Left Content --> */}
      <div className="flex w-full flex-col items-start justify-center gap-6">
        <Typography variant={"h1"} className="">
          {en.whoAmI.title}
        </Typography>
        <div className="flex flex-col items-start justify-center gap-2">
          <Typography variant={"p"} className="">
            {en.whoAmI.content.part1}
          </Typography>

          <div className="hidden flex-col items-start justify-center gap-2 xl:flex">
            <Typography variant={"p"} affects={"removePMargin"}>
              {en.whoAmI.content.part2}
            </Typography>
            <Typography variant={"p"} affects={"removePMargin"}>
              {en.whoAmI.content.part3}
            </Typography>
          </div>

          <div className="xl:hidden">
            <ReadMoreText part1={en.whoAmI.content.part2} part2={en.whoAmI.content.part3} />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button>
            <Link href={en.whoAmI.primaryButton.path}>{en.whoAmI.primaryButton.text}</Link>
          </Button>
          <Button variant={"outline"}>
            <Link href={en.whoAmI.secondaryButton.path}>{en.whoAmI.secondaryButton.text}</Link>
          </Button>
        </div>
      </div>

      <div className="">
        <SlideShow images={SiteImagesRepo.AboutMe} />
      </div>
      {/* <AspectRatio ratio={3 / 3}>
        <Image src={SiteImagesRepo.IntroMain} alt="Image" width={500} height={400} className="rounded-md object-contain" />
      </AspectRatio> */}
    </section>
  );
}
