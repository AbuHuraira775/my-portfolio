import React from 'react';
import fb from '../images/fb.png'
import gh from '../images/gh.png'
import linkedin from '../images/linkedin.png'

function FooterName() {
    return (
        <div className='footername' data-aos='fade-in'>
            <h1>Abu Huraira</h1>
            <p>Get a professional website for your business</p>
            <div className="links">
            <a href="https://www.facebook.com/profile.php?id=100056895102871" target='_blank'><img src={fb} alt="" /></a>
            <a href="https://github.com/AbuHuraira775/" target='_blank' ><img src={gh} alt="" /></a>
            <a href="https://www.linkedin.com/in/abu-huraira-a9828922a/" target='_blank'><img src={linkedin} alt="" /></a>
            </div>
        </div>
    );
}

export default FooterName;