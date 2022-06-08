import React from 'react'
import './Inbox.css'
import { images } from '../../image'

const Inbox = () => {
    return (
        <section className='inbox'>
            <div className='container'>
                <div className='s-card'>
                    <div className='inbox-content'>
                        <p className='inbox-main'>Deliciousness to your inbox</p>
                        <p className='inbox-submain'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                        <form action="/action_page.php" className='email'>
                        <input type="email" id="emails" name="emails" placeholder='Your email address...'  className='email-add'/>
                        <a href='mailto:abc@example.com' target='_blank' className='inner-btn'>Subscribe</a>
                        </form>
                    </div>
                    <div className='inbox-left'>
                <img className='b-img' src={images.bg1} />
                </div>
                
                </div>
                
            </div>
        </section>

    )
}

export default Inbox
