import React from 'react'
// import Slider from 'infinite-react-carousel';
// import { Carousel } from "react-responsive-carousel";
import './Page.css'
import find from 'lodash/find';
import CAROUSEL from './server/server'



const Page = ({match}) => {
  const carousel = find(CAROUSEL);
  console.log(carousel)

    return (
     
      <section className="carousel">
        <input className="carousel__input" type="radio" id="carousel__slide--1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
        <div className="carousel__slide" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_back_1.jpg)'}}>
          <img src={carousel.img} alt="yess"/>
         
          <div className="carousel__caption">
          <p>Im number 1</p>
          </div>
        </div>
        <input className="carousel__input" type="radio" id="carousel__slide--2" name="carousel" aria-hidden="true" hidden />
        <div className="carousel__slide" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_back_2.jpg)'}}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_front_2.jpg" alt="yess"/>
          <div className="carousel__caption">
          <p>Im number 2</p>
          </div>
        </div>
        <input className="carousel__input" type="radio" id="carousel__slide--3" name="carousel" aria-hidden="true" hidden />
        <div className="carousel__slide" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_back_3.jpg)'}}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_front_3.jpg"alt="yess" />
          <div className="carousel__caption">
          <p>Im number 3</p>
          </div>
        </div>
        <input className="carousel__input" type="radio" id="carousel__slide--4" name="carousel" aria-hidden="true" hidden />
        <div className="carousel__slide" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_back_4.jpg)'}}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_front_4.jpg"alt="yess" />
          <div className="carousel__caption">
          <p>Im number 4</p>
          </div>
        </div>
        <input className="carousel__input" type="radio" id="carousel__slide--5" name="carousel" aria-hidden="true" hidden />
        <div className="carousel__slide" style={{backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_back_5.jpg)'}}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/334248/earth_front_5.jpg" alt="yess"/>
          <div className="carousel__caption">
            <p>Im number 5</p>
          </div>
        </div>
        {/* ARROWS */}
        <label htmlFor="carousel__slide--5"title="im number 5" className="carousel__arrow carousel__arrow--prev carousel__arrow--1" />
        <label htmlFor="carousel__slide--5"title="im number 5" className="carousel__arrow carousel__arrow--next carousel__arrow--4" />
        <label htmlFor="carousel__slide--4"title="im number 4" className="carousel__arrow carousel__arrow--prev carousel__arrow--5" />
        <label htmlFor="carousel__slide--4"title="im number 4" className="carousel__arrow carousel__arrow--next carousel__arrow--3" />
        <label htmlFor="carousel__slide--3"title="im number 3" className="carousel__arrow carousel__arrow--prev carousel__arrow--4" />
        <label htmlFor="carousel__slide--3"title="im number 3" className="carousel__arrow carousel__arrow--next carousel__arrow--2" />
        <label htmlFor="carousel__slide--2"title="im number 2" className="carousel__arrow carousel__arrow--prev carousel__arrow--3" />
        <label htmlFor="carousel__slide--2"title="im number 2" className="carousel__arrow carousel__arrow--next carousel__arrow--1" />
        <label htmlFor="carousel__slide--1"title="im number 1" className="carousel__arrow carousel__arrow--prev carousel__arrow--2" />
        <label htmlFor="carousel__slide--1"title="im number 1" className="carousel__arrow carousel__arrow--next carousel__arrow--5" />
        {/* BULLETS */}
        <ol className="carousel__bullets">
          <li>
            <label htmlFor="carousel__slide--1" className="carousel__bullets--bullet" />
          </li>
          <li>
            <label htmlFor="carousel__slide--2" className="carousel__bullets--bullet" />
          </li>
          <li>
            <label htmlFor="carousel__slide--3" className="carousel__bullets--bullet" />
          </li>
          <li>
            <label htmlFor="carousel__slide--4" className="carousel__bullets--bullet" />
          </li>
          <li>
            <label htmlFor="carousel__slide--5" className="carousel__bullets--bullet" />
          </li>
        </ol>
      </section>
    
    
    )
}

export default Page
