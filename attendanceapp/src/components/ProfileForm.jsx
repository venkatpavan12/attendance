import React from "react";

import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import store from "../store";
import { profile_form } from "../actions/auth";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
import "../Style/profileform.css";
const ProfileForm = ({ profile_form,isProfileCreated }) => {
  const [formData, setFormData] = useState({
    internid: "",
    tmnemailid: "",
    internship_year:"",
    contact_number: "",
    team: "",
    department:"",
    gender:"",
    description:"",
  });
  const { internid,tmnemailid,internship_year,contact_number,team,department,description } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

const [photo,setPhoto]=useState();
const [gender,setGender]=useState();

  const onSubmit = (e) => {
    e.preventDefault();
    const uploadData=new FormData();
    uploadData.append("internid",formData.internid)
    uploadData.append("tmnemailid",formData.tmnemailid)
    uploadData.append("internship_year",formData.internship_year)
    uploadData.append("contact_number",formData.contact_number)
    uploadData.append("team",formData.team)
    uploadData.append("department",formData.department)
    uploadData.append("gender",gender)
    uploadData.append("description",formData.description)
    uploadData.append("photo",photo,photo.name)
    
    // apply_leave(startdate, enddate, reason);
    profile_form(uploadData);
  };
  if (!localStorage.getItem("access")) {
    return <Navigate to="/login" />;
  }
  if(! store.getState().auth.isRegistered){
      window.location.href = "/profile";
  }
  if(isProfileCreated){
    window.location.href="/profile"
  }

  return (
    <>
      <ToastContainer />
      <div className="container" style={{marginTop:"50px"}}>
        <div className="content">
         
          <div className="right-side">
        <div className="topic-text">Profile Details</div>

        <form onSubmit={(e) => onSubmit(e)} enctype="multipart/form-data">
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your Intern ID"
              name="internid"
              value={internid}
              onChange={(e) => onChange(e)}
              className="form-control"
              required
            />
          </div><br />
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your TMN mail ID"
              name="tmnemailid"
              value={tmnemailid}
              onChange={(e) => onChange(e)}
              className="form-control"
              required
            />
          </div><br />
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your Internship Year"
              name="internship_year"
              value={internship_year}
              onChange={(e) => onChange(e)}
              className="form-control"
              required
            />
          </div><br />
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your Contact number"
              name="contact_number"
              value={contact_number}
              onChange={(e) => onChange(e)}
              className="form-control"
              required
            />
          </div><br />
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your Team number"
              name="team"
              value={team}
              onChange={(e) => onChange(e)}
              className="form-control"
              required
            />
          </div><br />
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your Department"
              name="department"
              value={department}
              onChange={(e) => onChange(e)}
              className="form-control"
              required
            />
          </div><br />
          <p>Gender:</p>
          <div>
            
            <input
              type="radio"
              value="Male"
              name="gender"
              id="male"
              onChange={(e) => setGender("Male")}
              required
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              value="Female"
              name="gender"
              id="female"
              onChange={(e) => setGender("Female")}
              required
            />
            <label htmlFor="female">Female</label>
          </div><br />
          <div className="input-box">
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={description}
              onChange={(e) => onChange(e)}
              className="form-control"
              required
            />
          </div><br />
          <div>
            <input
              type="file"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />
          </div><br />

          <div className="button">
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isProfileCreated:state.auth.isProfileCreated,
  };
};

ProfileForm.propTypes = {
  profile_form: PropTypes.func.isRequired,
  isProfileCreated:PropTypes.bool
};
export default connect(mapStateToProps, { profile_form })(ProfileForm);
