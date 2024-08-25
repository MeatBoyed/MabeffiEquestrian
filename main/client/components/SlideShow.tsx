"use client";
import { useMemo } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselControls } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function SlideShow({
  delay,
  images,
  sizing,
  elements,
}: {
  delay?: number;
  images?: string[];
  sizing?: string;
  elements?: React.ReactElement[];
}) {
  const items = useMemo(() => {
    return (
      images?.map((image, index) => (
        <CarouselItem key={index}>
          <div className="w-full h-full md:hidden">
            <Image src={image} alt="Image" width={500} height={400} className="rounded-lg object-contain" />
          </div>
          <div className="hidden md:block">
            <AspectRatio ratio={3 / 3} className="w-full">
              <Image src={image} alt="Image" fill className="w-full rounded-lg object-contain" />
            </AspectRatio>
          </div>
        </CarouselItem>
      )) ||
      elements?.map((element, index) => (
        <CarouselItem className={sizing} key={index}>
          <div className="w-full h-full flex justify-center items-center">{element}</div>
        </CarouselItem>
      ))
    );
  }, [images, elements, sizing]);
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: delay || 4000,
        }),
      ]}
    >
      <CarouselContent>{items}</CarouselContent>
      {!elements && <CarouselControls />}
      {elements && (
        <div className="flex justify-center w-full mt-5 items-center gap-4">
          <CarouselPrevious variant={"secondary"} />
          <CarouselNext variant={"secondary"} />
        </div>
      )}
    </Carousel>
  );
}
