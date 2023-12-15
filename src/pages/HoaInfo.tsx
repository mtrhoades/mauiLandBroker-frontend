import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faList } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';


const HoaInfo = () => {
  return (
    <div className="hoaBackground">

      <div className="hoaInfoContainer">
          
        <h2>Homeowner's Association Information</h2>

        <div className="whatToKnowListDiv">
          <h3>What to know if you're a home owner in one of our associations:</h3>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ul>
              <li>
                <FontAwesomeIcon className='littleIcons' icon={faHouseUser}></FontAwesomeIcon>
                All necessary HOA documents can be retrieved from a portal Log-In for each Association. If you need access to any HOA documents for your Association, please contact Maui Land Broker. Please note – Maui Land Broker’s fiduciary duty is to the homeowner of a property. If you are a representing the seller, you must include the homeowner in any email correspondence.
              </li>
              <li>
                <FontAwesomeIcon className='littleIcons' icon={faHandshake}></FontAwesomeIcon>
                Association Board of Directors Meetings take place monthly, quarterly, or bi-annualy depending on the Association. Board of Directors Meeting Minutes can be accessed via the Association Portal. 
              </li>
              <li>
                <FontAwesomeIcon className='littleIcons' icon={faTag}></FontAwesomeIcon>
                Maui Land Broker is happy to offer a 1% listing discount to our any of our clients who are living in the Homeowner’s Associations that we currently manage.
              </li>
              <li>
                <FontAwesomeIcon className='littleIcons' icon={faListCheck}></FontAwesomeIcon>
                Since we provide management services we have all the necessary information in electronic format for prospective purchasers, interested buyers can readily learn more about their property's House Rules, CC&R's, and Design Guidelines.This is a huge benefit to sellers as these documents are not readily available for review when you list with another broker.
              </li>
              <li>
                <FontAwesomeIcon className='littleIcons' icon={faPeopleArrows}></FontAwesomeIcon>
                We know what makes our subdivisions special and enjoy working with our owners to handle all of their property management needs and real estate sales.
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
    
  )
}

export default HoaInfo;