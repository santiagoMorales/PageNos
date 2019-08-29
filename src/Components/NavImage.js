import React from 'react'

function NavImage() {



    return (
        <div className="container">
            <div className="row">
                <div className="col-2 mt-5 pr-1">
                </div>
                <div className="col-8 mt-5 ">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item  pr-4">
                                    <a className="nav-link" href="#!">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item pr-4">
                                    <a className="nav-link" href="#!">Features</a>
                                </li>
                                <li className="nav-item pr-4">
                                    <a className="nav-link" href="#!">Pricing</a>
                                </li>
                                <li className="nav-item pr-4">
                                    <a className="nav-link " href="#!">Disabled</a>
                                </li>
                                <li className="nav-item pr-4">
                                    <a className="nav-link " href="#!">Disabled</a>
                                </li>
                                <li className="nav-item pr-4">
                                    <a className="nav-link " href="#!">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-2 pl-1">
                </div>
            </div>
            <div className="row">
                <ul>
                    <li>hola </li>
                    <li> hola 2</li>
                </ul>
            </div>
        </div>
    )

}

export default NavImage