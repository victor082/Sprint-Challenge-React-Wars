import React from 'react';

function StarWars(props) {

    return (
        <div className="chars">
            <div className="infoCards">
            <h5>Star Wars Trading Cards</h5>
                <p className="nameInfo">{props.charInfo.name}</p>
                <p>Height: {props.charInfo.height}</p>
                <p>Gender: {props.charInfo.gender}</p>
                <p>Mass: {props.charInfo.mass}</p>
                <p>Hair Color: {props.charInfo.hair_color}</p>
                <p>Skin Color: {props.charInfo.skin_color}</p>
                <span>Rarity Level: {Math.floor(Math.random() * 10 + 1)}</span>
                
            </div>
        </div>
    )
}

export default StarWars;