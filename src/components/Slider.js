import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image1 from '../images/bluee.jpg';
import image2 from '../images/cottage.jpg';
import image3 from '../images/featuredlenses.jpg';

import './styles.css'

function Slider(){
    return(
        <div className='carousel-container'>
            <Carousel>
                <div>
                    <img src={image1} />
                    <p className="legend">Sky bluees</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="legend">Cottage</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Featured Lenses</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;