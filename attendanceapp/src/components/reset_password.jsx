import React,{useState} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import { reset_password } from '../actions/auth';
import "../Style/forgot.css";
const ResetPassword=({reset_password})=>{
    const [requestSent,setRequestSent]=useState(false);
    const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email)
    setRequestSent(true)
  }
  if(requestSent){
    return <Navigate to="/"/>

  }
    return (
      <div className="to">
        <div class="rows">
          <h1 class="py-3 text-5xl md:text-7xl font-bold">Forgot Password</h1>
          <h6 class="information-text">
            Enter your information to reset your password.
          </h6>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <p>
                <label for="email">Email</label>
              </p>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  required

                />
                <button type="submit" value="Reset">Reset</button>

            </div>
          </form>
        </div>
      </div>
    );
}
export default connect(null,{reset_password})(ResetPassword);
