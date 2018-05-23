import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(props.url);
  }


  render() {
    const { title, image } = this.props;
    return (
      <div className="button-wrapper">
        <img src={image} onClick={() => this.audio.play()} />
        <div className="button-title">{title}</div>
      </div>
    );
  }
}

Button.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}