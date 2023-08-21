import React from 'react';
import wd from '../images/webdevelopment.png'
import react from '../images/react.png'

function Experience(props) {
    return (
       <div className='App-experience main2' id='experience'>
        <div className="experience-title box3" data-aos="fade-in">
                <h1>My Experience</h1>
                <span className='line2 spane-line' ></span>
                <p>I have been working in this field for 2 years and have following professional degrees in the relevant field
                    and polished my skills by developing many websites to solve the real world problems.
                </p>
        </div>

        <div className="experience-details box4" data-aos='fade-in'>
            <Exp title="FrontEnd Development" des="Drive innovation in web development, leveraging 2 years of experience for exceptional results." date='2021'src={wd} alt='web development logo'/>
            <Exp title="React.js" des="Deliver dynamic web experiences using React.js with one year of proven expertise." date='2022'src={react} alt='web development logo'/>
        </div>

       </div>
    );
}

const Exp=(props)=>{
    return(
     <div className="exp box">
        <figure className='exp-content box-content'>
            <span className="img-border"><img src={props.src} alt={props.alt} /></span>
                <p className="exp-title">{props.title}</p>
                <p className='exp-date'>{props.date}</p>
                <p className='exp-description'>{props.des}</p>
        </figure>
     </div>
    )
}



export default Experience;
