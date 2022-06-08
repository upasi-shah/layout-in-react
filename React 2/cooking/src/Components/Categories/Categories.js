import React from 'react'
import './Categories.css'
import { images } from '../../image'

const Categories = () => {
  return (
    <div className='container'>
      <div className='category'>
        <h1 className='main-head'>Categories</h1>
        <div className='btn'>
        <p className='sub-title'>View All Categories</p>
        </div>
        
      </div>
      <div className='category-img'>
        <div className='breakfast meal'>
          <img className='c-img' src={images.breakfast} />
          <p className='sub-title'>Breakfast</p>
        </div>
        <div className='vegan  meal'>
          <img className='c-img' src={images.vegan} />
          <p className='sub-title'>Vegan</p>
        </div>
        <div className='meat meal'>
          <img className='c-img' src={images.meat} />
          <p className='sub-title'>Meat</p>
        </div>
        <div className='desert meal'>
          <img className='c-img' src={images.desert} />
          <p className='sub-title'>Desert</p>
        </div>
        <div className='lunch meal'>
          <img className='c-img' src={images.lunch} />
          <p className='sub-title'>Lunch</p>
        </div>
        <div className='chocolate meal'>
          <img className='c-img' src={images.chocolate} />
          <p className='sub-title'>Chocolate</p>
        </div>

      </div>


    </div>
  )
}

export default Categories


