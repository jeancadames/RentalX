import {ImPriceTags} from 'react-icons/im'
import {GiWallet} from 'react-icons/gi'
import {MdSettingsSuggest} from 'react-icons/md'

import RangeRover from '../assets/range rover.png'

export const Services = () => {
  return (
    <div className="services-container">
        <img src={RangeRover} alt="" />
        <div className="right-content">
            <h3>Best services</h3>
            <h1>Feel the best experience <br /> with our rental deals</h1>
            <div className="hr-line"></div>
            <div className="reasons-container">
                <div className="reason">
                    <div className="card-reason">
                        <ImPriceTags/>
                    </div>
                    <div className="reason-info">
                        <h5>Deals for every budget</h5>
                        <span>Incredible prices on hotels, flights, cars and packages worldwide.</span>
                    </div>
                </div>
                <div className="reason">
                    <div className="card-reason">
                        <GiWallet/>
                    </div>
                    <div className="reason-info">
                        <h5>Best price guaranteed</h5>
                        <span>Find a lower price? We'll refund you 100% of the difference</span>
                    </div>
                </div>
                <div className="reason">
                    <div className="card-reason">
                        <MdSettingsSuggest/>
                    </div>
                    <div className="reason-info">
                        <h5>Support 24/7</h5>
                        <span>We are there for you any time at anywhere, we solve any issue as quick as possible</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
