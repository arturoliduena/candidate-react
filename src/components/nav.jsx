import React from 'react';

const Nav = ({ config }) => {
  const { logo, links, socialMedia, backgroundColor } = config;
  return (
    <nav class="nav nav-pills nav-justified" style={{ backgroundColor }}>
      <div class="container-nav">
        <img src={logo} alt="" class="logo-candidate" />
        <div class="link-group">
          {
            links.map(link => <a class={link.class} href={link.href}>{link.content}</a>)
          }
        </div>
        <div class="social-media-group">
          {
            socialMedia.map(elem => <img src={elem} class="logo-social-media" alt="" />)
          }
        </div>
      </div>
    </nav>
  )
};

export default Nav;