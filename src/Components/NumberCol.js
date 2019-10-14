import React from 'react'

const NumberCol = ({ number, title, pharr }) => (

    <div className="col col-sm-6 col-md-3 col-xs border-right text-center">
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