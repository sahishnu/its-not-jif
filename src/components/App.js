import React, { Component } from 'react';
import Home from '../views/Home';
import Favorites from '../views/Favorites';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';

// Main wrapper component for app
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Search header always shows */}
        <Header classname='header-container' />
        <Switch>
          {/* Only difference between Home & Favorites component is where the Gif Data comes from */}
          <Route path='/search' component={Home} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/' component={Home} />
        </Switch>
        <Header classname='footer-container' />
      </div>
    );
  }
}

export default App;
