import React, { Component } from 'react';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <Link to='/' className='header-title title'>Its Not Jif</Link>
        <SearchBox />
        <Link to='/favorites' className='header-title fav'>Favorites</Link>
      </div>
    );
  }
}

export default Header;
