import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifBox from './GifBox';
import {searchGifsAction} from '../actions/searchActions';

class GifTable extends Component {

  handleLoadMoreClick = () => {
    this.props.searchGifsAction(true);
  }

  render() {
    const { gifData, gifPaginateData } = this.props;
    const showMore = (gifData && gifData instanceof Array && gifData.length);
    return (
      <div className='table-container'>
        {/* <div className='table-meta'>Showing {gifPaginateData.count} of {gifPaginateData.total_count} </div> */}
        <div className='table'>
          {gifData.map((gif, index) => <GifBox key={index} data={gif} />)}
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

const mapStateToProps = state => ({
  gifData: state.gifReducer.gifData,
  gifPaginateData: state.gifReducer.gifPaginateData
});

export default connect(mapStateToProps, {searchGifsAction})(GifTable);
