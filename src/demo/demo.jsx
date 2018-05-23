import React, { Component } from 'react';
import SoundBoard from '../soundboard/soundboard';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.sounds = [
      { title: 'Badum Tss', url: 'https://www.myinstants.com/media/sounds/badumtss.swf.mp3', image: 'https://www.audiomart.co.za/images/thumbs/220x201_db-dms141012di-bk.jpg' },
      { title: 'Doh', url: 'https://www.myinstants.com/media/sounds/doh.swf.mp3', image: 'http://interactive.nydailynews.com/2016/05/simpsons-quiz/img/simp1.jpg' },
    ]
  }

  render() {
    return (
      <SoundBoard sounds={this.sounds} />
    );
  }
}