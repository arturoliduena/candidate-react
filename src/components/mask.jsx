import React from 'react';

const Mask = () => {
  return (
    <div class="mask">
      <div class="container-mask">
        <div class="title-container">
          <div class="title-header"> A fresh new plan for Us </div>
          <div class="group-row">
            <div class="line"></div>
            <img src={require("../assets/rish-based-favicon.png")} alt="" class="star-logo" />
            <div class="line"></div>
          </div>
        </div>

        <div class="container issues">
          <div class="row">
            <div class="col">
              <div class="issue-title">
                Candidate’s plan for Education
          </div>
              <div class="issue-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
          </div>
            </div>
            <div class="col">
              <div class="issue-title">
                Candidate's plan for Environment
          </div>
              <div class="issue-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
          </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="issue-title">
                Candidate's plan for Immigration
          </div>
              <div class="issue-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
          </div>
            </div>
            <div class="col">
              <div class="issue-title">
                Candidate's plan for Healthcare
          </div>
              <div class="issue-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
          </div>
            </div>
          </div>
        </div>

        <div class="get-to-know-the-enti">
          Get to know the entire plan »
    </div>

        <div class="form-update">
          <div class="field">
            <input type="text" name="f-fullname" id="f-fullname" placeholder="firstName lastName" />
            <label for="f-fullname">Name</label>
          </div>
          <div class="field">
            <input type="email" name="f-email" id="f-email" placeholder="someone@example.com" />
            <label for="f-email">Email</label>
          </div>
          <div class="field">
            <input type="text" name="f-zip" id="f-zip" placeholder="number" />
            <label for="f-zip">ZIP</label>
          </div>
          <div class="sign-for-updates">
            Sign for updates
      </div>
        </div>
      </div>
    </div>
  )
}

export default Mask