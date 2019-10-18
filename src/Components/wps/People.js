import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as ifS from '@fortawesome/free-solid-svg-icons'

const People = ({ image, job, name }) => {
    return (
        <div className="col col-sm-4 col-md-4 col-xs-12 text-center">
            <div className="inner-wps">
                <div className="wrapper">
                    <img src={image} alt="pro" className="wps-image"></img>
                    <div className="wpsParh">
                        <p>
                            Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies.
                        </p>
                    </div>
                    <div className="wrapper">
                        <FontAwesomeIcon className="m" icon={ifS.faQuoteLeft} size="2x" color="#fe214f" />
                        <div className="wps-name">
                            {name}
                        </div>
                        <span className="wps-job">{job}</span>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default People