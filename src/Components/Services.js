import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall} from '@fortawesome/free-solid-svg-icons'
import { faDizzy} from '@fortawesome/free-solid-svg-icons'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faCentercode } from '@fortawesome/free-brands-svg-icons'


const Services= () =>{

     const [colorIcon, setColorIcon] = useState("#fe214f");
     const [over, setOver] = useState(false);
    
   const Mensaje =() =>{
      
        console.log();
        setColorIcon("#1344ca");
        console.log("estoy sobre los card")
    }
    
    return (
        <div className="container pt-5 mt-1 pb-5 mb-5">
            <div className = "col col-sm-12   col-xs">
                <div className ="row">
                    <div className="col mt-5 pr-1">
                    </div>
                    <div className="col mt-5  text-center">
                        <h1>Our Services</h1>
                        <div className = "m-0 parrafo ">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard dummy text ever since.
                                Lorem Ipsum has been the industry.
                                Lorem Ipsum has been the industry’s standard dummy text since.</p>
                        </div>
                    </div>
                    <div className="col pl-1">
                    </div>
                </div>
                <div className="row pt-5">
                    <div className=" ok col col-sm-6 col-md-3 col-xs-12">
                        <div className="card" onMouseOver = {()=>Mensaje()}  >
                            <div className="card-body">
                               <span className="d-flex justify-content-center pt-4 pb-3"> <FontAwesomeIcon icon={faBitcoin}  color={colorIcon} size="5x"/></span>
                                <h6 className="card-subtitle mb-2 text-center mt-2">Sales Promotion</h6>
                                <p className="pCard card-text text-center">Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-6 col-md-3 col-xs-12">
                        <div className="card" onMouseOver = {()=>Mensaje()} >
                            <div className="card-body">
                                <span className="d-flex justify-content-center pt-4 pb-3"> <FontAwesomeIcon icon={faBaseballBall} color={colorIcon} size="5x"/></span>
                                <h6 className="card-subtitle mb-2 text-center mt-2">SEO Marketing</h6>
                                <p className=" pCard card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-6 col-md-3 col-xs-12">
                        <div className="card" >
                            <div className="card-body">
                            <span className="d-flex justify-content-center pt-4 pb-3"> <FontAwesomeIcon icon={faDizzy} color={colorIcon} size="5x"/></span>
                            <h6 className="card-subtitle mb-2 text-center mt-2">Strategic Planning</h6>
                                <p className="pCard card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-6 col-md-3 col-xs-12">
                        <div className="card" >
                            <div className="card-body">
                               <span className="d-flex justify-content-center pt-4 pb-3"> <FontAwesomeIcon icon={faCentercode} color={colorIcon} size="5x"/></span>
                               <h6 className="card-subtitle mb-2 text-center mt-2">Product Branding</h6>
                                <p className="pCard card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services

