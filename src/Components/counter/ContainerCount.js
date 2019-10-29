import React from 'react'
import Count from './Count'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContainerCount = ({ numero, icono, titulo, timeAnimation }) => (

    <div className=" col-12 col-md-6 col-lg-3 col-sm-12 col-count" data-aos="fade-left" data-aos-easing="linear" data-aos-duration={timeAnimation}>
        <div className="container p-0">
            <div className="row">
                <FontAwesomeIcon icon={icono} color="#000" size="3x" />
                <div className="col">
                    <Count
                        numero={numero} />
                    <h6 className="title-count">{titulo}</h6>
                </div>
            </div>
        </div>
    </div>

)
export default ContainerCount;