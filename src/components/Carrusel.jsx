import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Keyboard, Autoplay } from 'swiper/modules'

export const Carrousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          769: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          1300: {
            slidesPerView: 2,
            slidesPerGroup: 1
          }
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img1.jpg" className="xl:h-[400px] 2xl:h-[500px] w-[500px] rounded-lg " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img2.jpg" className="xl:h-[400px] 2xl:h-[500px] w-[500px] rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img3.jpg" className="xl:h-[400px] 2xl:h-[500px] w-[500px] rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
