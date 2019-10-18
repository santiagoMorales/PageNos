import React from 'react'
import { Link } from "react-scroll";


const NavLink = ({ section }) => (
    <Link
        className="link-nav"
        activeClass="active"
        to={section}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
    > {section}</Link>
)
export default NavLink