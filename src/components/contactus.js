import React from 'react';


//css
import '../styles/css/contactus.css'

export default function ContactUS(){
    return(
        <div className="contactContainer" id="ContactUs">
            <h3 className="CU">CONTACT US</h3>
            <form name="contact" method="POST" data-netlify="true" className="cuform" netlify>
            <p className="formField">
                <input type="text" name="name" placeholder="your name" className="field"/>  
            </p>
            <p className="formField">
                <input type="email" name="email" placeholder="email" className="field"/>
            </p>
            <p className="formField">
                <textarea name="message" placeholder="Message" className="messageBox"></textarea>
            </p>
            <p className="formField">
                <button type="submit" className="formButton">Send</button>
            </p>
            <div>
                <div data-netlify-recaptcha="true"></div>
            </div>
            </form>
        </div>
    )
}