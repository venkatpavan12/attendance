import React, { useState} from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contact } from "../actions/contact";
import { connect } from "react-redux";
const ContactForm = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    contact(name, email, message);
  };
  return (
    <React.Fragment>
      <ToastContainer />
      <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
      <div
        className="container"
        style={{ marginTop: "50px", marginBottom: "50px", height: "600px" }}
      >
        <div className="content" style={{ marginTop: "50px" }}>
          <div className="left-side">
            <div className="address details">
              <ion-icon name="location"></ion-icon>
              <div className="topic">Address</div>
              <div className="text-one">Bandra, Mumbai</div>
            </div>
            <div className="phone details">
              <ion-icon name="call"></ion-icon>
              <div className="topic">Phone</div>
              <div className="text-one">+91 9528670242</div>
            </div>
            <div className="email details">
              <ion-icon name="mail"></ion-icon>
              <div className="topic">Email</div>
              <div className="text-one">roommate@techmihirnaik.in</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">CONTACT US</div>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="input-box">
                <input
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  type="text"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-box message-box">
                <input
                  name="message"
                  value={message}
                  onChange={(e) => onChange(e)}
                  type="text"
                  placeholder="Message"
                  required
                />
              </div>
              <div className="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { contact })(ContactForm);
