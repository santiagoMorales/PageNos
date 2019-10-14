import React from 'react'


const ProgressBar = ({ numero, title }) => {

    let ref = React.createRef();
    let refi = React.createRef();
    var n = 0;
    window.setInterval(function () {
        if (n <= numero) {
            refi.current.innerText = n + "%";
            ref.current.style.width = n + "%";
            n = n + 1;
        }
    }, 5);
    return (
        <div>
            <span className="spro">{title} </span>
            <div className="progress prog ">
                <div className="progress-bar progress-bar-striped bg-dark"
                    ref={ref}
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100">
                </div>
            </div>
            <span className="d-flex justify-content-end spro" ref={refi}  ></span>
        </div>
    )
}
export default ProgressBar