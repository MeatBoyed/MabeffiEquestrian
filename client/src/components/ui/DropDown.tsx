import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Typography from "./Typography"

export default function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[50%]">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="/#AboutMe">
            <Typography variant={"p"} affects={"large"}>
              About Me
            </Typography>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Typography variant={"p"} affects={"large"}>
            <a href="/#/AboutMe">Services</a>
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/#AboutMe">
            <Typography variant={"p"} affects={"large"}>
              Horse
            </Typography>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/#AboutMe">
            <Typography variant={"p"} affects={"large"}>
              Reviews
            </Typography>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/#AboutMe">
            <Typography variant={"p"} affects={"large"}>
              Contact
            </Typography>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
