import familyImg from '../assets/images/Family009.jpg';
import familyImg2 from '../assets/images/FamilyUse.jpg';

import eelImg2 from '../assets/images/Eel 2.jpg';
import turtle2Img from '../assets/images/Turtle 2.jpg';
import reefImg from '../assets/images/Color Reef.jpg';
import shrimp from '../assets/images/Shrimp 2.jpg';
import turtle4 from '../assets/images/Turtle 4.jpg';
import eelImg1 from '../assets/images/Eel 1.jpg';
import butterflyFish from '../assets/images/Butterfly.jpg';
import xmasTreeCoral from '../assets/images/XmasTree001.jpg';
import turtle3 from '../assets/images/Turtle 3.jpg';
import canoeBeach from '../assets/images/sugarbeach.jpg';
import iaoValley from '../assets/images/Iao Valley copy.jpg';
import whale2 from '../assets/images/Whale 2.jpg';
import sunrise from '../assets/images/Sunrise.jpg';
import sunrise2 from '../assets/images/Sunrise 3 copy.jpg';
import sunset from '../assets/images/Sunset 1.jpg';
import westMaui from '../assets/images/westMaui.jpg';

const About = () => {
  return (
    <div className="aboutContainer">
      <h2>About Us</h2>
      <h3>Maui Land Broker & Property Management</h3>

      <div className="about1stSection">
        <div className="gallery">
          <img src={eelImg1} alt="eel"></img>
          <img src={canoeBeach} alt="canoe"></img>
          <img src={turtle2Img} alt="turtle"></img>
          <img src={reefImg} alt="coral reef"></img>
          <img src={sunset} alt="sunset"></img>
          <img src={shrimp} alt="shrimp"></img>
          <img src={butterflyFish} alt="butterfly fish"></img>
          <img src={westMaui} alt="west maui"></img>
          <img src={eelImg2} alt="eel"></img>
          <img src={turtle4} alt="turtle"></img>
          <img src={sunrise2} alt="sunrise"></img>
          <img src={xmasTreeCoral} alt="christmas tree coral"></img>
          <img src={turtle3} alt="turtle"></img>
          <img src={sunrise} alt="sunrise"></img>
          <img src={whale2} alt="whale"></img>
          <img src={iaoValley} alt="iao valley"></img>
        </div>
        <div className="about1stSectionText">
          <h4>"Native Hawaiian and Woman Owned"</h4>
          <p>We are proud to be native Hawaiian as well as a woman owned small business. </p>
          <h4>"Maui is our home"</h4>
          <p>Our family has multiple generations that have called the island of Maui our home. We will continue to do so with the next generation and so on. We want to help other families feel the same way. Not only is this our home but also our way of life. From the ocean to the top of Haleakala, we respect every apsect of the island. The community of Maui is also an extremely important factor and we strive to keep it as local as possible within generations to come.</p>
        </div>
      </div>

      <div className="about2ndSection">
        <div>
          <h4>Why Choose Maui Land Broker?</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi ex repudiandae, iure, nemo quos distinctio neque accusamus mollitia id explicabo recusandae cupiditate a odio ab earum quidem, quia perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quas quidem itaque sed harum repellat error, fugit exercitationem eius, non tenetur ipsam recusandae vel atque nihil mollitia neque et totam?</p>
        </div>
        {/* <img src={familyImg2} alt="family photo2"></img> */}
      </div>

    </div>
  )
}

export default About;