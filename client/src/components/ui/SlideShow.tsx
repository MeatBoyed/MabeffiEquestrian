import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
// import "swiper/css/navigation"

export default function ServicesCarousel({ images }: { images: string[] }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // navigation={navigation}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper z-0 xl:w-[70%]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
