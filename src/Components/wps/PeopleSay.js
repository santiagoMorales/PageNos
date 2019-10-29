import React from 'react'
import wps1 from '../../wpsI/wps1.jpg'
import People from './People'
import AOS from 'aos';
import 'aos/dist/aos.css';

function PeopleSay() {
    AOS.init()
    return (
        <div className="container " data-aos="zoom-in" data-aos-easing="linear">
            <div className="wrapper">
                <div className="row pt-5">
                    <div className="col col-sm-2 col-lg-3 col-md-3 col-12 pt-4"></div>
                    <div className="col col-sm-8 col-lg-6 col-md-6 col--12 text-center pt-4">
                        <div className="columBlog">
                            <div className="wrapper">
                                <h5 className="blogH">WHAT PEOPLE SAY</h5>
                                <div className="blogP">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                         Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum has been the industry.
                                         Lorem Ipsum has been the industry’s standard dummy text since.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 col-lg-3 col-md-3 col-12 pt-4"></div>
                </div>
                <div className="row">
                    <People
                        image={wps1}
                        name="SHOKO MUGIKURA"
                        job="DESIGN MANAGER"
                        timeAnimation="200"
                    />
                    <People
                        image={wps1}
                        name="SHOKO MUGIKURA"
                        job="DESIGN MANAGER"
                        timeAnimation="450"
                    />
                    <People
                        image={wps1}
                        name="SHOKO MUGIKURA"
                        job="DESIGN MANAGER"
                        timeAnimation="750"
                    />
                </div>
            </div>
        </div>
    )
}
export default PeopleSay