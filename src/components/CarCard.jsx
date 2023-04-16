import {SlSpeedometer} from 'react-icons/sl'
import {TbManualGearbox, TbGasStation} from 'react-icons/tb'
export const CarCard = () => {
  return (
    <div className="car-card">
        <div className="image-container">
            <img src="src\assets\honda pilot.png" alt="" />
        </div>
        <div className="car-details">
        <span className="year">
            2020
        </span>
        <h5 className="model">2020 Honda Pilot</h5>
        <div className="prices">
            <span className='total-price'>$38,500.00 </span> | <span className='quote-price'> $322.00/month</span></div>
        <div className="details">
            <span><SlSpeedometer/>20k</span>
            <span><TbManualGearbox/>Auto</span>
            <span><TbGasStation/>Diesel</span>
        </div>    
        </div>
        <div className="btn-buy">
            Rent Now
        </div>
    </div>
  )
}
