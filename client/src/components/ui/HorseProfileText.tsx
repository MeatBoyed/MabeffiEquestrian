import Typography from "@/components/ui/Typography"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { useState } from "react"

export default function HorseProfileText() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible onOpenChange={(open) => setIsOpen(open)}>
      <CollapsibleContent className="flex flex-col items-center justify-center gap-1">
        <Typography variant={"p"}>
          But it's not just about his achievements and physical attributes. Don
          Natello has a charming personality and thrives on attention. He loves
          forming connections with riders and cherishes the time spent together.
          <br />
          Riding with Don Natello is an experience like no other. His presence
          will elevate your riding skills and create unforgettable moments that
          you will cherish for a lifetime.
        </Typography>
      </CollapsibleContent>
      <CollapsibleTrigger style={{ marginTop: !isOpen ? "" : "0.75rem" }}>
        <Typography variant={"p"} affects={"small"}>
          {!isOpen ? "Read More" : "Show Less"}
        </Typography>
      </CollapsibleTrigger>
    </Collapsible>
  )
}
