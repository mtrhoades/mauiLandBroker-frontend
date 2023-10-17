import eelImg2 from '../assets/images/ocean/Eel 2.jpg';
import turtle2Img from '../assets/images/ocean/Turtle 2.jpg';
import reefImg from '../assets/images/ocean/Color Reef.jpg';
import shrimp from '../assets/images/ocean/Shrimp 2.jpg';
import turtle4 from '../assets/images/ocean/Turtle 4.jpg';
import eelImg1 from '../assets/images/ocean/Eel 1.jpg';
import butterflyFish from '../assets/images/ocean/Butterfly.jpg';
import xmasTreeCoral from '../assets/images/ocean/XmasTree001.jpg';
import turtle3 from '../assets/images/ocean/Turtle 3.jpg';
import canoeBeach from '../assets/images/landscape/sugarbeach.jpg';
import iaoValley from '../assets/images/landscape/Iao Valley copy.jpg';
import whale2 from '../assets/images/ocean/Whale 2.jpg';
import sunset2 from '../assets/images/landscape/Sunset 2.jpg';
import sunrise2 from '../assets/images/landscape/Sunrise 3 copy.jpg';
import sunset from '../assets/images/landscape/Sunset 1.jpg';
import westMaui from '../assets/images/landscape/westMaui.jpg';

import familyImg from '../assets/images/family/Family009.jpg';
import familyImg2 from '../assets/images/family/FamilyUse.jpg';
import joeShirley from '../assets/images/family/JoeShirley.jpg';
import familyRecent from '../assets/images/family/FamilyRecent.jpg';
import rescueFamily from '../assets/images/family/RescueTeam.jpg';
import fireRecruits from '../assets/images/family/Joe Fire Recruit Class 1981.jpg';

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
          <img src={sunset2} alt="sunrise"></img>
          <img src={whale2} alt="whale"></img>
          <img src={iaoValley} alt="iao valley"></img>
        </div>
        <div className="about1stSectionText">
          <div>
            <h4>Native Hawaiian and Woman Owned</h4>
            <p>We are proud to be native Hawaiian as well as a woman owned small business. We care very deeply for our fellow natives and other community members that have been here a long time. Maui is a very special place and will always have our hearts fully committed to honoring the traditions and the culture of the island.</p>
          </div>
          <div>
            <h4>Maui is our home</h4>
            <p>Our family has multiple generations that have called the island of Maui our home. We will continue to do so with the next generation and we want to help other families feel the same way too. Not only is this our home but also our way of life. From the ocean to the top of Haleakala, we respect every apsect of the island. The community here on Maui is also an extremely important factor and we strive to keep it thriving with people who respect the land as much as we do.</p>
          </div>
          <div>
            <h4>Why Choose Maui Land Broker?</h4>
            <p>Shirley and Joe Blackburn have been in the construction and real estate business on Maui for over 25 years. We specialize in properties that are in the central, south, and upcountry areas of the island. Our family's roots are imbedded all over the island and we will be more than happy to provide information from a kama'āina perspective.</p>            
          </div>
        </div>
      </div>

      <div className="about2ndSection">
        <div className="about2ndSectionText">
          <div>
            <h4>Testimonials</h4>
            <p><i>"Shirley and Joe helped us purchase our first home, and then helped us sell and move up into our beautiful home in Wailuku. More important Joe Blackburn was my fire engine driver when I got into the fire department and I fought fires side by side with him. Character and dedication to serve the public best describes Joe. He has now taken this same commitment to Real Estate where he is a great asset because of his knowledge and contacts in the community."</i></p>
            <p><i>"I work in a bank and trust Joe to do the right thing for my family. He will serve your needs well and put your wishes and desires before his own."</i></p>
            <p>Rory and Kim Macadangdang</p>
          </div>
          <div>
            <p><i>"Joe was my supervisor at Maui Electric and was the best boss I have had in 35 years of work in the utility industry. Due to our friendship, he helped me find a home in Kihei. I moved from Tucson to Maui and not only has Joe been my real estate agent but he has introduced me to the beauty and culture of the people of Maui. I truly understand why Maui is the best place in the world to live, its not just the weather it's the special people who are part of the fabric of the community and willing to share this with newcomers like myself."</i></p>
            <p>Joseph and Nancy Kentz</p>
          </div>
        </div>
        <div className="gallery2">
          <img src={familyImg2} alt="family"></img>
          <img src={familyImg} alt="family"></img>
          <img src={joeShirley} alt="Joe and Shirley"></img>
          <img src={familyRecent} alt="family"></img>
          <img src={rescueFamily} alt="Fire Rescue Team"></img>
          <img src={fireRecruits} alt="Fire Recruit Class 1981"></img>
        </div>
      </div>

    </div>
  )
}

export default About;