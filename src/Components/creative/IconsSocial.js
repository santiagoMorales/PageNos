import React, { Fragment } from 'react'
import * as ifB from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconsSocial() {
    return (
        <Fragment>
            <a className="pl-2 pr-3" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="iconC" icon={ifB.faFacebook} color="#232323" size="1x" /></a>
            <a className="pl-2 pr-3" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="iconC" icon={ifB.faTwitter} color="#232323" size="1x" /></a>
            <a className="pl-2 pr-3" href="https://plus.google.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="iconC" icon={ifB.faGooglePlusG} color="#232323" size="1x" /></a>
            <a className="pl-2 pr-3" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="iconC" icon={ifB.faInstagram} color="#232323" size="1x" /></a>
        </Fragment>
    )
}
export default IconsSocial