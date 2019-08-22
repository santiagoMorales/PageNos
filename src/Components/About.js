import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faEmpire } from '@fortawesome/free-brands-svg-icons'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'




const About= () =>(
   <div className ="container mt-4 mb-5 ">
        <div className="row mt-4">
            <div className="col mt-5">
            </div>
            <div className="col mt-5  pl-0 pr-0">
                    <span className="title  text-center text-md-left mt-2 d-flex justify-content-center">Quienes Somos?</span> 
                    <blockquote className= "blockquote text-center ">
                         <h5>We are Anonymous.<br/> We are Legion, We Dont Forgive, <br/>We Dont Forget, EXPECT US!! </h5>
                    </blockquote>
            </div>
            <div className="col mt-5">
            </div>
        </div>
        <div className="row mt-4">
            <div className ="icono">
                <FontAwesomeIcon icon={faLightbulb} size="3x"/>
            </div>
            <div className="col mt-3">
                <div className="card border border-white">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
             </div>
             <div className ="icono">
                <FontAwesomeIcon icon={faEmpire} size="3x"/>
            </div>
             <div className="col mt-3">
                <div className="card border border-white">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
             </div>
             <div className ="icono">
                <FontAwesomeIcon icon={faCannabis} size="3x"/>
            </div>
             <div className="col mt-3">
                <div className="card border border-white">
                        <div className="card-body ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
             </div>
        </div>
        
   </div>
);

export default About;