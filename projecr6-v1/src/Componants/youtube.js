import React, { Component } from 'react';

import YouTube from 'react-youtube';

import '../Css/youtube.css';

//https://youtu.be/pRTWFqhEDeo

//npm install react-youtube 

export default class Youtube extends Component {

	_onReady(event) {

    // access to player in all event handlers via event.target

    event.target.pauseVideo();

  }

render() {

    const opts = {

      height: '390',

      width: '75%',
    
      playerVars: {

        // https://developers.google.com/youtube/player_parameters

      autoplay: 1,

      },

    };
     
    return (

     <div className = "player">

    <YouTube videoId="pRTWFqhEDeo" opts={opts} onReady={this._onReady} />

     </div>
  

    );

  }
  
}