import React from 'react'
import * as ifS from '@fortawesome/free-solid-svg-icons'
import PowerFulIcons from './PowetFulIcons';

function Powerful() {
    return (
        <div className="container pt-5 pb-5" data-aos="zoom-in">
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
                        timeAnimation="200"
                    />
                    <PowerFulIcons
                        icon={ifS.faTools}
                        timeAnimation="450"
                    />
                    <PowerFulIcons
                        icon={ifS.faOm}
                        timeAnimation="700"
                    />
                    <PowerFulIcons
                        icon={ifS.faCut}
                        timeAnimation="950"
                    />
                </div>
            </div>
        </div>
    )
}

export default Powerful