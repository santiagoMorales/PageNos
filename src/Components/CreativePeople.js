import React from 'react'
import IconosSocial from './IconsSocial'

const CreativePeople = ({ image, name, job }) => (
    <div className="col col-sm-6 col-md-3 col-xs-12">
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