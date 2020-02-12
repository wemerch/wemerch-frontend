import React from 'react';


//css
import '../styles/css/whatwedo.css'
import WWDI from '../styles/img/wwdi.png'
import WWDH from '../styles/img/wwdh.png'

export default function WhoWeAre(){
    return(
        <div className="wwdcontainer" id="WhatWeDo">
            <div className="WWDMain">
                {/* <h3>WHO WE ARE</h3>
                <p>
                    wemerch is a merchandising management agency, built 
                    to give you more time to focus on your passion and 
                    less time wondering how to make money. We help 
                    influencers like you turn their passion into a career 
                    by designing and managing their merchandise. All while 
                    maintaining a hassle-free and vibe friendly environment.
                </p> */}
                <h3 className="WWDH">What We Do</h3>
                <img className="WWDI" src={WWDI}/>
            </div>
        </div>
    )
}