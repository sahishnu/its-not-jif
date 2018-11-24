import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifTable from '../components/GifTable';
import { getPathParams } from '../util/pathHelper';
import { updateSearchValueAction, searchGifsAction } from '../actions/searchActions';
import { clearGifData } from '../actions/gifActions';

class Home extends Component {

  componentDidUpdate (prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const { location } = this.props;
      let { pathname } = location;
      const pathParams = getPathParams(pathname);
      if (pathParams[0] === '') {
        this.props.clearGifData()
      }
    }
  }

  componentDidMount () {
    const { location } = this.props;
    let { pathname } = location;
    const pathParams = getPathParams(pathname);
    if (pathParams.length === 2) {
      const searchValue = pathParams[1];
      const event = {
        target: {
          value: searchValue
        }
      }
      this.props.updateSearchValueAction(event);
      this.props.searchGifsAction();
    } else if (pathParams[0] === '') {
      this.props.clearGifData()
    }
  }

  render() {
    const { gifData, gifPaginateData } = this.props;
    return (
      <div className='home-view'>
        <GifTable enableLoadMore meta={gifPaginateData} data={gifData} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifData: state.gifReducer.gifData,
  gifPaginateData: state.gifReducer.gifPaginateData
});

export default connect(mapStateToProps, {updateSearchValueAction, searchGifsAction, clearGifData})(Home);
