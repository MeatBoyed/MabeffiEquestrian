import Typography from "@/ui/Typography"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/ui/collapsible"
import { useState } from "react"

export default function WhoAmIBodyText() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible onOpenChange={(open) => setIsOpen(open)}>
      <CollapsibleContent className="flex flex-col items-center justify-center gap-1">
        <Typography variant={"p"}>
          With a focus on personalized instruction, I strive to create a
          positive and supportive environment for my students. Whether your
          child is a beginner or an experienced rider, I will tailor each lesson
          to their individual needs and goals.
          <br />
          My teaching philosophy emphasizes safety, technique, and the
          development of a strong bond between rider and horse. I believe that
          horse riding is not just a sport but a way to develop important life
          skills such as discipline, confidence, and empathy.
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
