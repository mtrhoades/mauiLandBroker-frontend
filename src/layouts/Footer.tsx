import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { SiFacebook } from 'react-icons/si';
import { FiInstagram } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const NewFooter = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

  return (
    <div className='footer'>
        <Container fluid style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Row className='text-center text-md-start footerRow' style={{display: 'flex', justifyContent: 'center'}}>
            <Col lg={3} md={8} sm={12} className='mb-3'>
                <ListGroup>
                    <ListGroup.Item className='logo'><h4>Maui Land Broker & Property Management</h4></ListGroup.Item>
                    <ListGroup.Item>We here at MLB strive to keep the culture of Maui alive and well. Our roots run deep here and we want nothing more than to preserve the communities of Maui that have been here since the beginning.</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col lg='auto' md='auto' sm='auto' className='mb-3 iconsCol px-5'>
                <div>
                    <a href='https://www.facebook.com/MauiLandBroker/' rel="noreferrer" target="_blank">
                        <div className='social-icon facebookIcon'>
                            <SiFacebook/>
                        </div>
                    </a>
                    <a href='https://www.instagram.com/maui.landbroker/' rel="noreferrer" target="_blank"> 
                        <div className='social-icon instagramIcon'>
                            <FiInstagram/>
                        </div>
                    </a>
                </div>
                <div>
                    <div style={{paddingBottom: '10px'}} className="phoneSection">
                        <a href="tel:8084423036">
                            <div className='social-icon phoneIcon'>
                                <MdOutlinePhoneIphone/>
                            </div>
                        </a>
                        <a href="tel:8084423036">
                            <h4>(808)442-3036</h4>
                        </a>
                    </div>
                    <div className="email">
                        <button onClick={handleShow}>
                            <div style={{paddingRight: '10px'}} className="social-icon">
                                <MdOutlineEmail />
                            </div>
                        </button>
                        <h4 onClick={handleShow}>Message Us!</h4>
                        <div>
                            <Modal centered show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>sales@mauilandbroker.com</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form className="contactForm">
                                <label htmlFor="name">Name:</label>
                                <input autoFocus type="text" id="name" name="name"></input>

                                <label htmlFor="subject">Subject:</label>
                                <input type="text" id="subject" name="subject"></input>

                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message"/>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>
                                Send Message
                                </Button>
                            </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg='auto' md='auto' sm='auto' className='mb-3 px-5'>
                <div className="location">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.5656252104063!2d-156.50498312480417!3d20.889551380725173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954d36a70467cfb%3A0xf60fb39b11c5c07a!2sMaui%20Land%20Broker%20And%20Property%20Management%20Inc!5e0!3m2!1sen!2sus!4v1689807358563!5m2!1sen!2sus" width="420" height="200" loading="lazy"></iframe>
                    <h4><MdOutlineLocationOn /> 104 N. Market St. Wailuku, HI 96793</h4>
                </div>
            </Col>
        </Row>
        <p className='copyright text-center text-md-start'>© 2023 | Maui Land Broker All Rights Reserved</p>
        </Container>
    </div>
  )
}

export default NewFooter;