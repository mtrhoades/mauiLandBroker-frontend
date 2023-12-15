import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RentWithUs = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  return (
    <div className="rentWithUsContainer">
      <h2>Rentals Information</h2>

      <h3>Why Rent with Us?</h3>

      <ul>
        <li>
          <FontAwesomeIcon className='littleIcons' icon={faCommentsDollar}></FontAwesomeIcon>
          Maui Land Broker offers the most reasonable Property Management Fees on Maui. If you are considering our Property Management Services for a rental in one of the associations we manage, we have the HOA knowledge and competitively low fees.
        </li>
        <li>
          <FontAwesomeIcon className='littleIcons' icon={faEnvelopeOpenText}></FontAwesomeIcon>
          If you are interested in learning more information about our Property Management Services for one of your rentals on Maui, please contact us at <a style={{color: 'blue', cursor: 'pointer'}} onClick={handleShow}>sales@MauiLandBroker.com</a></li>
      </ul>

      <div>
        <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>sales@mauilandbroker.com</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="contactForm" action="https://formsubmit.co/f0f5b23cef96474d88d43949d35dc782" method="POST">
                <label htmlFor="name">Name:</label>
                <input autoFocus type="text" id="name" name="name" required></input>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" required></input>

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject"></input>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required/>
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
  )
}
;
export default RentWithUs;