import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import josephPhoto from '../assets/images/agents/Joseph.jpg';
import sashaPhoto from '../assets/images/agents/Sasha.jpg';
import hawanaPhoto from '../assets/images/agents/Hawana.jpg';
import arielPhoto from '../assets/images/agents/Ariel.jpg';
import shirleyPhoto from '../assets/images/agents/Shirley.jpg';
import fremontPhoto from '../assets/images/agents/Fremont.jpg';

const About = () => {

  const [bodyOpacity, setBodyOpacity] = useState(1);

  const [show, setShow] = useState(false);
  
  const handleClose = () => {
    setShow(false);
    setBodyOpacity(1);
  };

  const handleShow = () => {
    setShow(true);
    setBodyOpacity(0.5);
  };  

  return (
    <div style={{opacity: bodyOpacity}} className="agentsWrapper">

        <div className="card" onClick={handleShow}>
          <img src={josephPhoto} alt="Joe Blackburn"></img>
          <h3>Joseph Blackburn</h3>
          <h5>Co-Owner</h5>
          <h5>Broker/Agent</h5>
        </div>
      <Modal backdrop={false} size='xl' centered show={show} onHide={handleClose}>
        <Modal.Header>
          <img className="thumbnail" src={josephPhoto} alt="Joe Blackburn"></img>
          <Modal.Title><h1>Joseph Blackburn</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4 style={{paddingBottom: '2rem'}} >Real Estate Liscense obtained in 1983</h4>

            <h4>Education:</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <h4>Careers:</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <h4>Community:</h4>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            {/* <table className="agentsTable">
              <tr style={{paddingBottom: '2rem'}}>
                <th><h4>Education:</h4></th>
                <td>
                  <p>University of Hawaii - Masters Degree in Higher Education</p>
                </td>
                <td>
                  <p>California State University - Bachelor Degree in Business Administration</p>
                </td>
                <td>
                  <p>Western Oregon State College - Bachelor Degree in Public Fire Administration</p>
                </td>
              </tr>
              <tr>
                <th><h4>Careers:</h4></th>
                <td>
                  <p>Maui Police Officer</p>
                </td>
                <td>
                  <p>Maui Fire Fighter - Fire Rescue Captain</p>
                </td>
                <td>
                  <p>Maui Electric Company Supervisor</p>
                </td>
              </tr>
              <tr>
                <th><h4>Community:</h4></th>
                <td>
                  <p>Co-chairperson of Maui Local Emergency Planning Committee</p>
                </td>
                <td>
                  <p>Basketball Coach - Recreational Youth Leagues</p>
                </td>
              </tr>
            </table> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
        <div className="card">
          <img src={shirleyPhoto} alt="Shirley Blackburn"></img>
          <h3>Shirley Blackburn</h3>
          <h5>Co-Owner</h5>
        </div>
        {/* <div className="card card-back">
          <h3>Back</h3>
        </div> */}

        <div className="card">
          <img id="arielImg" src={arielPhoto} alt="Ariel Blackburn"></img>
          <h3>Ariel Blackburn-Rhoades</h3>
          <h5>Agent</h5>
        </div>
        {/* <div className="card card-back">
          <h3>Back</h3>
        </div> */}

        <div className="card">
          <img src={sashaPhoto} alt="Sasha Haukoloa"></img>
          <h3>Sasha Haukoloa</h3>
          <h5>Agent</h5>
        </div>
        {/* <div className="card card-back">
          <h3>Back</h3>
        </div> */}

        <div className="card">
          <img src={hawanaPhoto} alt="Hawana Blackburn"></img>
          <h3>Hawana Blackburn</h3>
          <h5>Agent</h5>
        </div>
        {/* <div className="card card-back">
          <h3>Back</h3>
        </div> */}

        <div className="card">
          <img src={fremontPhoto} alt="Fremont Dog"></img>
          <h3>Fremont</h3>
          <h5>Security Guard</h5>
        </div>
        {/* <div className="card card-back">
          <h3>Back</h3>
        </div> */}


    </div>
  )
}

export default About;