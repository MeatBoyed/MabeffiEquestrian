import Link from "next/link";
import { Button } from "./button";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({ link, text } : {link:string, text:string}) {
    return (

              <Button type="button" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <FaWhatsapp className="mr-3 h-5 w-5" />
                  <span>{text}</span>
                </Link>
              </Button>
    )
}