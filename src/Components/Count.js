import React from 'react'


function Count({numero}){

    let ref = React.createRef();
    var n = 0;    
    window.setInterval(function(){
    if(n<=numero){
        ref.current.innerText = n;
        n=n+5;
    }  
    },5);

    return(
        <h3 ref={ref}></h3>
    )
}
export default Count;