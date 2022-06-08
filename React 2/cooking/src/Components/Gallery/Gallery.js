import React from 'react'
import './Gallery.css'
import { images } from '../../image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faStopwatch } from '@fortawesome/fontawesome-free-solid'


const Gallery = () => {
    return (
        <section className='items'>
            <div className='container'>
                <div className='gallery-content'>
                    <div className='gallery-main'>
                        <p className='delicious'>
                            Try this delicious recipe to make your day
                        </p>
                        <p className='subline'>
                            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                        </p>
                    </div>
                    <div className='item'>
                        <div className='item-row'>
                            <div className='item-col'>
                                <div className='item-block'>
                                <div className='gal-main'>
                                <img className='f-img' src={images.fruitsalad} />
                            </div>

                            <p className='i-text'>Mixed Tropical Fruit Salad with Superfood Boosts </p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Healthy</span>
                            </div>
                                </div>
                            </div>
                            <div className='item-col'>
                                <div className='item-block'>
                                <div className='gal-main'>
                                <img className='f-img' src={images.beef} />
                            </div>

                            <p className='i-text'>Big and Juicy Wagyu Beef Cheeseburger </p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Western</span>
                            </div>
                                </div>
                            </div>
                            <div className='item-col'>
                                <div className='item-block'>
                                <div className='gal-main'>
                                <img className='f-img' src={images.rice} />
                            </div>

                            <p className='i-text'>Healthy Japanese Fried Rice with Asparagus </p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Healthy</span>
                            </div>
                                </div>
                            </div>
                            <div className='item-col'>
                                <div className='item-block'>
                                <div className='gal-main'>
                                <img className='f-img' src={images.taco} />
                            </div>

                            <p className='i-text'>Cauliflower Walnut Vegetarian Taco Meat </p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Eastern</span>
                            </div>
                                </div>
                            </div>
                            <div className='item-col'>
                                <div className='item-block'>
                                <div className='gal-main'>
                                <img className='f-img' src={images.mustard} />
                            </div>

                            <p className='i-text'>Rainbow Chicken Salad with Almond Honey Mustard Dressing </p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Healthy</span>
                            </div>
                                </div>
                            </div>
                            <div className='item-col'>
                                <div className='item-block'>
                                <div className='gal-main'>
                                <img className='f-img' src={images.barbeque} />
                            </div>

                            <p className='i-text'>Barbeque Spicy Sandwiches with Chips  </p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Snack</span>
                            </div>
                                </div>
                            </div>
                            <div className='item-col'>
                                <div className='item-block'>
                                <div className='gal-main'>
                                <img className='f-img' src={images.spicy} />
                            </div>

                            <p className='i-text'>Firecracker Vegan Lettuce Wraps - Spicy!  </p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Seafood</span>
                            </div>
                                </div>
                            </div>
                            <div className='item-col'>
                                <div className='item-block'>
                                <div className='gal-main'>
                                <img className='f-img' src={images.mushroom} />
                            </div>

                            <p className='i-text'>Chicken Ramen Soup with Mushroom  </p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Japanese</span>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            </div>
        </section>

    )
}

export default Gallery
