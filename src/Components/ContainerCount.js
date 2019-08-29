import React from 'react'
import Count from './Count'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContainerCount = ({numero,icono,titulo})=>(

    <div className="container">
      <div className="row">
          <FontAwesomeIcon icon={icono} color="#c9c9c9" size="4x"/>
           <div className="col">
               <Count
                 numero={numero}/>
               <h6>{titulo}</h6>
            </div>
        </div>
    </div>
    
)
export default ContainerCount;