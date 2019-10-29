import React from 'react'
import NavLink from './NavLink'
import navLogo from '../../navLogo.png'


const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <a className="navbar-brand" href="http://google.com">
        <img className="logoNav" src={navLogo} alt="ok" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
            section="about"
          />
          <NavLink
            section="services"
          />
          <NavLink
            section="work"
          />
          <NavLink
            section="team"
          />
          <NavLink
            section="blog"
          />
          <NavLink
            section="clients"
          />
          <NavLink
            section="contact"
          />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;