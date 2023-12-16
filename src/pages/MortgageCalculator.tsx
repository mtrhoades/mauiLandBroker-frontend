import { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Chart from 'react-apexcharts';


const MortgageCalculator = () => {

  const [houseCost, setHouseCost] = useState(600000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTime, setLoanTime] = useState(30);
  const [interestRate, setInterestRate] = useState(7);

  const [propertyTax] = useState((houseCost/1000)*5.85);
  const [homeInsurance] = useState((houseCost*0.0025));
  const [hoaDues] = useState(2400);

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
const options = {
  labels: ['Monthly Mortgage Payment', 'Property Tax', 'Home Insurance', 'HOA Dues'],
  colors: ["#068FE2", "#c758d0", "#ED940C", "#52AD0F"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
}
const series = [calculateMortgagePayment().mortgagePaymentBalance, (propertyTax/12), (homeInsurance/12), (hoaDues/12)]



  return (
    <div className="mortgageCalculatorContainer">
      <div className="calcHeaders">
        <h2>Mortgage Calculator</h2>
        <h5>Find out how much home you can afford!</h5>
      </div>
      <div className="formPlusChartDiv">
        <Form>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Total Cost of the Home:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={houseCost} onChange={(e) => setHouseCost(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Down Payment:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Interest Rate: (%)
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" as={Row}>
            <Form.Label className="calcLabels" column md={6}>
              Number of Years on the Loan:
            </Form.Label>
            <Col md={5}>
              <Form.Control className="formInputs" type='number' value={loanTime} onChange={(e) => setLoanTime(Number(e.target.value))} step='any' />
            </Col>
          </Form.Group>
        </Form>

        <div className="calcChart">
          <Chart options={options} series={series} type="donut" width={600} />
        </div>
      </div>
      <div className="resultsDiv">
        <h3>Your Monthly Mortgage Payment is:</h3>
        <span className="mortgageResult">${calculateMortgagePayment().mortgagePaymentBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
        <h4>Your TOTAL Monthly Payment is:</h4>
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