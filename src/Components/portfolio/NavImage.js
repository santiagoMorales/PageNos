import React from 'react'
import ListImage from './ListImage'
import item20 from '../../work/item20.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function NavImage() {
    AOS.init();
    return (
        <div className="container-fluid cont">
            <div className="row">
                <div className="col-2 mt-5 pr-1">
                </div>
                <div className="col-8 mt-5 text-center ">
                    <h1> Seguridad</h1>
                </div>
                <div className="col-2 pl-1">
                </div>
            </div>
            <div className="wrapper ">
                <ul className="main pl-0 d-flex justify-content-center">
                    <ListImage
                        img={item20}
                        title="HERBAL BEAUTY SALON"
                        category="BRANDIND, IDENTITY"
                        timeAnimation="200" />
                </ul>
            </div>

        </div>

    )

}

export default NavImage