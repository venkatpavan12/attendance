import React from "react";
import "../Style/login.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login, register } from "../actions/auth";
import PropTypes from "prop-types";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import store from "../store";

const LoginSignup = ({ login, register, isAuthenticated,isRegistered }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const { username, password, email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.name === "login") {
      login(username, password);
    } else if (e.target.name === "register") {
      register(username, email, password);
    }
  };
  if (isAuthenticated) {
    if(isRegistered){
      return <Navigate to="/profile-form/"/>
    }
    window.location.href = "/profile/";
    // return <Navigate to="/profile" />;
  }
  return (
    <div>
      <ToastContainer />
      <div className="contex">
        <img class="TMN-logo" src="./logo/ROOMMATE-logo-black.png" alt="" />
      </div>
      <div className="containers">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="back">
            {/*  <div className="text">
          <span class="text-1">Complete journey <br> with one step</span>
          <span class="text-2">Let's get started</span>
        </div>  */}
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={(e) => onSubmit(e)} name="login">
                <div className="input-boxes">
                  <div className="input-box">
                    <i class="fas fa-user"></i>
                    <input
                      name="username"
                      value={username}
                      onChange={(e) => onChange(e)}
                      type="text"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text">
                    <a href="forgot">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account ? <label for="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form onSubmit={(e) => onSubmit(e)} name="register">
                <div className="input-boxes">
                  <div className="input-box">
                    <i class="fas fa-user"></i>
                    <input
                      name="username"
                      value={username}
                      onChange={(e) => onChange(e)}
                      type="text"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account ?{" "}
                    <label for="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isRegistered:state.auth.isRegistered
  };
};

LoginSignup.propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isRegistered:PropTypes.bool,
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      login(username, password)(dispatch);
    },
    register: (username, email, password) =>
      register(username, email, password)(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
