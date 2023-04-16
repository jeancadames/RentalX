import Brands from '../assets/brands.png'

import { GoBookmark, GoCalendar, GoLocation } from 'react-icons/go'

export const HowWorks = () => {
  return (
    <div className="work-section">
        <div className="brands-container">
            <img src={Brands} alt="brands" />
        </div>
        <div className="info-container">
            <h3>How it works</h3>
            <h1>Rentgo following 3 working Steps</h1>

            <div className="steps-container">
                <div className="step">
                    <div className="card">
                        <GoLocation className='card-icon'/>
                    </div>
                    <h2>Choose a location</h2>
                    <p>See 3 popular hotels at a heavily discounted price</p>
                </div>
                <div className="step">
                    <div className="alt-card">
                        <GoCalendar className='card-icon-alt'/>
                    </div>
                    <h2>Pick up date</h2>
                    <p>Click choose and we'll pick one of the 3 hotels</p>
                </div>
                <div className="step">
                    <div className="card">
                        <GoBookmark className='card-icon'/>
                    </div>
                    <h2>Book your car</h2>
                    <p>See which hotel right after you book!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
