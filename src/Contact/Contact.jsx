import React from 'react';

function Contact() {
    return (
        <div id='contact' className='App-contact main2'>
            <div className="contacttitle"  data-aos="fade-in">
                <h1>Contact Me</h1>
                <span className='line2'></span>
            </div>

            <div className="subcontact"  data-aos="fade-in">
                <div className="contactinfo box5">
                    <h2>Contact Info</h2>
                    <ContactSection icon="location_on" location="Karachi,Pakistan" link="https://www.google.com/maps/place/24%C2%B058'52.8%22N+66%C2%B059'19.7%22E/@24.9813319,66.9862173,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.9813319!4d66.9887922?hl=en&entry=ttu" target="_blank"/>
                    <ContactSection icon="phone_in_talk" location="+92 313 2680481" link="https://wa.me/+923132680481" target="_blank" />
                    <ContactSection icon="attach_email" location="abuhurairah775@gmail.com" link="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqVNfGJlNbWJVmFtdLLqhMhNBrTdqwqvgHbDjGNcKdJssxwPMWhtvHpRwQHfblJBkJmxfg" target="_blank"/>
                </div>

                <div className="contactfields box6"  data-aos="zoom-in">
                    <Field lable="Name" type='text' placeholder="Enter Name" />
                    <Field lable="Email" type='email' placeholder="Enter Email" />
                    <label className='msg'>Message</label>
                    <textarea className='textarea' name="message" cols="30" rows="10" defaultValue='type'></textarea>
                    <button className='btn'  data-aos="fade-in">Send</button>
                </div>
            </div>

        </div>
    );
}

const ContactSection = (props) => {
    return (
        <div >
            <a href={props.link} target={props.target}className='contactlinks'  data-aos="zoom-in">
                <span className="material-symbols-outlined contact-icon">{props.icon}</span>
                <p>{props.location}</p>
            </a>
        </div>
    )
}

const Field = (props) => {
    return (
        <div className="field">
            <label>{props.lable}</label>
            <input type={props.type} placeholder={props.placeholder} />
            
        </div>
    )
}

export default Contact;