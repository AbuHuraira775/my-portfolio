import React, {useState} from 'react';


function Navbar() {
    const [MobileMenu,setMobileMenu] = useState(false)
    const select = document.getElementsByClassName('select')

    const show=()=>{
        return <div><i className="fa-solid fa-bars"></i></div>
    }
    return (
        <div className='Navbar' >
            <header className='App-header'>
                <div className="nav-logo">
                    <a href="#">Abu Huraira</a>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#experience">Experiences</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#blog">Blogs</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="nav-menu">
                    <a onClick={()=>{setMobileMenu(!MobileMenu)}}>
                    {MobileMenu ?
                    <i className="fa-solid fa-xmark"></i>:
                    <i className="fa-solid fa-bars"></i>
                    }
                    </a>
                </div>

                <div id={MobileMenu? 'hide-nav' : 'hide'}>
                    <ul className={MobileMenu? 'show' : 'hide'} onClick={()=>{setMobileMenu(!MobileMenu)}}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#experience">Experiences</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#blog">Blogs</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </header>

        </div>
    );
}

export default Navbar;