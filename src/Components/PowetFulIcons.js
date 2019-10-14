import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PowerfulIcons = ({ icon }) => (
    <div className="col col-sm-3 col-md-3 col-xs-6 text-center powerIco">
        <FontAwesomeIcon icon={icon} color="#ff214f" size="3x" className="ic" />
        <p className="powerPI pt-3"> Creative Elements</p>
        <div className="line"></div>
    </div>
)

export default PowerfulIcons