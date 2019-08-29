import React from 'react'
import Botones from './Botones'

function ListButton (){

    return(
        <div className="container m-0 ">
            <div className="row rc">
                <div className="col  col-sm-12 col-md-6 col-xs-12  ">
                    <Botones/>
                </div>
                <div className="col col-sm-12 col-md-6 col-xs-12 p-1 bac ">
                    <h1 className="tras">ok</h1>
                </div>
            </div>
        </div>
    )
}
export default ListButton