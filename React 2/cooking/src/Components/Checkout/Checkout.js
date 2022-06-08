import React from 'react'
import './Checkout.css'
import { images } from '../../image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faInstagram } from '@fortawesome/free-brands-svg-icons';

const Checkout = () => {
  return (
      <section className='background'>
        <div className='container'>
        <div className='checkout-main'>
            <div className='checkout-conent'>
                <p className='checkout-para1'>Check out @foodieland on Instagram</p>
                <p className='checkout-para2'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='checkout-img'>
            <img className='card' src={images.post} />
            <img className='card' src={images.post2} />
            <img className='card' src={images.post3} />
            <img className='card' src={images.post4} />

            </div>
            <div className='checkout-btn'>
                <a href='#' className='checkout-text'>Visit Our Instagram <span className='insta'><FontAwesomeIcon icon={faInstagram} size='lg'/></span></a>
               
            </div>
        </div>
      
    </div>
      </section>
    
  )
}

export default Checkout
