import React from 'react';
import StarWars from './StarWars';
import './StarWars.css';

function StarWarsList(props) {
    return (
        <div className="starwars-list">
        {props.starwarsChars.map(starwars => 
        <StarWars key={starwars.id} charInfo={starwars} />)
        }
        </div>
    )
}

export default StarWarsList;