import React from 'react';

//components

//css
import "../styles/css/main.css"
import MainBanner from '../styles/img/banner3.png'


export default function Main(){
    return(
        <div className="Main">
            <img src={MainBanner}/>
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                />
            <img src={MainBanner}/>
        </div>
    )
}