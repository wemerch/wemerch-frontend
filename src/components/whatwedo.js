import React from 'react';


//css
import '../styles/css/whatwedo.css'
import WWDI from '../styles/img/wwdi.png'

export default function WhoWeAre(){
    return(
        <div className="wwdcontainer">
            <div className="WWDMain" id="WhatWeDo">
                <h3 className="WWDH">WHAT WE DO</h3>
                <img className="WWDI" src={WWDI}/>
            </div>
        </div>
    )
}