import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as ifS from '@fortawesome/free-solid-svg-icons'

function Experinces() {
    return (
        <div>
            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="exp col col-sm-12 col-md-6 col-xs-12">
                        <div className="backEx d-flex align-items-center pl-5 pr-5  col col-sm-12 col-md-6 col-xs-12 ">
                            <FontAwesomeIcon className=" ico" icon={ifS.faQuoteLeft} size="5x" color="white" />
                            <h6 className="seis">
                                We design brand, digital experience & marketing campaigns that engage the right customers.
                            </h6>
                        </div>
                    </div>
                    <div className="ex col col-sm-12 col-md-6 col-xs-12">
                        <div className="wrapper dw">
                            <span className="sdw">
                                We create premium designs and technology
                            </span>
                            <h4 className="hdw mb-3">A digital studio crafting beautiful experiences.</h4>
                            <h6 className="edgeD mb-4">We always stay on the cutting edge of digital, so that our clients maintain their competitive advantage online.</h6>
                            <div className="last-pha pb-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum has been the industry.
                                 Lorem Ipsum is simply dummy text of the printing and industry.
                                 Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text.
                            </div>

                            <a className="botD btn btn-primary " href="#!" role="button">Start Your Business</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experinces;