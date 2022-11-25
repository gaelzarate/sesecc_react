import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="100064412066924">
        <Page href="https://www.facebook.com" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}


const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            
        </div>
    )
}

export default Contact


