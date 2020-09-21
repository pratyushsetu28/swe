import React from "react";
import "./AddressForm.css";

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      contactNo: ""
    };
  }

  render() {
    return (
      <div className="address-form">
        <div className="address-form-input">
          <label><b>Address Line 1 </b><span style={{color: "red"}}>*</span></label>
          <br />
          <textarea className="address-line-1-field"/>
        </div>
        <br />
        <div className="address-form-input">
          <label><b>Address Line 2</b></label>
          <br />
          <input type="text" className="address-line-2-field"/>
        </div>
        <br />
        <div className="address-form-input">
          <label><b>City </b><span style={{color: "red"}}>*</span></label>
          <br />
          <input type="text" className="city-field"/>
        </div>
        <br />
        <div className="address-form-input">
          <label><b>State </b><span style={{color: "red"}}>*</span></label>
          <br />
          <select className="state-field">
            <option>Choose...</option>
          </select>
        </div>
        <br />
        <div className="address-form-input">
          <label><b>Pin Code </b><span style={{color: "red"}}>*</span></label>
          <br />
          <input type="text" className="pincode-field"/>
        </div>
        <br />
        <div className="address-form-input">
          <label><b>Country </b><span style={{color: "red"}}>*</span></label>
          <br />
          <input type="text" className="country-field"/>
        </div>
        <br />
        <div className="address-form-input">
          <label><b>Contact No </b><span style={{color: "red"}}>*</span></label>
          <br />
          <input type="text" className="contact-no-field"/>
        </div>
        <br />
      </div>
    );
  }
}

export default AddressForm;