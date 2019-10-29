import React from 'react'
import * as ifS from '@fortawesome/free-solid-svg-icons'
import * as ifB from '@fortawesome/free-brands-svg-icons';
import ContainerCount from './ContainerCount';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Counter() {
    AOS.init()
    return (

        <div className="container container-count" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="400" >
            <div className="row p-4 ">

                <ContainerCount
                    icono={ifS.faDesktop}
                    numero={350}
                    titulo="HAPPY CLIENTS"
                    timeAnimation="200"
                />
                <ContainerCount
                    icono={ifS.faCameraRetro}
                    numero={780}
                    titulo="PHOTO CAPTURE"
                    timeAnimation="400"
                />
                <ContainerCount
                    icono={ifS.faLaptopCode}
                    numero={850}
                    titulo="WORK COMPLETED"
                    timeAnimation="600"
                />
                <ContainerCount
                    icono={ifB.faWeixin}
                    numero={650}
                    titulo="TELEPHONIC TALK"
                    timeAnimation="800"
                />
            </div>
        </div>
    )
}

export default Counter; 