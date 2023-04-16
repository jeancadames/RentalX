import {FaChevronRight} from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
        <footer className="footer-container">
            <div className="products">
                <h3>Our products</h3>
                <ul>
                    <li>Career</li>
                    <li>Hotels</li>
                    <li>Cars</li>
                    <li>Packages</li>
                    <li>Features</li>
                    <li>Priceline</li>
                </ul>
            </div>
            <div className="about">
                <h3>About RentalX</h3> 
                <ul>
                    <li>Why RentalX</li>
                    <li>Our story</li>
                    <li>Investor Rleations</li>
                    <li>Press Center</li>
                    <li>Advertise</li>
                </ul>
            </div>
            <div className="resources">
                <h3>Resources</h3>
                <ul>
                    <li>Download</li>
                    <li>Help Center</li>
                    <li>Guides</li>
                    <li>Partner network</li>
                    <li>Developers</li>
                    <li>Mechanics</li>
                    <li>Cruises</li>
                </ul>
            </div>
            <div className="extras">
                <h3>Extras</h3>
                <ul>
                    <li>Rental deal</li>
                    <li>Repair shop</li>
                    <li>View booking</li>
                    <li>Hire Companies</li>
                    <li>New Offers</li>
                </ul>
            </div>
            <div className="newsletter">
                <h3>Newsletter</h3>
                <form>
                    <input type="mail" placeholder="Email address" />
                    <span className='send-btn'><FaChevronRight/></span>
                </form>
            </div>
        </footer>
    </>
  )
}
