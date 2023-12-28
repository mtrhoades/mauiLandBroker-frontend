import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import josephPhoto from '../assets/images/agents/Joseph.jpg';
import sashaPhoto from '../assets/images/agents/Sasha.jpg';
import hawanaPhoto from '../assets/images/agents/Hawana.jpg';
import arielPhoto from '../assets/images/agents/Ariel.jpg';
import shirleyPhoto from '../assets/images/agents/Shirley.jpg';
import fremontPhoto from '../assets/images/agents/Fremont.jpg';

const Agents = () => {

  const [showJoe, setShowJoe] = useState(false);
  const [showShirley, setShowShirley] = useState(false);
  const [showAriel, setShowAriel] = useState(false);
  const [showSasha, setShowSasha] = useState(false);
  const [showHawana, setShowHawana] = useState(false);
  
  const handleShowJoe = () => {
    setShowJoe(true);
  };  

  const handleShowShirley = () => {
    setShowShirley(true);
  };  

  const handleShowAriel = () => {
    setShowAriel(true);
  };  

  const handleShowSasha = () => {
    setShowSasha(true);
  };  

  const handleShowHawana = () => {
    setShowHawana(true);
  };  

  const handleClose = () => {
    setShowJoe(false);
    setShowShirley(false);
    setShowAriel(false);
    setShowSasha(false);
    setShowHawana(false);
  };


  return (
    <div className="agentsWrapper">

        <div className="card" onClick={handleShowJoe}>
          <img src={josephPhoto} alt="Joe Blackburn"></img>
          <h3>Joseph Blackburn</h3>
          <h5>Co-Owner</h5>
          <h5>Broker/Agent</h5>
        </div>
      <Modal backdrop={true} size='xl' centered show={showJoe} onHide={handleClose}>
        <Modal.Header style={{display: 'flex', flexDirection: 'column'}}>
          <img className="thumbnail" src={josephPhoto} alt="Joe Blackburn"></img>
          <Modal.Title><h1>Joseph Blackburn</h1></Modal.Title>
          <p>Having raised three children on Maui brings an exceptional feeling and relationship with the community, which is returned by sharing love for the Island as a real estate agent.  I can guide you with extensive knowledge of the people and fabric of our community.</p>
        </Modal.Header>
        <Modal.Body>
            <h4 style={{paddingBottom: '2rem'}}>Real Estate Liscense obtained in 1983</h4>
            <h4 style={{paddingBottom: '2rem'}}>Real Estate Brokerage Liscense obtained in 1986</h4>
            <div className="agentSummaryList">
              <h4>Education</h4>
              <ul>
                <li>University of Hawaii - Masters Degree in Higher Education</li>
                <li>California State University - Bachelor Degree in Business Administration</li>
                <li>Western Oregon State College - Bachelor Degree in Public Fire Administration</li>
              </ul>
              <h4>Careers</h4>
              <ul>
                <li>Maui Police Officer</li>
                <li>Maui Fire Fighter - Fire Rescue Captain</li>
                <li>Maui Electric Company Supervisor</li>
              </ul>
              <h4>Community</h4>
              <ul>
                <li>Co-chairperson of Maui Local Emergency Planning Committee</li>
                <li>Basketball Coach - Recreational Youth Leagues</li>
              </ul>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
        <div className="card" onClick={handleShowShirley}>
          <img src={shirleyPhoto} alt="Shirley Blackburn"></img>
          <h3>Shirley Blackburn</h3>
          <h5>Co-Owner</h5>
        </div>
        <Modal backdrop={true} size='xl' centered show={showShirley} onHide={handleClose}>
        <Modal.Header style={{display: 'flex', flexDirection: 'column'}}>
          <img className="thumbnail" src={shirleyPhoto} alt="Shirley Blackburn"></img>
          <Modal.Title><h1>Shirley Blackburn</h1></Modal.Title>
          <p>As a mother of three and grandmother of six, I know how important it is to find the community you belong in and to help better it, not just for your family, but for everyone in the community. I have lots of family here on Maui, and I can help you first hand on how to find the perfect home for your family.</p>
        </Modal.Header>
        <Modal.Body>
            <h4 style={{paddingBottom: '2rem'}}>Owner/Operator of Maui Land Broker since the beginning, in 2008.</h4>
            <div className="agentSummaryList">
              <h4>Education</h4>
              <ul>
                <li>Graduate of Aiea High School</li>
                <li>Kapiolani Community College</li>
                <li>Travel Institute of the Pacific</li>
              </ul>
              <h4>Careers</h4>
              <ul>
                <li>County of Maui - Office of the Mayor - Budget Department</li>
                <li>Title Guaranty Escrow Services - Regional Sales Manager</li>
                <li>Classic Resorts - Assistant to the Reservations Manager</li>
                <li>Mid Pacific Airlines - Guest Relations</li>
              </ul>
              <h4>Community</h4>
              <ul>
                <li>County of Maui budget operations, administers budget community meetings.</li>
                <li>Prepares and executes special projects for the community administered by the Mayor's office.</li>
                <li>Volunteers for disaster relief.</li>
              </ul>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="card" onClick={handleShowAriel}>
          <img id="arielImg" src={arielPhoto} alt="Ariel Blackburn"></img>
          <h3>Ariel Blackburn-Rhoades</h3>
          <h5>Agent</h5>
        </div>
        <Modal backdrop={true} size='xl' centered show={showAriel} onHide={handleClose}>
        <Modal.Header style={{display: 'flex', flexDirection: 'column'}}>
          <img className="thumbnail" src={arielPhoto} alt="Ariel Blackburn-Rhoades"></img>
          <Modal.Title><h1>Ariel Blackburn-Rhoades</h1></Modal.Title>
          <p></p>
        </Modal.Header>
        <Modal.Body>
            <h4 style={{paddingBottom: '2rem'}}>Real Estate Liscense obtained in 2022</h4>
            <div className="agentSummaryList">
              <h4>Education</h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h4>Careers</h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h4>Community</h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="card" onClick={handleShowSasha}>
          <img src={sashaPhoto} alt="Sasha Haukoloa"></img>
          <h3>Sasha Haukoloa</h3>
          <h5>Agent</h5>
        </div>
        <Modal backdrop={true} size='xl' centered show={showSasha} onHide={handleClose}>
        <Modal.Header style={{display: 'flex', flexDirection: 'column'}}>
          <img className="thumbnail" src={sashaPhoto} alt="Sasha Haukoloa"></img>
          <Modal.Title><h1>Sasha Haukoloa</h1></Modal.Title>
          <p></p>
        </Modal.Header>
        <Modal.Body>
            <h4 style={{paddingBottom: '2rem'}}>Real Estate Liscense obtained in ?</h4>
            <div className="agentSummaryList">
              <h4>Education</h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h4>Careers</h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h4>Community</h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="card" onClick={handleShowHawana}>
          <img src={hawanaPhoto} alt="Hawana Blackburn"></img>
          <h3>Hawana Blackburn</h3>
          <h5>Agent</h5>
        </div>
        <Modal backdrop={true} size='xl' centered show={showHawana} onHide={handleClose}>
        <Modal.Header style={{display: 'flex', flexDirection: 'column'}}>
          <img className="thumbnail" src={hawanaPhoto} alt="Hawana Blackburn"></img>
          <Modal.Title><h1>Hawana Blackburn</h1></Modal.Title>
          <p></p>
        </Modal.Header>
        <Modal.Body>
            <h4 style={{paddingBottom: '2rem'}}>Real Estate Liscense obtained in ?</h4>
            <div className="agentSummaryList">
              <h4>Education</h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h4>Careers</h4>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <h4>Community</h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="card fremontCard">
          <img id="fremontImg" src={fremontPhoto} alt="Fremont Dog"></img>
          <h3>Fremont</h3>
          <h5>Security Guard</h5>
        </div>

    </div>
  )
}

export default Agents;