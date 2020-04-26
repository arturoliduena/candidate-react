import React from 'react';

const Events = () => {
  return (
    <div class="events">
      <div class="title-container">
        <div class="title-header" style={{ color: '#181C26' }}> Find an event nearby </div>
        <div class="group-row">
          <div class="line" style={{ borderColor: '#181C26' }}></div>
          <img src={require("../assets/rish-based-favicon.png")} alt="" class="star-logo" />
          <div class="line" style={{ borderColor: '#181C26' }}></div>
        </div>
        <div class="form-event">
          <input type="text" name="input-text-event" id="input-text-event"
            placeholder="Address, Street, City or ZIP Code" class="input-text-event" />
          <div class="button-find"> FIND </div>
        </div>
      </div>
      <div class="event">
        <div class="preview">
          <img src={require("../assets/homepage/img-event-1.png")} alt="" class="img-event" />
          <div class="button-event">
            RSVP
        </div>
        </div>
        <div class="event-info">
          <div class="event-title">
            Campaign Kickoff
        </div>
          <div class="event-date">
            September 14, 2020, 01:00 PM
        </div>
          <div class="event-place">
            Big Ben Tavern, 636 Hwy 6, Ste 1000 <br /> Austin, TX
        </div>
          <div class="event-detail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </div>
        </div>
      </div>
      <div class="event">
        <div class="preview">
          <img src={require("../assets/homepage/img-event-2.png")} alt="" class="img-event" />
          <div class="button-event">
            RSVP
        </div>
        </div>
        <div class="event-info">
          <div class="event-title">
            Candidate´s Event
        </div>
          <div class="event-date">
            September 14, 2020, 01:00 PM
        </div>
          <div class="event-place">
            Big Ben Tavern, 636 Hwy 6, Ste 1000 <br /> Austin, TX
        </div>
          <div class="event-detail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </div>
        </div>
      </div>
      <div class="find-more-events">
        Find more events »
    </div>
    </div>
  )
}

export default Events;