import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactCols = ({ icon, topic, content, link }) => (
    <div className="col col-sm-6 col-md-3 col-xs-12 d-flex justify-content-center">
        <div className="wrapper">
            <div className="mb-4 d-flex justify-content-center">
                <FontAwesomeIcon icon={icon} size="2x" color="#000" />
            </div>
            <span className="sp-contact d-flex justify-content-center">{topic} </span>
            <div className="text-contact mb-3">
                <p className="text-center">{content}</p>
            </div>
            <div className="d-flex justify-content-center">
                <a className="line-contact" href="http://www.gogle.com" >{link}</a>
            </div>
        </div>
    </div>
)

export default ContactCols
