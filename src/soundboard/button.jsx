import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(props.url);
  }


  render() {
    const { title } = this.props;
    return <button onClick={() => this.audio.play()}>{title}</button>
  }
}

Button.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
}