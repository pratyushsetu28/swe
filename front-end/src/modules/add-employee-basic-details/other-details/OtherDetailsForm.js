import React from "react";
import "./OtherDetailsForm.css"

class OtherDetailsForm extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    hobbies: "",
    favoritePastTime: "",
    fax: "",
    officeNo: "",
    email: "",
    mobileNo: ""
  };
  }

  render() {
  return (
    <div className="other-details">
    <div className="form-head"></div>
    <div className="form-details">
      <div className="hobbies-fav-past-time-fax">
      <div className="other-details-input">
        <label><b>Hobbies</b></label>
        <br />
        <input type="text" className="hobbies-field"/>
      </div>
      <div className="other-details-input">
        <label><b>Favorite Past Time</b></label>
        <br />
        <input type="text" className="favorite-past-time-field" />
      </div>
      <div className="other-details-input">
        <label><b>Fax</b></label>
        <br />
        <input type="text" className="fax-field" />
      </div>
      </div>
      <br />
      <div className="contact-info">
      <div className="other-details-input">
        <label><b>Office No</b></label>
        <br />
        <input type="text" className="office-no-field" />
      </div>
      <div className="other-details-input">
        <label><b>Email</b></label>
        <br />
        <input type="text" className="email-field" />
      </div>
      <div className="other-details-input">
        <label><b>Mobile No</b></label>
        <br />
        <input type="text" className="mobile-no-field" />
      </div>
      </div>
      <br />
    </div>
    </div>
  );
  }
}

export default OtherDetailsForm;