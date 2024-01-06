import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import backOfHouse from '../assets/images/house/backHouse.jpg';
import frontOfHouse from '../assets/images/house/frontHouse.jpg';
import poolHouse from '../assets/images/house/poolHouse.jpg';
import kitchenHouse from '../assets/images/house/kitchenHouse.jpg';
import insideTableHouse from '../assets/images/house/insidetableHouse.jpg';
import insideHOuse from '../assets/images/house/insideHouse.jpg';
import pool2House from '../assets/images/house/pool2House.jpg';


const Hero = () => {

  return (
    <div className='hero'>

      <div className='hero-top-section'>
        <Carousel fade >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={backOfHouse}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={poolHouse}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={frontOfHouse}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={insideHOuse}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pool2House}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={kitchenHouse}
              alt="Sixth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={insideTableHouse}
              alt="Seventh slide"
            />
          </Carousel.Item>

        </Carousel>
      </div>

      <div className="heroHeaders">
        <h1>A Full-Service Real Estate Sales & Management Company</h1>
      </div>      

      <div className='hero-bottom-section'>

        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Button href="/searchresults" className="searchButton" variant="primary">Check Out Maui Property Listings Now!</Button>

        <div className="arrow2">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </div>
  )
}

export default Hero;