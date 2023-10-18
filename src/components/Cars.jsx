import { useRef, useState } from "react";

import { CarCard } from './index'
import { SiAudi, SiHonda, SiMazda, SiNissan, SiToyota, } from 'react-icons/si';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carsData } from "../data/carsData";
import { brandData } from "../data/brandData";

export const Cars = () => {

  const [activeBrand, setActiveBrand] = useState({
    selectedBrand: null,
    brands: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
  });
  const [filter, setFilter] = useState('Honda');

  function toggleActive(index, brand){
    setFilter(brand);
    setActiveBrand({...activeBrand, selectedBrand: activeBrand.brands[index]})
  }

  function toggleActiveClass(index){
    if (activeBrand.brands[index] === activeBrand.selectedBrand) return 'active';
  }
  
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
              {
                brandData.map((brand, index) => (
                  <div key={brand.id} onClick={() => toggleActive(index, brand.brand)} className={`dealer-opt ${toggleActiveClass(index)}`}>{brand.brand}</div>
                ))
              }
                {/* <div onClick={setBrandActive} className={`dealer-opt ${active ? 'active' : ''}`}><SiHonda className='dealer-icon'/>Honda</div>
                <div onClick={setBrandActive} className={`dealer-opt ${active ? 'active' : ''}`}><SiAudi className='dealer-icon'/>Audi</div>
                <div onClick={setBrandActive} className={`dealer-opt ${active ? 'active' : ''}`}><SiNissan className='dealer-icon'/>Nissan</div>
                <div onClick={setBrandActive} className={`dealer-opt ${active ? 'active' : ''}`}><SiMazda className='dealer-icon'/>Mazda</div>
                <div onClick={setBrandActive} className={`dealer-opt ${active ? 'active' : ''}`}><SiToyota className='dealer-icon'/>Toyota</div>
                <div onClick={setBrandActive} className={`dealer-opt ${active ? 'active' : ''}`}>Explore 20+</div> */}
            </div>

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
                carsData.filter(car => car.brand === filter).map(car => (
                  <CarCard key={car.id} car={car}/> 
                  ))
                  
              }
            </Carousel>
        </div>
  )
}
