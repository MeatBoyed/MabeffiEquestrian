import Typography from "@/typography";
import Branding from "./Branding";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import en from "@/lib/en";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-8 pt-10 border-t border-foreground  ">
      <div className="w-full max-w-screen-2xl mx-auto md:px-14 lg:px-28">
        <FooterContent />
      </div>
      <Branding />
    </footer>
  );
}

export function FooterContent() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 md:gap-16">
      <div className="flex w-full items-start justify-between md:items-center">
        <Link href="#banner">
          <Typography variant={"h3"} className="text-start">
            Mabeffi <br className="md:hidden" /> Equestrian
          </Typography>
        </Link>

        {/* <!-- Links --> */}
        <div className="flex flex-col items-start justify-center gap-2 md:flex-row md:items-center md:gap-5">
          {en.navbar.links.map((link) => (
            <Link href={link.path} key={link.text}>
              <Typography variant="p" className="font-medium">
                {link.text}
              </Typography>
            </Link>
          ))}
        </div>
      </div>

      {/* <!-- Social Media --> */}
      <div className="flex items-center justify-center gap-5 md:justify-center md:gap-10">
        <Link href={siteConfig.links.instagram}>
          <FaInstagram className="h-7 w-7" />
        </Link>
        <Link href={siteConfig.links.whatsapp}>
          <FaWhatsapp className="h-7 w-7" />
        </Link>
        <Link href={siteConfig.links.facebook}>
          <FaFacebook className="h-7 w-7" />
        </Link>
      </div>
    </div>
  );
}
