import React from 'react'
import './Slider.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { images } from '../../image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faStopwatch } from '@fortawesome/fontawesome-free-solid'
import { EffectCoverflow, Pagination } from "swiper";

function Slider() {
    return (


        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='container'>
                    <div className='hero'>
                        <div className='left'>
                            
                            <div className='hero-content'>
                                <p className='first-text'><img className='i-img' src={images.first} />Hot recipe</p>
                                <h1 className='main-content'>Spicy delicious chicken wings</h1>
                                <p className='subcontent'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            </div>
                            <div className='hero-icon'>
                                <div className='icon1'>
                                    <span className='watch'>
                                        <FontAwesomeIcon icon={faStopwatch} />
                                    </span>

                                    <span className='icon-subtext'>30 Minutes</span>
                                </div>
                                <div className='icon2'>
                                    <span>
                                        <FontAwesomeIcon icon={faUtensils} />
                                    </span>
                                    <span className='icon-subtext'>Chicken</span>
                                </div>

                            </div>
                            <div className='person'>
                                <div className='john-img'>
                                    <img className='p-img' src={images.john} />
                                </div>
                                <div className='detail'>
                                    <p className='name'>John Smithe</p>
                                    <p className='date'>15 March 2022</p>
                                </div>
                                <div className='view-btn'>
                                    <a href='#' className='view-text'>View Recipes<img className='i-img' src={images.play} /></a>

                                </div>

                            </div>


                        </div>
                        <div className='right'>
                            <img className='fi-img' src={images.main} />
                        </div>

                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='container'>
                    <div className='hero'>
                        <div className='left'>
                            <div className='hero-content'>
                            <p className='first-text'><img className='i-img' src={images.first} />Hot recipe</p>
                                <h1 className='main-content'>Spicy delicious chicken wings</h1>
                                <p className='subcontent'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            </div>
                            <div className='hero-icon'>
                                <div className='icon1'>
                                    <span className='watch'>
                                        <FontAwesomeIcon icon={faStopwatch} />
                                    </span>

                                    <span className='icon-subtext'>30 Minutes</span>
                                </div>
                                <div className='icon2'>
                                    <span>
                                        <FontAwesomeIcon icon={faUtensils} />
                                    </span>
                                    <span className='icon-subtext'>Chicken</span>
                                </div>

                            </div>
                            <div className='person'>
                                <div className='john-img'>
                                    <img className='p-img' src={images.john} />
                                </div>
                                <div className='detail'>
                                    <p className='name'>John Smithe</p>
                                    <p className='date'>15 March 2022</p>
                                </div>
                                <div className='view-btn'>
                                    <a href='#' className='view-text'>View Recipes<img className='i-img' src={images.play} /> </a>

                                </div>

                            </div>


                        </div>
                        <div className='right'>
                            <img className='fi-img' src={images.main} />
                        </div>

                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='container'>
                    <div className='hero'>
                        <div className='left'>
                            <div className='hero-content'>
                            <p className='first-text'><img className='i-img' src={images.first} />Hot recipe</p>
                                <h1 className='main-content'>Spicy delicious chicken wings</h1>
                                <p className='subcontent'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                            </div>
                            <div className='hero-icon'>
                                <div className='icon1'>
                                    <span className='watch'>
                                        <FontAwesomeIcon icon={faStopwatch} />
                                    </span>

                                    <span className='icon-subtext'>30 Minutes</span>
                                </div>
                                <div className='icon2'>
                                    <span>
                                        <FontAwesomeIcon icon={faUtensils} />
                                    </span>
                                    <span className='icon-subtext'>Chicken</span>
                                </div>

                            </div>
                            <div className='person'>
                                <div className='john-img'>
                                    <img className='p-img' src={images.john} />
                                </div>
                                <div className='detail'>
                                    <p className='name'>John Smithe</p>
                                    <p className='date'>15 March 2022</p>
                                </div>
                                <div className='view-btn'>
                                    <a href='#' className='view-text'>View Recipes<img className='i-img' src={images.play} /> </a>

                                </div>

                            </div>


                        </div>
                        <div className='right'>
                            <img className='fi-img' src={images.main} />
                        </div>

                    </div>

                </div>
            </SwiperSlide>
        </Swiper>











    )
}

export default Slider
