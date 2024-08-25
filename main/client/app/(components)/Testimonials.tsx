import SlideShow from "@/components/SlideShow";
import Testimonial from "@/components/Testimonial";
import Typography from "@/components/ui/Typography";
import { testimonials } from "@/lib/ClientData";

export default function Testimonials() {
  return (
    <section id="Reviews" className="flex flex-col items-center justify-center gap-10">
      <Typography variant={"h1"} className="">
        Testimonials
      </Typography>

      <SlideShow
        delay={10000}
        sizing="md:basis-1/2"
        elements={testimonials.map((testimonial, index) => (
          <Testimonial name={testimonial.name} body={testimonial.body} key={index} />
        ))}
      />
    </section>
  );
}
