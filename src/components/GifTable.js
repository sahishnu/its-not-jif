import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GifBox from './GifBox';
import {searchGifsAction} from '../actions/searchActions';

class GifTable extends Component {

  handleLoadMoreClick = () => {
    this.props.searchGifsAction(true);
  }

  render() {
    const { data, enableLoadMore, meta, isLoading } = this.props;
    const showTable = !!(data && data instanceof Array && data.length);
    const { total_count } = meta;
    const showMore = !!(enableLoadMore && showTable && (data.length < total_count));
    return (
      <div className='table-container'>
        {showTable && <div className='table-meta'>{total_count} gifs</div>}
        <div className='table'>
          {data.map((gif, index) => <GifBox key={index} data={gif} />)}
        </div>
        {isLoading && <div className='loading-container'>
          <i className='fa fa-spinner'></i>
        </div>}
        {showMore && <div className='more-container'>
          <div onClick={this.handleLoadMoreClick} className='more-button'>
            <div className='button-label'>Give me MORE!</div>
          </div>
        </div>}
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
