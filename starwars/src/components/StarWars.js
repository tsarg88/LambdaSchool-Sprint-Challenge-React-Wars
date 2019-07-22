import React from 'react';
import style from 'styled-components'

const X = style.div`
    color: blue;
`;

function StarWars(props) {
    //console.log(props)
    return(
        <div className="container">
            <h2> Name: {props.name} </h2>
            <X> <p> Height: {props.height} </p> </X>
            <X> <p> Mass: {props.mass} </p> </X>
            <X> <p> Hair Color: {props.hair_color} </p> </X>
            <X> <p> Skin Color: {props.skin_color} </p> </X>
        </div>
        
    )
}

export default StarWars;