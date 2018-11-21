import React, { Component } from 'react';
import SearchBox from './SearchBox';

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <h1 className='header-title title'>Its Not Jif</h1>
        <SearchBox />
        <h1 className='header-title fav'>View Favorites</h1>
      </div>
    );
  }
}

export default Header;
