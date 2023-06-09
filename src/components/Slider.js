// React
import React from "react";
// Import swiper and swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
// Data
import { SliderProducts } from "../data/products_data";

const Slider = () => {
  return (
    <div className="container-slider">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          900: {
            slidesPerView : 3,
          },
          640: {
            slidesPerView : 2,
          },
          0: {
            slidesPerView : 1,
          }
        }}
        spaceBetween={40}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container-slider__card">
              <div className="container-slider__card--info">
                <h3>{slide.name}</h3>
                <p>{slide.detail}</p>
              </div>
              <span>{slide.price}€</span>
              <div className="container-slider__card--tag">Top produit</div>
            </div>
            <img src={slide.img} alt={slide.name} className="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
