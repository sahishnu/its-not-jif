import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { gifData, gifPaginateData, isLoading } = this.props;
    return (
      <div className='home-view view'>
        <GifTable isLoading={isLoading} enableLoadMore meta={gifPaginateData} data={gifData} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifData: state.gifReducer.gifData,
  gifPaginateData: state.gifReducer.gifPaginateData,
  isLoading: state.gifReducer.loading
});

export default connect(mapStateToProps, {updateSearchValueAction, searchGifsAction, clearGifData})(Home);

Home.propTypes = {
  gifData: PropTypes.array.isRequired,
  gifPaginateData: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  updateSearchValueAction: PropTypes.func.isRequired,
  searchGifsAction: PropTypes.func.isRequired,
  clearGifData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}