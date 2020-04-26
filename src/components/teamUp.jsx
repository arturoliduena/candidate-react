import React from 'react';

const TeamUp = () => {
  return (
    <div class="team-up ">
      <img src={require("../assets/homepage/1189164.png")} alt="" class="logo-hands" />
      <div class="team-up-info">
        <div class="team-up-with-canidat">
          Team up with <br /> Canidate <br />
        </div>
        <div class="lorem-ipsum-dolor-si">
          Elevator pitch. Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed <br /> do eiusmod.
        labore et dolore magna aliqua.
      </div>
      </div>
      <div class="form-team-up">
        <div class="field">
          <input type="text" name="fullname" id="fullname" placeholder="firstName lastName" />
          <label for="fullname">Name</label>
        </div>
        <div class="field-group-row">
          <div class="field">
            <input type="email" name="email" id="email" placeholder="someone@example.com" />
            <label for="email">Email</label>
          </div>
          <div class="field">
            <input type="text" name="zip" id="zip" placeholder="number" />
            <label for="zip">ZIP</label>
          </div>
        </div>
        <div class="sign-up-button">
          Sign up for the Campaign
      </div>
      </div>
    </div>
  )
}

export default TeamUp;