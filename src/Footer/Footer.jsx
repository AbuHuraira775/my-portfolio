import React from 'react';
import FooterBottom from './FooterBottom';
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterName from './FooterName';
import FooterServices from './FooterServices';

function Footer() {
    return (
        <div id='footer' className='App-footer main1'>
            <div className="footertopdiv" id='footertopdiv'>
                <FooterName />
                <FooterServices />
                <FooterLinks />
                <FooterContacts />
            </div>
            <div className="footerbottomdiv box2">
                <FooterBottom />
            </div>
        </div>
    );
}

export default Footer;