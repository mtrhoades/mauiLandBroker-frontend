import flowerImg from '../assets/images/hawaiianFlowersImg.png';

const Specials = () => {
  return (
    <div className="specialsContainer">
      <h3>Kama'āina Discount Specials for Buyers and Sellers</h3>
      <div className="specialsInfoDiv">
        <img src={flowerImg} alt="hawaiian flower bouqet"></img>
        <ul>
          <li>All special discounts only apply to kama'āina individuals</li>
          <li>3.5% discount for selling commission</li>
          <li>2% discount if MLB brings in buyer</li>
          <li>Our staff here at MLB will give all the necessary information needed</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Specials;