import React from 'react'


const NavBar = () =>(
    
    <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link text-white"href="/#"  >Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/#"  >Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/#" >Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white" href="/#" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;