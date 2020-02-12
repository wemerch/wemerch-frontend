import React from 'react';


//css
import '../styles/css/whatwedo.css'
import WWDI from '../styles/img/wwdi.png'
import WWDH from '../styles/img/wwdh.png'

export default function WhoWeAre(){
    return(
        <div className="wwdcontainer" id="WhatWeDo">
            <div className="WWDMain">
                <h3 className="WWDH">WHAT WE DO</h3>
                <img className="WWDI" src={WWDI}/>
            </div>
        </div>
    )
}