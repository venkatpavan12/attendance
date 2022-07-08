import React from "react";

import "../Style/style.css";
const About = () => {
  return (
    <>
      <section class="main">
        <div class="heading">
          <h1>About Us</h1>
        </div>
        <div style={{backgroundImage: "url(../assets/p8.jpg)"}}></div>
      </section>
      <section class="desc">
        <p>
          <i>
            Techmihirnaik group is a leading supplier of cutting edge technology
            and software, supplying enterprises of all sizes with scalable
            solution.
          </i>
        </p>
        <hr />
      </section>
      <section class="desc">
        <p>
          We're resourceful while keeping an eye on the time and your budget.
          What sets us apart from the competition is our attention to:
          <br />
          − detail <br />
          − punctuality <br />− project management expertise
        </p>

        <hr />
        <h3 class="title">Mission</h3>

        <div class="g">
          <div class="points">
            <i class="fa-solid fa-globe ic"></i>
            <h4>DYNAMISM</h4>
            <p>
              We contribute to your firm our varied expertise so that your
              materials will not only look amazing but they will also provide
              great results. Yes, we have received recognition for our efforts
              because we work with dynamism and don't develop concepts in a
              vacuum, we make sure they adhere to industry norms.
            </p>
          </div>
          <div class="points">
            <i class="fa-solid fa-hourglass ic"></i>
            <h4>DEADLINES ARE MET</h4>
            <p>
              We've worked with a few casinos and state agencies, and their
              policy is that if we don't meet a deadline, we're fired. Period.
            </p>
          </div>

          <div class="points">
            <i class="fa-solid fa-award ic"></i>
            <h4>A SUCCESS STRATEGY</h4>
            <p>
              We've discovered that doing preliminary research of your problems
              and queries is the most effective approach to acquire tangible
              outcomes. We propose a success strategy by the complete
              understanding of you and your consumers.
            </p>
          </div>
          <div class="points">
            <i class="fa-solid fa-user-tie ic"></i>
            <h4>PROFESSIONAL</h4>
            <p>
              Initial Perception is made up of professionals with corporate and
              agency expertise from a variety of backgrounds. As a result, no
              account will ever be assigned to second-tier support personnel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
