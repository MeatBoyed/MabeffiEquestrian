import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function ServicesCarousel({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper z-0 xl:w-[70%]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide show image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
