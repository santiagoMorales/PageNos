import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

function Video() {

    const [open, isOpen] = useState(false);


    const openModal = e => {
        e.preventDefault();
        isOpen(true);
    }

    return (
        <div className="container-fluid p-5 mt-2 mb-5 ">
            <div className="row d-flex align-items-center">
                <div className="col p-5">
                </div>
                <div className="col text-center col-sm-10 col-lg-6 col-md-6 col-xs">
                    <ModalVideo channel='youtube' isOpen={open} videoId='j3AJGXscdLI' onClose={() => isOpen(false)} />
                    <button className="video" onClick={openModal} ><FontAwesomeIcon icon={faPlayCircle} color="#FF0923 " size="5x" /></button>
                    <h2 className=" vid text-center text-white mt-2 d-flex justify-content-center">Unique. Powerful. Creative.</h2>
                    <blockquote className="blockquote text-center ">
                        <span className="videoSpan">We provide high quality and cost effective offshore web and software development services.</span>
                    </blockquote>

                </div>
                <div className="col pt-5 pl-5">
                </div>
            </div>

        </div>
    )
}
export default Video;