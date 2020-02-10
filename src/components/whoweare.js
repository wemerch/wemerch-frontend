import React from 'react';


//css
import '../styles/css/whoweare.css'
import WWA from '../styles/img/a1.png'

export default function WhoWeAre(){
    return(
        <div className="container">
            <div className="WWAMain">
                {/* <h3>WHO WE ARE</h3>
                <p>
                    wemerch is a merchandising management agency, built 
                    to give you more time to focus on your passion and 
                    less time wondering how to make money. We help 
                    influencers like you turn their passion into a career 
                    by designing and managing their merchandise. All while 
                    maintaining a hassle-free and vibe friendly environment.
                </p> */}
                <img className="WWA" src={WWA}/>
            </div>
        </div>
    )
}