import logo from '../assets/home/SESECC_color.svg';
import '../App.css';
import DarkVariantCarusel from '../layouts/carousel';
//import Apptwt from '../layouts/twitter';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
//import React, { Component } from 'react'
import ReactPlayer from 'react-player'



const Home = () => {
    return(
        <div className='home'>
            <img src={logo} className="logoSESECC" alt="logo" />
            <div>
                <DarkVariantCarusel/>
            </div>
            
            <div className='row p-4 container-fluid'>
            <h1>Sala de Prensa</h1>
            <div className='col-md-4 p-2'>
            <TwitterTimelineEmbed 
            sourceType="profile" 
            userId={"1043158001073442818"} 
            options={{height: 400}} 
            />
            </div>
            <div className='col-md-4 p-2'>
                
            </div>
            </div>
            <div className='px-4' style={{height: '60vmin'}}>
            <ReactPlayer url='https://www.youtube.com/watch?v=W3gJLf6n6ak' width ='100%' height ='100%'/>
            </div>
            
        </div>
    )
}

export default Home