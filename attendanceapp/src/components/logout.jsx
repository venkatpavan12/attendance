import React, { Component } from "react";
import { logout } from "../actions/auth";
import { Navigate } from "react-router-dom";
import store from "../store";
import { connect } from "react-redux";
class Logout extends Component {
  componentDidMount() {
    logout();
    window.location.href = "/";
  }
  render() {
    return null;
  }
}

export default connect(null, logout)(Logout);
