import OrangeJeep from '../assets/orange jeep.png'
import { FilterSearch } from './index'

export const Hero = () => {
  return (
    <>
    <div className="hero-container">
        <div className="left-side">
            <h1>Looking to save more on your rental car?</h1>
            <div className="hr-line"></div>
            <p>Discover RentalX car rental options in USA with Rent a Car Selection from a range of cars options and local specials.</p>
            <FilterSearch/>
        </div>
        <div className="right-side">
            <img src={OrangeJeep} alt="orange jeep" />
        </div>
    </div>
    </>
  )
}
