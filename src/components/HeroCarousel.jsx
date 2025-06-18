import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import Hero from "../components/home/Hero";
import HeroAd from "../components/home/Ad1";

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      speed={3000}
      effect={"fade"}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true }}
      modules={[Autoplay, EffectFade, Pagination]}
      className="w-full h-full"
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
      <SwiperSlide>
        <HeroAd />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
