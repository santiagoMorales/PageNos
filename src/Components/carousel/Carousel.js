import React from 'react'
import envato from '../../carousel/envato.png'
import woo from '../../carousel/woo.png'
import Magento from '../../carousel/Magento.png'
import wordpress from '../../carousel/wordpress.png'



function Carousel() {
    return (
        <div className="container-fluid">
            <div className='carOp'>
                <div className="row">
                    <div className="col col-sm-12 col-xs colInC">
                        <div className="wrapper">
                            <div className="carImage d-flex align-items-center">
                                <img className="imgCar" src={envato} alt="ok"></img>
                                <img className="imgCar" src={woo} alt="ok"></img>
                                <img className="imgCar" src={Magento} alt="ok"></img>
                                <img className="imgCar" src={wordpress} alt="ok"></img>
                                <img className="imgCar" src={envato} alt="ok"></img>
                                <img className="imgCar" src={woo} alt="ok"></img>
                                <img className="imgCar" src={Magento} alt="ok"></img>
                                <img className="imgCar" src={wordpress} alt="ok"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Carousel