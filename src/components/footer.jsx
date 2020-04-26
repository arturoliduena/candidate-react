import React from 'react';

const Footer = () => {
  return (
    <div class="footer">
      <img src={require("../assets/homepage/vertical.png")} alt="" class="logo-vertical" />
      <div class="about">
        <div class="about-text">
          <p>
            <b>This Candidate</b> is a Democrat running for Next Election because we deserve a bold fighter who will lead our
          Legislature. Together, we will collaboratively develop and implement forward-looking policies to build a
          prosperous future for our state.
        </p>
          <p>
            © 2019 Copyright Candidate - Terms and Conditions
        </p>
          <p>
            Built by Tectonica {'&'} A+G
        </p>
        </div>

        <div class="paid-for-by-candidat"> Paid for by CANDIDATE</div>
      </div>
      <div class="social-media-group">
        <img src={require("../assets/homepage/sm-twitter.png")} class="logo-social-media" alt="" />
        <img src={require("../assets/homepage/facebook.png")} class="logo-social-media" alt="" />
        <img src={require("../assets/homepage/instagram.png")} class="logo-social-media" alt="" />
      </div>
    </div>
  )
};

export default Footer;