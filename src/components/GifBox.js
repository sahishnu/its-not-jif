import React, { Component } from 'react';
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
  }

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  }

  setHoverMessage = (message) => {
    this.setState({ hoverMessage: message});
    setTimeout(3000, this.setState({ hoverMessage: ''}));
  }

  handleClickFavorte = () => {
    this.setHoverMessage('Gif Favorited!');
    this.setState(this.toggleFavoriteState, () => {
      const gif = this.props.data;
      this.props.toggleFavGif({
        id: gif.id,
        url: gif.url,
        images: gif.images
      });
    });
  }

  componentDidMount () {
    const { data } = this.props;

    if (data.isFav) this.setState({ favorite: true });
  }

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

  toggleHoverState = (state) => {
    return {
      hover: !state.hover
    }
  }

  toggleFavoriteState = (state) => {
    return {
      favorite: !state.favorite
    }
  }

  render() {
    const { data } = this.props;
    const { hover, favorite, hoverMessage } = this.state;

    const starClasses = ['fa fa-star'];
    if (favorite) {
      starClasses.push('isFav');
    }
    return (
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className='gif-box-container'>
        {hover && <div className={'gif-hover-box' + (hover ? ' active' : '')}>
          {hoverMessage && <div>{hoverMessage}</div>}
          <div className='hover-box-buttons'>
            <i onClick={this.handleClickCopyLink} className='fa fa-link'></i>
            <i onClick={this.handleClickFavorte} className={starClasses.join(' ')}></i>
          </div>
        </div>}
        <ImageContainer altText={data.title} source={data.images.fixed_height.url} />
      </div>
    );
  }
}

export default connect(null, {toggleFavGif})(GifBox);

