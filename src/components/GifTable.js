import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GifBox from './GifBox';
import {searchGifsAction} from '../actions/searchActions';

class GifTable extends Component {

  // if click more button, load more gifs with current search params
  handleLoadMoreClick = () => {
    this.props.searchGifsAction(true);
  }

  renderTotalGifs = () => {
    const { data, meta } = this.props;

    if (!data || !meta) {
      return null;
    }
    const showTable = !!(data && data instanceof Array && data.length);
    const { total_count } = meta;

    if (showTable) {
      return <div className='table-meta'>{total_count} gifs</div>
    }

    return null;
  }

  renderLoader = () => {
    const { isLoading } = this.props;

    if (isLoading) {
      return (
        <div className='loading-container'>
          <i className='fa fa-spinner'></i>
        </div>
      )
    } else {
      return null;
    }
  }

  renderGifs = () => {
    const { data } = this.props;
    const gifs = data.map((gif, index) => <GifBox key={index} data={gif} />);
    if (data) {
      return gifs;
    } else {
      return null;
    }
  }

  renderShowMoreButton = () => {
    const { data, enableLoadMore, meta } = this.props;
    const showTable = !!(data && data instanceof Array && data.length);
    const { total_count } = meta;
    const showMore = !!(enableLoadMore && showTable && (data.length < total_count));

    if (showMore) {
      return (
        <div className='more-container'>
          <div onClick={this.handleLoadMoreClick} className='more-button'>
            <div className='button-label'>Give me MORE!</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className='table-container'>
        {this.renderTotalGifs()}
        <div className='table'>
          {this.renderGifs()}
        </div>
        {this.renderLoader()}
        {this.renderShowMoreButton()}
      </div>
    );
  }
}

export default connect(null, {searchGifsAction})(GifTable);

GifTable.propTypes = {
  data: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
  enableLoadMore: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  searchGifsAction: PropTypes.func.isRequired
}
