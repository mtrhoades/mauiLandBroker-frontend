import flowerImg from '../assets/images/hawaiianFlowersImg.png';

const Specials = () => {
  return (
    <div className="specialsContainer">
      <h3>Kama'āina Specials</h3>
      <div className="specialsInfoDiv">
        <img src={flowerImg} alt="hawaiian flower bouqet"></img>
        <ul>
          {/* <li>All special discounts only apply to kama'āina individuals</li> */}
          <li>3.5% selling commission</li>
          {/* <li>2% discount if MLB brings in buyer</li> */}
          <li>Our staff here at MLB will give all the necessary information needed</li>
          <li>Contact us for more information: (808) 442-3036</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Specials;