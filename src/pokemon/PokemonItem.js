import React, { Component } from 'react';
import './PokemonItem.css';

class VillagerItem extends Component {
  
  render() { 

    return (
      <li className="PokemonItem">
        <h2>Venusaur-Mega</h2>
        <p className="pokemon">venesaur-mega</p>

        <p className="hp">80</p>
        
        <img 
          src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png" 
          alt="venesaur"
        />

      </li>
    );
  }

}
 
export default PokemonItem;