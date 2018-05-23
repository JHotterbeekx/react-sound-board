import React, { Component } from 'react';
import SoundBoard from '../soundboard/soundboard';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.sounds = [
      { title: 'Badum Tss', url: 'https://www.myinstants.com/media/sounds/badumtss.swf.mp3' },
      { title: 'Doh', url: 'https://www.myinstants.com/media/sounds/doh.swf.mp3' },
    ]
  }

  render() {
    return (
      <div>
        <h1>Demo</h1>
        <SoundBoard sounds={this.sounds} />
      </div>
    );
  }
}