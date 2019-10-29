import React, { useState } from 'react'

function Video() {

    /*
    ***************** PARA USAR EL MODAL DEL VIDEO *********************

    1 IMPORTS DE ICONOS Y  VIDEO
    import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

2 STATE QUE ABRE EL VIDEO ***********
    const [open, isOpen] = useState(false);


    const openModal = e => {
        e.preventDefault();
        isOpen(true);
    }

3 CODIGO DE HTML *****************
    <ModalVideo channel='youtube' isOpen={open} videoId='j3AJGXscdLI' onClose={() => isOpen(false)} />
    <button className="video" onClick={openModal} ><FontAwesomeIcon icon={faPlayCircle} color="#FF0923 " size="5x" /></button>
*/
    return (
        <div className="container-fluid cont-video ">
            <div className="row d-flex align-items-center">
                <div className="col col-sm-1 col-lg-3 col-md-3 ">
                </div>
                <div className="col text-center col-sm-10 col-lg-6 col-md-6 col-xs">
                    <h2 className=" vid text-center text-white mt-2 d-flex justify-content-center"> Soluciones unicas y creativas a tu medida</h2>
                    <blockquote className="blockquote text-center ">
                        <span className="videoSpan">Creamos soluciones tecnologicas, apoyando a empresas y organizaciones</span>
                    </blockquote>

                </div>
                <div className="col col col-sm-1 col-lg-3 col-md-3">
                </div>
            </div>

        </div>
    )
}
export default Video;