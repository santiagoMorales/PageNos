import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Cards({ icono, mensaje, titulo, timeAnimation }) {

    return (
        <div className=" mb-2 mt-2 col-12 col-md-6 col-lg-3 col-sm-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={timeAnimation}>
            <div className="serviceCard card p-4" >
                <div className="card-body p-1">
                    <span className="d-flex justify-content-center pt-4 pb-3"> <FontAwesomeIcon icon={icono} className="card-icon" size="5x" /></span>
                    <h6 className="card-subtitle mb-2 text-center mt-2"><strong>{titulo}</strong></h6>
                    <p className="card-text text-center">{mensaje}</p>
                </div>
            </div>
        </div>
    );
}
export default Cards