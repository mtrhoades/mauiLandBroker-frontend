import SugarBeachImg from '../assets/images/sugarbeach.jpg';
import westMauiImg from '../assets/images/westMaui.jpg';
import makenaImg from '../assets/images/makena.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faHouse, faRectangleAd } from '@fortawesome/free-solid-svg-icons';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const BuySell = () => {
  return (
    <div className="buySellContainer">
      <h2>Information on buying and selling homes through MLB</h2>
      <h3>Reasons to List With Us:</h3>
      <div className="buySellList">
        <ul>
          <li>
          <FontAwesomeIcon className='icons buySellIcon' icon={faRectangleAd}></FontAwesomeIcon>
            Purchased Ad space in the news for you specifically as a realtor
          </li>
          <li>
          <FontAwesomeIcon className='icons buySellIcon' icon={faHouseLaptop}></FontAwesomeIcon>
            Web site hits
          </li>
          <li>
          <FontAwesomeIcon className='icons buySellIcon' icon={faCommentsDollar}></FontAwesomeIcon>
            Will work together to come up with the absolute best return on your sale
          </li>
          <li>
          <FontAwesomeIcon className='icons buySellIcon' icon={faScaleBalanced}></FontAwesomeIcon>
            We make sure your information is presented legally and ethical.
          </li>
          <li>
          <FontAwesomeIcon className='icons buySellIcon' icon={faPeopleGroup}></FontAwesomeIcon>
            Local, small businesses, help to prepare the sale
          </li>
        </ul>
      </div>

      <div>
        <h3>As a Seller what should I know?</h3>
      </div>

      <div>
        <h3>As a Buyer what should I know?</h3>
      </div>
    </div>
  )
}

export default BuySell;