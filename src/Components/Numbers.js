import React from 'react'
import NumberCol from './NumberCol'
function Numbers() {
    return (
        <div className="container-fluid">
            <div className="row">
                <NumberCol
                    number="01"
                    title="Discussion of the Idea"
                    pharr="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard text."
                    timeAnimation="200"
                />
                <NumberCol
                    number="02"
                    title="Elaboration of the Core"
                    pharr="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard text."
                    timeAnimation="450"
                />
                <NumberCol
                    number="03"
                    title="Handcrafted Templates"
                    pharr="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard text."
                    timeAnimation="750"
                />
                <NumberCol
                    number="04"
                    title="Testing for Perfection"
                    pharr="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard text."
                    timeAnimation="1000"
                />
            </div>
        </div>
    )
}
export default Numbers

