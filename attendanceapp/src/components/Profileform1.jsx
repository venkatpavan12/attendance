import React from 'react'
import "../Style/profileform.css";
const Profileform = () => {
  return (
    <div>

<div className="container" style={{marginTop:"50px"}}>
        <div className="content">
         
          <div className="right-side">
            <div className="topic-text">Profile Details</div>

            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your Intern ID" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your TMN mail ID" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your Internship Year" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your Contact number" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your Team number" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your Department" />
              </div>
              
              <p>Gender :</p>
              <div>
  <input type="radio" id="age1" name="age" value="30"/>
  <label for="age1">Male</label><br/>
  <input type="radio" id="age2" name="age" value="60"/>
  <label for="age2">Female</label><br/>  

  </div>
              <div className="input-box message-box">
                <input type="text" placeholder="Description" />
              </div>

              <form action="/action_page.php">
  <input type="file" id="myFile" name="filename"/>
  </form>
              <div className="button">
                <input type="button" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="links">
        <a href="https://roommate.techmihirnaik.in/">
          <ion-icon class="social-icon" name="link-outline"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/showcase/tmn-roommate/">
          <ion-icon class="social-icon" name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://instagram.com/tmn_roommate?utm_medium=copy_link">
          <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
        </a>
        <a href="https://www.facebook.com/Tmn_Roommate-109802404997979/">
          <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
        </a>
      </div>
    </div>
  )
}

export default Profileform