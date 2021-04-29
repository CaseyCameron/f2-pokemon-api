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
        
        <img 
          src={parsedPokemonProp.url_image}
          alt={parsedPokemonProp.pokemon}
        />

      </li>
    );
  }
}
 
export default PokemonItem;