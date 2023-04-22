import React, { useRef, useState } from "react";

import { CarCard } from './index'
import { SiAudi, SiHonda, SiMazda, SiNissan, SiToyota } from 'react-icons/si';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carsData } from "../data/carsData";

export const Cars = () => {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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

            <Carousel 
              responsive={responsive}
              containerClass="carousel-container"
              >
              {
                carsData.map(car => (
                  <CarCard key={car.id} car={car}/> 
                  ))
                  
              }
            </Carousel>
        </div>
  )
}
