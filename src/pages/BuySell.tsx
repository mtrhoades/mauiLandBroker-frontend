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
              <b>Exposure for your property through the Maui News in which we purchase add space in realtors working for you to feature your listing.</b>
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faHouseLaptop}></FontAwesomeIcon>
              <b>Web site hits. Since we are also a property management company we have buyers and sellers visiting our web site for association documents, which provide exposure for your property.</b>
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faCommentsDollar}></FontAwesomeIcon>
              <b>Flexibility in listing terms. We will work with your to provide terms and costs that will help you in getting the best return on your sale.</b>
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faScaleBalanced}></FontAwesomeIcon>
              <b>A company that will help protect you from any future legal disputes. We understand ethics and disclosure. We will make sure your information is presented legally and in a timely manner.</b>
            </li>
            <li>
              <FontAwesomeIcon className='icons buySellIcon' icon={faPeopleGroup}></FontAwesomeIcon>
              <b>We are very good in helping your prepare your property for sale. We can provide information that will give your property any edge in the market. We have great small businesses who can provide the services your may need to prepare your property for sale</b>
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
                Determine Your Budget 
              </li>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Get Preapproved for a Mortgage 
              </li>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Research the Housing Market 
              </li>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Work with a Real Estate Agent
              </li>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Consider your Priorities 
              </li>
              <li>
                <FontAwesomeIcon className='icons buySellIcon' icon={faCheck}></FontAwesomeIcon>
                Plan for Contingencies 
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