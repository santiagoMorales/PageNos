import React from 'react'
import IconosSocial from './IconsSocial'

const CreativePeople = ({ image, name, job, timeAnimation }) => (
    <div className="col-sm-6 col-md-6 col-lg-3 col-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={timeAnimation}>
        <div className="colum-inner">
            <figure className="figureC">
                <img className="creativeIm" src={image} alt="img11" />
                <div className="team-overlay"></div>
                <div className="member">
                    <div className="text-Creative">
                        {name}
                    </div>
                    <div className="text-small">
                        {job}
                    </div>
                </div>
                <figcaption className="figCapC">
                    <div className="overlay-content">
                        <div className="textS">
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text. </p>
                        </div>
                        <div className="line-separator"></div>
                        <IconosSocial />
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
)
export default CreativePeople