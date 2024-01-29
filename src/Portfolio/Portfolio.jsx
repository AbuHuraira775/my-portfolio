import React from 'react';
import cybertech from '../images/cybertech.png'
import ecommercefrontend from '../images/ecommercefrontend.png'
import imgeditor from '../images/img-editor.png'


import HireMe from './HireMe';


function Portfolio() {

    const bg = [
        { backgroundImage: `url(${cybertech})`, key: 0 },
        { backgroundImage: `url(${ecommercefrontend})`, key: 1 },
        { backgroundImage: `url(${imgeditor})`, key: 2 },
        // { backgroundImage: `url(${img4})`,key:3  },
    ]

    const bgstyle = {
        backgroundColor: '#fff',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '1rem',
    }

    const title = [
        'Landing Page',
        "E-commerce",
        'Image editor',
    ] 
    const description = [
        'Responsive Landing page which is build using HTML5, and CSS3.',
        "E commerce frontend website created by using markup Language (HTML5) and styled by Bootstrap",
        'An Image editor, which can perform some basic editings.',
    ]

    const links = [
        'https://whimsical-lolly-917c69.netlify.app/',
        "https://abuhuraira775.github.io/Frontend/",
        "https://abuhuraira775.github.io/image-editor/"
    ]
    // const port_title = title.map(title=> { return title})
    return (
        <div className='App-portfolio main2' id='portfolio'>
            <div className="portfolio-title box3" data-aos="zoom-in">
                <h1>My Portfolio</h1>
                <span className='line2 spane-line' ></span>
                <p>By passing years I designed many websites. You can check below</p>
            </div>
            <div className="portfolio-details box4">

                {bg.map(bg => {
                    return (
                        <div style={Object.assign(bg,bgstyle)} key={bg.key}><Port port_title={title[bg.key]} href={links[bg.key]} port_desc={description[bg.key]}/></div>)
                })}
            </div>
            <HireMe />
        </div>
    );
}

const Port = (props) => {

    return (

        <div className="port" >
            <div className="port-background">
                {/* <p>image backgound</p> */}
            </div>
            <div className="port-description" data-aos="zoom-in">
                <div className="porttitle">
                    <h3>{props.port_title}</h3>
                    <a href={props.href} className='p' data-aos="fade-in" target='_blank' >
                        <button className='btn'>Visit</button>
                    </a>
                </div>
                <div className="portpara">
                    <p>{props.port_desc}</p>
                </div>
            </div>


        </div>



    )
}
export default Portfolio;