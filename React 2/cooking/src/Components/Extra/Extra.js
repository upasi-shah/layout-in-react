import React from 'react'
import './Extra.css'
import { images } from '../../image'

const Extra = () => {
    return (
        <div className='container'>
            <div className='chef-main'>
            <div className='chef-left'>
                <div className='chef-content'>
                    <p>
                        Everyone can be a chef in their own kitchen
                    </p>
                </div>
                <div className='chef-subcontent'>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>
                <div className='chef-btn'>
                    <a href='#'className='btn-text'>Learn More</a>
                </div>
            </div>
            <div className='chef-right'>
                <div className='chef-img'>
                    <img className='ch-img' src={images.chef} />
                </div>
            </div>

            </div>
            


        </div>
    )
}

export default Extra
