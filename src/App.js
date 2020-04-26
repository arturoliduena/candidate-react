import React, { Fragment } from 'react';
import './styles.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Donate from './components/donate';
import TeamUp from './components/teamUp';
import Mask from './components/mask';
import Updates from './components/updates';
import Events from './components/events';
import Footer from './components/footer';
import config from './config';

const { nav, hero, donate, image } = config;
function App() {
  return (
    <Fragment>
      <div class="container-fluid container-banner" style={{ backgroundImage: `url(${image})` }}>
        <Nav config={nav}/>
        <Hero config={hero}/>
        <Donate config={donate}/>
      </div>
      <TeamUp />
      <Mask />
      <Updates />
      <Events />
      <Footer />
    </Fragment>
  );
}

export default App;
