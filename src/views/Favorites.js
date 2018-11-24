import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FAVORITES} from '../config';
import GifTable from '../components/GifTable';
import { updateSearchValueAction } from '../actions/searchActions';
class Favorites extends Component {

  setFavorites = () => {
    const data = this.props.favorites;
    const paginateData = {
      total_count: data.length
    };
    return { data, paginateData };
  }

  componentDidMount () {
    const event = {
      target: {
        value: ''
      }
    }
    this.props.updateSearchValueAction(event);
  }

  render() {
    const { data, paginateData } = this.setFavorites();
    return (
      <div className='favorites-view'>
        <GifTable meta={paginateData} data={data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.gifReducer.favorites
});

export default connect(mapStateToProps, {updateSearchValueAction})(Favorites);
