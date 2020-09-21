import React from "react";
import PersonalDetailsForm from "./personal-details/PersonalDetailsForm";
import EmploymentDetailsForm from "./employment-details/EmploymentDetailsForm";
import SalaryDetailsForm from "./salary-details/SalaryDetailsForm";
import AddressDetailsForm from "./address-details/AddressDetailsForm";
import OtherDetailsForm from "./other-details/OtherDetailsForm";
import BankDetailsForm from "./bank-details/BankDetailsForm";
import "./EmployeeDetailsForm.css";

class EmployeeDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employmentDetails: null
    };
  }

  render() {
    return (
      <div className="employee-details">
        <PersonalDetailsForm className="personal-details"/>
        <br />
        <div>
          <div className="left">
            <EmploymentDetailsForm className="employment-details"/>
            <br />
            <SalaryDetailsForm className="salary-details"/>
            <br />
          </div>
          <div className="right">
            <AddressDetailsForm className="address-details"/>
            <br />
            <OtherDetailsForm className="other-details" />
            <br />
          </div>
        </div>
        <BankDetailsForm className="bank-details"/>
        <br />
        <hr />
        <button className="submit">Next</button>
      </div>
    );
  }
}

export default EmployeeDetailsForm;