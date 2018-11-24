import React, { Component } from 'react';
import { PASTEL_COLORS } from '../config';

class ImageContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  handleImageLoaded = () => {
    this.setState({ loaded: true }, );
  }

  render() {
    const { source, altText } = this.props;
    const { loaded } = this.state;
    const randomColor = PASTEL_COLORS[Math.floor(Math.random()*PASTEL_COLORS.length)];
    return (
      <div style={{ backgroundColor: randomColor}} className='gif-placeholder'>
        <img alt={altText} onLoad={this.handleImageLoaded} className={`gif ` + (loaded ? `loaded` : '')} src={source} />
      </div>
    );
  }
}

export default ImageContainer;

