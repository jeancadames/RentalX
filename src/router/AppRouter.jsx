import { Routes, Route } from 'react-router-dom'
import { RentaIX } from '../RentaIX'
import { carsData } from '../data/carsData'
import { CarDetailPage, RentPage } from '../pages/index'

export const AppRouter = () => {

  return (
    <Routes>
        <Route path='/' element={<RentaIX/>}/>
        {
        carsData.map((car) => (car && <Route key={car.id} path={`${car.brand}/${car.model}`} element={<CarDetailPage car={car}/>}/>))
        }
        <Route path='/rent' element={<RentPage/>}/>
    </Routes>
  )
}
