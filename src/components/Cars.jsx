import React, { useRef, useState } from "react";

import { CarCard } from './index'
import { SiAudi, SiHonda, SiMazda, SiNissan, SiToyota } from 'react-icons/si';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export const Cars = () => {
  return (
        <div className="cars-selection">
            <h3>Best services</h3>
            <h1>Explore our top deal from <br/> top-rated dealer</h1>
            <div className="dealer-carousel">
                <div className="dealer-opt active"><SiHonda className='dealer-icon'/>Honda</div>
                <div className="dealer-opt"><SiAudi className='dealer-icon'/>Audi</div>
                <div className="dealer-opt"><SiNissan className='dealer-icon'/>Nissan</div>
                <div className="dealer-opt"><SiMazda className='dealer-icon'/>Mazda</div>
                <div className="dealer-opt"><SiToyota className='dealer-icon'/>Toyota</div>
                <div className="dealer-opt">Explore 20+</div>
            </div>
            <Swiper
            slidesPerView={3}
            >
            <SwiperSlide> <CarCard/> </SwiperSlide>
            <SwiperSlide> <CarCard/> </SwiperSlide>
            <SwiperSlide> <CarCard/> </SwiperSlide>
            <SwiperSlide> <CarCard/> </SwiperSlide>
            <SwiperSlide> <CarCard/> </SwiperSlide>
            <SwiperSlide> <CarCard/> </SwiperSlide>
            <SwiperSlide> <CarCard/> </SwiperSlide>
            </Swiper>
        </div>
  )
}
