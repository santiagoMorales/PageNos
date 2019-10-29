import React from 'react'
import { faDizzy, faBaseballBall } from '@fortawesome/free-solid-svg-icons'
import * as IcF from '@fortawesome/free-brands-svg-icons';
import Cards from './Cards'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
    AOS.init()

    return (
        <div className="container pt-5 pb-5 mb-5 ">
            <div className="col col-sm-12 col-xs">
                <div className="row">
                    <div className="col-2 col-sm-2 col-lg-3 col-md-3  mt-5 pr-1">
                    </div>
                    <div className="service-title col-12 col-sm-8 col-lg-6 col-md-6 mt-5 text-center">
                        <h1>Our Services</h1>
                        <div className="m-0 parrafo ">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard dummy text ever since.
                                Lorem Ipsum has been the industry.
                                Lorem Ipsum has been the industry’s standard dummy text since.</p>
                        </div>
                    </div>
                    <div className="col-2 col-2 col-sm-2 col-lg-3 col-md-3 pl-1">
                    </div>
                </div>
                <div className="row pt-5">
                    <Cards
                        icono={IcF.faBitcoin}
                        titulo="Sales Promotion"
                        mensaje="Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy"
                        timeAnimation="200"
                    />
                    <Cards
                        icono={faBaseballBall}
                        titulo="SEO Marketing"
                        mensaje="Some quick example text to build on the card title and make up the bulk of the card's content."
                        timeAnimation="450"
                    />
                    <Cards
                        icono={faDizzy}
                        titulo="Strategic Planning"
                        mensaje="Some quick example text to build on the card title and make up the bulk of the card's content."
                        timeAnimation="750"
                    />
                    <Cards
                        icono={IcF.faCentercode}
                        titulo="Product Branding"
                        mensaje="Some quick example text to build on the card title and make up the bulk of the card's content."
                        timeAnimation="950"
                    />
                </div>
            </div>
        </div>
    )
}
export default Services

