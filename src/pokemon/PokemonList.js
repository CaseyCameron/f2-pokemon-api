import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';


class PokemonList extends Component {
  
  render() { 
    const { pokemonProp } = this.props;
    return (
      <ul className="PokemonList">
        {pokemonProp.map(item => (
          <PokemonItem key={item._id} parsedPokemonProp={item}/>
        ))}
      </ul>
    );
  }

}
 
export default PokemonList;