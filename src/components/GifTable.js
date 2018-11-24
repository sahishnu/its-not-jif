import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifBox from './GifBox';
import {searchGifsAction} from '../actions/searchActions';

class GifTable extends Component {

  handleLoadMoreClick = () => {
    this.props.searchGifsAction(true);
  }

  render() {
    const { data, enableLoadMore, meta } = this.props;

    const showTable = (data && data instanceof Array && data.length);
    if (!showTable) {
      return null;
    }

    const showMore = enableLoadMore && showTable;
    return (
      <div className='table-container'>
        <div className='table-meta'>{meta.total_count} gifs</div>
        <div className='table'>
          {data.map((gif, index) => <GifBox key={index} data={gif} />)}
        </div>
        <div className='more-container'>
          {showMore ?
          <div onClick={this.handleLoadMoreClick} className='more-button'>
            <div className='button-label'>Give me MORE!</div>
          </div> : null}
        </div>
      </div>
    );
  }
}

export default connect(null, {searchGifsAction})(GifTable);
