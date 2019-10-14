import React from 'react'
import ListImage from './ListImage'
import item19 from '../work/item19.jpg'
import item20 from '../work/item20.jpg'
import item21 from '../work/item21.jpg'
import item22 from '../work/item22.jpg'
import item23 from '../work/item23.jpg'
import item24 from '../work/item24.jpg'
import item25 from '../work/item25.jpg'
import item26 from '../work/item26.jpg'

function NavImage() {

    return (
        <div className="container-fluid cont">
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
            <div className="wrapper">
                <ul className="main pb-5 mb-5">
                    <ListImage
                        img={item20}
                        title="HERBAL BEAUTY SALON"
                        category="BRANDIND, IDENTITY" />
                    <ListImage
                        img={item23}
                        category=" BRANDIND, BROCHURE"
                        title="TAILORING INTERIOR" />
                    <ListImage
                        img={item22}
                        category="BRANDIND, IDENTITY"
                        title="PIXFLOW STUDIO" />
                    <ListImage
                        img={item21}
                        category="WEB, PHOYOGRAPHY"
                        title="DESINGBLAST INC" />
                    <ListImage
                        img={item24}
                        category="BRANDIND, IDENTITY"
                        title="HARDDOT STONE" />
                    <ListImage
                        img={item25}
                        category="BRANDIND, IDENTITY"
                        title="EDUCAMP SCHOOL" />
                    <ListImage
                        img={item26}
                        category=" BRANDIND, BROCHURE"
                        title="THIRD EYE GLASSES" />
                    <ListImage
                        img={item19}
                        category="WEB, PHOYOGRAPHY"
                        title="VIOLATOR SERIES" />
                </ul>
            </div>

        </div>

    )

}

export default NavImage