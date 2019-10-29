import React from 'react';
import * as fas from '@fortawesome/free-solid-svg-icons'
import IconsAbout from './IconsAbout'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    AOS.init()
    return (
        <div className="container mt-4 mb-5 ">
            <div className="row mt-4">
                <div className="col-12 col-sm-1 col-lg-2 col-md-2 mt-5" >
                </div>
                <div className="col-sm-10 col-lg-8 col-md-8 col-12 mt-5  pl-0 pr-0">
                    <span className="title  text-center text-md-left mt-2 d-flex justify-content-center">Quienes Somos?</span>
                    <blockquote className="blockquote text-center ">
                        <h5>We provide high quality and cost effective offshore web and software development services </h5>
                    </blockquote>
                </div>
                <div className="col-12 col-sm-1 col-lg-2 col-md-2 mt-5">
                </div>
            </div>
            <div className="row mt-4 d-flex justify-content-center">
                <IconsAbout
                    icon={fas.faLaptopCode}
                    animate="fade-up"
                    title="Aplicaciones Web"
                    text="¿Necesitas una aplicacion web?"
                    timeAnimation="200"
                />
                <IconsAbout
                    icon={fas.faLaptopCode}
                    animate="fade-up"
                    title="Aplicaciones Web"
                    text="¿Necesitas una aplicacion web?"
                    timeAnimation="400"
                />

            </div>
        </div>
    );
}
export default About;