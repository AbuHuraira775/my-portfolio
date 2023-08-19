import React from 'react';
import CV from '../cv/Abu Huraira CV.pdf'

function About() {
    return (
        <div className='App-about main1' id='about' data-aos="zoom-in">
            <div className="about-title box1">
                <h1>Do You Know About Me?</h1>
                <span className='about-line line1'></span>
            </div>
            <div className="about-details box2">
                <div className="about-description">
                    <p>I am Web Developer and I am working in this field from 2 years and till I have built many websites for the busines promotion and showcase their products</p>
                    <p>I use Bootstrap and other tools to make the websites looking professional and more attracive. and  I use React.js (JavaScript library) to build the attractive websites.</p>
                </div>
                <div className="about-buttons">
                    <a href="#services"><button className='btn'>Works<span className="material-symbols-outlined">arrow_forward</span></button></a>
                    <a href={CV} download="Abu Huraira CV"><button className='btn about-button '>CV<span className="material-symbols-outlined">download</span></button></a>
                </div>
            </div>
            
        </div>
    );
}

export default About;