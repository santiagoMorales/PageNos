import React from 'react'
import ProgressBar from './ProgressBar'

const Progress = () => {


    return (

        <div className="container cont-progress" data-aos="zoom-in">
            <div className="row  pr-5 pb-5">
                <div className=" mt-5 pt-5 col-md-12 col-lg-6 col-12">
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
                <div className="mt-5 pt-5 col-md-12 col-lg-6 col-12">
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