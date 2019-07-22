import React from 'react';


function StarWars(props) {
    //console.log(props)
    return(
        <div>
            <h2>{props.name} {props.height}</h2>
            
        </div>
    )
}

export default StarWars;