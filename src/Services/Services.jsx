import React from 'react';
import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import bootstrap from '../images/bootstrap.png'

function Services() {
    return (
       <div className='App-services main2' id='services' >
            <div className="service-title box3" data-aos="zoom-in-down">
                <h1>My Services</h1>
                <span className='line2 spane-line' ></span>
                <p>I am serving my clients in website development and focus on the customer satisfaction by using the following tools to build the seamless websites.</p>
            </div>

            <div className="service-details box4" >
            <Box title="React for UI" des="Build dynamic, efficient, and interactive user interfaces using component-based architecture in React.js." icon={react} alt='react.js logo'/>
            <Box title="Html5" des="HTML5 aims to enhance web content and interactivity through modern, standardized markup." icon={html} alt='html5 logo'/>
            <Box title="CSS3" des="Enhance web design with advanced styling, layout, and animation features for modern websites." icon={css} alt='css3 logo'/>
            <Box title="Bootstrap" des="Design responsive and modern websites efficiently using Bootstrap 5's versatile framework components." icon={bootstrap} alt='bootstrap5 logo'/>
            <Box title="JavaScript ES6" des="Enhance user experience through interactive and responsive JavaScript elements on the website." icon={js} alt='javascript logo'/>
            </div>
       </div>
    );
}
const Box=(props)=>{
    return(
        <div className="box "  id="ser" data-aos="zoom-in">
            <figure className='box-content'>
                <span className='img-border'><img src={props.icon} alt={props.alt} /></span>
                <p className="box-title">{props.title}</p>
                <p className='box-description'>{props.des}</p>
            </figure>
        </div>
    )
}
export default Services;