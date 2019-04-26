import React from 'react';

function StarWars(props) {
    return (
        <div className="chars">
            <div className="infoCards">
            <p>Name: {props.charInfo.name}</p>
            <p>Height: {props.charInfo.height}</p>
            </div>
            {/* <p>Hair Color: {props.charInfo.hair_color}</p> */}
        </div>
    )
}

export default StarWars;