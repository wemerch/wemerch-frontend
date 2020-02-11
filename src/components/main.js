import React from 'react';

//components

//css
import "../styles/css/main.css"
import Slogan from '../styles/img/slogan.png'


export default function Main(){
    return(
        <div className="Main">
            <img src={Slogan}/>
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                />
        </div>
    )
}