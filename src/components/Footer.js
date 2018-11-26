import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (
      <footer className='footer-info'>
        <span>Made by Sahishnu Patel - </span>
        <a className='link' target='_blank' rel='noopener noreferrer' href='https://github.com/sahishnu/its-not-jif'>Source Code</a>
      </footer>
    );
  }
}

export default Footer;
