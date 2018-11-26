import React, { Component } from 'react';
import SearchBox from './SearchBox';
import { Link, NavLink } from 'react-router-dom';
class Header extends Component {
  render() {
    const { classname } = this.props;
    return (
      <div className={classname}>
        <Link to='/' className='header-title title'>Its Not Jif</Link>
        <SearchBox />
        <NavLink activeClassName='active-link' to='/favorites' className='header-title fav'>Favorites</NavLink>
      </div>
    );
  }
}

export default Header;
