import React from 'react'
import * as ifS from '@fortawesome/free-solid-svg-icons'
import PowerFulIcons from './PowetFulIcons';

function Powerful() {
    return (
        <div className="container pt-5 pb-5">
            <div className="wrapper">
                <div className="row pt-5 d-flex justify-content-center">
                    <h1 className="powerTi">Powerful Website Builder</h1>
                    <span className="powerSp">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since.
                    </span>
                </div>
                <div className="row pt-5 pb-5 row-fluid">
                    <PowerFulIcons
                        icon={ifS.faPencilAlt}
                    />
                    <PowerFulIcons
                        icon={ifS.faTools}
                    />
                    <PowerFulIcons
                        icon={ifS.faOm}
                    />
                    <PowerFulIcons
                        icon={ifS.faCut}
                    />
                </div>
            </div>
        </div>
    )
}

export default Powerful