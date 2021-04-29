import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">
        
        {/* <img 
          className="logo" 
          alt="cherry blossom tree logo" 
          src="cherry-blossom-tree.png"
        /> */}

        <h1>Pokemon Critter Things</h1>
        
      </header>
    );
  }

}
 
export default Header;