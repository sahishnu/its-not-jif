import React, { Component } from 'react';
import { connect } from 'react-redux';
import {searchGifsAction, updateSearchValueAction} from '../actions/searchActions';

class SearchBox extends Component {

  submitSearch = () => {
    const { searchValue } = this.props;
    if (searchValue.length) {
      this.props.searchGifsAction();
    }
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.submitSearch();
    }
  }

  render() {
    const { searchValue } = this.props;
    return (
      <div className='search-container'>
        <input tpe='text' onChange={this.props.updateSearchValueAction} onKeyPress={this.handleKeyPress} value={searchValue} className='search-input' placeholder='Search...' />
        <i onClick={this.submitSearch} className='fa fa-search search-button'></i>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.searchReducer.searchValue
});

export default connect(mapStateToProps, {searchGifsAction, updateSearchValueAction})(SearchBox);

