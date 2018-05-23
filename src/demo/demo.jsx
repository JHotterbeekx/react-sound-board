import React, { Component } from 'react';
import SoundBoard from '../soundboard/soundboard';

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.sounds = [
      { title: 'Badum Tss', url: 'https://www.myinstants.com/media/sounds/badumtss.swf.mp3', image: 'https://www.audiomart.co.za/images/thumbs/220x201_db-dms141012di-bk.jpg' },
      { title: 'Doh', url: 'https://www.myinstants.com/media/sounds/doh.swf.mp3', image: 'http://interactive.nydailynews.com/2016/05/simpsons-quiz/img/simp1.jpg' },
      { title: 'Chewbacca', url: 'https://www.myinstants.com/media/sounds/chewbacca.swf.mp3', image: 'https://www.caufields.com/productimages/Halloween/Mask/Images/chewy.jpg' },
      { title: 'Mike', url: 'https://www.myinstants.com/media/sounds/mike.swf.mp3', image: 'https://lh3.googleusercontent.com/KIzBOlpd9W364CNUMfU7MJ67taHDdnAOAjZZd87hBFkgq7zCIPNou90umFZdCy4SzFDOf-laqH9QjrOcjmWvm0usbvzuJ-axnouYJ-kl442xUwNwzZHiDnCk2yl5bCI5dW5DdFzaOA0kJMQvmI39DBxoozSQR95657HtXtzLYR-U_-49JNytOc9TeZCFGpnv6bvaxt6ZnBYWdPZeKAJdd34C8apjmPlgfvtTZTEJa8UdXxMJVF_gIds3egQncNvxa3ef5d5Y7icUPXkNccSqBdInb_sQ5VCm0wAcpzEIGh5rdejVf2_H9BhFAhmX7gQnxsRZ6nXK-bK7mHTcWpFR_qNTW1pY-abPsGj_ZvhUh7NllLP1TfZ9xIlq4X_rl1VTHC1PexY2ECE5Bddv0j5QqjC5nLG3p6H54AK4_BVYlvB_drWRCX1ZmWKcYIwfWlTaBLdnF37FE4PZCfogbGQzb3ji9J5dg8NEdsDfji4sKHP2Kzn2GfGXflsdEhjkXCF_7LLC_il6n7DjrkFTuQ_qq256YQVhYRTw1V6TGpW6W9BqjY301HHtmzKBcbpOznCsn5ZsRkHsDK_69fVQHwvzffu_ktAUL04CuUQrnbeMTnMRPTZ1iD6AqjLt_aZ8oEyUw1BrsFrvAJHxJIN98YEYARmbbqjDW9qFBA=w1266-h949-no' },

      
    ]
  }

  render() {
    return (
      <SoundBoard sounds={this.sounds} />
    );
  }
}