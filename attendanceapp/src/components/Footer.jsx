import React from "react";
import logo from "../images/tech.jpeg";

import { Link } from "react-router-dom";
import "../Style/index.css";
const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-left">
          <img class = "l" src={logo} />
          <p class="footer-links">
            <Link to="/" class="link-1">
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
          </p>
          <p class="footer-company-name">
            &copy; Copyright 2022 -<strong>Techmihirnaik.</strong>All rights
            reserved.
          </p>
        </div>
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Techmihirnaik</span> Bandra, Mumbai
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <Link
              to="https://www.teams.techmihirnaik.in/contact"
              class="contact"
            >
              Contact - 8530392350
            </Link>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <Link to="mailto:support@company.com">
                hello@techmihirnaik.in
              </Link>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Techmihirnaik group is a leading supplier of cutting edge technology
            and software, supplying enterprises of all sizes with scalable
            solution.
          </p>
          <div class="footer-icons">
            <Link to="https://www.facebook.com/techmihirnaik/">
              <i class="bi bi-facebook"></i>
            </Link>
            <Link to="https://twitter.com/mihirnaik?lang=en">
              <i class="bi bi-twitter"></i>
            </Link>
            <Link to="https://www.linkedin.com/company/techmihirnaik/mycompany/">
              <i class="bi bi-linkedin"></i>
            </Link>
            <Link to="https://instagram.com/techmihirnaik?igshid=9jia5fme3o4r">
              <i class="bi bi-instagram"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
