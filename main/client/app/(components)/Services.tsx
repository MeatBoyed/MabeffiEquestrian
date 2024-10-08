import ServiceCard from "@/components/ServiceCard";
import Typography from "@/components/ui/Typography";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { servicesOffer } from "@/lib/ClientData";
import en from "@/lib/en";
import { siteConfig } from "@/lib/siteConfig";

export default function Services() {
  return (
    <section id="Services" className="flex w-full flex-col items-center justify-center gap-14">
      <div className="w-full border-b border-foreground"></div>
      {/* <!-- Heading --> */}
      <div className="flex flex-col items-center justify-center gap-3">
        <Typography variant={"h1"} className="">
          {en.services.title}
        </Typography>
        <Typography variant={"p"} className="text-center" affects={"removePMargin"}>
          {en.services.subtitle}
          {/* By enrolling your child in my horse riding lessons, you are giving them
      the opportunity to not only learn a lifelong skill but also develop
      essential life qualities such as discipline, patience, and perseverance. */}
        </Typography>
      </div>

      {/* <!-- Services --> */}
      <div className="grid grid-cols-1 items-center justify-center gap-10 md:items-start xl:grid-cols-3 ">
        {/* <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-start"> */}
        {/* <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:items-start"> */}
        <ServiceCard service={servicesOffer[0]} />
        <ServiceCard service={servicesOffer[1]} primary />
        {/* </div> */}

        <ServiceCard service={servicesOffer[2]} />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <WhatsAppButton link={siteConfig.links.whatsapp} text={en.services.button} />
        <Typography variant={"p"} affects={"removePMargin"}>
          {en.services.buttonText}
        </Typography>
      </div>

      <div className="w-full border-b border-foreground"></div>
    </section>
  );
}
