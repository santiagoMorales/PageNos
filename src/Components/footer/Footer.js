import React from 'react'
import Logo from '../../logo.png'
import * as ifB from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-3 col-sm-3 col-xs-12">
                    <a href="http://www.google.com">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>
                <div className="col col-md-6 col-sm-6 col-xs-12">
                    <div className="text-footer text-center">
                        © 2019 POFO is Proudly Powered by <a href="http://www.themezaa.com/" className="link-footer">ThemeZaa</a>
                    </div>
                </div>
                <div className="col col-md-3 col-sm-3 col-xs-12 d-flex justify-content-end">
                    <div className="icons-footer">
                        <a className="pl-2 pr-3" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="iconC" icon={ifB.faFacebook} color="#232323" size="1x" /></a>
                        <a className="pl-2 pr-3" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="iconC" icon={ifB.faTwitter} color="#232323" size="1x" /></a>
                        <a className="pl-2 pr-3" href="https://plus.google.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="iconC" icon={ifB.faGooglePlusG} color="#232323" size="1x" /></a>
                        <a className="pl-2 pr-3" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="iconC" icon={ifB.faInstagram} color="#232323" size="1x" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer