import React, { Component } from 'react'
import ReactPlayer from 'react-player'

function PlayerYutu() {
    return (
        class App extends Component {
            render() {
              return (
                <div>
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=rnwlWn603g4'
                    className='react-player'
                    playing
                    width='100%'
                    height='100%'
                  />
                </div>
              );
            }
          }
    );
  }
  
  export default PlayerYutu;