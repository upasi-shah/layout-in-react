import React from 'react'
import './Recipe.css'
import { images } from '../../image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faStopwatch } from '@fortawesome/fontawesome-free-solid'


function Recipe() {
    return (
        <div className='container'>
            <div className='recipe-main'>
                <h1 className='recipe-title'>Simple and tasty recipes</h1>
                <p className='recipe-subtitle'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>

            {/* <div className='Mygallery'>
                <div className='myrow'>
                    <div className='mycol'>
                        <div className='blockMy '>
                            <div className='main-img'>
                                <img className='g-img' src={images.cheeseburger} />
                            </div>

                            <p className='icon-text'>Big and Juicy Wagyu Beef Cheeseburger</p>
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
                    <div className='mycol'>
                        <div className='blockMy'>
                            <div className='main-img'>
                                <img className='g-img' src={images.ginger} />
                            </div>

                            <p className='icon-text'>Fresh Lime Roasted Salmon with Ginger Sauce</p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Fish</span>
                            </div>

                        </div>
                    </div>
                    <div className='mycol'>
                        <div className='blockMy'>
                            <div className='main-img'>
                                <img className='g-img' src={images.honey} />
                            </div>

                            <p className='icon-text'>Strawberry Oatmeal Pancake with Honey Syrup</p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Breakfast</span>
                            </div>
                        </div>
                    </div>
                    <div className='mycol'>
                        <div className='blockMy'><div className='main-img'>
                            <img className='g-img' src={images.salad} />
                        </div>

                            <p className='icon-text'>Fresh and Healthy Mixed Mayonnaise Salad</p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Healthy</span>
                            </div></div>
                    </div>
                    <div className='mycol'>
                        <div className='blockMy'>
                            <div className='main-img'>
                                <img className='g-img' src={images.meatballs} />
                            </div>

                            <p className='icon-text'>Chicken Meatballs with Cream Cheese</p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Meat</span>
                            </div>
                        </div>
                    </div>
                    <div className='mycol'>
                        <div className='blockMy add'>
                        <div className='img two '>
                    <div className='main-img'>
                        <img className='g-img ' src={images.ads} />
                    </div>

                </div>
                        </div>
                    </div>
                    <div className='mycol'>
                        <div className='blockMy'>
                            <div className='main-img'>
                                <img className='g-img' src={images.pancake} />
                            </div>

                            <p className='icon-text'>Fruity Pancake with Orange & Blueberry</p>
                            <div className='icons'>
                                <span className='watch'>
                                    <FontAwesomeIcon icon={faStopwatch} />
                                </span>

                                <span className='icon-subtext'>30 Minutes</span>
                                <span>
                                    <FontAwesomeIcon icon={faUtensils} />
                                </span>
                                <span className='icon-subtext'>Sweet</span>
                            </div>
                        </div>
                    </div>
                    <div className='mycol'>
                        <div className='blockMy'>
                            <div className='main-img'>
                                <img className='g-img' src={images.rice} />
                            </div>

                            <p className='icon-text'>The Best Easy One Pot Chicken and Rice</p>
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
                    <div className='mycol'>
                        <div className='blockMy'>
                            <div className='main-img'>
                                <img className='g-img' src={images.pasta} />
                            </div>

                            <p className='icon-text'>The Creamiest Creamy Chicken and Bacon Pasta</p>
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
                </div>
            </div> */}
            
            <div className='unique '>
                <div className='img one'>
                    <div className='main-img'>
                        <img className='g-img' src={images.cheeseburger} />
                    </div>

                    <p className='icon-text'>Big and Juicy Wagyu Beef Cheeseburger</p>
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

                <div className='img one'>
                    <div className='main-img'>
                        <img className='g-img' src={images.ginger} />
                    </div>
                    <p className='icon-text'>Fresh Lime Roasted Salmon with Ginger Sauce</p>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faStopwatch} />
                        <span className='icon-subtext'>30 Minutes</span>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className='icon-subtext'>Fish</span>
                    </div>
                </div>
                <div className='img one'>
                    <div className='main-img'>
                        <img className='g-img' src={images.honey} />
                    </div>
                    <p className='icon-text'>Strawberry Oatmeal Pancake with Honey Syrup</p>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faStopwatch} />
                        <span className='icon-subtext'>30 Minutes</span>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className='icon-subtext'>Breakfast</span>
                    </div>
                </div>
                <div className='img two'>
                    <div className='main-img'>
                        <img className='g-img' src={images.salad} />
                    </div>

                    <p className='icon-text'>Fresh and Healthy Mixed Mayonnaise Salad</p>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faStopwatch} />
                        <span className='icon-subtext'>30 Minutes</span>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className='icon-subtext'>Healthy</span>
                    </div>
                </div>
                <div className='img two'>
                    <div className='main-img'>
                        <img className='g-img' src={images.meatballs} />
                    </div>

                    <p className='icon-text'>Chicken Meatballs with Cream Cheese</p>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faStopwatch} />
                        <span className='icon-subtext'>30 Minutes</span>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className='icon-subtext'>Meat</span>
                    </div>
                </div>
                <div className='img two add'>
                    <div className='main-img'>
                        <img className='g-img add' src={images.ads} />
                    </div>

                </div>
                <div className='img three'>
                    <div className='main-img'>
                        <img className='g-img' src={images.pancake} />
                    </div>

                    <p className='icon-text'>Fruity Pancake with Orange & Blueberry</p>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faStopwatch} />
                        <span className='icon-subtext'>30 Minutes</span>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className='icon-subtext'>Sweet</span>
                    </div>
                </div>
                <div className='img three'>
                    <div className='main-img'>
                        <img className='g-img' src={images.chicken} />
                    </div>

                    <p className='icon-text'>The Best Easy One Pot Chicken and Rice</p>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faStopwatch} />
                        <span className='icon-subtext'>30 Minutes</span>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className='icon-subtext'>Snack</span>
                    </div>
                </div>
                <div className='img three'>
                    <div className='main-img'>
                        <img className='g-img' src={images.pasta} />
                    </div>

                    <p className='icon-text'>The Creamiest Creamy Chicken and Bacon Pasta</p>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faStopwatch} />
                        <span className='icon-subtext'>30 Minutes</span>
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className='icon-subtext'>Noodles</span>
                    </div>
                </div>

            </div> 
        </div>


    )
}

export default Recipe
