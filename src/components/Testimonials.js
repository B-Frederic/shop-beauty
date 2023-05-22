// React
import React from "react";
// React swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Picture
import { TestimonialsHero } from "../assets";
// Data
import { TestimonialsData } from "../data/testimonials_data";

const Testimonials = () => {
  return (
    <div className="container-testimonials">
      <div className="container-testimonials__wrapper">
        <div className="container-testimonials__wrapper--rating">
          <p>Les mieux notés</p>
          <p>
            Commentaires des personnes satisfaites par nos produits. <br /> Des
            rapports qualité/prix indétrônable.
          </p>
        </div>
        <img className="container-testimonials__wrapper--image" src={TestimonialsHero} alt="femme avec chapeau" />
        <div className="container-testimonials__wrapper--customer">
          <p>150k</p>
          <p>Des personnes satisfaites avec nous</p>
        </div>
      </div>
      <div className="container-testimonials__reviews">Commentaires</div>
      <div className="container-testimonials__carousel">
        <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          1023: {
            slidesPerView: 3
          },
          640: {
            slidesPerView : 2
          },
          0: {
            slidesPerView : 1
          }
        }}
        slidesPerView={3} slidesPerGroup={1} spaceBetween={20}>
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="container-testimonials__carousel--card">
                <p>{testimonial.comment}</p>
                <hr />
                <p>{testimonial.name}</p>
                <img
                  src={testimonial.image}
                  alt={`commentaire de ${testimonial.name}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
