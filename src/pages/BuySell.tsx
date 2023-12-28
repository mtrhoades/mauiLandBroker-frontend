import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import blackAndWhiteOfficePic from '../assets/images/family/blackAndWhiteOffice.jpg';

const BuySell = () => {
  return (
    <div className="buySellContainer">

      <h2>Information on buying and selling homes through MLB</h2>

        <div className="reasonsToList">
          <h3>Reasons to List With Us:</h3>
          <ul>
            <li>
              <FontAwesomeIcon className='littleIcons' icon={faRectangleAd}></FontAwesomeIcon>
              Exposure for your property through the Maui News in which we purchase add space in realtors working for you to feature your listing.
            </li>
            <li>
              <FontAwesomeIcon className='littleIcons' icon={faHouseLaptop}></FontAwesomeIcon>
              Web site hits. Since we are also a property management company we have buyers and sellers visiting our web site for association documents, which provide exposure for your property.
            </li>
            <li>
              <FontAwesomeIcon className='littleIcons' icon={faCommentsDollar}></FontAwesomeIcon>
              Flexibility in listing terms. We will work with your to provide terms and costs that will help you in getting the best return on your sale.
            </li>
            <li>
              <FontAwesomeIcon className='littleIcons' icon={faScaleBalanced}></FontAwesomeIcon>
              A company that will help protect you from any future legal disputes. We understand ethics and disclosure. We will make sure your information is presented legally and in a timely manner.
            </li>
            <li>
              <FontAwesomeIcon className='littleIcons' icon={faPeopleGroup}></FontAwesomeIcon>
              We are very good in helping your prepare your property for sale. We can provide information that will give your property any edge in the market. We have great small businesses who can provide the services your may need to prepare your property for sale
            </li>
          </ul>
        </div>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="asBuyerSellerList">
          <h3>As a <span style={{color: 'blue'}}>Buyer</span> what should I know?</h3>
            <ul>
              <li>
                Determine Your Budget 
              </li>
              <li>
                Get Preapproved for a Mortgage 
              </li>
              <li>
                Research the Housing Market 
              </li>
              <li>
                Work with a Real Estate Agent
              </li>
              <li>
                Consider your Priorities 
              </li>
              <li>
                Plan for Contingencies 
              </li>
            </ul>
        </div>

        <img style={{width: '35%'}} src={blackAndWhiteOfficePic}></img>

        <div className="asBuyerSellerList">
        <h3>As a <span style={{color: 'red'}}>Seller</span> what should I know?</h3>
          <ul>
            <li>
              Understand your Local Real Estate Market 
            </li>
            <li>
              Choose the Right Real Estate Agent 
            </li>
            <li>
              Set the Right Asking Price 
            </li>
            <li>
              Prepare Your Home for Sale 
            </li>
            <li>
              Understand the Closing Process 
            </li>
            <li>
              Plan Your Next Move
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BuySell;