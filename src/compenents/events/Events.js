import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from './about-bg-3.jpg'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'; // optional custom styling

export default function Slider() {
  return (
    <>
     <div
              style={{
                display: 'grid',
                placeItems: 'center',
                width: '100%',
                height: '30vh',
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <div className='banner-content' style={{ padding: '20px', borderRadius: '8px' }}>
                <h1>
                  Events
                </h1>
                <p>
                  Get Intouch
                </p>
              </div>
            </div>
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide-content row">
            <div className='col-md-6'><img src="https://dpanel.kpps.edu.in/_assets_/gallery/DSC_1853.JPG" alt='img' width="100%" /></div>
            <div className='col-md-6'><h1 style={{fontSize: "27px", fontWeight: "bold", paddingLeft: "10%", paddingTop: "5%", color: "#163269"}}>Event Heading</h1><p style={{fontSize: "17px", paddingRight: "10%", paddingLeft: "10%", paddingBottom: "10%", color: "#555"}}>For many Hindus, Vasant Panchami is the festival dedicated to goddess Saraswati who is their ancient goddess of knowledge, language, music and all arts. She is the energy of Brahma, and she symbolizes creative energy and power in all its form, including longing and love (kama). The season and festival also reflects the agricultural fields which are ripening with yellow flowers of mustard crop, which Hindus associate with Saraswati's favorite color. People dress in yellow saris or shirts or acces</p></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content row">
            <div className='col-md-6'><img src="https://dpanel.kpps.edu.in/_assets_/gallery/DSC_1853.JPG" alt='img' width="100%" /></div>
            <div className='col-md-6'><h1 style={{fontSize: "27px", fontWeight: "bold", paddingLeft: "10%", paddingTop: "5%", color: "#163269"}}>Event Heading</h1><p style={{fontSize: "17px", paddingRight: "10%", paddingLeft: "10%", paddingBottom: "10%", color: "#555"}}>For many Hindus, Vasant Panchami is the festival dedicated to goddess Saraswati who is their ancient goddess of knowledge, language, music and all arts. She is the energy of Brahma, and she symbolizes creative energy and power in all its form, including longing and love (kama). The season and festival also reflects the agricultural fields which are ripening with yellow flowers of mustard crop, which Hindus associate with Saraswati's favorite color. People dress in yellow saris or shirts or acces</p></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content row">
            <div className='col-md-6'><img src="https://dpanel.kpps.edu.in/_assets_/gallery/DSC_1853.JPG" alt='img' width="100%" /></div>
            <div className='col-md-6'><h1 style={{fontSize: "27px", fontWeight: "bold", paddingLeft: "10%", paddingTop: "5%", color: "#163269"}}>Event Heading</h1><p style={{fontSize: "17px", paddingRight: "10%", paddingLeft: "10%", paddingBottom: "10%", color: "#555"}}>For many Hindus, Vasant Panchami is the festival dedicated to goddess Saraswati who is their ancient goddess of knowledge, language, music and all arts. She is the energy of Brahma, and she symbolizes creative energy and power in all its form, including longing and love (kama). The season and festival also reflects the agricultural fields which are ripening with yellow flowers of mustard crop, which Hindus associate with Saraswati's favorite color. People dress in yellow saris or shirts or acces</p></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
