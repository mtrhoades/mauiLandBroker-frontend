import familyImg from '../assets/images/Family009.jpg';
import familyImg2 from '../assets/images/FamilyUse.jpg';

const About = () => {
  return (
    <div className="aboutContainer">
      <h2>About Us</h2>
      <h3>Maui Land Broker & Property Management</h3>

      <div className="about1stSection">
        <img src={familyImg}></img>
        <div>
          <h4>"Maui is our paradise"</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi ex repudiandae, iure, nemo quos distinctio neque accusamus mollitia id explicabo recusandae cupiditate a odio ab earum quidem, quia perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quas quidem itaque sed harum repellat error, fugit exercitationem eius, non tenetur ipsam recusandae vel atque nihil mollitia neque et totam?</p>
        </div>
      </div>

      <div className="about2ndSection">
        <div>
          <h4>Why Choose Maui Land Broker?</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi ex repudiandae, iure, nemo quos distinctio neque accusamus mollitia id explicabo recusandae cupiditate a odio ab earum quidem, quia perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quas quidem itaque sed harum repellat error, fugit exercitationem eius, non tenetur ipsam recusandae vel atque nihil mollitia neque et totam?</p>
        </div>
        <img src={familyImg2}></img>
      </div>
    </div>
  )
}

export default About;