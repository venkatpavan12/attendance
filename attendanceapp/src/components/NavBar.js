/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo1 from "../images/room.png";
import { Link } from "react-router-dom";
import "../Style/index.css";
const NavBar = ({ user }) => {
  return (
    <>
      <div className="nav">
        <img className="logo1" src={logo1} />
        <input type="checkbox" id="click" />
        <label htmlFor="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <Link class="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user && (
            <React.Fragment>
              {user.isAdmin && (
                <li>
                  <Link to="/allprofile">AllProfile</Link>
                </li>
              )}
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logout">logout</Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </>
  );
};
export default NavBar;
