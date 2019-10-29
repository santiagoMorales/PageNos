import React from 'react'

const NumberCol = ({ number, title, pharr, timeAnimation }) => (

    <div className="col-12 col-sm-6 col-md-6 col-lg-3  border-right text-center" data-aos="fade-left" data-aos-easing="linear" data-aos-duration={timeAnimation}>
        <div className="wrapper">
            <div className="box">
                <h2 className="numTit">{number}</h2>
                <span className="numSpan">{title}</span>
                <div className="numPhar">
                    <p>{pharr}</p>
                </div>
            </div>
        </div>
    </div>
)
export default NumberCol