import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Card } from "./Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperCarousel = ({ cards }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={5}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {cards.map((index) => (
        <SwiperSlide key={index}>
          <Card/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;