import React from "react";
import "./BankDetailsForm.css";

class BankDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bankName: "",
      accountNumber: ""
    };
  }

  render() {
    return (
      <div className="bank-details">
        <div className="form-head">
          <b>Enter Your Bank Details</b>
        </div>
        <div className="form-details">
          <div className="bank-name">
            <label><b>Bank Name</b></label>
            <br />
            <input type="text" className="bank-name-field" placeholder="Bank Name"/>
          </div>
          <div className="account-number">
            <label><b>Account Number</b></label>
            <br />
            <input type="text" className="account-number-field" placeholder="Account Number"/>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default BankDetailsForm;