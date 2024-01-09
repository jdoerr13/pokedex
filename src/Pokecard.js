import React from 'react';
// import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard({ id, name, type, base_experience }) {

    // const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    let imgSrc = `${POKE_API}${id}.png`;
    return (
      <div className="Pokecard">
        <h2>{name}</h2>
        <img src={imgSrc} alt={name} />
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
  
  export default Pokecard;