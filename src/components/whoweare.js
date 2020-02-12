import React from 'react';


//css
import '../styles/css/whoweare.css'
import WWAH from '../styles/img/wwa.png'
import WWAI from '../styles/img/wwai.png'

export default function WhoWeAre(){
    return(
        <div className="wwacontainer" id="WhoWeAre">
            <div className="WWAMain">
                <h3 className="WWAH">Who We Are</h3>
                <p className="WWAI" >we<b>merch</b> is a merchandising management agency, built 
                    to give you more time to focus on your passion and 
                    less time wondering how to make money. We help 
                    influencers like you turn their passion into a career 
                    by designing and managing their merchandise. All while 
                    maintaining a hassle-free, friendly environment.</p>
            </div>
        </div>
    )
}