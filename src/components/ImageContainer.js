import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PASTEL_COLORS } from '../config';

class ImageContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      loaded: false,
      bgc: 'white'
    }
  }

  handleImageLoaded = () => {
    this.setState({ loaded: true }, );
  }

  componentDidMount () {
    this.setState({ bgc: this.getRandomPasteleColor()})
  }

  getRandomPasteleColor = () => {
    return PASTEL_COLORS[Math.floor(Math.random()*PASTEL_COLORS.length)];
  }

  render() {
    const { source, altText } = this.props;
    const { loaded, bgc } = this.state;
    return (
      <div style={{ backgroundColor: bgc}} className='gif-placeholder'>
        <img alt={altText} onLoad={this.handleImageLoaded} className={`gif ` + (loaded ? `loaded` : '')} src={source} />
      </div>
    );
  }
}

export default ImageContainer;

ImageContainer.propTypes = {
  source: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

