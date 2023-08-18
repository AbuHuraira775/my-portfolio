import React from 'react';
import cybertech from '../images/cybertech.png'
import ecommercefrontend from '../images/ecommercefrontend.png'
import imgeditor from '../images/img-editor.png'


import HireMe from './HireMe';


function Portfolio() {

    const bg = [
        { backgroundImage: `url(${cybertech})`,key:0 },
        { backgroundImage: `url(${ecommercefrontend})`,key:1  },
        { backgroundImage: `url(${imgeditor})`,key:2  },
        // { backgroundImage: `url(${img4})`,key:3  },
    ]

    const bgstyle = {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '1rem',
    }

    const title = [
        'Landing Page',
        "E commerce frontend",
        'Image editor',

    ]

    const links = [
        'https://whimsical-lolly-917c69.netlify.app/',
        "https://abuhuraira775.github.io/Frontend/",
        "https://abuhuraira775.github.io/image-editor/"
    ]
    // const port_title = title.map(title=> { return title})
    return (
        <div className='App-portfolio main2' id='portfolio'>
            <div className="portfolio-title box3" data-aos="fade-in">
                <h1>My Portfolio</h1>
                <span className='line2 spane-line' ></span>
                <p>By passing years I designed many websites fot the business, enterprices and for individuals some of the are given below.</p>
            </div>
            <div className="portfolio-details box4">

                {bg.map(bg => {
                    return (
                        <div style={Object.assign(bg, bgstyle)} key={bg.key}><Port  port_title = {title[bg.key]} href={links[bg.key]}/></div>)
                })}            
            </div>
            <HireMe />
        </div>
    );
}

const Port = (props) => {

    return (

        <a href={props.href} className='port' data-aos="fade-in" target='_blank' rel="noreferrer" >
            <span className="material-symbols-outlined icon">search</span>
            <p>{props.port_title}</p>
        </a>

    )
}
export default Portfolio;