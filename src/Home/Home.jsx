import React from 'react';
import me from '../images/me.png'

function Home() {
    return (
        <div className='App-home main1' id='home' data-aos="zoom-out">
            <div className="home-details box1" data-aos="slide-right">
                <h1 className="home-heading1">I'm Abu Huraira</h1>
                <span className='line1'></span>
                <h2 className="home-heading2">A FrontEnd Developer</h2>
                <a href="https://www.fiverr.com/abuhurairah775" target="_blank"><button className="home-button btn">Hire Me<span className="material-symbols-outlined">arrow_forward</span></button></a>
            </div>
            <div className="home-background box2" data-aos="slide-left">
                <img src={me} alt="my image" />
            </div>
        </div>
    );
}

export default Home;