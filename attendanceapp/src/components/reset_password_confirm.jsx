import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../actions/auth";
import "../Style/forgot.css";
const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password:"",

  });
  const { uid, token } = useParams();
  const { new_password,re_new_password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    


    reset_password_confirm(uid,token,new_password,re_new_password);
    setRequestSent(true);
  };
  if (requestSent) {
    return <Navigate to="/" />;
  }
  return (
    <div className="to">
        <div class="rows">
      <h1 class="py-3 text-5xl md:text-7xl font-bold">Reset Password</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <p>
            <label for="new_password">New Password</label>
          </p>
          <input
            name="new_password"
            value={new_password}
            onChange={(e) => onChange(e)}
            type="password"
            placeholder="New password"
            id="new_password"
            required
          />
          <p>
            <label for="re_new_password">Confirm New Password</label>
          </p>
          <input
            name="re_new_password"
            value={re_new_password}
            onChange={(e) => onChange(e)}
            type="text"
            placeholder="Confirm new password"
            id="re_new_password"
            required
          />
          <button type="submit" value="Reset">
            Confirm
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};
export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
