import { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {

    return (
      <form className="Paging" onSubmit={this.handleSubmit}>

        <button className="prev">◀</button>
        <span>Page 1</span>
        <button className="next">▶</button>

      </form>
    );
  }

}