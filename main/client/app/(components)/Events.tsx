import Event from "@/components/Event";
import SlideShow from "@/components/SlideShow";
import Typography from "@/components/ui/Typography";
import { events } from "@/lib/ClientData";

export default function Events() {
  return (
    <section id="Events" className="flex w-full flex-col items-center justify-center gap-16">
      <Typography variant={"h1"} className="text-center">
        Riding Events
      </Typography>

      <SlideShow
        delay={8000}
        elements={events.map((event, index) => (
          <Event Event={event} key={index} />
        ))}
      />
    </section>
  );
}
