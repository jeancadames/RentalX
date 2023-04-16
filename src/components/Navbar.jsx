import {GiHamburgerMenu} from 'react-icons/gi';

export const Navbar = () => {
  return (
    <nav className="navbar-container">
        <h1>RentalX</h1>
        <ul>
          <li><a href="#">Rent</a></li>
          <li><a href="#">Share</a></li>
          <li><a href="#">Ride</a></li>
          <li><a href="#">Service</a></li>
        </ul>
        <ul>
          <li><a href="#">Sign up</a></li>
          <li className="cta"><a href="#">Sign in</a></li>
        </ul>
        <GiHamburgerMenu className='menu'/>
    </nav>
  )
}
