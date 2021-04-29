import { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  state = {
    search: '',
    sortField: '',
    asc: ''
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }
  
  handleSortField = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
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