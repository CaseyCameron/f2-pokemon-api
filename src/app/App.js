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
    pokemon: []
  }

  componentDidMount() { //this updates DOM w/ pokemon api from fetchPokemon
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const response = await request
      .get(POKEMON_API_URL);
      //.query({ pokemon: search });
    console.log(response.body.results);
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">
        <Header/>
        <section className="search-options">
          <Search/>
          <Paging/>
        </section>

        <main>
          <PokemonList pokemon={pokemon}/>
        </main>

        <Footer/>

      </div>
    );
  }
}

export default App;