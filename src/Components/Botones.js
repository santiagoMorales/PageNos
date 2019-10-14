import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as ifS from '@fortawesome/free-solid-svg-icons'
import Oculto from './Oculto'

function Botones() {
    const [uno, changeUno] = useState(true);
    const [dos, changeDos] = useState(false);
    const [tres, changeTres] = useState(false);



    /* to do funcion que recibe el boolean del boton y cambia el state*/

    const clickUno = () => {
        if (uno) {
            changeUno(false);
            changeDos(false);
            changeTres(false);
        }
        else {
            changeUno(true);
            changeDos(false);
            changeTres(false);
        }
    }
    const clickDos = () => {
        if (!dos) {
            changeUno(false);
            changeDos(true);
            changeTres(false);
        }
        else {
            changeUno(false);
            changeDos(false);
            changeTres(false);
        }
    }
    const clickTres = () => {
        if (!tres) {
            changeUno(false);
            changeDos(false);
            changeTres(true);
        }
        else {
            changeUno(false);
            changeDos(false);
            changeTres(false);
        }

    }/*
    const click = ({ value }) => {
        switch (value) {
            case 1: if (uno) {
                changeUno(false);
                changeDos(false);
                changeTres(false);
            }
            else {
                changeUno(true);
                changeDos(false);
                changeTres(false);
            }
                break;
            case 2: if (!dos) {
                changeUno(false);
                changeDos(true);
                changeTres(false);
            }
            else {
                changeUno(false);
                changeDos(false);
                changeTres(false);
            }
                break;
            case 3: if (!tres) {
                changeUno(false);
                changeDos(false);
                changeTres(true);
            }
            else {
                changeUno(false);
                changeDos(false);
                changeTres(false);
            }
                break;
    }
}*/
    return (
        <div className="container">
            <div className="row ren">
                <div className="col">
                    <h3>We're small but impressive.</h3>
                    <h2> <strong>Hand crafted pixel perfect designs. </strong></h2>

                    <div className="list-group mt-5">
                        <a onClick={clickUno} value="uno" className="list-group-item list-group-item-action m-1">
                            <div>
                                <span className="num"> 01 </span>
                                <span className="tx">
                                    Unique and bold website design</span>
                                {uno ? <FontAwesomeIcon className="angle" icon={ifS.faAngleUp} size="2x" /> : <FontAwesomeIcon className="angle" icon={ifS.faAngleDown} size="2x" />}

                            </div>
                        </a>
                        {uno ? <Oculto /> : null}
                        <a onClick={clickDos} className="list-group-item list-group-item-action  m-1 ">
                            <div>
                                <span className="num" > 02 </span>
                                <span className="tx">We are ready to start now</span>
                                {dos ? <FontAwesomeIcon className="angle" icon={ifS.faAngleUp} size="2x" /> : <FontAwesomeIcon className="angle" icon={ifS.faAngleDown} size="2x" />}
                            </div>

                        </a>
                        {dos ? <Oculto /> : null}
                        <a onClick={clickTres} className="list-group-item list-group-item-action  m-1 ">
                            <div>
                                <span className="num" >  03 </span>
                                <span className="tx">We deliver the highest quality</span>
                                {tres ? <FontAwesomeIcon className="angle" icon={ifS.faAngleUp} size="2x" /> : <FontAwesomeIcon className="angle" icon={ifS.faAngleDown} size="2x" />}
                            </div>

                        </a>
                        {tres ? <Oculto /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Botones