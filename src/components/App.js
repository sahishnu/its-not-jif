import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import GifTable from './GifTable';

class App extends Component {
  render() {
    const { gifData } = this.props;
    return (
      <div className='App'>
        <Header />
        {gifData.length && <GifTable />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifData: state.gifReducer.gifData
});

export default connect(mapStateToProps, {})(App);
