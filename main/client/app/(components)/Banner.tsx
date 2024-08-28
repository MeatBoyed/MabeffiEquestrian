import { Button, buttonVariants } from "@/components/ui/button";
import Typography from "@/components/ui/Typography";
import en from "@/lib/en";
import { siteConfig, SiteImagesRepo } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Banner() {
  return (
    <section
      id="banner"
      className="flex h-[60vh] md:h-[70vh] w-full items-center justify-center bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${SiteImagesRepo.Banner})` }}
    >
      <div className="flex h-full w-full flex-col items-center justify-between gap-2 bg-slate-950 bg-opacity-45 pb-3 text-primary-foreground p-3 max-w-screen-2xl mx-auto md:px-14 lg:px-28">
        <div className="flex w-full justify-start items-center h-full gap-3">
          <div className="flex  flex-col items-center justify-center flex-grow text-center md:text-left md:items-start lg:max-w-[50%]">
            <Typography variant="h1" className=" text-5xl tracking-normal lg:text-6xl mb-2">
              {en.banner.title}
            </Typography>
            <Typography variant="h3" className="text-muted-foreground">
              {en.banner.subtitle}
            </Typography>
            <div className="mt-6 flex gap-4">
              <Link className={cn(buttonVariants({ variant: "default" }))} href={en.banner.primaryButton.path}>
                {en.banner.primaryButton.text}
              </Link>
              <Link
                className={cn(buttonVariants({ variant: "outline", className: "border-0" }))}
                href={en.banner.secondaryButton.path}
              >
                {en.banner.secondaryButton.text}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex animate-fade items-center justify-center gap-5 animate-duration-[2500ms] animate-fill-forwards animate-once mb-4">
            <Link href={siteConfig.links.instagram}>
              <FaInstagram className="h-8 w-8 lg:h-10 lg:w-10 hover:text-purple-600" />
            </Link>
            <Link href={siteConfig.links.whatsapp}>
              <FaWhatsapp className="h-8 w-8 lg:h-10 lg:w-10 hover:text-green-600" />
            </Link>
            <Link href={siteConfig.links.facebook}>
              <FaFacebook className="h-8 w-8 lg:h-10 lg:w-10 hover:text-blue-600" />
            </Link>
          </div>
          <Link href="#Intro" className="animate-fade animate-duration-[2500ms] animate-fill-forwards animate-once">
            <ChevronDown
              size={30}
              className="animate-bounce animate-duration-[2000ms] animate-fill-forwards animate-infinite lg:h-10 lg:w-10 "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
