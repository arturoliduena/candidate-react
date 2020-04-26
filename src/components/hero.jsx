import React from 'react';

const Hero = ({ config }) => {
  const { title, description } = config;
  return (
    <div class="hero">
      <div class="a-fresh-new-voice-fo">
        {title.split('\n').map(text => <p>{text}</p>)}
      </div>
      <div class="elevator-pitch-lore">
        {description.split('\n').map(text => <p>{text}</p>)}
      </div>
    </div>
  )
}

export default Hero;