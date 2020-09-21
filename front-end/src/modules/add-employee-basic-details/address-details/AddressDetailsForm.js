import React from "react";
import AddressForm from "./address/AddressForm";
import "./AddressDetailsForm.css";

class AddressDetailsForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {

  };
  }

  render() {
  return (
    <div className="address-details">
    <div className="form-head">
      <b>Address Details</b>
    </div>
    <div className="form-details">
      <div className="present-address-form">
      <label className="form-label">
        Present Address
      </label>
      <hr />
      <br />
      <AddressForm className="present-address" />
      </div>
      <div className="permanent-address-form">
      <label className="form-label">
        Permanent Address
      </label>
      <hr />
      <br />
      <AddressForm className="permanent-address" />
      </div>
    </div>
    </div>
  );
  }
}

export default AddressDetailsForm;