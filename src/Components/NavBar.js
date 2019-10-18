import React from 'react'
import NavLink from './NavLink'


const NavBar = () => (

  <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
      <div className="nav-item"></div>
      <NavLink
        section="home"
      />
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

    </div>
  </nav>
);

export default NavBar;