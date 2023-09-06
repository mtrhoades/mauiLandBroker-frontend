import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import josephPhoto from '../assets/images/Joseph.jpg';
import sashaPhoto from '../assets/images/Sasha.jpg';
import hawanaPhoto from '../assets/images/Hawana.jpg';
import arielPhoto from '../assets/images/Ariel.jpg';
import shirleyPhoto from '../assets/images/Shirley.jpg';

const About = () => {

const [isFlipped1, setIsFlipped1] = useState(false);
const [isFlipped2, setIsFlipped2] = useState(false);
const [isFlipped3, setIsFlipped3] = useState(false);
const [isFlipped4, setIsFlipped4] = useState(false);
const [isFlipped5, setIsFlipped5] = useState(false);

const flipCard1 = () => {
  setIsFlipped1(!isFlipped1);
}
const flipCard2 = () => {
  setIsFlipped2(!isFlipped2);
}
const flipCard3 = () => {
  setIsFlipped3(!isFlipped3);
}
const flipCard4 = () => {
  setIsFlipped4(!isFlipped4);
}
const flipCard5 = () => {
  setIsFlipped5(!isFlipped5);
}



  return (
    <div className="agentsWrapper">

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped1}>
        <div className="card card-front" onClick={flipCard1}>
          <img src={josephPhoto}></img>
          <h3>Joseph Blackburn</h3>
          <h5>Co-Owner</h5>
          <h5>Broker/Agent</h5>
        </div>
        <div className="card card-back" onClick={flipCard1}>
          <h3>Back</h3>
          <p>Joe Blackburn has been part of the Maui Community since 1976. Joe began serving the community as a Maui Police Officer, then later for the Maui Fire Department retiring in 2002 as a Fire Rescue Captain. Joe has been a real estate agent on Maui since 1983, and has a master's degree from the University of Hawaii in Higher Education Administration, bachelor's degree from California State University at Chico in Business Administration and a bachelor's degree from Western Oregon State College in Public Fire Administration. Maui is a beautiful island to raise a family. The land is special for anyone who loves Maui. Having raised three children on Maui brings an exceptional feeling and relationship with the community, which is returned by sharing love for the Island as a real estate agent Joe is a real estate agent who is part of the fabric of the Maui community. Co-chairperson of the Maui Local Emergency Planning Committee, Basketball coach for youth teams, running leagues for our youth.</p>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped2}>
        <div className="card card-front" onClick={flipCard2}>
          <img src={shirleyPhoto}></img>
          <h3>Shirley Blackburn</h3>
          <h5>Co-Owner</h5>
        </div>
        <div className="card card-back" onClick={flipCard2}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped3}>
        <div className="card card-front" onClick={flipCard3}>
          <img id="arielImg" src={arielPhoto}></img>
          <h3>Ariel Blackburn-Rhoades</h3>
          <h5>Agent</h5>
        </div>
        <div className="card card-back" onClick={flipCard3}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped5}>
        <div className="card card-front" onClick={flipCard5}>
          <img src={sashaPhoto}></img>
          <h3>Sasha Haukoloa</h3>
          <h5>Agent</h5>
        </div>
        <div className="card card-back" onClick={flipCard5}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped4}>
        <div className="card card-front" onClick={flipCard4}>
          <img src={hawanaPhoto}></img>
          <h3>Hawana Blackburn</h3>
          <h5>Agent</h5>
        </div>
        <div className="card card-back" onClick={flipCard4}>
          <h3>Back</h3>
        </div>
      </ReactCardFlip>

    </div>
  )
}

export default About;