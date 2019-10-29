import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconsAbout = ({ icon, title, text, animate, timeAnimation }) => (
    <div className="col-md-4 col-lg-5 col-12" data-aos={animate} data-aos-easing="linear" data-aos-duration={timeAnimation}>
        <div className="inner-about">
            <div className="wrapper">
                <div className="col-lg-3 col-sm-4 col-md-4 col-12 icon-about">
                    <FontAwesomeIcon icon={icon} size="3x" />
                    <span className="line-vertical"></span>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-8 col-12 col-abo">
                    <span className="title-about">
                        {title}
                    </span>
                    <div className="parh-abo">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default IconsAbout