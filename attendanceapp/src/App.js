import React, { Component } from "react";
import { Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
import Login from "./components/LoginSignup";
import About from "./components/About";
import Profile from "./components/Profile";
import AllProfile from "./components/AllProfile";
import Requestform from "./components/Requestform";
import { Provider } from "react-redux";
import store from "./store";
import jwtDecode from "jwt-decode";
import Logout from "./components/logout";
import ResetPassword from "./components/reset_password";
import ResetPasswordConfirm from "./components/reset_password_confirm";
import ProfileForm from "./components/ProfileForm";
import UserProfile from "./components/UserProfile";
class App extends Component {
  state = {};
  componentDidMount() {
    try {
      const user = jwtDecode(localStorage.getItem("access"));
      const username=localStorage.getItem("username");
      if(username==="admin"){
      this.setState({user:{ ...user, isAdmin:true}});
      }else{
        this.setState({ user: { ...user, isAdmin: false } });
      }
    } catch (ex) {}
  }
  render() {
    return (
      <Provider store={store}>
        <>
          <NavBar user={this.state.user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />

            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user-profile/:id" element={<UserProfile />} />
            <Route path="/requestform" element={<Requestform />} />

            <Route path="/allprofile" element={<AllProfile />} />
            <Route path="/forgot" element={<ResetPassword />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route path="/profile-form" element={<ProfileForm />} />
          </Routes>
          <Footer />
        </>
      </Provider>
    );
  }
}
export default App;
