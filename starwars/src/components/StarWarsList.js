import React from 'react';
import './StarWars.css';

function StarWarsList(props) {
    return (
        <div className="starwars-list">
        {props.starwarsChar.map(starwars => 
        <StarWars key={starwars.id} starwars={starwars} />)
        }
        </div>
    )
}

export default StarWarsList;