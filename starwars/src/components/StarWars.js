import React from 'react';

function StarWars(props) {

    return (
        <div className="chars">
            <div className="infoCards">
            <h1>Star Wars Cards</h1>
                <p className="nameInfo">{props.charInfo.name}</p>
                <p>Height: {props.charInfo.height}</p>
                <p>Gender: {props.charInfo.gender}</p>
                <p>Mass: {props.charInfo.Mass}</p>
                <p>Hair Color: {props.charInfo.hair_color}</p>
                <p>Skin Color: {props.charInfo.skin_color}</p>
                <span>No: {Date.now()}</span>
                
            </div>
        </div>
    )
}

export default StarWars;