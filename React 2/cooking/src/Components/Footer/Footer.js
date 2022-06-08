import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <section className='footer-main'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer-left'>
                        <h1 className='main-title'>Foodieland<span className='span'>.</span></h1>
                        <p className='f-text'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                    </div>
                    <div className='footer-right'>
                        <ul className='footer-end'>
                            <li className='footer-link'>Recipes</li>
                            <li className='footer-link'>Blog</li>
                            <li className='footer-link'>Contact</li>
                            <li className='footer-link'>About us</li>
                        </ul>
                    </div>
                </div>
                <div className='last-footer'>
                    <div className='end-left'>
                    <a href='#' className='end'>© 2020 Flowbase. Powered by Webflow</a>
                    </div>
                    <div className='end-right'>
                    <a href='#' className='footer-icon'><FontAwesomeIcon icon={faFacebook} size='lg'/></a>
                    <a href='#' className='footer-icon'><FontAwesomeIcon icon={faInstagram} size='lg'/></a>
                    <a href='#' className='footer-icon'><FontAwesomeIcon icon={faTwitter} size='lg'/></a>
                    </div>
                    
                    
                </div>


            </div>
        </section>

    )
}

export default Footer
