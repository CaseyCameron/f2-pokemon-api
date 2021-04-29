import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import Paging from '../app/Paging';
import './PokemonList.css';


class PokemonList extends Component {
  
  render() { 
    const { pokemonProp } = this.props;
    const onPaging = this.props.onPaging;
    return (
      //<Paging onPaging={onPaging}/>
      <ul className="PokemonList">
        {pokemonProp.map(item => (
          <PokemonItem key={item._id} parsedPokemonProp={item}/> //react wants to make a key for its own purposes (to show in dev tools), and then map out each property from our api data
        ))} 
      </ul>
    );
  }

}
 
export default PokemonList;