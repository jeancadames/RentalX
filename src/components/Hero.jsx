import OrangeJeep from '../assets/orange jeep.png'

export const Hero = () => {
  return (
    <>
    <div className="hero-container">
        <div className="left-side">
            <h1>Looking to save more on your rental car?</h1>
            <div className="hr-line"></div>
            <p>RentalX is where you can discover a wide selection of car rental options in the USA. Whether you're looking for a compact car, a spacious SUV, or any other type of vehicle, we offer a range of choices to suit your needs. Additionally, we provide local specials that can enhance your rental experience. Explore the website to find the perfect car rental for your travel needs in the USA.</p>
        </div>
        <div className="right-side">
            <img src={OrangeJeep} alt="orange jeep" />
        </div>
    </div>
    </>
  )
}
