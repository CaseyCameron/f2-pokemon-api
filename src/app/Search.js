import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    search: '',
    sortField: '',
    asc: ''
  }

  handleSearchChange = ({ target }) => { //search tracks search input by getting the target value from handleSubmit's (e)
    this.setState({ search: target.value });
  }
  
  handleSortField = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => { //e is the form (like our old new formData component)
    e.preventDefault();
    this.props.onSearch(this.state); //const onSearch = this.props.onSearch;
    // const search = this.state.search;
    // onSearch(search);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
      // this.props.onSearch(this.state.search);
    }
  }


  render() {
    const { search, sortField } = this.state;
    
    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        
        <input 
          name="search" 
          value={search}
          onChange={this.handleSearchChange}
        />

        <select name="sortField" value={sortField} onChange={this.handleSortField}>
          <option value="">sort...</option>
          <option value="type_1">by type</option>
          <option value="shape">by shape</option>
          <option value="ability_1">by ability</option>
        </select>

        <button>🔎</button>
      
      </form>
    );
  }

}