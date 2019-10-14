import React from 'react'
import ProgressBar from './ProgressBar'

const Progress = () => {


    return (

        <div className="container mt-5 ">
            <div className="row mt-5 mr-5 pr-5">
                <div className="col mt-5 pt-5 col-sm-12 col-md-6 col-xs-12">
                    <h4>We provide high quality and cost effective services.</h4>
                    <div className="m-0">
                        <p className="pro">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry’s standard dummy text ever since.
                            Lorem Ipsum has been the industry. Lorem Ipsum has been the industry’s standard dummy text since.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    </div>
                </div>
                <div className="col mt-5 pt-5 col-sm-12 col-md-6 col-xs-12">
                    <ProgressBar
                        numero={92}
                        title="QUERY - 4 YEARS EXPERIENCE" />
                    <ProgressBar
                        numero={97}
                        title="WORDPRESS - 6 YEARS EXPERIENCE" />
                    <ProgressBar
                        numero={98}
                        title="HTML5 - 5 YEARS EXPERIENCE" />
                    <ProgressBar
                        numero={92}
                        title="PHOTOGRAPHY - 6 YEARS EXPERIENCE" />

                </div>
            </div>
        </div>

    )
}
export default Progress