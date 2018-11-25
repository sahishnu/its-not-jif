import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {searchGifsAction, updateSearchValueAction} from '../actions/searchActions';
import { withRouter } from 'react-router';
class SearchBox extends Component {

  submitSearch = () => {
    const { searchValue } = this.props;
    if (searchValue.length) {
      this.props.searchGifsAction();
      this.props.history.push(`/search/${searchValue}`)
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
        <div className='input-container'>
          <input tpe='text' onChange={this.props.updateSearchValueAction} onKeyPress={this.handleKeyPress} value={searchValue} className='search-input' placeholder='Search...' />
        </div>
        <div className='search-button-container'>
          <i onClick={this.submitSearch} className='fa fa-search search-button'></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.searchReducer.searchValue
});

export default withRouter(connect(mapStateToProps, {searchGifsAction, updateSearchValueAction})(SearchBox));

SearchBox.propTypes = {
  history: PropTypes.object.isRequired,
  searchGifsAction: PropTypes.func.isRequired,
  updateSearchValueAction: PropTypes.func.isRequired
}
