import React from 'react'
import * as ifS from '@fortawesome/free-solid-svg-icons'
import * as ifB from '@fortawesome/free-brands-svg-icons';
import ContainerCount from './ContainerCount';

function Counter(){
   
    return(

        <div className="container mt-5 mb-4 p-4 d-flex justify-content-center" >
            <div className="row p-4 ">
                <div className="col">
                     <ContainerCount
                        icono={ifS.faDesktop}
                        numero ={350}
                        titulo="HAPPY CLIENTS"
                    />
                </div>
                <div className="col">
                    <ContainerCount
                        icono={ifS.faCameraRetro}
                        numero ={780}
                        titulo="PHOTO CAPTURE"
                    />
                </div>
                <div className="col">
                     <ContainerCount
                        icono={ifS.faLaptopCode}
                        numero ={850}
                        titulo="WORK COMPLETED"
                    />
                </div>
                <div className="col">
                    <ContainerCount
                        icono={ifB.faWeixin}
                        numero ={650}
                        titulo="TELEPHONIC TALK"
                    />
                </div>
            </div>
        </div>
    )
}

export default Counter; 