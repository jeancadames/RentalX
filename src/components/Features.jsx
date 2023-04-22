import CarTopView from '../assets/chevy cruze top view.png'

import {ImPriceTags} from 'react-icons/im'
import {RiMedalFill} from 'react-icons/ri'
import {FaCarCrash} from 'react-icons/fa'
import {MdSupportAgent, MdOutlineElectricBolt} from 'react-icons/md'
import {GiGearStickPattern} from 'react-icons/gi'
import {TbEngine} from 'react-icons/tb'
import {BsThermometerSnow} from 'react-icons/bs'
import {CiCircleMore} from 'react-icons/ci'
import {AiFillDollarCircle, AiFillCreditCard, AiOutlineCheck} from 'react-icons/ai'

export const Features = () => {
  return (
    <div className="features-section">
        <h1>We are ensuring the best <br /> customer experience</h1>
        <h3>You cannot put a price on your family's safety and security <br /> on the road. Find a lower price?</h3>
        <div className="features-container">
            <div className="features-left">
                <div className="feature">
                    <div className="card-reason"><ImPriceTags/></div>
                    <span>Competitive <br /> pricing</span>
                </div>
                <div className="feature">
                    <div className="card-reason"><AiFillDollarCircle/></div>
                    <span>Easier rent <br /> on your budget</span>
                </div>
                <div className="feature">
                    <div className="card-reason"><AiFillCreditCard/></div>
                    <span>most flexible <br /> payment plans</span>
                </div>
            </div>
            <div className="features-image">
                <img src={CarTopView} alt="" />
            </div>
            <div className="features-right">
            <div className="feature">
                    <div className="card-reason"><RiMedalFill/></div>
                    <span>The best extended <br /> auto warranties</span>
                </div>
                <div className="feature">
                    <div className="card-reason"><MdSupportAgent/></div>
                    <span>Roadside <br /> assistance 24/7</span>
                </div>
                <div className="feature">
                    <div className="card-reason"><FaCarCrash/></div>
                    <span>Your choice <br /> of mechanic</span>
                </div>
            </div>
        </div>
        <div className="features-slides">
            <div className="slide-container">
                <div className="slide-card">
                    <TbEngine/>
                </div>
                <span>Engine</span>
                <AiOutlineCheck className='icon-check'/>
            </div>
            <div className="slide-container">
                <div className="slide-card">
                    <GiGearStickPattern/>
                </div>
                <span>Transmission</span>
                <AiOutlineCheck className='icon-check'/>
            </div>
            <div className="slide-container">
                <div className="slide-card">
                    <MdOutlineElectricBolt/>
                </div>
                <span>Electrical</span>
                <AiOutlineCheck className='icon-check'/>
            </div>
            <div className="slide-container">
                <div className="slide-card">
                    <BsThermometerSnow/>
                </div>
                <span>Cooling</span>
                <AiOutlineCheck className='icon-check'/>
            </div>
            <div className="slide-container">
                <div className="slide-card">
                    <CiCircleMore/>
                </div>
                <span>20+ More</span>
                <AiOutlineCheck className='icon-check'/>
            </div>
        </div>
    </div>
  )
}
