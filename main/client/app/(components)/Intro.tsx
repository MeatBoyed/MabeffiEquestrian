import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import en from "@/lib/en";
import { SiteImagesRepo } from "@/lib/siteConfig";
import Typography from "@/typography";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section id="Intro" className="grid grid-cols-1 md:grid-cols-2 md:mt-5 gap-10 items-start ">
    
      <div className="w-full h-full">
        <Image src={SiteImagesRepo.IntroMain} alt="Image" width={500} height={400} className="rounded-md object-contain" />
      </div>

      {/* Right Column */}
      <div className="w-full flex flex-col items-start justify-between h-full gap-10  ">
        <div className="flex flex-col items-start justify-center gap-6">
          <div>
            <Typography variant={"h1"} className="">
              {en.intro.title}
            </Typography>
            <Typography variant={"p"} className="">
              {en.intro.subtitle}
            </Typography>
          </div>
          <Button>
            <Link href={en.intro.primaryButton.path}>{en.intro.primaryButton.text}</Link>
          </Button>
        </div>

        {/* Only visible on mobile */}
        <div className="w-full md:hidden lg:block">
          <AspectRatio ratio={3 / 2}>
            <Image
              alt="Mabeffi riding in a show jumping competition"
              src={SiteImagesRepo.IntroSecondary}
              fill
              className="w-full rounded-lg "
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

// export function TwoCols({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
//   return (
//     <section id="Intro" className="w-full grid grid-cols-1 md:grid-cols-2 md:mt-5 content-between justify-between items-start ">
//       <div className="w-full h-full flex justify-start items-start">{left}</div>

//       {/* Right Column */}
//       <div className="w-full h-full flex justify-end items-end">{right}</div>
//     </section>
//   );
// }
