import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
//import Paging from './Paging';
import PokemonList from '../pokemon/PokemonList';
import Search from './Search';
import request from 'superagent';
import './App.css';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component{
  state = {
    pokemonData: [],
    search: '',
    asc: ''
  }

  componentDidMount() { //this updates DOM w/ pokemon api from fetchPokemon
    this.fetchPokemon();
  }

  async fetchPokemon() {
    const { search } = this.state;
    const { asc } = this.state;

    try {
      const response = await request
        .get(POKEMON_API_URL)
        .query({ pokemon: search, direction: asc });

      this.setState({ pokemonData: response.body.results });
    }
    catch (err) {
      console.log(err);
    }
  }

  handleSearch = ({ search }) => {
    this.setState(
      { search: search },
      () => this.fetchPokemon()
    );
  }

  render() {
    const { pokemonData } = this.state;
    return (
      <div className="App">
        <Header/>
        <section className="search-options">
          <Search onSearch={this.handleSearch}/>
        </section>

        <main>
          <PokemonList pokemonProp={pokemonData}/>
        </main>

        <Footer/>

      </div>
    );
  }
}

export default App;