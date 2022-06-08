import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navigation'>
<div class="container">
    
    <div className='nav'>
      <h1 className='main-title'>Foodieland<span className='span'>.</span></h1>
    
      <ul className='ul'>
        <li className='nav-link'>Home</li>
        <li className='nav-link'>Recipes</li>
        <li className='nav-link'>Blog</li>
        <li className='nav-link'>Contact</li>
        <li className='nav-link'>About us</li>
      </ul>
      
      <div class="social">
        <a href="#" className="link"><i class="fab fa-facebook-f"></i></a>
        <a href="#" className="link"><i class="fab fa-twitter"></i></a>
        <a href="#" className="link"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
</div>
    </div>
  
  )
}
export default Navbar
