import React from 'react';

function StarWars(props) {
    return (
        <div>
            <p>Name: {props.charInfo.name}</p>
            <p>Height: {props.charInfo.height}</p>
            {/* <p>Hair Color: {props.charInfo.hair_color}</p> */}
        </div>
    )
}

export default StarWars;