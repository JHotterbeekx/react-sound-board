import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './button';

export default class SoundBoard extends Component {

  buildBoard() {
    const { sounds } = this.props;
    return this.props.sounds.map(sound => (
      <Button key={sound.title} url={sound.url} title={sound.title} />
    ))
  }

  render() {
    return (
      <div>
        <h1>Sound board</h1>
        {this.buildBoard()}
      </div>
    );
  }
}

SoundBoard.propTypes = {
  sounds: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }))
}