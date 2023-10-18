import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar-container">
        <h1><Link to={'/'}>RentalX</Link></h1>
        {/* <ul>
          <li><Link to={'/rent'}>Rent</Link></li>
          <li><Link>Share</Link></li>
          <li><Link>Ride</Link></li>
          <li><Link>Service</Link></li>
        </ul> */}
        <ul>
          <li><Link>Sign up</Link></li>
          <li className="cta"><Link>Sign in</Link></li>
        </ul>
        <GiHamburgerMenu className='menu'/>
    </nav>
  )
}
