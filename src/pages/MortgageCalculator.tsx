import { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


const MortgageCalculator = () => {

  const [houseCost, setHouseCost] = useState(600000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTime, setLoanTime] = useState(30);
  const [interestRate, setInterestRate] = useState(7);

  const propertyTax = ((houseCost/1000)*5.85);
  const homeInsurance = ((houseCost*0.0025));
  const hoaDues = (2400);

  const calculateMortgagePayment = () => {
    let mortgagePaymentBalance = 0;
    let principal = houseCost - downPayment;

    let mr = interestRate / 12 / 100; // interest rate per month
    let mlp = loanTime * 12; // loan payment in months

    mortgagePaymentBalance = (principal * mr * Math.pow(1 + mr, mlp)) / (Math.pow(1 + mr, mlp) - 1);

    let totalMonthlyPayment = mortgagePaymentBalance + (propertyTax/12) + (homeInsurance/12) + (hoaDues/12)
    
    return { mortgagePaymentBalance: mortgagePaymentBalance, totalMonthlyPayment: totalMonthlyPayment }
  }


// graph
const options: ApexOptions = {
  labels: ['Monthly Mortgage Payment', 'Property Tax', 'Home Insurance', 'HOA Dues'],
  colors: ["#068FE2", "#c758d0", "#ED940C", "#52AD0F"],
  responsive: [{
    breakpoint: 480,
  }],
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
          }
        }
      }      
    }
  },
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'right',
    horizontalAlign: 'center', 
    floating: false,
    fontSize: '18px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
        colors: undefined,
        useSeriesColors: false
    },
    markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
    },
    itemMargin: {
        horizontal: 5,
        vertical: 5
    },
    onItemClick: {
        toggleDataSeries: true
    },
    onItemHover: {
        highlightDataSeries: true
    },
  },
  dataLabels: {
  enabled: true,
  enabledOnSeries: undefined,
  textAnchor: 'start',
  distributed: false,
  offsetX: 0,
  offsetY: 0,
  style: {
      fontSize: '16px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 'bold',
      colors: undefined
    },
  background: {
    enabled: true,
    foreColor: '#fff',
    padding: 4,
    borderRadius: 2,
    borderWidth: 0,
    borderColor: '#fff',
    opacity: 0.9,
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 1,
      color: '#000',
      opacity: 0.45
      }
    },
  dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      color: '#000',
      opacity: 0.45
    }
  },
  tooltip: {
    enabled: false,
  }
};

const series = [calculateMortgagePayment().mortgagePaymentBalance, (propertyTax/12), (homeInsurance/12), (hoaDues/12)]

  return (
    <div className="mortgageCalculatorContainer">
      <div className="calcHeaders">
        <h2>Mortgage Calculator</h2>
        <h3>Find out how much home you can afford!</h3>
      </div>
      <div className="formPlusChartDiv">
        <Form style={{fontSize: '1.25em'}}>
          <Form.Group className="mb-4" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Total Cost of the Home:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={houseCost} onChange={(e) => setHouseCost(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group className="mb-4" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Down Payment:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group className="mb-4" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Interest Rate: (%)
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group className="mb-4" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Number of Years on the Loan:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={loanTime} onChange={(e) => setLoanTime(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>
        </Form>

        <div className="calcChart">
          <Chart options={options} series={series} type="donut" width={800} />
        </div>
        
      </div>

      <div className="resultsDiv">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

          <div>
            <p>Property Tax</p>
            <p style={{color: '#C864D0', fontWeight: 'bold'}}>${(propertyTax/12).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          </div>

          <div>
            <p>Home Insurance</p>
            <p style={{color: '#EC942B', fontWeight: 'bold'}}>${(homeInsurance/12).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          </div>

          <div>
            <p>HOA Dues</p>
            <p style={{color: '#55AE22', fontWeight: 'bold'}}>${hoaDues/12}</p>
          </div>

        </div>
        <h3>Your Monthly Mortgage Payment is:</h3>
        <span className="mortgageResult">${calculateMortgagePayment().mortgagePaymentBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
        <h4 style={{paddingTop: '2rem'}}>Your TOTAL Monthly Payment is:</h4>
        <span className="totalResult">${calculateMortgagePayment().totalMonthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
      </div>

      <div className="disclaimer">
        <h5>Disclaimer:</h5>
        <p>This mortgage calculator is intended for educational and informational purposes only. It is not intended to provide financial or investment advice. The results provided by this calculator are estimates based on the information you have provided and do not reflect the actual performance of any particular investment. The actual results may vary based on various factors, including changes in mortgage performance, taxes, and fees. The information provided by this calculator is not a substitute for professional financial advice. We recommend that you consult with a loan officer or investment professional before making any decisions.</p>
      </div>

    </div>
  )
}

export default MortgageCalculator;