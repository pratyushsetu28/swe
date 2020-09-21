import React from "react";
import "./PersonalDetailsForm.css";

class PersonalDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salutation: "",
      firstName: "",
      middleName: "",
      lastName: "",
      maritalStatus: "",
      dob: "",
      placeOfBirth: "",
      gender: "",
      physicallyChallenged: null,
      kashmiriImmigrant: null,
      fatherName: "",
      motherName: "",
      category: "",
      nationality: "",
      religion: "",
      photograph: ""
    };
  }

  render() {
    return (
      <div className="personal-details">
        <div className="form-heading">
          <b>Personal Details</b>
        </div>
        <br />
        <div className="form-details">
          <div className="mandatory-field-info">
            Fields marked with <span style={{color: "red"}}>*</span> are mandatory.
          </div>
          <br />
          <div className="name">
            <div className="salutation">
              <label><b>Salutation </b><span style={{color: "red"}}>*</span></label>
              <br />
              <select className="salutation-field">
                <option>Dr</option>
              </select>
            </div>
            <div className="first-name">
              <label><b>First Name </b><span style={{color: "red"}}>*</span></label>
              <br />
              <input type="text" className="first-name-field" placeholder="First Name"/>
            </div>
            <div className="middle-name">
              <label><b>Middle Name</b></label>
              <br />
              <input type="text" className="middle-name-field" placeholder="Middle Name"/>
            </div>
            <div className="last-name">
              <label><b>Last Name</b></label>
              <br />
              <input type="text" className="last-name-field" placeholder="Last Name"/>
            </div>
          </div>
          <br />
          <div className="marital-status-dob-place-of-birth">
            <div className="marital-status">
              <label><b>Marital Status </b><span style={{color: "red"}}>*</span></label>
              <br />
              <select className="marital-status-field">
                <option>Married</option>
                <option>Unmarried</option>
              </select>
            </div>
            <div className="dob">
              <label><b>DOB </b><span style={{color: "red"}}>*</span></label>
              <br />
              <input type="text" className="dob-field" placeholder="14-09-2020" />
            </div>
            <div className="place-of-birth">
              <label><b>Place of Birth </b><span style={{color: "red"}}>*</span></label>
              <br />
              <input type="text" className="place-of-birth-field" />
            </div>
          </div>
          <br />
          <div className="gender-pwd-kashmiri-immigrant">
            <div className="gender">
              <label><b>Gender </b><span style={{color: "red"}}>*</span></label>
              <div className="select-gender">
                <input type="radio" id="male" name="gender" value="male"/>
                <label for="male">Male</label>
                <br />
                <input type="radio" id="female" name="gender" value="female"/>
                <label for="female">Female</label>
                <br />
                <input type="radio" id="others" name="gender" value="others"/>
                <label for="others">Others</label>
              </div>
            </div>
            <div className="pwd">
              <label><b>Physically Challenged </b><span style={{color: "red"}}>*</span></label>
              <div className="select-pwd">
                <input type="radio" id="yes" name="physicallyChallenged" value="yes"/>
                <label for="male">Yes</label>
                <br />
                <input type="radio" id="no" name="physicallyChallenged" value="no"/>
                <label for="female">No</label>
                <br />
                <br />
              </div>
            </div>
            <div className="kashmiri-immigrant">
              <label><b>Kashmiri Immigrant </b><span style={{color: "red"}}>*</span></label>
              <div className="select-kashmiri-immigrant">
                <input type="radio" id="yes" name="kashmiriImmigrant" value="yes"/>
                <label for="male">Yes</label>
                <br />
                <input type="radio" id="no" name="kashmiriImmigrant" value="no"/>
                <label for="female">No</label>
                <br />
                <br />
              </div>
            </div>
          </div>
          <br />
          <div className="father-mother">
            <div className="father-name">
              <label><b>Father's Name </b><span style={{color: "red"}}>*</span></label>
              <br />
              <input type="text" className="father-name-field" />
            </div>
            <div className="mother-name">
            <label><b>Mother's Name </b><span style={{color: "red"}}>*</span></label>
              <br />
              <input type="text" className="mother-name-field" />
            </div>
          </div>
          <br />
          <div className="category-nationality-religion">
            <div className="category">
              <label><b>Category </b><span style={{color: "red"}}>*</span></label>
              <br />
              <select className="category-field">
                <option></option>
                <option>General</option>
                <option>SC</option>
                <option>ST</option>
              </select>
            </div>
            <div className="nationality">
              <label><b>Nationality </b><span style={{color: "red"}}>*</span></label>
              <br />
              <input type="text" className="nationality-field" />
            </div>
            <div className="religion">
              <label><b>Religion </b><span style={{color: "red"}}>*</span></label>
              <br />
              <input type="text" className="religion-field" />
            </div>
          </div>
          <br />
          <div className="photograph">
            <label><b>Photograph </b><span style={{color: "red"}}>*</span></label>
            <br />
            <div className="upload-photo">
              <input type="file" id="photograph" />
              <img src="#" alt="photograph" className="photo"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalDetailsForm;
