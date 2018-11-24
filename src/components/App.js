import React, { Component } from 'react';
import Home from '../views/Home';
import Favorites from '../views/Favorites';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/search' component={Home} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
