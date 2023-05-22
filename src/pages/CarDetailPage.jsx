import {FilterSearch} from '../components/index'

export const CarDetailPage = ({car}) => {
  
  const {brand, year, price, kilometers, transmission, fuel, model, id, image} = car;
  
  return (  
    <div className="car-detail-container">
        <img src={`../src/assets/${model}.png`} alt={`${model}`} />
      <div className="car-info-container">
        <h1>{model} {year}</h1>
        <p className="brand-text">{brand}</p>
        <p>
          A car is a motor vehicle designed for transporting passengers or goods on roads. It typically has four wheels, an engine, and various systems that enable it to operate. Cars are used for personal transportation, offering a convenient and efficient means of travel. They have a chassis and body structure, an engine for propulsion, and features like seats, steering systems, and brakes for control and safety. Modern cars incorporate advanced technologies and come in various sizes, styles, and designs to cater to different needs and preferences. Cars have become an essential part of modern society, providing personal mobility and contributing to transportation systems' development.
        </p>
        <FilterSearch/>
      </div>
    </div>
  )
}
