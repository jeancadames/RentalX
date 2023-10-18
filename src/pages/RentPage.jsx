import { CarCard } from "../components"
import { carsData } from "../data/carsData"

export const RentPage = () => {
  return (
    <div className="wrapper">
        <h1>Rent the car that fits with you</h1>
        <div className="rent-container">
            <div className="cars-side-filter">
                <ul>
                    <li><input type="checkbox"/><label>Honda</label></li>
                    <li><input type="checkbox"/><label>Toyota</label></li>
                    <li><input type="checkbox"/><label>Audi</label></li>
                    <li><input type="checkbox"/><label>Nissan</label></li>
                    <li><input type="checkbox"/><label>Mazda</label></li>
                </ul>
            </div>
            <div className="cars-displayer">
                {
                    carsData.map(car => (
                        <CarCard car={car}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
