import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const BuySell = () => {
  return (
    <div className="buySellContainer">

      <h2>Information on buying and selling homes through MLB</h2>

      <div className="reasonsToListBackground">
        <div className="reasonsToList">
          <h3>Reasons to List With Us:</h3>
          <ul>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faRectangleAd}></FontAwesomeIcon>
              <b>Purchased Ad space in the news for you specifically as a realtor</b>
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faHouseLaptop}></FontAwesomeIcon>
              <b>Web site hits</b>
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faCommentsDollar}></FontAwesomeIcon>
              <b>Will work together to come up with the absolute best return on your sale</b>
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faScaleBalanced}></FontAwesomeIcon>
              <b>We make sure your information is presented legally and ethically</b>
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faPeopleGroup}></FontAwesomeIcon>
              <b>Local, small businesses, help to prepare the sale</b>
            </li>
          </ul>
        </div>
      </div>

      <div style={{height: '25rem'}}></div>

      <div style={{width: '100%',display: 'flex', justifyContent: 'space-around',backgroundColor: 'white', paddingLeft: '5rem', paddingRight: '5rem'}}>
        <div className="asBuyerSellerList">
          <h3>As a <span style={{color: 'blue'}}>Buyer</span> what should I know?</h3>
            <ul>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </li>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Consequuntur hic nisi iure error nam possimus molestias. 
              </li>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </li>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Consequuntur hic nisi iure error nam possimus molestias. 
              </li>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </li>
            </ul>
        </div>

        <div style={{display: 'flex', alignItems: 'center', color: '#7E7D32'}}>
          <h1>VS.</h1>
        </div>

        <div className="asBuyerSellerList">
        <h3>As a <span style={{color: 'red'}}>Seller</span> what should I know?</h3>
          <ul>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
              Consequuntur hic nisi iure error nam possimus molestias. 
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
              Consequuntur hic nisi iure error nam possimus molestias. 
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BuySell;