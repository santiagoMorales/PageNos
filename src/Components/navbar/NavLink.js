import React from 'react'
import { Link } from "react-scroll";


const NavLink = ({ section }) => (
    <li className="nav-item ">
        <Link
            className="link-nav"
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        > {section}</Link>
    </li>
)

export default NavLink