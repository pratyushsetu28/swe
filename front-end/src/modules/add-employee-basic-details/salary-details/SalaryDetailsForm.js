import React from "react";
import "./SalaryDetailsForm.css";

class SalaryDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payBand: "",
      gradePay: "",
      basicPay: ""
    };
  }

  render() {
    return (
      <div className="salary-details">
        <div className="form-head">
          <b>Salary Details</b>
        </div>
        <div className="form-details">
          <div className="pay-band">
            <label><b>Pay Band </b><span style={{color: "red"}}>*</span></label>
            <br />
            <select className="pay-band-field">
              <option>Choose...</option>
            </select>
          </div>
          <br />
          <div className="grade-pay">
            <label><b>Grade Pay </b><span style={{color: "red"}}>*</span></label>
            <br />
            <span className="left-icon">&#8377;</span>
            <select className="grade-pay-field">
              <option>Choose...</option>
            </select>
            <span className="right-icon">.00</span>
          </div>
          <br />
          <div className="basic-pay">
            <label><b>Basic Pay </b><span style={{color: "red"}}>*</span></label>
            <br />
            <span className="left-icon">&#8377;</span>
            <select className="basic-pay-field">
              <option>Choose...</option>
            </select>
            <span className="right-icon">.00</span>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default SalaryDetailsForm;