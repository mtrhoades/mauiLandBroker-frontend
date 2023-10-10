import familyImg from '../assets/images/Family009.jpg';
import familyImg2 from '../assets/images/FamilyUse.jpg';

import eelImg from '../assets/images/Eel 2.jpg';
import turtle2Img from '../assets/images/Turtle 2.jpg';
import reefImg from '../assets/images/Color Reef.jpg';

const About = () => {
  return (
    <div className="aboutContainer">
      <h2>About Us</h2>
      <h3>Maui Land Broker & Property Management</h3>

      <div className="about1stSection">
        <div className="underTheSeaCollage">
            <img className="underSeaCollageImgs" id="underSeaImg1" src={eelImg} alt="ocean eel"></img>
            <img className="underSeaCollageImgs" id="underSeaImg2" src={reefImg} alt="coral reef"></img>
            <img className="underSeaCollageImgs" id="underSeaImg3" src={turtle2Img} alt="sea turtle"></img>
        </div>
        <div>
          <h4>"Maui is our home"</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi ex repudiandae, iure, nemo quos distinctio neque accusamus mollitia id explicabo recusandae cupiditate a odio ab earum quidem, quia perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quas quidem itaque sed harum repellat error, fugit exercitationem eius, non tenetur ipsam recusandae vel atque nihil mollitia neque et totam?</p>
        </div>
      </div>

      <div className="about2ndSection">
        <div>
          <h4>Why Choose Maui Land Broker?</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi ex repudiandae, iure, nemo quos distinctio neque accusamus mollitia id explicabo recusandae cupiditate a odio ab earum quidem, quia perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quas quidem itaque sed harum repellat error, fugit exercitationem eius, non tenetur ipsam recusandae vel atque nihil mollitia neque et totam?</p>
        </div>
        <img src={familyImg2} alt="family photo2"></img>
      </div>

    </div>
  )
}

export default About;