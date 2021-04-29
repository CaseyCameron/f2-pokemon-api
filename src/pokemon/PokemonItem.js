import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  
  render() { 
    const { parsedPokemonProp } = this.props;
    return (
      <li className="PokemonItem">
        <h2>{parsedPokemonProp.pokemon}</h2>
        <p className="hp">Hp: {parsedPokemonProp.hp}</p>
        <p className="defense">Def: {parsedPokemonProp.defense}</p>
        <p className="type">Type_1: {parsedPokemonProp.type_1}</p>
        <p className="type">Type_2: {parsedPokemonProp.type_2}</p>
        <p className="ability">Ability: {parsedPokemonProp.ability_1}</p>
        
        <img 
          src={parsedPokemonProp.url_image}
          alt={parsedPokemonProp.pokemon}
        />

      </li>
    );
  }
}
 
export default PokemonItem;