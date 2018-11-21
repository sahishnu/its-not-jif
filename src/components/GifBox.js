import React, { Component } from 'react';

class GifBox extends Component {

  constructor (props) {
    super(props);
    this.state = {
      hover: false,
      favorite: false
    }
  }

  handleMouseHover = () => {
    this.setState(this.toggleHoverState);
  }

  handleClickFavorte = () => {
    this.setState(this.toggleFavoriteState);
  }

  handleClickCopyLink = () => {
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
    const { hover, favorite } = this.state;

    const starClasses = ['fa fa-star'];
    if (favorite) {
      starClasses.push('isFav');
    }
    return (
      <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} className='gif-box-container'>
        {hover && <div className='gif-hover-box'>
          <div className='hover-box-buttons'>
            <i onClick={this.handleClickCopyLink} className='fa fa-link'></i>
            <i onClick={this.handleClickFavorte} className={starClasses.join(' ')}></i>
          </div>
        </div>}
        <img alt={`gif-id-${data.id}`} className='gif' src={data.images.fixed_height.url} />
      </div>
    );
  }
}

export default GifBox;
