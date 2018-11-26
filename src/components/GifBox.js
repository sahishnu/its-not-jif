import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { toggleFavGif } from '../actions/gifActions';
import { connect } from 'react-redux';
import ImageContainer from './ImageContainer';
class GifBox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      hover: false,
      favorite: false,
      hoverMessage: ''
    }
    this.timeout = null;
  }

  // toggle hover state on mouse over or out
  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  }

  // set message on hover button click for 2 seconds
  setHoverMessage = (message) => {
    this.setState({ hoverMessage: message});
    this.timeout = setTimeout(() => this.setState({ hoverMessage: ''}), 2000);
  }

  // handle clicking favorite button
  handleClickFavorte = () => {
    const { favorite } = this.state;
    if (favorite) {
      this.setHoverMessage('Gif Unfavorited!');
    } else {
      this.setHoverMessage('Gif Favorited!');
    }
    // pass gif in question to action
    this.setState(this.toggleFavoriteState, () => {
      const gif = this.props.data;
      this.props.toggleFavGif({
        id: gif.id,
        url: gif.url,
        images: gif.images,
        title: gif.title
      });
    });
  }

  // clear timeouts on unmount to avoid memory leak
  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  // if gif is a favorite - set its state
  componentDidMount () {
    const { data } = this.props;

    if (data.isFav) this.setState({ favorite: true });
  }

  // handle copy link click
  handleClickCopyLink = () => {
    this.setHoverMessage('Link Copied!');
    const { data } = this.props;
    const el = document.createElement('textarea');
    el.value = data.url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  // toggle hover state on mouse on or off
  toggleHoverState = (state) => {
    return {
      hover: !state.hover
    }
  }
  // toggle favorite state on or off
  toggleFavoriteState = (state) => {
    return {
      favorite: !state.favorite
    }
  }

  renderTempMessage = () => {
    const { hoverMessage } = this.state;

    if (hoverMessage) {
      return (
        <div className='message-box'>{hoverMessage}</div>
      )
    } else {
      return null;
    }
  }

  renderHoverBox = () => {
    const { hover, favorite, hoverMessage } = this.state;
    const starClasses = ['fa fa-star'];
    if (favorite) {
      starClasses.push('isFav');
    }
    if (!hoverMessage && hover) {
      return (
        <div className={'gif-hover-box' + (hover ? ' active' : '')}>
          <div className='hover-box-buttons'>
            <i onClick={this.handleClickCopyLink} className='fa fa-link'></i>
            <i onClick={this.handleClickFavorte} className={starClasses.join(' ')}></i>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
    const { data } = this.props;

    return (
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className='gif-box-container'>
        {this.renderTempMessage()}
        {this.renderHoverBox()}
        <ImageContainer altText={data.title} source={data.images.fixed_height.url} />
      </div>
    );
  }
}

export default connect(null, {toggleFavGif})(GifBox);

GifBox.propTypes = {
  data: PropTypes.object.isRequired,
  toggleFavGif: PropTypes.func.isRequired
}

