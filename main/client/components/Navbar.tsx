import React from "react";
import Typography from "@/components/ui/Typography";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";
import en from "@/lib/en";

const Navbar: React.FC = () => {
  return (
    <nav
      id="Navbar"
      className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-slate-300 bg-background p-4 max-w-screen-2xl mx-auto md:px-14 lg:px-28"
    >
      <Link href="/#banner">
        <Typography variant="h3" className="">
          Mabeffi Equestrian
        </Typography>
      </Link>

      <div className="hidden items-center justify-center gap-3 md:flex lg:gap-5">
        {en.navbar.links.map((link) => (
          <Link href={link.path} key={link.text}>
            <Typography variant="p" className="font-medium">
              {link.text}
            </Typography>
          </Link>
        ))}
      </div>

      <Button className="hidden md:block">
        <Link href={siteConfig.links.whatsapp}> Contact</Link>
      </Button>

      <DropDown />
    </nav>
  );
};

export default Navbar;

function DropDown() {
  return (
    <div className="group relative inline-block md:hidden">
      <Menu />
      <div className="absolute right-0 hidden rounded-md border border-popover bg-popover p-4 text-popover-foreground shadow-md group-hover:block">
        {en.navbar.links.map((link) => (
          <Link className="my-2 w-full bg-popover" href={link.path} key={link.text}>
            <Typography variant="p" affects={"large"} className="font-semibold text-popover-foreground">
              {link.text}
            </Typography>
          </Link>
        ))}
        <Link className="my-2 w-full bg-popover" href="#Testimonials">
          <Typography variant="p" affects={"large"} className="font-semibold text-popover-foreground">
            Contact
          </Typography>
        </Link>
      </div>
    </div>
  );
}
