import React from 'react'
import { faDizzy,faBaseballBall} from '@fortawesome/free-solid-svg-icons'
import * as IcF from '@fortawesome/free-brands-svg-icons';
import Cards from './Cards'


const Services= () =>{

    
    return (
        <div className="container pt-5 mt-1 pb-5 mb-5">
            <div className = "col col-sm-12   col-xs">
                <div className ="row">
                    <div className="col-2 mt-5 pr-1">
                    </div>
                    <div className="col-8 mt-5 text-center ">
                        <h1>Our Services</h1>
                        <div className = "m-0 parrafo ">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard dummy text ever since.
                                Lorem Ipsum has been the industry.
                                Lorem Ipsum has been the industry’s standard dummy text since.</p>
                        </div>
                    </div>
                    <div className="col-2 pl-1">
                    </div>
                </div>
                <div className="row pt-5">
                    <div className=" col col-sm-6 col-md-3 col-xs-12">
                        <Cards
                            icono = {IcF.faBitcoin}
                            titulo = "Sales Promotion"
                            mensaje = "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy"
                        />
                    </div>
                    <div className="col col-sm-6 col-md-3 col-xs-12">
                            <Cards
                                icono ={faBaseballBall}
                                titulo = "SEO Marketing"
                                mensaje =  "Some quick example text to build on the card title and make up the bulk of the card's content."
                            />
                    </div>
                    <div className="col col-sm-6 col-md-3 col-xs-12">
                            <Cards
                                icono ={faDizzy}
                                titulo = "Strategic Planning"
                                mensaje =  "Some quick example text to build on the card title and make up the bulk of the card's content."
                            />
                    </div>
                    <div className="col col-sm-6 col-md-3 col-xs-12">
                             <Cards
                                icono ={IcF.faCentercode}
                                titulo = "Product Branding"
                                mensaje =  "Some quick example text to build on the card title and make up the bulk of the card's content."
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services

