import Carousel from 'react-multi-carousel';
import {CarCard, Features } from '../components/index'
import { carsData } from '../data/carsData';
import { SlSpeedometer } from 'react-icons/sl';
import { TbGasStation, TbManualGearbox } from 'react-icons/tb';

export const CarDetailPage = ({car}) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;

  const {brand, year, price, kilometers, transmission, fuel, model, id, image} = car;
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
    <div className="car-detail-container-container">
    <h1>{model} - {year} {transmission} {fuel} with {kilometers}</h1>
    <div className="car-detail-container">
      <img src={`../src/assets/${model}.png`} alt={`${model}`} />
      <div className="car-info-container">
        <h1>{model} {year}</h1>
        <p className="brand-text">{brand}</p>
        <p>
          A car is a motor vehicle designed for transporting passengers or goods on roads. It typically has four wheels, an engine, and various systems that enable it to operate. Cars are used for personal transportation, offering a convenient and efficient means of travel. They have a chassis and body structure, an engine for propulsion, and features like seats, steering systems, and brakes for control and safety. Modern cars incorporate advanced technologies and come in various sizes, styles, and designs to cater to different needs and preferences. Cars have become an essential part of modern society, providing personal mobility and contributing to transportation systems' development.
        </p>
        {/* <FilterSearch/> */}
      <div className="details">
            <span><SlSpeedometer/>{kilometers}</span>
            <span><TbManualGearbox/>{transmission}</span>
            <span><TbGasStation/>{fuel}</span>
            <span className='total-price'>Price: ${price.toLocaleString()}</span>
            <button className="cta">Rent now</button>
      </div>
      </div>
    </div>
    <h2>Don't know yet? We have more options for you</h2>
    <Carousel 
              responsive={responsive}
              containerClass="carousel-container"
              swipeable={true}
              draggable={true}
              autoPlaySpeed={1000}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
              {
                carsData.filter(car => car.brand !== brand).map(car => (
                  <CarCard key={car.id} car={car}/> 
                  ))
                  
                }
    </Carousel>
    <Features/>
    </div>
  )
}
