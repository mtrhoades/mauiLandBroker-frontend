import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Cards from '../components/Cards';
import Button from 'react-bootstrap/Button';
import maluhiaPic from '../assets/images/maluhiaPic.jpeg';
import maluhiaPic2 from '../assets/images/maluhiaPic2.jpeg';
import maluhiaPic3 from '../assets/images/maluhiaPic3.jpeg';
import maluhiaPic4 from '../assets/images/maluhiaPic4.jpeg';
import maluhiaPic5 from '../assets/images/maluhiaPic5.jpeg';

const Hero = () => {

  return (
    <div className='hero'>

      <div className='hero-top-section'>
        <Carousel fade >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic4}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={maluhiaPic5}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="heroHeaders">
        <h1>A Full-Service Real Estate Sales & Management Company</h1>
        <h2>Find Your Ohana's Paradise Today!</h2>
      </div>

      <div className='hero-bottom-section'>
        <Form className="searchForm">
          <div className="firstHalfSearchForm" style={{display: 'flex'}}>
            <Form.Control
              type="text"
              placeholder="MLS Number"
              className="me-2"
              aria-label="MLS #"
              />
            <Form.Select className="me-2">
              <option value="Residential">Residential</option>
              <option value="Condiminium">Condiminium</option>
              <option value="Vacant Land">Vacant Land</option>
            </Form.Select>
            <Form.Select className="me-2">
              <option value="District">District</option>
              <option value="Haiku">Haiku</option>
              <option value="Hana">Hana</option>
              <option value="Honokohau">Honokohau</option>
              <option value="Kaanapali">Kaanapali</option>
              <option value="Kahakuloa">Kahakuloa</option>
              <option value="Kahului">Kahului</option>
              <option value="Kapalua">Kapalua</option>
              <option value="Kaupo">Kaupo</option>
              <option value="Keane">Keane</option>
              <option value="Kihei">Kehei</option>
              <option value="Kipahulu">Kipahulu</option>
              <option value="Kula">Kula</option>
              <option value="Lahaina">Lahaina</option>
              <option value="Lanai">Lanai</option>
              <option value="Maalaea">Maalaea</option>
              <option value="Makawao">Makawao</option>
              <option value="Maui Meadows">Maui Meadows</option>
              <option value="Molokai">Molokai</option>
              <option value="Nahiku">Nahiku</option>
              <option value="Napili">Napili</option>
              <option value="Olowalu">Olowalu</option>
              <option value="Pukalani">Pukalani</option>
              <option value="Paia">Paia</option>
              <option value="Wailea">Wailea</option>
              <option value="Wailuku">Wailuku</option>
            </Form.Select>
            <Form.Select className="me-2">
              <option value="Min Price">Min Price</option>
              <option value="$50,000">$50,000</option>
              <option value="$100,000">$100,000</option>
              <option value="$150,000">$150,000</option>
              <option value="$200,000">$200,000</option>
              <option value="$250,000">$250,000</option>
              <option value="$300,000">$300,000</option>
              <option value="$350,000">$350,000</option>
              <option value="$400,000">$400,000</option>
              <option value="$450,000">$450,000</option>
              <option value="$500,000">$500,000</option>
              <option value="$600,000">$600,000</option>
              <option value="$700,000">$700,000</option>
              <option value="$800,000">$800,000</option>
              <option value="$900,000">$900,000</option>
              <option value="$1,000,000">$1,000,000</option>
              <option value="$1,250,000">$1,250,000</option>
              <option value="$1,500,000">$1,500,000</option>
              <option value="$1,750,000">$1,750,000</option>
              <option value="$2,000,000">$2,000,000</option>
              <option value="$2,500,000">$2,500,000</option>
              <option value="$3,000,000">$3,000,000</option>
              <option value="$4,000,000">$4,000,000</option>
              <option value="$5,000,000">$5,000,000</option>
            </Form.Select>
          </div>
          <div className="secondHalfSearchForm" style={{display: 'flex'}}>
            <Form.Select className="me-2">
              <option value="Max Price">Max Price</option>
              <option value="$50,000">$50,000</option>
              <option value="$100,000">$100,000</option>
              <option value="$150,000">$150,000</option>
              <option value="$200,000">$200,000</option>
              <option value="$250,000">$250,000</option>
              <option value="$300,000">$300,000</option>
              <option value="$350,000">$350,000</option>
              <option value="$400,000">$400,000</option>
              <option value="$450,000">$450,000</option>
              <option value="$500,000">$500,000</option>
              <option value="$600,000">$600,000</option>
              <option value="$700,000">$700,000</option>
              <option value="$800,000">$800,000</option>
              <option value="$900,000">$900,000</option>
              <option value="$1,000,000">$1,000,000</option>
              <option value="$1,250,000">$1,250,000</option>
              <option value="$1,500,000">$1,500,000</option>
              <option value="$1,750,000">$1,750,000</option>
              <option value="$2,000,000">$2,000,000</option>
              <option value="$2,500,000">$2,500,000</option>
              <option value="$3,000,000">$3,000,000</option>
              <option value="$4,000,000">$4,000,000</option>
              <option value="$5,000,000">$5,000,000</option>
            </Form.Select>
            <Form.Select className="me-2">
              <option value="Beds">Beds</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
            <Form.Select className="me-2">
              <option value="Baths">Baths</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
            <Button className="searchButton" href="/searchresults" variant="success">Search</Button>
          </div>
        </Form>
      </div>

      <Cards />
        
    </div>
  )
}

export default Hero;