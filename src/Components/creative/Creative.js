import React from 'react'
import team13 from '../../Creative/team13.jpg'
import team14 from '../../Creative/team14.jpg'
import team15 from '../../Creative/team15.jpg'
import team18 from '../../Creative/team18.jpg'
import CreativePeople from './CreativePeople'



function Creative() {

    return (
        <div className="container pt-5" data-aos="zoom-in">
            <div className="row pt-5 ">
                <div className=" col-sm-2 col-lg-3 col-md-3 col-12"></div>
                <div className="col text-center ">
                    <h1>Creative People</h1>
                    <div className="creativeP text-center">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry’s standard dummy text ever since.
                            Lorem Ipsum has been the industry. Lorem Ipsum has been the industry’s standard dummy text since.
                    </p>
                    </div>
                </div>
                <div className="col col-sm-2 col-lg-3 col-md-3 col-12"></div>
            </div>
            <div className="row pt-5">
                <CreativePeople
                    image={team13}
                    name="HERMAN MILLER"
                    job=" Co-Founder / Design"
                    timeAnimation="200"
                />
                <CreativePeople
                    image={team14}
                    name="HERMAN MILLER"
                    job=" Co-Founder / Design"
                    timeAnimation="450"
                />
                <CreativePeople
                    image={team15}
                    name="HERMAN MILLER"
                    job=" Co-Founder / Design"
                    timeAnimation="750"
                />
                <CreativePeople
                    image={team18}
                    name="HERMAN MILLER"
                    job=" Co-Founder / Design"
                    timeAnimation="1000"
                />
            </div>
        </div>
    )
}
export default Creative