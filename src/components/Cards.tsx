import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faSignHanging } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';

const Cards = () => {


return (

    <div className="wrapper">
        
        <a href="/buySell">
            <div className="cardIcon">
                <FontAwesomeIcon className='icons' icon={faSignHanging}></FontAwesomeIcon>
                <h5>Buy/Sell With Us</h5>
            </div>
        </a>

        <a href="/rentwithus">
            <div className="cardIcon">
                <FontAwesomeIcon className='icons' icon={faKey}></FontAwesomeIcon>
                <h5>Rent With Us</h5>
            </div>
        </a>

        <a href="/mortgagecalculator">
            <div className="cardIcon">
                <FontAwesomeIcon className='icons' icon={faCalculator}></FontAwesomeIcon>
                <h5>Mortgage Calculator</h5>
            </div>
        </a>

        <a href="/hoainfo">
            <div className="cardIcon">
                <FontAwesomeIcon className='icons' icon={faHouse}></FontAwesomeIcon>
                <h5>HOA Information</h5>
            </div>
        </a>

        <a href="https://www.panabodehomes.com/" target="_blank">
            <div className="cardIcon">
                <FontAwesomeIcon className='icons' icon={faHouseChimneyWindow}></FontAwesomeIcon>
                <h5>Custom Cedar Homes</h5>
            </div>
        </a>
    </div>
  )
}

export default Cards;