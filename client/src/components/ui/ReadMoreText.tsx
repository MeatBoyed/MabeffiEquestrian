import Typography from "@/components/ui/Typography"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { useState } from "react"

export default function WhoAmIBodyText({
  part1,
  part2,
  part3,
  together,
}: {
  part1: string
  part2?: string
  part3?: string
  together?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible onOpenChange={(open) => setIsOpen(open)}>
      <CollapsibleContent className="flex flex-col items-start justify-center gap-2">
        <Typography variant={"p"} affects={"removePMargin"}>
          {part1}
        </Typography>
        <Typography variant={"p"} affects={"removePMargin"}>
          {part2}
        </Typography>
        <Typography variant={"p"} affects={"removePMargin"}>
          {part3}
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
