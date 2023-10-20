import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';


const HoaInfo = () => {
  return (
    <div className="hoaBackground">

      <div className="hoaInfoContainer">
          
        <h2>Home Owners Association Information</h2>

        <div className="whatToKnowListDiv">
          <h3>What to know if you're a home owner inside one of our associations:</h3>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ul>
              <li>
                <FontAwesomeIcon className='icons hoaIcons' icon={faHouseUser}></FontAwesomeIcon>
                All Documents are retrieved from inside the portal Log-In for each association individually, accessed from the nav bar at the top of the page.
              </li>
              <li>
                <FontAwesomeIcon className='icons hoaIcons' icon={faHandshake}></FontAwesomeIcon>
                Association managment meetings for board members and home owners happen either monthly, quartely, or bi-annually depending on the association.
              </li>
              <li>
                <FontAwesomeIcon className='icons hoaIcons' icon={faTag}></FontAwesomeIcon>
                Maui Land Broker and Property Management, Inc is happy to offer a 1% listing discount to our property management clients, as well as helping give owners who list their property through MLB a head start in the listing process.
              </li>
              <li>
                <FontAwesomeIcon className='icons hoaIcons' icon={faQuestion}></FontAwesomeIcon>
                Something Else Here?
              </li>
            </ul>
          </div>
        </div>

        <div style={{height: '200px'}}></div>

        <div style={{width: '70%'}}>
          <p>Since we provide management services we have all the necessary information in electronic format for prospective purchasers, interested buyers can readily learn more about their property's House Rules, CC&R's, and Design Guidelines.This is a huge benefit to sellers as these documents are not readily available for review when you list with another broker.</p>
            
          <p>We know what makes our subdivisions special and enjoy working with our owners to handle all of their property management needs and real estate sales.</p>
        </div>
      </div>

    </div>
    
  )
}

export default HoaInfo;