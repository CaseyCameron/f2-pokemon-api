import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Paging from './Paging';
import PokemonList from '../pokemon/PokemonList';
import Search from './Search';
import request from 'superagent';
import './App.css';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component{
  state = {
    pokemonData: [], //initializing a value for state
    search: '',
    direction: 'asc'
  }

  componentDidMount() { //this updates DOM w/ pokemon api from fetchPokemon
    this.fetchPokemon();
  }

  async fetchPokemon(search, sortFilter) {
    const { direction } = this.state;

    try {
      const response = await request
        .get(POKEMON_API_URL) //get our pokemon api
        .query({ pokemon: search, direction: direction, sort: sortFilter });
      this.setState({ pokemonData: response.body.results }); //write the api data into state
    }
    catch (err) {
      console.log(err);
    }
  }

  handleSearch = ({ search, sortField }) => {
    this.setState(
      { search: search },
      () => this.fetchPokemon(search, sortField)
    );
  }

  render() {
    const { pokemonData } = this.state; //get the pokemonData from our state (read from state)
    
    // or const pokemonData = this.state.pokemonData
    return (
      <div className="App">
        <Header/>
        <section className="search-options">
          <Search onSearch={this.handleSearch}/> {/* on search, call handleSearch */}
        </section>
        <Paging/>
        <main>
          <PokemonList 
            pokemonProp={pokemonData}
            onPaging={this.handleSearch}
          /> 
        </main>

        <Footer/>

      </div>
    );
  }
}

export default App;