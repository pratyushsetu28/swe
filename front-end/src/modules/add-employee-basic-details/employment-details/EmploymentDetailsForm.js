import React from "react";
import "./EmploymentDetailsForm.css";

class EmploymentDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeType: "",
      dateOfJoining: "",
      designation: "",
      department: "",
      researchInterest: "",
      natureOfEmployment: "",
      dateOfRetirement: ""
    };
  }

  render() {
    return (
      <div className="employment-details">
        <div className="form-head">
          <b>Employment Details</b>
        </div>
        <div className="form-details">
          <div className="employee-type">
            <label><b>Employee Type </b><span style={{color: "red"}}>*</span></label>
            <br />
            <select className="employee-type-field">
              <option>Faculty</option>
            </select>
          </div>
          <br />
          <div className="date-of-joining">
            <label><b>Date of Joining </b><span style={{color: "red"}}>*</span></label>
            <br />
            <input type="text" className="date-of-joining-field" />
          </div>
          <br />
          <div className="designation">
            <label><b>Designation </b><span style={{color: "red"}}>*</span></label>
            <br />
            <select className="designation-field">
              <option></option>
            </select>
          </div>
          <br />
          <div className="department">
            <label><b>Department/Section </b><span style={{color: "red"}}>*</span></label>
            <br />
            <select className="department-field">
              <option>Applied Chemistry</option>
            </select>
          </div>
          <br />
          <div className="research-interest">
            <label><b>Research Interest</b></label>
            <br />
            <input type="text" className="research-interest-field"/>
          </div>
          <br />
          <div className="nature-of-employment">
            <label><b>Nature of Employment </b><span style={{color: "red"}}>*</span></label>
            <br />
            <select className="nature-of-employment-field">
              <option>Permanent</option>
            </select>
          </div>
          <br />
          <div className="date-of-retirement">
            <label><b>Date of Retirement </b><span style={{color: "red"}}>*</span></label>
            <br />
            <input type="text" className="date-of-retirement-field"/>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default EmploymentDetailsForm;