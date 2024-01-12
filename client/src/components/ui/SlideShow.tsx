import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function ServicesCarousel({
  images,
  navigation,
}: {
  images: string[]
  navigation?: boolean
}) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={navigation}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
