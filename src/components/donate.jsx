import React from 'react';

const Donate = ({ config }) => {
  const { logo, buttons, backgroundColor } = config
  return (
    <div class="bg" style={{backgroundColor}}>
      <div class="container-donate">
        <img src={logo} alt="" class="logo-donate" />
        <div class="donate">
          DONATE
      </div>
        <div class="boxes-group">
          {
            buttons.map(text => <div class="act-blue-buttons"> {text} </div>)
          }
        </div>
      </div>
    </div>
  )
};

export default Donate;