import React from 'react'
import Botones from './Botones'

function ListButton() {

    return (
        <div className="container-fluid ">
            <div className="row ">
                <div className="col-12 col-md-12 col-lg-6 col-sm-12" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="400">
                    <Botones />
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-sm-12 p-1 bac" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="400">
                    <h1 className="tras">ok</h1>
                </div>
            </div>
        </div>
    )
}
export default ListButton