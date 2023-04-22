import {SlSpeedometer} from 'react-icons/sl'
import {TbManualGearbox, TbGasStation} from 'react-icons/tb'

export const CarCard = ({car}) => {

    const {brand, year, price, kilometers, transmission, fuel, model, id} = car;

  return (
    <div className="car-card">
        <div className="image-container">
            <img src={`src/assets/${model}.png`} alt={`${model}`} />
        </div>
        <div className="car-details">
        <span className="year">
            {year}
        </span>
        <h5 className="model">{year} {model}</h5>
        <div className="prices">
            <span className='total-price'>${price.toLocaleString()} </span> | <span className='quote-price'> ${Math.floor(price / 12)}/month</span></div>
        <div className="details">
            <span><SlSpeedometer/>{kilometers}</span>
            <span><TbManualGearbox/>{transmission}</span>
            <span><TbGasStation/>{fuel}</span>
        </div>    
        </div>
        <div className="btn-buy">
            Rent Now
        </div>
    </div>
  )
}
